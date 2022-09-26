import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../../components/button';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const CommandBtns = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Button name="Delete" action={() => dispatch({ type: 'DELETE_PIZZA' })} />
      <Button name="Delete All" action={() => dispatch({ type: 'RESTART_ORDER' })} />
      <Button name="QTY" action={undefined} />
      <Button name="Order Lookup" action={undefined} />
      <Button name="Customer Lookup" action={undefined} />
      <Button name="Repeat" action={() => dispatch({ type: 'REPEAT_ORDER' })} />
      <Link to="/menu/crew"><Button name="Crew Functions" action={undefined} /></Link>
      <Link to="/menu/manager"><Button name="MGR functions" action={undefined} /></Link>
      <Button name="Open Orders" action={undefined} />
    </Container>
  );
};

export default CommandBtns;
