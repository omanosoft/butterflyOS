import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { NostrProvider } from "nostr-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  getRelayUrls,
  getPublicHexFromNostrAddress,
  toHexKey,
} from "components/apps/Messenger/functions";
import StyledMessenger from "components/apps/Messenger/StyledMessenger";
import Contact from "components/apps/Messenger/Contact";
import SendMessage from "components/apps/Messenger/SendMessage";
import {
  useNostrContacts,
  usePublicKey,
  useNip05,
  useUnreadStatus,
} from "components/apps/Messenger/hooks";
import StyledContacts from "components/apps/Messenger/StyledContacts";
import ProfileBanner from "components/apps/Messenger/ProfileBanner";
import ChatLog from "components/apps/Messenger/ChatLog";
import To from "components/apps/Messenger/To";
import {
  UNKNOWN_PUBLIC_KEY,
  inLeftOutRight,
  inRightOutLeft,
} from "components/apps/Messenger/constants";
import type { Event } from "nostr-tools";
import { haltEvent } from "utils/functions";
import { ProfileProvider } from "components/apps/Messenger/ProfileContext";
import { AnimatePresence } from "framer-motion";
import StyledChatContainer from "components/apps/Messenger/StyledChatContainer";
import { useProcesses } from "contexts/process";
import { MessageProvider } from "components/apps/Messenger/MessageContext";
import { MILLISECONDS_IN_DAY } from "utils/constants";
import GetMoreMessages from "components/apps/Messenger/GetMoreMessages";

type NostrChatProps = {
  loginTime: number;
  processId: string;
  publicKey: string;
  relayUrls: string[];
  setSince: React.Dispatch<React.SetStateAction<number>>;
  wellKnownNames: Record<string, string>;
};

const NostrChat: FC<NostrChatProps> = ({
  processId,
  loginTime,
  publicKey,
  relayUrls,
  setSince,
  wellKnownNames,
}) => {
  const [seenEventIds, setSeenEventIds] = useState<string[]>([]);
  const [selectedRecipientKey, setSelectedRecipientKey] = useState<string>("");
  const changeRecipient = useCallback(
    (recipientKey: string, currentEvents?: Event[]) =>
      setSelectedRecipientKey((currenRecipientKey: string) => {
        if ((currenRecipientKey || recipientKey) && currentEvents) {
          setSeenEventIds((currentSeenEventIds) => [
            ...new Set([
              ...currentEvents
                .filter(
                  ({ created_at, pubkey }) =>
                    [recipientKey, currenRecipientKey].includes(pubkey) &&
                    created_at > loginTime
                )
                .map(({ id }) => id),
              ...currentSeenEventIds,
            ]),
          ]);
        }

        return recipientKey;
      }),
    [loginTime]
  );
  const { contactKeys, events, lastEvents, unreadEvents } = useNostrContacts(
    publicKey,
    wellKnownNames,
    loginTime,
    seenEventIds
  );
  const setRecipientKey = useCallback(
    (recipientKey: string): boolean => {
      const hexKey = getPublicHexFromNostrAddress(recipientKey);

      if (hexKey) changeRecipient(hexKey);

      return Boolean(hexKey);
    },
    [changeRecipient]
  );
  const {
    processes: { [processId]: process },
    url: setUrl,
  } = useProcesses();
  const { url } = process || {};

  useUnreadStatus(processId, unreadEvents.length);

  useEffect(() => {
    if (
      !url ||
      (!url.startsWith("nostr:npub") && !url.startsWith("nostr:nprofile"))
    ) {
      return;
    }

    const [, key] = url.split("nostr:");

    if (key) {
      const hexKey = toHexKey(key);

      if (key !== hexKey) {
        setSelectedRecipientKey(hexKey);
        setUrl(processId, "");
      }
    }
  }, [processId, setUrl, url]);

  useEffect(() => {
    if (unreadEvents && selectedRecipientKey) {
      unreadEvents
        .filter(({ pubkey }) => pubkey === selectedRecipientKey)
        .forEach(({ id }) =>
          setSeenEventIds((currentSeenEventIds) => [
            ...new Set([id, ...currentSeenEventIds]),
          ])
        );
    }
  }, [selectedRecipientKey, unreadEvents]);

  return (
    <StyledMessenger>
      <ProfileBanner
        goHome={() => changeRecipient("", events)}
        newChat={() => changeRecipient(UNKNOWN_PUBLIC_KEY)}
        publicKey={publicKey}
        relayUrls={relayUrls}
        selectedRecipientKey={selectedRecipientKey}
      />
      <div>
        <AnimatePresence initial={false} presenceAffectsLayout={false}>
          {selectedRecipientKey ? (
            <StyledChatContainer key="chat" {...inRightOutLeft}>
              {selectedRecipientKey === UNKNOWN_PUBLIC_KEY && (
                <To setRecipientKey={setRecipientKey} />
              )}
              <ChatLog recipientPublicKey={selectedRecipientKey} />
              <SendMessage recipientPublicKey={selectedRecipientKey} />
            </StyledChatContainer>
          ) : (
            <StyledContacts
              key="contacts"
              onContextMenu={haltEvent}
              {...inLeftOutRight}
            >
              {contactKeys.map((contactKey) => (
                <Contact
                  key={contactKey}
                  lastEvent={lastEvents[contactKey]}
                  onClick={() => changeRecipient(contactKey, events)}
                  pubkey={contactKey}
                  publicKey={publicKey}
                  unreadEvent={unreadEvents.includes(lastEvents[contactKey])}
                />
              ))}
              <GetMoreMessages setSince={setSince} />
            </StyledContacts>
          )}
        </AnimatePresence>
      </div>
    </StyledMessenger>
  );
};

const Messenger: FC<ComponentProcessProps> = ({ id }) => {
  const [loginTime, setLoginTime] = useState(0);
  const [since, setSince] = useState(() => MILLISECONDS_IN_DAY);
  const timeSince = useMemo(
    () => Math.floor((Date.now() - since) / 1000),
    [since]
  );
  const [relayUrls, setRelayUrls] = useState<string[] | undefined>();
  const initStarted = useRef(false);
  const { names } = useNip05();
  const publicKey = usePublicKey();

  useEffect(() => {
    if (initStarted.current || !publicKey) return;

    initStarted.current = true;

    getRelayUrls().then((foundRelays) => {
      setRelayUrls(foundRelays);
      setLoginTime(Math.floor(Date.now() / 1000));
    });
  }, [publicKey]);

  return publicKey && relayUrls ? (
    <NostrProvider relayUrls={relayUrls}>
      <ProfileProvider>
        <MessageProvider publicKey={publicKey} since={timeSince}>
          <NostrChat
            loginTime={loginTime}
            processId={id}
            publicKey={publicKey}
            relayUrls={relayUrls}
            setSince={setSince}
            wellKnownNames={names}
          />
        </MessageProvider>
      </ProfileProvider>
    </NostrProvider>
  ) : (
    <> </>
  );
};

export default Messenger;
