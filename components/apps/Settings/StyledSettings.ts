import styled from "styled-components";

const StyledSettings = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;

  .sidebar {
    background-color: ${({ theme }) => theme.colors.taskbar.background};
    border-right: 1px solid ${({ theme }) => theme.colors.window.outline};
    display: flex;
    flex-direction: column;
    min-width: 200px;
    padding: 12px 0;
    width: 200px;

    button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.text};
      cursor: pointer;
      font-size: 13px;
      padding: 10px 20px;
      text-align: left;
      transition: background-color 0.2s ease;
      width: 100%;

      &:hover {
        background-color: ${({ theme }) => theme.colors.taskbar.hover};
      }

      &.active {
        background-color: ${({ theme }) =>
          theme.colors.selectionHighlightBackground};
        color: ${({ theme }) => theme.colors.highlight};
        font-weight: 600;
      }
    }
  }

  .content {
    background-color: ${({ theme }) => theme.colors.window.background};
    flex: 1;
    height: 100%;
    overflow-y: auto;
    padding: 24px;

    h1 {
      color: ${({ theme }) => theme.colors.text};
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 24px;
    }

    section {
      margin-bottom: 32px;

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
    }

    .theme-grid {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      margin-top: 16px;
    }

    .theme-option {
      align-items: center;
      background: transparent;
      border: 2px solid ${({ theme }) => theme.colors.window.outline};
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 12px;
      transition: all 0.2s ease;

      &:hover {
        border-color: ${({ theme }) => theme.colors.highlight};
        box-shadow: 0 4px 8px rgb(0 0 0 / 20%);
        transform: translateY(-2px);
      }

      &.selected {
        background: ${({ theme }) => theme.colors.selectionHighlightBackground};
        border-color: ${({ theme }) => theme.colors.highlight};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.selectionHighlight};
      }

      .theme-preview {
        align-items: center;
        background-image:
          linear-gradient(
            45deg,
            rgb(128 128 128 / 10%) 25%,
            transparent 25%,
            transparent 75%,
            rgb(128 128 128 / 10%) 75%,
            rgb(128 128 128 / 10%)
          ),
          linear-gradient(
            45deg,
            rgb(128 128 128 / 10%) 25%,
            transparent 25%,
            transparent 75%,
            rgb(128 128 128 / 10%) 75%,
            rgb(128 128 128 / 10%)
          );
        background-position:
          0 0,
          4px 4px;
        background-size: 8px 8px;
        border: 2px solid;
        border-radius: 4px;
        display: flex;
        height: 80px;
        justify-content: center;
        padding: 6px;
        width: 100%;
      }

      .theme-window {
        border: 1px solid;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        width: 100%;
      }

      .theme-titlebar {
        border-bottom: 1px solid rgb(0 0 0 / 20%);
        height: 12px;
        width: 100%;
      }

      .theme-content {
        flex: 1;
        width: 100%;
      }

      .theme-name {
        color: ${({ theme }) => theme.colors.text};
        font-size: 12px;
        font-weight: 500;
        text-align: center;
      }
    }
  }
`;

export default StyledSettings;
