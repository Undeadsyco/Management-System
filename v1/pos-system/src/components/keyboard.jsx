import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './button';

const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: grid;
  /* grid-column: 1/3; */
  grid-template-columns: repeat(1, 1fr);
  background-color: black;
`;

const Input = styled.input`
  width: 500px;
  height: 70px;
  border-radius: 50px;
  margin: 50px auto;
  font-size: larger;
  padding: 0 20px;
`;

const Row = styled.div`
  box-sizing: inherit;
  width: 100%;
  height: 100px;
  display: grid;
  padding: 0 auto;
`;

const KeyBoard = (props) => {
  const {
    keyboardType,
  } = props;

  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitAction = () => {
    switch (keyboardType) {
      case 'set_name':
        dispatch({ type: 'SET_NAME', data: input });
        setInput('');
        navigate('/menu');
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Input value={input} onChange={(e) => e.target.value} />
      <Row style={{ gridTemplateColumns: 'repeat(10, 1fr)', padding: '0 140px' }}>
        <Button action={() => setInput((prev) => `${prev}Q`)} name="Q" />
        <Button action={() => setInput((prev) => `${prev}W`)} name="W" />
        <Button action={() => setInput((prev) => `${prev}E`)} name="E" />
        <Button action={() => setInput((prev) => `${prev}R`)} name="R" />
        <Button action={() => setInput((prev) => `${prev}T`)} name="T" />
        <Button action={() => setInput((prev) => `${prev}Y`)} name="Y" />
        <Button action={() => setInput((prev) => `${prev}U`)} name="U" />
        <Button action={() => setInput((prev) => `${prev}I`)} name="I" />
        <Button action={() => setInput((prev) => `${prev}O`)} name="O" />
        <Button action={() => setInput((prev) => `${prev}P`)} name="P" />
      </Row>
      <Row style={{ gridTemplateColumns: 'repeat(9, 1fr)', padding: '0 190px' }}>
        <Button action={() => setInput((prev) => `${prev}A`)} name="A" />
        <Button action={() => setInput((prev) => `${prev}S`)} name="S" />
        <Button action={() => setInput((prev) => `${prev}D`)} name="D" />
        <Button action={() => setInput((prev) => `${prev}F`)} name="F" />
        <Button action={() => setInput((prev) => `${prev}G`)} name="G" />
        <Button action={() => setInput((prev) => `${prev}H`)} name="H" />
        <Button action={() => setInput((prev) => `${prev}J`)} name="J" />
        <Button action={() => setInput((prev) => `${prev}K`)} name="K" />
        <Button action={() => setInput((prev) => `${prev}L`)} name="L" />
      </Row>
      <Row style={{ gridTemplateColumns: 'repeat(7, 1fr)', padding: '0 290px' }}>
        <Button action={() => setInput((prev) => `${prev}Z`)} name="Z" />
        <Button action={() => setInput((prev) => `${prev}X`)} name="X" />
        <Button action={() => setInput((prev) => `${prev}C`)} name="C" />
        <Button action={() => setInput((prev) => `${prev}V`)} name="V" />
        <Button action={() => setInput((prev) => `${prev}B`)} name="B" />
        <Button action={() => setInput((prev) => `${prev}N`)} name="N" />
        <Button action={() => setInput((prev) => `${prev}M`)} name="M" />
      </Row>
      <Row style={{ gridTemplateColumns: 'repeat(7, 1fr)', padding: '0 290px' }}>
        <Button name="Back Space" action={() => setInput((prev) => prev.substring(0, prev.length - 1))} />
        <Button name="CLEAR" action={() => setInput('')} />
        <Button action={() => setInput((prev) => `${prev} `)} name="SPACE" style={{ gridColumn: '3/6' }} />
        <Button name="CANCEL" action={() => navigate('/menu')} />
        <Button name="OKAY" action={() => submitAction()} />
      </Row>
    </Container>
  );
};

KeyBoard.defaultProps = {
  keyboardType: '',
};

KeyBoard.propTypes = {
  keyboardType: PropTypes.string,
};

export default KeyBoard;
