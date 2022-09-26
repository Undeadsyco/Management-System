import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { array, object } from 'prop-types';
import { v4 } from 'uuid';

import Container from './styles';
import { OrderListContainer, PriceContainer } from './components';

function OrderView(props) {
  const {
    currentOrder: {
      pizzaList, price, paidAmount, pizzaSelectedInOrder, comments, orderID,
    }, orderList,
  } = props;
  const dispatch = useDispatch();
  const [list, setList] = useState(pizzaList);

  useEffect(() => {
    setList(pizzaList);
  }, [pizzaList]);

  return (
    <Container className="orderView">
      <div className="orderList">
        {orderList?.map((order, index) => (
          <button
            key={v4()}
            id={order.orderID === orderID ? 'active' : ''}
            onClick={() => dispatch({ type: 'SWITCH_ORDER', data: index })}
          >
            {order.name ? order.name : `order ${index + 1}`}
          </button>
        ))}
      </div>
      <OrderListContainer
        orderList={list}
        selectedPizza={pizzaSelectedInOrder}
        comments={comments}
      />
      <PriceContainer price={price} paidAmount={paidAmount} />
    </Container>
  );
}

OrderView.defaultProps = {
  currentOrder: {},
  orderList: [],
};

OrderView.propTypes = {
  currentOrder: object,
  orderList: array,
};

const mapStateToProps = (state) => {
  const {
    orderList, currentOrder,
  } = state.order;

  return ({
    currentOrder,
    orderList,
  });
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OrderView);
