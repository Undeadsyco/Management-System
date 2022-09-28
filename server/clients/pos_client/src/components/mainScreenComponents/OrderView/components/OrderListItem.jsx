/* eslint-disable no-restricted-syntax */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import {
  checkPropTypes, func, object,
} from 'prop-types';

import {
  AddedToppingsContainer as AddedToppings,
  RemovedToppingContainer as RemovedToppings,
  DiscountContainer,
} from '../styles';

function OrderListItem({ pizza, selectActive, selectedPizza }) {
  const dispatch = useDispatch();
  const [item, setItem] = useState(pizza);
  const [sizeAcronym, setSizeAcronym] = useState('');
  const [nameAcronym, setNameAcronym] = useState('');
  const [id, setId] = useState('');

  const genorateSizeAcronym = () => {
    const name = item?.size?.size;
    const wordList = name?.split(' ');
    let newName = '';
    for (const word of wordList) {
      newName += word[0];
    }
    setSizeAcronym(newName);
  };

  const genorateNameAcronym = () => {
    if (item?.name.split(' ').length < 3) {
      setNameAcronym(item.name);
      return;
    }

    let acronym = '';
    item?.name.split(' ').forEach((word) => {
      switch (word.length) {
        case 1:
          acronym += word[0];
          break;
        case 2:
          acronym += word[0] + word[1];
          break;
        default:
          acronym += word[0] + word[1] + word[2];
          break;
      }
    });
    setNameAcronym(acronym);
  };

  useEffect(() => {
    setItem(pizza);
  }, [pizza]);

  useEffect(() => {
    genorateSizeAcronym();
    genorateNameAcronym();
    if (pizza?.orderID === selectedPizza?.orderID) setId('active');
  }, []);

  return (
    <li>
      <button id={id} type="button" onClick={(e) => selectActive(e, pizza)}>
        {sizeAcronym}
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        {nameAcronym}
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        {item?.size?.price}
      </button>
      <AddedToppings display={item?.addedToppings.length > 0 ? 'block' : 'none'} className="addedToppings">
        <h4>Added Toppings</h4>
        {item?.addedToppings?.map((topping) => (
          <div key={v4()}>
            <p>{topping.topping}</p>
            <button type="button" onClick={() => dispatch({ type: 'REMOVE_ADDED_TOPPING', data: topping })}>X</button>
          </div>
        ))}
      </AddedToppings>
      <RemovedToppings display={item?.removedToppings.length > 0 ? 'flex' : 'none'} className="addedToppings">
        <h4>Removed Toppings</h4>
        {item?.removedToppings?.map((topping) => (
          <div key={v4()}>
            <button type="button" onClick={() => dispatch({ type: 'RESTORE_TOPPING', data: topping })}>X</button>
            <p key={topping._id}>No {topping.topping}</p>
          </div>
        ))}
      </RemovedToppings>
      <DiscountContainer style={item?.discount ? { display: 'block' } : { display: 'none' }}>
        <h4>Discount</h4>
        <p style={{ display: 'flex', justifyContent: 'space-around' }}>
          <span>{item?.discount ? item?.discount?.discountType : null}</span>
          <span>
            -
            {item?.discount ? item?.discount?.amount : null}
          </span>
          <button type="button" onClick={() => dispatch({ type: 'REMOVE_DISCOUNT_FROM_PIZZA' })}>X</button>
        </p>
      </DiscountContainer>
    </li>
  );
}

OrderListItem.defaultProps = {
  pizza: {},
  selectedPizza: {},
  selectActive: checkPropTypes(),
};

OrderListItem.propTypes = {
  pizza: object,
  selectedPizza: object,
  selectActive: func,
};

export default OrderListItem;
