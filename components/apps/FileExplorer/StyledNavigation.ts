import styled from "styled-components";

const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.taskbar.background};
  display: flex;
  height: ${({ theme }) => theme.sizes.fileExplorer.navBarHeight};

  svg {
    color: ${({ theme }) => theme.colors.text};
    fill: currentColor;
    height: 16px;
    transition: color 0.35s ease;
    width: 16px;
  }

  > button {
    height: 16px;
    max-height: 36px;
    max-width: 34px;
    min-height: 36px;
    min-width: 34px;

    &[title^="Up"] {
      max-width: 33px;
      min-width: 33px;
      position: relative;
      right: -8px;
      top: -1px;
    }

    &[title="Recent locations"] {
      left: 55px;
      position: absolute;

      svg {
        stroke: currentColor;
        stroke-width: 3px;
        width: 7px;
      }
    }

    &:active {
      svg {
        color: ${({ theme }) => theme.colors.highlight};
        transition: none;
      }
    }

    &:hover {
      svg {
        color: ${({ theme }) => theme.colors.highlight};
        opacity: 90%;
      }
    }

    &:disabled {
      svg {
        color: ${({ theme }) => theme.colors.text};
        opacity: 50%;
      }
    }
  }
`;

export default StyledNavigation;
