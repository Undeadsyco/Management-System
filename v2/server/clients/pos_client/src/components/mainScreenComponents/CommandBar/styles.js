import styled from 'styled-components';

const CommandBarContainer = styled.div`
  grid-column: 4/13;
  grid-row: 10/11;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`;

export default CommandBarContainer;
