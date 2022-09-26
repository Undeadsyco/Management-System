import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { checkPropTypes, func, object } from 'prop-types';

import Button from '../../globalComponents/button';
import Container from './styles';

import { orderActions } from '../../../actions';

function TendersView({ onSubmitOrder, order }) {
  const dispatch = useDispatch();
  const [total] = useState(parseFloat((order.price + (order.price * 0.086)).toFixed(2)));

  const submitOrder = () => {
    const { pizzaList, price, paidAmount } = order;
    if (pizzaList.length === 0) {
      alert('No items in order');
      return;
    }

    if (paidAmount >= price) {
      onSubmitOrder(order).then(({ created, message }) => {
        if (created) {
          dispatch({ type: 'REMOVE_ALL_FROM_ORDER' });
        }

        alert(message);
      });
    } else alert('Total must be totally paid before closing check');
  };

  return (
    <Container>
      <div>
        <Link to="/menu/tenders/pinpad"><Button className="greenBtn" btnText="Cash" /></Link>
        <Button className="greenBtn" btnText="Exact" btnAction={() => dispatch({ type: 'MAKE_PAYMENT', data: total })} />
        <Button className="greenBtn" btnText="Next" />
        <Button className="greenBtn" btnText="Check" />
        <Button className="crimsonBtn" btnText="Card Payment" />
        <Button className="crimsonBtn" btnText="Manual Card Payment" />
      </div>
      <div>
        <Button className="greenBtn" supText="$" btnText="1" btnAction={() => dispatch({ type: 'MAKE_PAYMENT', data: 1 })} />
        <Button className="greenBtn" supText="$" btnText="5" btnAction={() => dispatch({ type: 'MAKE_PAYMENT', data: 5 })} />
        <Button className="greenBtn" supText="$" btnText="10" btnAction={() => dispatch({ type: 'MAKE_PAYMENT', data: 10 })} />
        <Button className="greenBtn" supText="$" btnText="20" btnAction={() => dispatch({ type: 'MAKE_PAYMENT', data: 20 })} />
        <Button className="greenBtn" btnText="House Account Charge" />
        <Button className="blueBtn" btnText="Gift Card Balance Query" />
        <Button className="blueBtn" btnText="EBT / SNAP Balance Query" />
      </div>
      <div>
        <Button className="" btnText="My Slice" />
        <Button className="redBtn" btnText="Call In Payment" />
        <Button className="redBtn" btnText="CURBSIDE Color/Model" />
        <Button className="blueBtn" btnText="OLO Refunds" />
        <Button className="redBtn" btnText="" />
        <Button className="redBtn" btnText="" />
      </div>
      <div>
        <Link to="/menu/discounts"><Button className="orangeBtn" btnText="Discounts" /></Link>
        <Button className="orangeBtn" btnText="School/Institutional" />
        <Button className="orangeBtn" btnText="Tax Exempt" />
        <Button className="orangeBtn" btnText="House Account Payment" />
        <Button className="orangeBtn" btnText="Send Order" />
        <Button className="redBtn" btnText="Close Check" btnAction={() => submitOrder()} />
        <Link to="/menu"><Button className="lightGreenBtn" btnText="Back To Menu" /></Link>
      </div>
    </Container>
  );
}

TendersView.defaultProps = {
  order: {},
  onSubmitOrder: checkPropTypes(),
};

TendersView.propTypes = {
  order: object,
  onSubmitOrder: func,
};

const mapStateToProps = (state) => ({
  order: state.order.currentOrder,
});

const mapDispatchTOProps = () => {
  const { submitOrder } = orderActions;

  return ({
    onSubmitOrder: (body) => submitOrder(body),
  });
};

export default connect(mapStateToProps, mapDispatchTOProps)(TendersView);
