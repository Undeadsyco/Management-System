// import { string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../../globalComponents/button';

import { DiscountAmountContainer as Container } from './styles';

function DiscsountAmountView() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <Button
          className=""
          supText="$"
          btnText="1"
          btnAction={() => dispatch({ type: 'ADD_DISCOUNT_TO_PIZZA', data: { discountType: state?.discountType, amount: 1 } })}
        />
        <Button
          className=""
          supText="$"
          btnText="2"
          btnAction={() => dispatch({ type: 'ADD_DISCOUNT_TO_PIZZA', data: { discountType: state?.discountType, amount: 2 } })}
        />
        <Button
          className=""
          supText="$"
          btnText="3"
          btnAction={() => dispatch({ type: 'ADD_DISCOUNT_TO_PIZZA', data: { discountType: state?.discountType, amount: 3 } })}
        />
        <Button
          className=""
          supText="$"
          btnText="4"
          btnAction={() => dispatch({ type: 'ADD_DISCOUNT_TO_PIZZA', data: { discountType: state?.discountType, amount: 4 } })}
        />
        <Button
          className=""
          supText="$"
          btnText="5"
          btnAction={() => dispatch({ type: 'ADD_DISCOUNT_TO_PIZZA', data: { discountType: state?.discountType, amount: 5 } })}
        />
      </div>
      <div>
        <Button
          className=""
          supText="$"
          btnText="6"
          btnAction={() => dispatch({ type: 'ADD_DISCOUNT_TO_PIZZA', data: { discountType: state?.discountType, amount: 6 } })}
        />
        <Button
          className=""
          supText="$"
          btnText="7"
          btnAction={() => dispatch({ type: 'ADD_DISCOUNT_TO_PIZZA', data: { discountType: state?.discountType, amount: 7 } })}
        />
        <Button
          className=""
          supText="$"
          btnText="8"
          btnAction={() => dispatch({ type: 'ADD_DISCOUNT_TO_PIZZA', data: { discountType: state?.discountType, amount: 8 } })}
        />
        <Button
          className=""
          supText="$"
          btnText="9"
          btnAction={() => dispatch({ type: 'ADD_DISCOUNT_TO_PIZZA', data: { discountType: state?.discountType, amount: 9 } })}
        />
        <Button
          className=""
          supText="$"
          btnText="10"
          btnAction={() => dispatch({ type: 'ADD_DISCOUNT_TO_PIZZA', data: { discountType: state?.discountType, amount: 10 } })}
        />
        <Button
          className=""
          btnText="Cancel"
          btnAction={() => navigate('/menu/discounts')}
        />
      </div>
    </Container>
  );
}

export default DiscsountAmountView;
