import { type RuleSet, css } from "styled-components";
import { TASKBAR_HEIGHT } from "utils/constants";

const TaskbarPanel = (
  height: number,
  width: number,
  left = 0,
  hasBorder = false
): RuleSet<object> => css`
  background-color: ${({ theme }) => theme.colors.taskbar.background};
  border: ${hasBorder
    ? ({ theme }) => `1px solid ${theme.colors.window.outline}`
    : "none"};
  border-bottom-width: 0;
  bottom: ${TASKBAR_HEIGHT}px;
  box-shadow: 3px 0 10px 3px rgb(0 0 0 / 50%);
  contain: strict;
  display: flex;
  height: 100%;
  left: ${left}px;
  max-height: ${height}px;
  max-width: ${width}px;
  position: absolute;
  width: calc(100% - ${left}px);
  z-index: 10000;

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: ${({ theme }) => theme.colors.taskbar.background};
  }
`;

export default TaskbarPanel;
