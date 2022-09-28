import styled from 'styled-components';

const SizeBarContainer = styled.div`
  grid-column: 4/13;
  grid-row: 1/2;

  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.colNum}, 1fr)`};
  gap: 2px;

  & > button {
    
  }
`;

export default SizeBarContainer;
