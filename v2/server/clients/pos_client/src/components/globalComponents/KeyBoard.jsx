import { useState } from 'react';
import { checkPropTypes, func, string } from 'prop-types';
import styled from 'styled-components';

import Button from './button';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;

  & > input {
    justify-self: center;
    align-self: center;
    border-radius: 25px;
    width: 70%;
    height: 70%;
    padding-inline: 15px;
  }

  & > div {
    grid-row: 2/7;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);

    & > div {
      display: grid;
      justify-self: center;

      &.row1 {
        width: 100%;
        grid-template-columns: repeat(10, 1fr);
      }
      
      &.row2 {
        width: 100%;
        grid-template-columns: repeat(10, 1fr);
      }
      
      &.row3 {
        width: 90%;
        grid-template-columns: repeat(9, 1fr);
      }
      
      &.row4 {
        width: 100%;
        grid-template-columns: repeat(10, 1fr);
      }
      
      &.row5 {
        width: 100%;
        grid-template-columns: repeat(9, 1fr);
        & > button {
          &:nth-child(3n+1) {
            grid-column: 1/3;
          }
          &:nth-child(3n+2) {
            grid-column: 3/8;
          }
          &:nth-child(3n) {
            grid-column: 8/10;
          }
        }
      }
      
      &.row6 {
        width: 50%;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;

        & > button {
          width: 80%;
          height: 80%;
        }
      }
    }
  }

  &.commentKeyBoard {
    grid-column: 4/13;
    grid-row: 2/10;

    padding: 40px 100px;
  }

  &.nameKeyBoard {
    grid-column: 4/13;
    grid-row: 2/10;

    padding: 80px 100px 40px;
  }
`;

function KeyBoard({ className, submitAction, cancelAction }) {
  const [text, setText] = useState('');

  return (
    <Container className={className}>
      <input type="text" value={text} onChange={() => setText(text)} />
      <div>
        <div className="row1">
          <Button btnText="1" btnAction={() => setText((prev) => `${prev}1`)} />
          <Button btnText="2" btnAction={() => setText((prev) => `${prev}2`)} />
          <Button btnText="3" btnAction={() => setText((prev) => `${prev}3`)} />
          <Button btnText="4" btnAction={() => setText((prev) => `${prev}4`)} />
          <Button btnText="5" btnAction={() => setText((prev) => `${prev}5`)} />
          <Button btnText="6" btnAction={() => setText((prev) => `${prev}6`)} />
          <Button btnText="7" btnAction={() => setText((prev) => `${prev}7`)} />
          <Button btnText="8" btnAction={() => setText((prev) => `${prev}8`)} />
          <Button btnText="9" btnAction={() => setText((prev) => `${prev}9`)} />
          <Button btnText="0" btnAction={() => setText((prev) => `${prev}0`)} />
        </div>
        <div className="row2">
          <Button btnText="Q" btnAction={() => setText((prev) => `${prev}Q`)} />
          <Button btnText="W" btnAction={() => setText((prev) => `${prev}W`)} />
          <Button btnText="E" btnAction={() => setText((prev) => `${prev}E`)} />
          <Button btnText="R" btnAction={() => setText((prev) => `${prev}R`)} />
          <Button btnText="T" btnAction={() => setText((prev) => `${prev}T`)} />
          <Button btnText="Y" btnAction={() => setText((prev) => `${prev}Y`)} />
          <Button btnText="U" btnAction={() => setText((prev) => `${prev}U`)} />
          <Button btnText="I" btnAction={() => setText((prev) => `${prev}I`)} />
          <Button btnText="O" btnAction={() => setText((prev) => `${prev}O`)} />
          <Button btnText="P" btnAction={() => setText((prev) => `${prev}P`)} />
        </div>
        <div className="row3">
          <Button btnText="A" btnAction={() => setText((prev) => `${prev}A`)} />
          <Button btnText="S" btnAction={() => setText((prev) => `${prev}S`)} />
          <Button btnText="D" btnAction={() => setText((prev) => `${prev}D`)} />
          <Button btnText="F" btnAction={() => setText((prev) => `${prev}F`)} />
          <Button btnText="G" btnAction={() => setText((prev) => `${prev}G`)} />
          <Button btnText="H" btnAction={() => setText((prev) => `${prev}H`)} />
          <Button btnText="J" btnAction={() => setText((prev) => `${prev}J`)} />
          <Button btnText="K" btnAction={() => setText((prev) => `${prev}K`)} />
          <Button btnText="L" btnAction={() => setText((prev) => `${prev}L`)} />
        </div>
        <div className="row4">
          <Button btnText="/" btnAction={() => setText((prev) => `${prev}/`)} />
          <Button btnText="Z" btnAction={() => setText((prev) => `${prev}Z`)} />
          <Button btnText="X" btnAction={() => setText((prev) => `${prev}X`)} />
          <Button btnText="C" btnAction={() => setText((prev) => `${prev}C`)} />
          <Button btnText="V" btnAction={() => setText((prev) => `${prev}V`)} />
          <Button btnText="B" btnAction={() => setText((prev) => `${prev}B`)} />
          <Button btnText="N" btnAction={() => setText((prev) => `${prev}N`)} />
          <Button btnText="M" btnAction={() => setText((prev) => `${prev}M`)} />
          <Button btnText="*" btnAction={() => setText((prev) => `${prev}*`)} />
          <Button btnText="!" btnAction={() => setText((prev) => `${prev}!`)} />
        </div>
        <div className="row5">
          <Button btnText='Backspace' btnAction={() => setText((prev) => prev.substring(0, prev.length - 1))} />
          <Button btnText="Space" btnAction={() => setText((prev) => `${prev} `)} />
          <Button btnText='Clear' btnAction={() => setText('')} />
        </div>
        <div className="row6">
          <Button btnText="Cancel" btnAction={() => cancelAction()} />
          <Button btnText="Accept" btnAction={() => submitAction(text)} />
        </div>
      </div>
    </Container>
  );
}

KeyBoard.defaultProps = {
  className: '',
  submitAction: checkPropTypes(),
  cancelAction: checkPropTypes(),
};

KeyBoard.propTypes = {
  className: string,
  submitAction: func,
  cancelAction: func,
};

export default KeyBoard;
