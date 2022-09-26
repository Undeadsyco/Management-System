import styled from 'styled-components';

const DeliveryViewContainer = styled.div`
  grid-column: 4/13;
  grid-row: 2/10;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 15px;

  & > div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: 10px;

    & > button {
      color: white;

      &.crimsonBtn {
        background-color: rgb(207, 59, 39);
      }

      &.yellowBtn {
        background-color: rgb(179, 174, 48);
      }
    }

    &:last-child {
      grid-column: 4/5;
      & > button {

        &:last-child {
          grid-row: 7/8;
        }
      }
    }
  }
`;

export default DeliveryViewContainer;
