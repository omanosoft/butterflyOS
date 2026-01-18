import styled from "styled-components";

const StyledColumns = styled.span`
  background-color: ${({ theme }) => theme.colors.taskbar.background};
  display: block;
  margin-bottom: 6px;
  margin-right: ${({ theme }) => theme.sizes.fileManager.detailsStartPadding}px;
  position: sticky;
  top: 0;
  width: fit-content;
  z-index: 1;

  ol {
    display: flex;
    height: ${({ theme }) => theme.sizes.fileManager.columnHeight}px;

    li {
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      font-size: 12px;
      padding-left: 6px;
      place-items: center;
      position: relative;

      > svg {
        fill: ${({ theme }) => theme.colors.text};
        left: calc(50% - 4px);
        opacity: 70%;
        position: absolute;
        top: 0;
        transition: none !important;
        width: 7px;

        &[style^="transform"] {
          top: -1px;
        }
      }

      .name {
        overflow: hidden;
        position: relative;
        text-overflow: ellipsis;
        top: -1px;
        white-space: nowrap;
      }

      .resize {
        border-left: 1px solid ${({ theme }) => theme.colors.window.outline};
        cursor: col-resize;
        height: ${({ theme }) => theme.sizes.fileManager.columnHeight}px;
        padding-left: ${({ theme }) =>
          theme.sizes.fileManager.columnResizeWidth}px;
        position: absolute;
        right: -${({ theme }) => theme.sizes.fileManager.columnResizeWidth}px;
        z-index: 1;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.taskbar.hover};

        .resize {
          border-left: none;
        }
      }

      &:active {
        background-color: ${({ theme }) => theme.colors.taskbar.active};
      }

      &:first-child {
        padding-left: 17px;
      }
    }
  }
`;

export default StyledColumns;
