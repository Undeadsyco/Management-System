import styled from 'styled-components';

const CommandBoxContainer = styled.div`
  grid-column: 1/4;
  grid-row: 8/11;
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2px;
`;

export default CommandBoxContainer;
