import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';
import styled from 'styled-components';

import NumberPad from './numberPad';
import Button from './button';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100vw;
  height: 100vh;
  background-color: #8080ff;
`;

const Input = styled.input`
  grid-column: 2/3;
  grid-row: 2/3;
  width: 75%;
  height: 30%;
  justify-self: center;
  align-self: center;
`;

const NumberPadView = (props) => {
  const {
    numberPadType, discountType, onChangePassword, user,
  } = props;
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const submit = () => {
    switch (numberPadType) {
      case 'discount_$':
        dispatch({ type: 'ADD_DISCOUNT', data: { type: discountType, value } });
        break;
      case 'discount_%':
        dispatch({ type: 'ADD_PECENTAGE_DISCOUNT', data: { type: discountType, value: parseInt(value, 10) } });
        break;
      case 'make_cash_payment':
        dispatch({ type: 'ADD_PAYMENT', data: parseInt(value, 10) / 100 });
        break;
      case 'change_password':
        onChangePassword(user, parseInt(value, 10));
        break;
      default:
        break;
    }
  };

  const heading = () => {
    switch (numberPadType) {
      case 'discount_$':
        return (<h1>Enter Discount Amount</h1>);
      case 'discount_%':
        return (<h1>Enter Discount Percentage</h1>);
      case 'make_cash_payment':
        return (<h1>Enter Paid Amount</h1>);
      case 'change_password':
        return (<h1>Enter New Password</h1>);
      default:
        return null;
    }
  };

  return (
    <Container>
      <div
        style={{
          color: 'white', gridColumn: '2/3', marginTop: '20px', fontSize: 'larger',
        }}
      >
        {heading()}
      </div>
      <Input value={value} onChange={(e) => e.target.value} />
      <div style={{ gridColumn: '2/3', gridRow: '3/6' }}>
        <NumberPad action={setValue} submitAction={submit} />
      </div>
      <Link style={{ gridColumn: '2/3', gridRow: '6/7', marginTop: '5px' }} to="/menu">
        <Button style={{ width: '200px', height: '100px' }} name="Back" />
      </Link>
    </Container>
  );
};

NumberPadView.defaultProps = {
  numberPadType: '',
  discountType: '',
  onChangePassword: checkPropTypes(),
  user: {},
};

NumberPadView.propTypes = {
  numberPadType: PropTypes.string,
  discountType: PropTypes.string,
  onChangePassword: PropTypes.func,
  user: PropTypes.object,
};

export default NumberPadView;
