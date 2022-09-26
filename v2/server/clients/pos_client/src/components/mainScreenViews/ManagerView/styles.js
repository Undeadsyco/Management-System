import styled from 'styled-components';

const ManagerViewContainer = styled.div`
  grid-column: 4/13;
  grid-row: 2/10;

  padding: 15px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 10px;

  & > div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    row-gap: 10px;

    & > button {

    }
  }
`;

export const EditTimeContainer = styled.div`
  grid-column: 5/9;
  grid-row: 2/10;
  background-color: white;
  margin-block: 20px;
  border-radius: 20px;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(12, 1fr);

  & > div:first-child {
    text-align: center;
  }

  & > div.headingContianer {
    text-align: center;
    grid-row: 2/4;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  & > div.editTimeBtns {
    grid-row: 4/11;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & > div {
      padding-inline: 10px;
      text-align: center;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      justify-items: center;
      align-items: center;
      gap: 10px;
    }

    & > div > h4 {
      grid-column: 1/3;
    }

    & > div > button {
      height: 40px;
      width: 100%;
      border-radius: 20px;
    }
  }

  & > div.actionBtns {
    grid-row: 11/13;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    
    & > button {
      width: 70%;
      height: 50px;
      border-radius: 20px;
    }
  }
`;

export default ManagerViewContainer;
