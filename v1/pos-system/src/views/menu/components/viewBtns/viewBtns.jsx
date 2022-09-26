import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from '../../../../components/button';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const ViewBtns = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openKeyboard = useCallback(
    () => {
      dispatch({ type: 'SET_KEYBOARD_TYPE', data: { type: 'set_name' } });
      navigate('/keyboard');
    },
  );

  return (
    <Container>
      <Link to="/menu/comment"><Button name="COMMENT" action={undefined} /></Link>
      <Link to="/menu/discount"><Button name="APPLY DISC" action={undefined} /></Link>
      <Link to="/menu/delivery"><Button name="DELIVERY Tablet" action={undefined} /></Link>
      <Button name="Make It CALL IN" action={undefined} />
      <Button name="WALK IN" action={() => openKeyboard()} />
      <Link to="/menu/tenders"><Button name="TENDERS" action={undefined} /></Link>
      <Link to="/"><Button name="EXIT" action={() => dispatch({ type: 'CLEAR_USER' })} className="red3-btn" /></Link>
    </Container>
  );
};

export default ViewBtns;
