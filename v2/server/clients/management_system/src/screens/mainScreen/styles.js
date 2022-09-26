import styled from 'styled-components';

const MainScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display:  grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  & > a {
    &.colOne {
      grid-column: 3/5;
    }
    &.colTwo {
      grid-column: 6/8;
    }
    &.colThree {
      grid-column: 9/11;
    }
    &.rowOne {
      grid-row: 3/6;
    }
    &.rowTwo {
      grid-row: 8/11;
    }

    & > button {
      border: 5px solid gray;
      border-radius: 20px;
      background-color: rgb(0, 128, 0);
      color: white;
      font-size: 1.25em;
      font-weight: 700;
      text-shadow: black 3px 3px 2px;
      box-shadow: 10px 10px 5px 5px rgb(75, 75, 75);

      &:hover {
        background-color: rgb(0, 128, 0, 0.8);
        box-shadow: 5px 5px 5px 5px black;
      }
    }

    &.logoutBtn {
      width: 90%;
      height: 80%;

      grid-column: 12/13;
      grid-row: 12/13;

      & > button {
        border: 2px solid black;
        border-radius: 10px;
        box-shadow: 5px 5px 5px 5px rgb(75, 75, 75);
        background-color: rgb(225, 0, 0);
        color: white;
        font-weight: 600;
        font-size: 1.15em;

        &:hover {
          box-shadow: 2px 2px 2px 2px black;
        }
      }
    }
  }
`;

export default MainScreenContainer;
