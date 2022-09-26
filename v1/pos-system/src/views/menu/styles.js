import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 95vh;
  display: grid;
  grid-template-columns: 25% 75%;
  background-color: black;
`;

export const OrderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 72% 28%;
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 11% 78% 11%;
`;

export const StyledP = styled.p`
  margin: 0 50px 0 0;
  padding: 0;
  display: inline;
  float: right;
`;
