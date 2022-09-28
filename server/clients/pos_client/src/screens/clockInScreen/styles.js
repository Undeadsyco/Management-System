import styled from 'styled-components';
import GridContainer from '../../globalStyles/gridContainer';

const ClockInScreenContainer = styled(GridContainer)`
  width: 100%;
  height: 100%;

  & > h2 {
    grid-column: 4/7;
    text-align: center;

    &.name {
      grid-row: 2/3;
    }

    &.position {
      grid-row: 3/4;
    }
  }

  & > button {
    width: 85%;
    height: 60%;
    grid-column: 10/13;
    justify-self: center;
    align-self: center;
  }

  & > button.clockInBtn {
    display: ${(props) => props.clockInDisplay};
    grid-row: 1/3;
  }

  & > button.breakInBtn {
    display: ${(props) => props.breakInDisplay};
    grid-row: 1/3;
  }
`;

export default ClockInScreenContainer;
