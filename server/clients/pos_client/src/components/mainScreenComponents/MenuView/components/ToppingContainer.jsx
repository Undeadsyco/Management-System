import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { array, object } from 'prop-types';
import { v4 } from 'uuid';

import Button from '../../../globalComponents/button';

function ToppingContainer({ selectedPizza, toppings }) {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  const constructList = () => {
    if (toppings?.length < 10) {
      for (let i = toppings?.length; i < 10; i += 1) {
        toppings.push({
          _id: v4(),
          topping: ' ',
        });
      }
    }

    setList(toppings);
  };

  useEffect(() => {
    constructList();
  }, [toppings]);

  return (
    <div className="toppingContainer">
      <Button btnText="Less" />
      <Button btnText="Extra" />
      {list?.map((topping) => (
        <div key={topping._id}>
          <Button
            key={topping._id}
            btnText={topping.topping}
            btnAction={() => dispatch({ type: 'REMOVE_TOPPING_FROM_PIZZA', data: topping })}
          />
          <div style={{ display: 'none' }}>X</div>
        </div>
      ))}
      <Button btnText="Down Size" />
      <Button btnText="Up Size" />
      <Button btnText="Reprint Last Check" />
      <Button
        btnText="Add To Order"
        btnAction={() => dispatch({
          type: 'ADD_PIZZA_TO_ORDER',
          data: selectedPizza,
        })}
      />
    </div>
  );
}

ToppingContainer.defaultProps = {
  selectedPizza: {},
  toppings: [],
};

ToppingContainer.propTypes = {
  selectedPizza: object,
  toppings: array,
};

export default ToppingContainer;
