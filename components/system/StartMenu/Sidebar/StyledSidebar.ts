import styled from "styled-components";

const StyledSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
  padding-top: 4px;
  position: absolute;
  top: 0;
  transition-duration: 150ms;
  width: ${({ theme }) => theme.sizes.startMenu.sideBar.width}px;
  z-index: 1;

  &:hover:not(&.collapsed) {
    background-color: ${({ theme }) => theme.colors.taskbar.background};
    box-shadow: 8px 0 5px -5px rgb(0 0 0 / 50%);
    transition:
      all 300ms ease,
      backdrop-filter 1ms;
    transition-timing-function: cubic-bezier(0.15, 1, 0.5, 1);
    width: ${({ theme }) => theme.sizes.startMenu.sideBar.expandedWidth};

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      background-color: ${({ theme }) => theme.colors.taskbar.background};
    }

    &::before {
      backdrop-filter: ${({ theme }) =>
        `blur(${theme.sizes.taskbar.panelBlur})`};
      background-color: ${({ theme }) => theme.colors.taskbar.background};
      content: "";
      height: 100%;
      margin-top: -4px;
      position: absolute;
      width: 100%;
      z-index: -100000;
    }
  }

  &.collapsed {
    transition:
      all 300ms ease,
      backdrop-filter 600ms;
  }
`;

export default StyledSidebar;
