import styled from "styled-components";

const StyledStatusBar = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.taskbar.background};
  bottom: 0;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  font-size: 12px;
  font-weight: 200;
  height: ${({ theme }) => theme.sizes.fileExplorer.statusBarHeight};
  padding: 0 4px 0 5px;
  position: absolute;
  white-space: nowrap;
  width: 100%;

  div {
    display: flex;
    margin-top: -1px;
    padding: 0 3px 0 9px;

    &::after {
      border-right: 1px solid ${({ theme }) => theme.colors.text};
      content: "";
      height: 11px;
      margin-left: 12px;
      opacity: 30%;
      position: relative;
      top: 3px;
    }

    &.selected {
      padding-left: 7px;

      &::after {
        margin-left: 13px;
      }
    }
  }

  nav {
    display: flex;
    position: absolute;
    right: 4px;

    button {
      border: 1px solid transparent;
      display: flex;
      height: ${({ theme }) => theme.sizes.fileExplorer.statusBarHeight};
      place-content: center;
      place-items: center;
      width: 22px;

      picture {
        position: relative;
        top: -1px;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.taskbar.hover};
        border: 1px solid ${({ theme }) => theme.colors.window.outline};
      }

      &.active {
        background-color: ${({ theme }) => theme.colors.taskbar.active};
        border: 1px solid ${({ theme }) => theme.colors.window.outline};

        picture {
          padding-left: 1px;
          top: 0;
        }
      }
    }
  }
`;

export default StyledStatusBar;
