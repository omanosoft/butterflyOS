import styled from "styled-components";
import Message from "styles/common/Message";

const buttonSize = "48px";
const paddingSize = "10px";

type StyledPhotosProps = {
  $showImage: boolean;
};

const StyledPhotos = styled.div<StyledPhotosProps>`
  background-color: ${({ theme }) =>
    theme.colors.fileExplorer.navigationBackground};
  display: flex;
  height: 100%;
  padding-bottom: ${paddingSize};
  padding-top: ${buttonSize};
  position: relative;

  svg {
    fill: ${({ theme }) => theme.colors.fileExplorer.navigationIcons};
  }

  figure {
    display: flex;
    height: 100%;
    margin: 0 ${paddingSize} ${paddingSize};
    overflow: hidden;
    place-content: center;
    place-items: center;
    width: 100%;

    div {
      color: rgb(167, 167, 167);
      font-size: 13px;
      padding: 0 38px;
      text-align: center;
    }

    img {
      display: ${({ $showImage }) => ($showImage ? "block" : "none")};
      max-height: 100%;
      max-width: 100%;
    }
  }

  nav {
    display: flex;
    height: ${buttonSize};
    place-content: center;
    place-items: center;
    position: absolute;

    &.top {
      top: 0;
      width: 100%;

      svg {
        height: 16px;
      }
    }

    &.bottom {
      bottom: 0;
      right: 0;

      svg {
        height: 20px;
        margin-top: 2px;
      }
    }

    button {
      height: ${buttonSize};
      width: ${buttonSize};

      &:disabled {
        pointer-events: none;

        svg {
          fill: rgb(125, 125, 125);
        }
      }

      &:hover {
        background-color: rgba(75, 75, 75, 50%);
      }

      &:active {
        background-color: rgba(100, 100, 100, 50%);
      }
    }
  }

  &.drop {
    ${Message("Drop photo file here", "#fff")};
  }
`;

export default StyledPhotos;
