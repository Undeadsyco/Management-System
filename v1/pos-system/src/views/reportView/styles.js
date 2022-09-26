import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #6b6bf0;
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Table = styled.div`
  height: 70%;
  display: grid;
  border: 2px solid black;
  grid-template-rows: repeat(26, 1fr);
  gap: 5px;
  overflow-y: scroll;
`;

export const Row = styled.div`
  display: grid;
  height: 25px;
  grid-template-columns: repeat(5, 1fr);
  font-size: larger;
  font-weight: bolder;
`;
