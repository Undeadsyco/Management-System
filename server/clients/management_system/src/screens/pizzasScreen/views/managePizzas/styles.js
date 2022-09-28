import styled from 'styled-components';

export const SectionLabel = styled.label`
  grid-column: 3/6;
  grid-row: 4/5;
  justify-self: center;
  align-self: center;
  width: 80%;
  text-align: center;

  & > div {
    width: 100%;
  }

  & > select {
    width: 100%;
    height: 25px;
  }
`;

export const CountContainer = styled.div`
  grid-column: 6/8;
  grid-row: 4/5;

  margin-block: 10px;
  text-align: center;
`;

export const AddBtn = styled.button`
  grid-column: 8/10;
  grid-row: 4/5;
  justify-self: center;
  align-self: center;
  width: 80%;
  height: 80%;
  border: 2px solid black;
  border-radius: 20px;
`;

export const PizzaFormContainer = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  & > form {
    /* width: 50%; */
    /* height: 80%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: white;
    border-radius: 20px;

    & > h2 {
      width: 100%;
      height: 60px;
      background-color: white;
      text-align: center;
      padding: 10px;
      border-radius: 20px;
    }

    & > div {
      width: 50%;
      padding: 10px;
      border: 2px solid black;
      border-radius: 20px;

      & > label {
        display: block;
        width: 100%;
        margin-block: 10px;
        /* height: 80px; */

        & > input {
          width: 100%;
          height: 25px;
        }

        & > select {
          width: 100%;
          height: 25px;
        }

        & > div {
          &.toppingContainer {
            height: 280px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(1, 1fr);
            column-gap: 10px;

            & > div {
              width: 160px;
              padding: 10px;
              overflow-y: auto;

              & > h4 {
                width: 100%;

                & > button {
                  width: 100%;
                }
              }

              & > label {
                display: flex;
                margin-block: 5px;
                align-items: center;
                /* justify-content: center; */
              }
            }
          }
        }
      }

      & > div {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        & > button {
          width: 25%;
          height: 25px;
        }
      }

      &.formSection_1 { width: 100%; }
      &.formSection_3 { width: auto; }
    }
  }
`;

export const TableContainer = styled.div`
  grid-column: 3/11;
  grid-row: 5/13;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: ${(props) => (props.numOfRows <= 7 ? 'repeat(8, 1fr)' : `repeat(${props.numOfRows + 1}, 43px)`)};
  row-gap: 5px;
  overflow-y: scroll;

  & > div {
    &.heading {
      text-align: center;
      font-weight: 600;
      font-size: 1.1em;
    }

    &.row {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(1, 1fr);
      border: 2px solid black;
      border-radius: 10px;

      & > h4 {
        border-inline: 2px solid black;

        &:first-child {
          border-inline-start: none;
        }

        &:last-child {
          border-inline-end: none;
        }
      }

      & > p {
        border-inline: 2px solid black;

        &:first-child {
          border-inline-start: none;
        }
      }
      
      & > span{
          display: block;
          border-inline-start: 2px solid black;
        }
    }

    &.loading {
      text-align: center;
      font-size: 1.2em;
      font-weight: 600;
    }
  }
`;
