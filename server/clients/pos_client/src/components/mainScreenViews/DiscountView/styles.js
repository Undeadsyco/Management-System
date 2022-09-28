import styled from 'styled-components';

export const DiscountViewContainer = styled.div`
  grid-column: 4/13;
  grid-row: 2/10;

  padding: 15px 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  column-gap: 40px;

  & > div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(7, 1fr);
    row-gap: 10px;
  
    & > a > button {
      color: white;

      &.blueBtn {
        background-color: rgb(64, 122, 222);
      }

      &.crimsonBTn {
        background-color: rgb(207, 59, 39);
      }

      &.greyBtn {
        background-color: rgb(182, 175, 196);
      }

      &.yellowBtn {
        color: black;
        background-color: rgb(237, 217, 2);
      }

      &.greenBtn {
        color: black;
        background-color: rgb(73, 199, 18);
      }

      &.redBtn {
        background-color: red;
      }
    }

    & > button {
      color: white;

      &.blueBtn {
        background-color: rgb(64, 122, 222);
      }

      &.crimsonBTn {
        background-color: rgb(207, 59, 39);
      }

      &.greyBtn {
        background-color: rgb(182, 175, 196);
      }

      &.yellowBtn {
        color: black;
        background-color: rgb(237, 217, 2);
      }

      &.greenBtn {
        color: black;
        background-color: rgb(73, 199, 18);
      }

      &.redBtn {
        background-color: red;
      }
    }
  }
`;

export const DiscountAmountContainer = styled.div`
  grid-column: 4/13;
  grid-row: 2/10;

  padding: 20px 120px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 120px;

  & > div {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    row-gap: 20px;
  }
`;
