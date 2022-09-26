import styled from 'styled-components';

const CrewFunctionContainer = styled.div`
  grid-column: 4/13;
  grid-row: 2/10;

  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  column-gap: 30px;

  & > div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 30px;

    & > button {

    }
  }
`;

export default CrewFunctionContainer;
