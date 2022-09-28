import styled from 'styled-components';

const PizzaScreenContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  & > a {
    width: 80%;
    height: 80%;
    justify-self: center;
    align-self: center;
    grid-row: 1/3;

    &.manageDougnBtn {
      grid-column: 2/4;
    }

    &.manageSectionBtn {
      grid-column: 6/8;
    }

    &.managePizzaBtn {
      grid-column: 10/12;
    }

    & > button {border-radius: 20px;
      box-shadow: 10px 10px 5px 5px rgb(75, 75, 75);
      background-color: rgb(0, 128, 0);
      color: white;
      font-size: 1.25em;
      font-weight: 700;
      text-shadow: black 3px 3px 2px;

      &:hover {
        background-color: rgb(0, 128, 0, 0.8);
        box-shadow: 5px 5px 2px 2px black;
      }
    }

    &.backBtn {
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

export default PizzaScreenContainer;
