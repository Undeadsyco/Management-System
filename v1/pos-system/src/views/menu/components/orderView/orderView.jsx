/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import Button from '../../../../components/button';

import {
  Container, OrderHead, OrderHeadings, OrderBody,
  OrderTitle, OrderArea, PriceBody, PriceArea, OrderItem,
} from './styles';

const OrderView = (props) => {
  const {
    orderList, subtotal, tax, total, paid,
    discounts, name, modifiedPizza,
  } = props;

  const dispatch = useDispatch();

  useEffect(() => { }, [orderList]);

  return (
    <Container>
      <OrderHead>
        <OrderHeadings>
          OrderView
        </OrderHeadings>
        <OrderHeadings>
          OrderView
        </OrderHeadings>
        <OrderHeadings>
          OrderView
        </OrderHeadings>
      </OrderHead>
      <OrderBody>
        <OrderTitle>
          {name === '' ? 'Order' : name}
        </OrderTitle>
        <OrderArea>
          {orderList.map((obj) => (
            <OrderItem
              key={v4()}
              onClick={() => dispatch({ type: 'SELECT_PIZZA', obj })}
              style={
                modifiedPizza.index === obj.index
                  ? { backgroundColor: 'rgba(110, 110, 248, 0.781)' }
                  : { backgroundColor: 'inherit' }
              }
            >
              <span>{`${obj.size} `}</span>
              <span>{`${obj.name} `}</span>
              <span>{obj.price}</span>
              <div
                style={obj.addedToppings
                  ? {
                    display: 'block',
                    gridColumn: '1/4',
                    textAlign: 'right',
                    // paddingRight: '70px',
                  } : { display: 'none' }}
              >
                {obj.addedToppings?.map((item) => (
                  <div style={{ display: 'flex' }} key={v4()}>
                    <span>{item}</span>
                    <Button
                      name="x"
                      action={() => dispatch({ type: 'REMOVE_TOPPING', item })}
                      style={{
                        display: 'inline', textAlign: 'center', width: '30px', marginLeft: '20px',
                      }}
                    />
                  </div>
                ))}
              </div>
              <div style={obj.comments ? { display: 'block', gridColumn: '1/4', textAlign: 'left' } : { display: 'none' }}>
                {obj.comments?.map((item) => (
                  <div key={v4()} style={{ display: 'flex', justifyContent: 'end' }}>
                    <span>{item}</span>
                    <Button
                      name="x"
                      action={() => dispatch({ type: 'REMOVE_COMMENT', item })}
                      style={{
                        display: 'inline', textAlign: 'center', width: '30px', marginLeft: '20px',
                      }}
                    />
                  </div>
                ))}
              </div>
            </OrderItem>
          ))}
          <div style={discounts.length === 0 ? { display: 'none' } : { display: 'block' }}>
            {discounts?.map((obj) => (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 60px' }} key={v4()}>
                <span>
                  {obj.type}
                  :
                </span>
                <span>
                  $
                  {obj.value}
                </span>
              </div>
            ))}
          </div>
        </OrderArea>
        <PriceBody>
          <PriceArea>
            Subtotal: $
            {subtotal.toFixed(2)}
            <br />
            Tax: $
            {tax.toFixed(2)}
            <br />
            Total: $
            {total.toFixed(2)}
          </PriceArea>
          <PriceArea style={paid > 0 ? { display: 'block' } : { display: 'none' }}>
            Paid: $
            {paid.toFixed(2)}
            <br />
            <span style={total > paid ? { display: 'block' } : { display: 'none' }}>
              Remaining: $
              {(total - paid).toFixed(2)}
            </span>
            <br />
            <span style={total < paid ? { display: 'block' } : { display: 'none' }}>
              Change: $
              {(paid - total).toFixed(2)}
            </span>
          </PriceArea>
        </PriceBody>
      </OrderBody>
    </Container>
  );
};

OrderView.defaultProps = {
  modifiedPizza: {},
  orderList: [],
  subtotal: 0,
  tax: 0,
  total: 0,
  paid: 0,
  discounts: [],
  name: '',
};

OrderView.propTypes = {
  modifiedPizza: PropTypes.object,
  orderList: PropTypes.array,
  subtotal: PropTypes.number,
  tax: PropTypes.number,
  total: PropTypes.number,
  paid: PropTypes.number,
  discounts: PropTypes.array,
  name: PropTypes.string,
};

export default OrderView;
