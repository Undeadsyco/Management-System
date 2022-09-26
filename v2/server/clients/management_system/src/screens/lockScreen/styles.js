import styled from 'styled-components';

const LockScreenContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  & > form {
    grid-column: 5/9;
    grid-row: 3/11;

    padding: 20px;
    border: 2px solid black;
    border-radius: 20px;
    box-shadow: 10px 10px 5px 5px rgb(75, 75, 75);
    text-align: center;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, 1fr);
    justify-items: center;
    align-items: center;

    & > label {
      width: 80%;

      & > div {
        font-weight: 700;
        font-size: 1.1em;
      }

      & > input {
        width: 100%;
        height: 25px;
        border-radius: 10px;
        text-align: center;
      }

      & .errMessage {
        font-weight: 400;
        font-size: 0.9em;
        color: red;
      }
    }

    & > button {
      width: 35%;
      height: 35%;
    }
  }
`;

export default LockScreenContainer;
