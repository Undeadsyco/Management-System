import styled from 'styled-components';

const ListContainer = styled.div`
  grid-column: 4/13;
  grid-row: 2/10;

  & > div.listContainer {
    height: 85%;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
    gap: 10px;
    overflow-y: auto;

    & > div {
      background-color: white;
      max-height: 165px;
      border-radius: 20px;
      display: grid;
      justify-items: center;
      align-items: center;
    }
  }

  & > div.btnContainer {
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
      width: 20%;
      height: 90%;
    }
  }
`;

export default ListContainer;

export const TimeItemContainer = styled.div`
  grid-template-columns: repeat(3, 1fr);

  & > div:first-child {
    grid-column: 1/3;
  }

  & > div:last-child {
    text-align: center;

    & > button {
      margin-block: 5px;
      width: 80%;
      height: 25px;
      border-radius: 15px;
    }
  }
`;
