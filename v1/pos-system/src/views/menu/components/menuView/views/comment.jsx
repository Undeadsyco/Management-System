import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../../../../../components/button';

const Container = styled.div`
  padding-bottom: 40px;
  width: 100%;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100%;
  gap: 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: 100%;
  gap: 20px;
`;

const CommentView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Button name="Promo 1" className="blue-btn" />
        <Button name="Promo 2" className="blue-btn" />
        <Button
          name="Back To Menu"
          action={() => navigate('/menu')}
          className="blue-btn"
          style={{ gridRow: '6/7' }}
        />
      </Row>
      <Row>
        <Button name="DRIVE THRU" className="orange-btn" action={() => dispatch({ type: 'ADD_COMMENT', item: 'DRIVE THRU' })} />
        <Button name="DO NOT MAKE" className="orange-btn" action={() => dispatch({ type: 'ADD_COMMENT', item: 'DO NOT MAKE' })} />
        <Button name="ON THE SIDE" className="orange-btn" action={() => dispatch({ type: 'ADD_COMMENT', item: 'ON THE SIDE' })} />
        <Button name="OPEN MESSAGE" className="orange-btn" action={() => dispatch({ type: 'ADD_COMMENT', item: 'OPEN MESSAGE' })} />
      </Row>
      <Row>
        <Button name="MAKE NOW" className="red-btn" action={() => dispatch({ type: 'ADD_COMMENT', item: 'MAKE NOW' })} />
        <Button name="ASK ME" className="red-btn" action={() => dispatch({ type: 'ADD_COMMENT', item: 'ASK ME' })} />
        <Button name="ALLERGY ALERT" className="red-btn" action={() => dispatch({ type: 'ADD_COMMENT', item: 'ALLERGY ALERT' })} />
        <Button name="COLD CRUST" className="red-btn" action={() => dispatch({ type: 'ADD_COMMENT', item: 'COLD CRUST' })} />
        <Button name="DBL WRAP" className="red-btn" action={() => dispatch({ type: 'ADD_COMMENT', item: 'DBL WRAP' })} />
        <Button name="NEW GUEST" className="red-btn" action={() => dispatch({ type: 'ADD_COMMENT', item: 'NEW GUEST' })} />
      </Row>
    </Container>
  );
};

export default CommentView;
