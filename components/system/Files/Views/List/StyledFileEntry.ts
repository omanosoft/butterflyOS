import styled from "styled-components";

const StyledFileEntry = styled.li`
  display: flex;
  flex-direction: column;

  figure {
    display: flex;
    height: 36px;
    padding-bottom: 1px;
    padding-left: 1px;
    place-items: center;

    figcaption {
      color: ${({ theme }) => theme.colors.fileEntry.text};
    }

    picture {
      margin-left: 3px;
      margin-right: 8px;
    }

    svg {
      fill: ${({ theme }) => theme.colors.fileEntry.text};
      height: 8px;
      margin-left: auto;
      margin-right: 8px;
      opacity: 80%;
      pointer-events: none;
      width: 8px;
    }

    picture,
    svg {
      transition: margin 0.25s ease-out;
    }

    &:active {
      figcaption {
        letter-spacing: -0.15px;
        opacity: 90%;
      }

      picture {
        margin-left: 7px;
      }

      svg {
        margin-right: 12px;
      }

      picture,
      svg {
        transition: none;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: ${({ theme }) => theme.colors.fileEntry.background};
      }
    }

    @media (pointer: coarse) {
      &:active {
        background-color: ${({ theme }) =>
          theme.colors.fileEntry.backgroundFocused};
        border: 1px solid ${({ theme }) => theme.colors.fileEntry.border};
      }
    }
  }
`;

export default StyledFileEntry;
