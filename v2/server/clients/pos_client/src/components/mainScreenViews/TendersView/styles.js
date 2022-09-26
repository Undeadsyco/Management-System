import styled from 'styled-components';

const TendersViewContainer = styled.div`
  grid-column: 4/13;
  grid-row: 2/10;
  padding: 20px 10px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  column-gap: 10px;

  & > div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(7, 1fr);
    row-gap: 5px;

    & > a > button {
      color: white;

      &.orangeBtn {
        background-color: orange;
      }

      &.lightGreenBtn {
        background-color: rgb(98, 194, 19);
      }

      &.greenBtn {
        background-color: green;
      }
    }

    & > button {
      color: white;

      &.greenBtn {
        background-color: green;
      }

      &.crimsonBtn {
        background-color: crimson;
      }

      &.blueBtn {
        background-color: blue;
      }

      &.redBtn {
        background-color: red;
      }

      &.orangeBtn {
        background-color: orange;
      }
    }

    &:nth-child(4n + 3) > button {
      &:nth-child(6n + 4) {
        grid-row: 5/6;
      }
      &:nth-child(6n + 5) {
        grid-row: 6/7;
      }
      &:nth-child(6n) {
        grid-row: 7/8;
      }
    }
  }
`;

export default TendersViewContainer;
