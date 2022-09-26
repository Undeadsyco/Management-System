import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 15% 85%;
`;

export const Heading = styled.h1`
  grid-column: 1/5;
`;

export const ButtonContainer = styled.div`
  padding: 30px;
  grid-column: 3/4;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(8, 1fr);
  gap: 10px;
`;

export const ListContainer = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  padding: 10px 80px;
  overflow-y: scroll;
`;

export const orderStyles = {
  OrderContainer: styled.div`
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    background-color: white;
    color: black;
  `,
  OrderHead: styled.div`
    display: grid;
    margin: 0px 0 20px 0;
    font-size: 1.5rem;
  `,
  PriceContainer: styled.div`
    padding: 0;
    margin: 20px 0;
    display: grid;
    grid-template-columns: 100%;

  `,
  PriceContainerRow: styled.div`
    display: grid;
  `,
  PizzaContainer: styled.div`
    margin: 20px 0;
  `,
  DiscountContainer: styled.div`
    margin: 20px 0;
  `,
};
