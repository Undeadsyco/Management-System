import styled from 'styled-components';

export const DoughListContainer = styled.div`
  grid-column: 4/10;
  grid-row: 5/13;

  padding: 10px;

  & > table {
    width: 100%;
    max-height: 100%;
    border: 2px solid black;

    & > thead > tr > th{
      width: 150px;
      border: 2px black solid;

      &:nth-child(3n) {
        width: 300px;
      }
    }

    & > tbody > tr {
      height: 40px;
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

          &:hover {
            cursor: pointer;
            width: 45%;
          }
        }

        &:nth-child(4n+3) {
          & > button {
            background-color: rgb(204, 191, 2);

            &:hover {
              background-color: rgb(246, 255, 66);
              color: black;
            }
          }
        }
        &:nth-child(4n+4) {
          & > button {
            background-color: rgb(212, 12, 8);

            &:hover {
              background-color: rgb(255, 94, 94);
              color: black;
            }
          }
        }
      }
    }
  }
`;

export const AddBtn = styled.button`
  grid-column: 8/10;
  grid-row: 4/5;

  width: 80%;
  height: 80%;
  justify-self: center;
  align-self: center;

  border: 2px solid black;
  border-radius: 20px;

  & > a {
    width: 100%;
    height: 100%;
    margin: 10px 0;
    display: inline-block;
    text-decoration: none;
    color: black;
  }
`;

export const DoughFormContainer = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  background-color: rgb(0, 0, 0, 0.9);

  & > form {
    grid-column: 5/9;
    grid-row: 2/11;

    padding: 20px;
    border: 2px solid black;
    border-radius: 5px;
    margin: 20px 0;
    border-radius: 20px;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    align-items: center;
    background-color: white;

    & > label {
      width: 80%;
      
      & > div {
        text-align: center;
        font-size: 1.2em;
        font-weight: 600;
      }

      & > input {
        width: 100%;
        text-align: center;
        height: 25px;
        border-radius: 20px;
      }

      & .errMessage {
        font-size: 0.9em;
        font-weight: 400;
        color: red;
      }
    }

    & > div {
      display: flex;
      justify-items: center;
      align-items: center;

      & > button {
        width: 120px;
        height: 30px;
        border-radius: 20px;
        margin: 0 5px;
        font-size: 1.1em;

        &:hover {
          cursor: pointer;
          width: 130px;
        }
      }
    }
  }
`;
