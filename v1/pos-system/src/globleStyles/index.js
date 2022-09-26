import styled from 'styled-components';

export const Container = styled.div.attrs((props) => {
  console.log('main', props);
  return ({
    tabIndex: 0,
    colNum: props.colNum || '100%',
    colStart: props.colStart || 1,
    colEnd: props.colEnd || 2,
    rowNum: props.rowNum || '100%',
    rowStart: props.rowStart || 1,
    rowEnd: props.rowEnd || 2,
  });
})`
  display: grid;
  width: 100%;
  height: 100%;
  color: blueviolet;

  grid-template-columns: ${(props) => `${props.colNum}`};
  grid-template-rows: ${(props) => `${props.rowNum}`};
  grid-column: ${(props) => `${props.colStart}/${props.colEnd}`};
  grid-row: ${(props) => `${props.rowStart}/${props.rowEnd}`};

  &&.1By2Brid {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
  }
  &&.2By1Grid {
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
  }
  &&.2By2Grid {
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
  }
  &&.multyGrid {
    grid-template-columns: ${(props) => `repeat(${props.colNum}, 1fr)`};
    grid-template-rows: ${(props) => `repeat(${props.rowNum}, 1fr)`};
  }
`;

export const Row = styled.div.attrs(() => ({}))`
  width: 100%;
  justify-items: center;
  align-items: center;
`;

export const Column = styled.div.attrs(() => ({}))``;
