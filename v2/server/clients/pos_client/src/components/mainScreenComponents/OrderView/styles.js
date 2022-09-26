import styled from 'styled-components';

const OrderViewContainer = styled.div`
  border-radius: 20px;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(10, 1fr);

  & > div.orderList {
    grid-row: 1/3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    padding: 5px;
    gap: 5px;

    & > button {
      width: 100%;
      border: 2px solid black;
      border-radius: 20px;

      &#active {
        background-color: rgb(150, 150, 150);
      }
    }
  }

  & > div.orderContainer {
    grid-row: 3/9;
    padding: 10px;

    & > h3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      align-items: center;
    }

    & > menu {    
      list-style: none;
      overflow-y: auto;
      max-height: 90%;
    }

    & > menu > li > button {
      width: 100%;
      height: 35px;
      margin-block: 2px;
      background-color: rgb(225, 225, 225);
      border: none;
      border-radius: 20px;

      &#active {
        background-color: rgb(150, 150, 150);
      }
    }
  }

  & > div.priceContainer {
    grid-row: 9/11;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AddedToppingsContainer = styled.div`
  display: ${(props) => props.display};

  & > div {
    width: 53.25%;
    display: flex;
    justify-content: space-between;

    & > button {
      width: 20px;
      border-radius: 50%;
      background-color: red;
      color: white;
    }
  }
`;

export const RemovedToppingContainer = styled.div`
  display: ${(props) => props.display};
  align-items: end;
  flex-wrap: wrap;
  flex-direction: column;

  & > h4 {
    text-align: right;
    width: 100%;
    margin-block: 5px;
  }

  & > div {
    width: 53.25%;
    display: flex;
    justify-content: space-between;

    & > button {
      width: 20px;
      border-radius: 50%;
      background-color: red;
      color: white;
    }
  }
`;

export const DiscountContainer = styled.div`
  & > p > span:first-child {
    text-decoration: underline;
  }

  & > p > button {
    width: 20px;
    background-color: red;
    color: white;
    border-radius: 20px;
  }
`;

export default OrderViewContainer;
