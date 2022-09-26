import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes, { checkPropTypes } from 'prop-types';
import Button from '../../../../../components/button';

const Container = styled.div`
  box-sizing: border-box;
  padding: 30px 30px 30px 30px;
  width: 100%;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100%;
  gap: 30px;
`;

const Row = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: 100%;
  gap: 10px;
`;

const TendersView = (props) => {
  const {
    total, order, onSubmitOrder,
  } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const makePayment = useCallback(
    () => {
      dispatch({ type: 'SET_NUMBER_PAD_TYPE', data: { type: 'make_cash_payment' } });
      navigate('/numberPad');
    },
  );

  return (
    <Container>
      <Row>
        <Button name="Cash" className="green-btn" action={() => makePayment()} />
        <Button name="Exact $" className="green-btn" action={() => dispatch({ type: 'ADD_PAYMENT', data: total })} />
        <Button name="Next $" className="green-btn" />
        <Button name="Check" className="green-btn" />
        <Button name="CARD PAYMENT" className="maroon-btn" />
        <Button name="Manual Card Payment" className="maroon-btn" />
      </Row>
      <Row>
        <Button name="$1" className="green-btn" action={() => dispatch({ type: 'ADD_PAYMENT', data: 1 })} />
        <Button name="$5" className="green-btn" action={() => dispatch({ type: 'ADD_PAYMENT', data: 5 })} />
        <Button name="$10" className="green-btn" action={() => dispatch({ type: 'ADD_PAYMENT', data: 10 })} />
        <Button name="$20" className="green-btn" action={() => dispatch({ type: 'ADD_PAYMENT', data: 20 })} />
        <Button name="House Account Charge" className="green-btn" />
        <Button name="Gift Card Balance Query" className="blue-btn" />
        <Button name="EBT / SNAP Balance Query" className="blue-btn" />
      </Row>
      <Row>
        <Button name="My Slice" className="" />
        <Button name="CALL IN Payment" className="red-btn" />
        <Button name="CURBSIDE Color/Model" className="red-btn" />
        <Button name="" className="invisible" />
        <Button name="OLO REFUND" className="blue-btn" />
        <Button name="" className="red3-btn" />
        <Button name="" className="red3-btn" />
      </Row>
      <Row>
        <Link to="/menu/discount"><Button name="Discounts" className="orange2-btn" /></Link>
        <Button name="School/ Institutional" className="orange2-btn" />
        <Button name="Tax Exempt" className="orange2-btn" />
        <Button name="House Account Payment" className="orange2-btn" />
        <Button name="Send Order" className="orange2-btn" />
        <Button name="Close Check" className="red3-btn" action={() => onSubmitOrder(order)} />
        <Link to="/menu"><Button name="Back" className="green2-btn" /></Link>
      </Row>
    </Container>
  );
};

TendersView.defaultProps = {
  total: 0,
  order: {},
  onSubmitOrder: checkPropTypes(),
};

TendersView.propTypes = {
  total: PropTypes.number,
  order: PropTypes.object,
  onSubmitOrder: PropTypes.func,
};

export default TendersView;
