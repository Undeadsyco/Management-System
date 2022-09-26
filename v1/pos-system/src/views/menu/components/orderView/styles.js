import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20% 80%;
`;

export const OrderHead = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;
  gap: 5px;
`;

export const OrderHeadings = styled.div`
 border: 2px solid black;
 border-radius: 20px;
`;

export const OrderBody = styled.div`
  padding: 0 10px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10% 60% 30%;
`;

export const OrderTitle = styled.h2`
  margin: 0;
  text-align: left;
`;

export const OrderArea = styled.div`
  overflow-y: auto;
`;

export const OrderItem = styled.div`
  display: grid;
  grid-template-areas: 
    "a b c"
    "d d d"
    "e e e"
  ;
`;

export const PriceBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const PriceArea = styled.p`
  margin: 5px;
  text-align: left;
`;
