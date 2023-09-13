import styled from "styled-components";

const StyledStatusBar = styled.footer`
  align-items: center;
  background-color: ${({ theme }) =>
    theme.colors.fileExplorer.navigationBackground};
  color: ${({ theme }) => theme.colors.fileExplorer.navigationIcons};
  display: flex;
  font-size: 12px;
  font-weight: 200;
  height: ${({ theme }) => theme.sizes.fileExplorer.statusBarHeight};
  padding: 0 5px;
  white-space: nowrap;
  width: 100%;

  div {
    display: flex;
    margin-top: -1px;
    padding: 0 3px 0 10px;

    &::after {
      border-right: 1px solid
        ${({ theme }) => theme.colors.fileExplorer.navigationBackground};
      content: "";
      height: 11px;
      margin-left: 11px;
      position: relative;
      top: 3px;
    }

    .selected {
      margin-right: 10px;
      overflow: hidden;
    }
  }
`;

export default StyledStatusBar;
