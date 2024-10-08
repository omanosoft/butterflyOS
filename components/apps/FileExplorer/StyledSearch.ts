import styled from "styled-components";

const StyledSearch = styled.div`
  border: 1px solid rgb(83, 83, 83);
  display: flex;
  height: ${({ theme }) => theme.sizes.fileExplorer.navInputHeight}px;
  margin: 7px 12px 6px 0;
  max-width: 148px;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 100%;

  svg {
    display: none;
  }

  input {
    background-color: ${({ theme }) =>
      theme.colors.fileExplorer.inputFieldsBackground};
    color: ${({ theme }) => theme.colors.fileExplorer.inputFieldsText};
    font-family: ${({ theme }) => theme.formats.systemFont};
    font-size: 12px;
    font-weight: 400;
    height: ${({ theme }) => theme.sizes.fileExplorer.navInputHeight - 2}px;
    padding-bottom: 1px;
    padding-left: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    &::-webkit-search-cancel-button {
      filter: invert(1);
      padding-right: 4px;
    }
  }

  input:placeholder-shown ~ svg {
    display: block;
    fill: rgb(113, 113, 113);
    height: 12px;
    pointer-events: none;
    position: absolute;
    right: 6px;
    stroke: rgb(113, 113, 113);
    stroke-width: 1;
    top: 5px;
    width: 12px;
  }
`;

export default StyledSearch;
