import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 85% 15%;
`;

export const ListContainer = styled.div`
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  padding: 0 10px;
`;

export const BtnBox = styled.div`
  grid-row: 2/3;
`;
