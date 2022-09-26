import styled from 'styled-components';

const GridContainer = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  
  &.multiRows {
    grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
  }

  &.multiCols {
    grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  }
  
  &.multyGrid {
    grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
    grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
  }
`;

export default GridContainer;
