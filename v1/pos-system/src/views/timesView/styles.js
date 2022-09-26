import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 85% 15%;
  overflow: hidden;
`;

export const EmployeeContainer = styled.div`
  display: grid;
  grid-column: 1/5;
  grid-template-rows: repeat(10, 1fr);
  gap: 10px;
  padding: 10px;
  overflow-y: auto;
`;

export const EditContainer = styled.div`
  grid-column: 6/12;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const BtnContainer = styled.div`
  grid-column: 1/13;
  margin: 10px 0;
  width: 100%;
`;

export const btnStyles = {
  width: '200px',
  height: '75px',
};

export const itemStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  borderRadius: '20px',
};
