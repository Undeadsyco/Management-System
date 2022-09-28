// Dependendcies
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { checkPropTypes, func, string } from 'prop-types';
// Components
import Button from './button';

const Container = styled.div`
  width: 100%;
  height: 100%;
  
  grid-column: ${(props) => props.colSpan};
  grid-row: ${(props) => props.rowSpan};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 3px;
  justify-items: center;
  align-items: center;

  & > input {
    grid-column: 1/4;
    width: 70%;
    height: 60%;
  }
`;

function NumberPad(props) {
  const { state } = useLocation();
  const {
    colSpan, rowSpan, submit, cancel,
  } = props;
  const [pin, setPin] = useState('');
  const [amount, setAmount] = useState(0);

  const submitAction = () => {
    if (state && state.discountType) {
      submit({ discountType: state.discountType, amount });
    } else {
      submit(pin);
    }
  };

  const handleClick = (input) => {
    if (state && state.discountType) setAmount((prev) => `${parseFloat((parseFloat(`${prev * 100}${input}`) / 100).toFixed(2))}`);
    else setPin((prev) => `${prev}${input}`);
  };

  const inputValue = state?.discountType ? parseFloat(parseFloat(amount).toFixed(2)) : pin;

  return (
    <Container colSpan={colSpan} rowSpan={rowSpan}>
      <input
        value={inputValue}
        readOnly
      />
      <Button
        btnText="1"
        btnAction={() => handleClick(1)}
      />
      <Button
        btnText="2"
        btnAction={() => handleClick(2)}
      />
      <Button
        btnText="3"
        btnAction={() => handleClick(3)}
      />
      <Button
        btnText="4"
        btnAction={() => handleClick(4)}
      />
      <Button
        btnText="5"
        btnAction={() => handleClick(5)}
      />
      <Button
        btnText="6"
        btnAction={() => handleClick(6)}
      />
      <Button
        btnText="7"
        btnAction={() => handleClick(7)}
      />
      <Button
        btnText="8"
        btnAction={() => handleClick(8)}
      />
      <Button
        btnText="9"
        btnAction={() => handleClick(9)}
      />
      <Button
        btnText="Cancel"
        btnColor=""
        bgBtnColor="rgb(255, 0, 0, 0.8)"
        btnAction={() => {
          setPin('');
          cancel();
        }}
      />
      <Button
        btnText="0"
        btnAction={() => handleClick(0)}
      />
      <Button
        btnText="OK"
        btnColor=""
        bgBtnColor="rgb(0, 200, 0)"
        btnAction={() => submitAction()}
      />
    </Container>
  );
}

NumberPad.defaultProps = {
  colSpan: '',
  rowSpan: '',
  submit: checkPropTypes(),
  cancel: checkPropTypes(),
};

NumberPad.propTypes = {
  colSpan: string,
  rowSpan: string,
  submit: func,
  cancel: func,
};

export default NumberPad;
