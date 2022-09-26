import styled from 'styled-components';

const InventoryScreenContainer = styled.div`
  width: 100hw;
  height: 100vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  & > div.btnBox {
    grid-column: 2/12;
    grid-row: 1/3;
    height: 60px;
    border: none;
    border-radius: 20px;
    margin-block: 20px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: center;

    & > button {
      width: 60%;
      height: 70%;

      border-radius: 20px;

      &:last-child {
        grid-column: 5/6;
      }

      &:hover {
        cursor: pointer;
        width: 65%;
        height: 75%;
        border-radius: 30px;
      }
    }
  }

  & > div.routeContainer {
    grid-column: 2/12;
    grid-row: 3/13;

    & > div {
      border: 2px solid black;
      border-radius: 20px;
      margin-block: 20px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const TableContainer = styled.div`
  grid-template-rows: repeat(10, 1fr);

  & > h3 {
    text-align: center;
    align-items: center;
    justify-items: center;
  }

  & > div.tableHeader {
    min-height: 30px;
    border: 2px solid black;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    align-items: center;
    text-align: center;
    font-size: 1.15em;
    font-weight: 700;
    border-top-right-radius: 18px;
    border-top-left-radius: 18px;
  }

  & > div.cover {
    border: 2px solid black;
    border-radius: 18px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;
    align-items: center;

    & > h3 {
      grid-column: 1/5;
      text-align: center;
    }

    & > div {
      width: 100%;
      height: 100%;
      grid-column: 5/7;
      display: inherit;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;

      & > button {
        width: 60%;
        height: 60%;
        
        &:nth-child(3n) {
          justify-self: start;
        }

        &:nth-child(3n + 1) {
          justify-self: end;
        }
      } 

      & > div:nth-child(3n + 2) {
        justify-self: center;
        text-align: center;
      }
    }
  }

  & > section {
    min-height: 30px;
    border: 2px solid black;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    align-items: center;
    text-align: center;
    
    &:last-child {
      border-bottom-right-radius: 18px;
      border-bottom-left-radius: 18px;
    }
  }
`;

export default InventoryScreenContainer;
