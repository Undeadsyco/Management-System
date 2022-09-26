import styled from 'styled-components';

export const AddBtn = styled.button`
  grid-column: 8/10;
  grid-row: 4/5;
  align-self: center;
  justify-self: center;

  width: 80%;
  height: 80%;
  border: 2px solid black;
  border-radius: 20px;

  & > a {
    width: 100%;
    height: 100%;
    color: black;
    text-decoration: none;
  }
`;

export const FormContainer = styled.div`
  z-index: 10;
  top: 0;
  left: 0;
  position: absolute;
  
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  background-color: rgb(0, 0, 0, 0.8);

  & > form {
    grid-column: 5/9;
    grid-row: 5/9;

    border: 2px solid black;
    border-radius: 20px;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > label {
      width: 80%;

      & > h3 {
        text-align: center;
      }

      & > input {
        width: 100%;
        height: 25px;
        text-align: center;
      }

      & > div {
        text-align: center;
        &.errMessage {
          font-size: 0.9em;
          color: red;
        }
      }
    }

    & > div {
      width: 70%;
      padding: 20px;
      display: flex;
      justify-content: space-around;

      & > button {
        width: 100px;
        height: 30px;
        border: 2px solid black;
        border-radius: 20px;

        &:first-child {
          background-color: rgb(255, 94, 94);
        }

        &:last-child {
          background-color: rgb(0, 128, 0, 0.7);
        }

        &:hover {
          width: 110px;
          cursor: pointer;
        }
      }
    }
  }
`;

export const ListContainer = styled.div`
  grid-column: 4/10;
  grid-row: 5/12;

  padding: 10px;

  & > table {
    width: 100%;

    & > thead > tr {
      width: 100%;
      & > th {
        width: 120px;
        border: 2px solid black;
      }
    }

    & > tbody > tr {height: 40px;
      background-color: rgb(235, 235, 235);

      &:nth-child(2n) {
        background-color: rgb(200, 200, 200);
      }

      & > td {
        width: 150px;
        border: 2px solid black;
        text-align: center;

        & > button {
          width: 50%;
          height: 25px;
          border: 2px solid black;
          border-radius: 20px;
          color: white;

          &:first-child {
            background-color: rgb(204, 191, 2);
          }

          &:last-child {
            background-color: rgb(212, 12, 8);;
          }

          &:hover {
            cursor: pointer;
            width: 45%;
          }
        }
      }
    }
  }
`;
