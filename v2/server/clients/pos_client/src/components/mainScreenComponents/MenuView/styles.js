import styled from 'styled-components';

const MenuViewContainer = styled.div`
  grid-column: 4/13;
  grid-row: 2/10;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(9, 1fr);
  gap: 2px;

  & > div {
    &.toppingContainer {
      grid-column: 1/3;
      grid-row: 1/10;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(8, 1fr);
      gap: 2px;
    }

    &.portionsContainer {
      grid-column: 3/9;
      grid-row: 1/2;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    &.menuContainer {
      grid-column: 3/9;
      grid-row: 2/10;

      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 2px;

      & > div {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 2px;

        & > a {
          & > button {
            color: white;
            background-color: green;
          }
        }

        & > button {
          color: white;

          &.signatureBtn {
            background-color: crimson;
          }

          &.otherBtn {
            background-color: rgb(201, 152, 44);
          }

          &.specialBtn {
            background-color: rgb(150, 170, 176);
          }

          &.delightBtn {
            background-color: rgb(21, 46, 138);
          }
        }
      }
    }

    &.toppingListContainer {
      grid-column: 3/9;
      grid-row: 1/10;

      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(10, 1fr);
      gap: 2px;

      & > button {

        &.seasoningBtn {
          color: white;
          background-color: rgb(150, 170, 176);
        }

        &.sauceBtn {
          color: white;
          background-color: crimson;
        }

        &.cheeseBtn {
          color: white;
          background-color: rgb(201, 152, 44);
        }

        &.meatBtn {
          color: white;
          background-color: rgb(196, 69, 10);
        }

        &.produceBtn {
          color: white;
          background-color: rgb(44, 135, 28);
        }
      }
    }
  }
`;

export const XLVewContainer = styled.div`
  grid-column: 3/9;
  grid-row: 2/10;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);

  & > button {
    color: white;
    &.signatureBtn {
      background-color: crimson;
    }

    &.otherBtn {
      background-color: rgb(201, 152, 44);
    }

    &.specialBtn {
      background-color: rgb(150, 170, 176);
    }

    &.delightBtn {
      background-color: rgb(21, 46, 138);
    }
  }
`;

export const StuffedViewContainer = styled.div`
  grid-column: 3/9;
  grid-row: 2/10;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);

  & > button {
    color: white;
    &.signatureBtn {
      background-color: crimson;
    }

    &.otherBtn {
      background-color: rgb(201, 152, 44);
    }

    &.specialBtn {
      background-color: rgb(150, 170, 176);
    }

    &.delightBtn {
      background-color: rgb(21, 46, 138);
    }
  }
`;

export default MenuViewContainer;
