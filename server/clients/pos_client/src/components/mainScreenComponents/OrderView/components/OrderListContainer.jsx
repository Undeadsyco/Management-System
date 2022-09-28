/* eslint-disable no-unneeded-ternary */
import { useDispatch } from 'react-redux';
import { array, object } from 'prop-types';
import { v4 } from 'uuid';

import OrderListItem from './OrderListItem';

function OrderListContainer({ orderList, selectedPizza, comments }) {
  const dispatch = useDispatch();

  const selectActive = (e, pizza) => {
    dispatch({ type: 'SELECT_PIZZA_IN_ORDER', data: pizza });
  };

  return (
    <div className="orderContainer">
      <h3>
        <span>Size</span>
        <span>Pizza</span>
        <span>Price</span>
      </h3>
      <menu>
        {orderList?.map((pizza) => (
          <OrderListItem
            key={v4()}
            pizza={pizza}
            selectActive={selectActive}
            selectedPizza={selectedPizza}
          />
        ))}
        {comments.length > 0 ? (
          <div>
            <h4>comments</h4>
            {comments.map((item) => (
              <div key={v4()}>
                <p>{item}</p>
                <button type="button" onClick={() => dispatch({ type: 'REMOVE_COMMENT_FROM_ORDER', data: item })}>X</button>
              </div>
            ))}
          </div>
        ) : null}
      </menu>
    </div>
  );
}

OrderListContainer.defaultProps = {
  orderList: [],
  selectedPizza: {},
  comments: [],
};

OrderListContainer.propTypes = {
  orderList: array,
  selectedPizza: object,
  comments: array,
};

export default OrderListContainer;
