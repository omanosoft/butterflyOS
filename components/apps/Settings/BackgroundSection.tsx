import { memo, useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { WALLPAPER_MENU } from "components/system/Desktop/Wallpapers/constants";
import { useSession } from "contexts/session";
import { useWebGPUCheck } from "hooks/useWebGPUCheck";

const stopGlobalMusicVisualization = (): void => {
  window.WebampGlobal?.store.dispatch({
    enabled: false,
    type: "SET_MILKDROP_DESKTOP",
  });
};

const StyledBackgroundSection = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    margin: 0 0 16px;
    opacity: 80%;
  }

  .wallpaper-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
  }

  .wallpaper-item {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.window.background};
    border: 1px solid ${({ theme }) => theme.colors.window.outline};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    display: flex;
    padding: 12px 16px;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.taskbar.hover};
      border-color: ${({ theme }) => theme.colors.highlight};
    }

    &.selected {
      background-color: ${({ theme }) =>
        theme.colors.selectionHighlightBackground};
      border-color: ${({ theme }) => theme.colors.highlight};
      color: ${({ theme }) => theme.colors.text};
      font-weight: 600;
    }

    .checkbox {
      align-items: center;
      color: ${({ theme }) => theme.colors.highlight};
      display: flex;
      font-size: 14px;
      font-weight: 600;
      height: 18px;
      justify-content: center;
      margin-right: 12px;
      width: 18px;
    }

    .label {
      color: ${({ theme }) => theme.colors.text};
      flex: 1;
      font-size: 14px;
    }
  }
`;

const BackgroundSection: FC = () => {
  const { setWallpaper, wallpaperImage } = useSession();
  const hasWebGPU = useWebGPUCheck();
  const [isMusicVisualizationRunning, setIsMusicVisualizationRunning] =
    useState(
      () =>
        document.querySelector("main .webamp-desktop canvas") instanceof
        HTMLCanvasElement
    );

  useEffect(() => {
    const checkMusicVisualization = (): void => {
      setIsMusicVisualizationRunning(
        document.querySelector("main .webamp-desktop canvas") instanceof
          HTMLCanvasElement
      );
    };

    const interval = setInterval(checkMusicVisualization, 1000);
    checkMusicVisualization();

    return () => clearInterval(interval);
  }, []);

  const availableWallpapers = useMemo(
    () =>
      WALLPAPER_MENU.filter(
        ({ requiresWebGPU }) => !requiresWebGPU || hasWebGPU
      ),
    [hasWebGPU]
  );

  const handleWallpaperSelect = useCallback(
    (id: string, hasAlt = true) => {
      if (isMusicVisualizationRunning) {
        stopGlobalMusicVisualization();
      }
      setWallpaper(
        `${id}${
          hasAlt &&
          wallpaperImage.startsWith(id) &&
          !wallpaperImage.endsWith(" ALT")
            ? " ALT"
            : ""
        }`
      );
    },
    [isMusicVisualizationRunning, setWallpaper, wallpaperImage]
  );

  const isSelected = useCallback(
    (id: string, hasAlt = true) => {
      if (hasAlt) {
        return wallpaperImage.startsWith(id);
      }
      return wallpaperImage === id;
    },
    [wallpaperImage]
  );

  return (
    <StyledBackgroundSection>
      <h2>Background</h2>
      <p>Choose a background for your desktop.</p>
      <div className="wallpaper-list">
        {isMusicVisualizationRunning && (
          <div
            className="wallpaper-item selected"
            onClick={stopGlobalMusicVisualization}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                stopGlobalMusicVisualization();
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="checkbox">✓</div>
            <div className="label">Music Visualization</div>
          </div>
        )}
        {availableWallpapers.map(({ hasAlt = true, id, name }) => {
          const selected = isSelected(id, hasAlt);
          return (
            <div
              key={id}
              className={`wallpaper-item ${selected ? "selected" : ""}`}
              onClick={() => handleWallpaperSelect(id, hasAlt)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleWallpaperSelect(id, hasAlt);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="checkbox">{selected ? "✓" : ""}</div>
              <div className="label">{name || id}</div>
            </div>
          );
        })}
      </div>
    </StyledBackgroundSection>
  );
};

export default memo(BackgroundSection);
