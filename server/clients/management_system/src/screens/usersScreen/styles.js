import styled from 'styled-components';

const UsersScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  & .btnBox1 {
    grid-column: 1/13;
    grid-row: 1/3;

    display: grid;

    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);

    & > a {
      width: 80%;
      height: 80%;
      grid-row: 1/3;
      align-self: center;
      justify-self: center;

      &.btn1 {
        grid-column: 4/6;
      }

      &.btn2 {
        grid-column: 8/10;
      }

      & > button {
        border-radius: 20px;
        box-shadow: 10px 10px 5px 5px rgb(75, 75, 75);
        background-color: rgb(0, 128, 0);
        color: white;
        font-size: 1.25em;
        font-weight: 700;
        text-shadow: black 3px 3px 2px;

        &:hover {
          background-color: rgb(0, 128, 0, 0.8);
          box-shadow: 5px 5px 2px 2px black;
        }
      }
    }
  }

  & .routeContainer {
    grid-column: 1/13;
    grid-row: 3/12;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(9, 1fr);

    & > form {
      grid-column: 3/7;
      grid-row: 2/9;

      padding: 20px;
      border: 3px solid black;
      border-radius: 20px;
      box-shadow: 20px 20px 10px 5px rgb(75, 75, 75);

      display: grid;
      grid-column: 100%;
      grid-row: repeat(5, 1fr);
      justify-items: center;
      text-align: center;

      & > label {
        width: 70%;
        text-align: center;

        & > input {
          width: 100%;
          height: 25px;
          border: 2px solid black;
          border-radius: 5px;
          text-align: center;
        }

        & > select {
          width: 100%;
          height: 25px;
          border: 2px solid black;
          border-radius: 5px;
          text-align: center;
        }

        & .errMessage {
          color: red;
          font-size: 0.9em;
        }
      }
      
      & > button {
        width: 30%;
        height: 25px;
        border: 2px solid black;
        border-radius: 5px;

        &:hover {
          width: 35%;
          background-color: rgba(0, 128, 0, 0.8);
          color: white;
        }
      }
    }
  }

  & .btnBox2 {
    grid-column: 1/13;
    grid-row: 12/13;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(1, 1fr);

    & > a {
      width: 90%;
      height: 80%;

      grid-column: 12/13;
      grid-row: 1/2;

      & > button {
        border-radius: 10px;
        box-shadow: 5px 5px 5px 5px rgb(75, 75, 75);
        background-color: rgb(225, 0, 0);
        color: white;
        font-weight: 600;
        font-size: 1.15em;

        &:hover {
          box-shadow: 2px 2px 2px 2px black;
        }
      }
    }
  }
`;

export default UsersScreenContainer;
