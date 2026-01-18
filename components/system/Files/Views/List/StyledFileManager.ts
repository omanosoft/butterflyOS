import styled from "styled-components";

const StyledFileManager = styled.ol`
  background-color: ${({ theme }) => theme.colors.window.background};
  margin-top: 7px;
  width: 100%;

  picture:not(:first-of-type) {
    position: absolute;
  }
`;

export default StyledFileManager;
