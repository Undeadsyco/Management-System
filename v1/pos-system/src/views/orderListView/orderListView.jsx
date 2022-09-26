/* eslint-disable no-unneeded-ternary */
import { Link } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';

import Button from '../../components/button';

import {
  Container, Heading, ListContainer, ButtonContainer, orderStyles,
} from './styles';

const {
  OrderContainer, OrderHead, PriceContainer,
  PriceContainerRow, PizzaContainer, DiscountContainer,
} = orderStyles;

const OrderListView = (props) => {
  const {
    onGetClosedWalkins, onGetOrderById, closedWalkins, queriedOrder,
  } = props;

  const {
    order_name: name, subtotal, tax, total,
    paid_amount: paidAmount, change, pizzas,
    order_discounts: discounts,
  } = queriedOrder;

  return (
    <Container>
      <Heading>Order List View</Heading>
      <OrderContainer>
        <OrderHead>
          Order
          <br />
          {queriedOrder.order_name ? `Order Name: ${name}` : null}
        </OrderHead>
        <PriceContainer style={queriedOrder.total ? { display: 'grid' } : { display: 'none' }}>
          <PriceContainerRow style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div>
              Subtotal: &nbsp;$
              {subtotal}
            </div>
            <div>
              &nbsp; &nbsp; Tax: &nbsp;$
              {tax}
            </div>
            <div>
              &nbsp; &nbsp; Total: &nbsp;$
              {total}
            </div>
          </PriceContainerRow>
          <PriceContainerRow style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div>
              Paid Amount: &nbsp;$
              {paidAmount}
            </div>
            <div>
              &nbsp; &nbsp; Change: &nbsp;$
              {change}
            </div>
          </PriceContainerRow>
        </PriceContainer>
        <PizzaContainer>
          {pizzas?.map((pizza) => (
            <div>
              {pizza.order_pizzas.size}
              &nbsp; &nbsp; &nbsp;
              {pizza.pizza_name}
              &nbsp; &nbsp; &nbsp;$
              {pizza.order_pizzas.price}
            </div>
          ))}
        </PizzaContainer>
        <DiscountContainer>
          {discounts?.map((discount) => (
            <div>
              {discount.discount_type}
              :&nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;$
              {discount.discount_amount}
            </div>
          ))}
        </DiscountContainer>
      </OrderContainer>
      <ListContainer>
        {closedWalkins.length !== 0 ? closedWalkins.map((item) => {
          const { order_id: orderId, order_name: orderName } = item;
          return (
            <Button
              style={{ height: '50px' }}
              name={`${orderName ? orderName : 'Order'}: \u00a0 \u00a0 \u00a0 \u00a0 ID:${orderId}`}
              action={() => onGetOrderById(orderId)}
            />
          );
        }) : null}
      </ListContainer>
      <ButtonContainer>
        <Button style={{ fontSize: '1.5rem' }} name="Walk In" action={() => onGetClosedWalkins()} />
        <Button style={{ fontSize: '1.5rem' }} name="Call In" />
        <Button style={{ fontSize: '1.5rem' }} name="Online" />
        <Link style={{ gridRow: '8/9' }} to="/menu">
          <Button style={{ fontSize: '1.5rem' }} name="Back" />
        </Link>
      </ButtonContainer>
    </Container>
  );
};

OrderListView.defaultProps = {
  onGetClosedWalkins: checkPropTypes(),
  onGetOrderById: checkPropTypes(),
  closedWalkins: [],
  queriedOrder: {},
};

OrderListView.propTypes = {
  onGetClosedWalkins: PropTypes.func,
  onGetOrderById: PropTypes.func,
  closedWalkins: PropTypes.array,
  queriedOrder: PropTypes.object,
};

export default OrderListView;
