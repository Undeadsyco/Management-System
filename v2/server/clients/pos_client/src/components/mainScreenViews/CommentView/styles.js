import styled from 'styled-components';

const CommentViewContainer = styled.div`
  grid-column: 4/13;
  grid-row: 2/10;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 40px;
  padding: 20px;

  & > div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 20px;

    & > button {
      color: white;

      &.blueBtn {
        background-color: rgb(64, 122, 222);
      }

      &.crimsonBtn {
        background-color: rgb(207, 59, 39);
      }

      &.yellowBtn {
        background-color: rgb(179, 174, 48);
      }
    }

    &:first-child > button:last-child {
      grid-column: 1/2;
      grid-row: 6/7;

      background-color: red;
    }
  }
`;

export default CommentViewContainer;
