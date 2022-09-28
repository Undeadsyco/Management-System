import styled from 'styled-components';

const MainScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 2px;

  & > div {
    &.orderView {
      grid-column: 1/4;
      grid-row: 1/8;
    }
  }
`;

export default MainScreenContainer;
