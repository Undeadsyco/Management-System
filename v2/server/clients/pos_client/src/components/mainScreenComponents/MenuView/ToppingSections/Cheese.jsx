import { array } from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from '../../../globalComponents/button';

function Cheese({ list }) {
  const dispatch = useDispatch();
  return (
    <>
      {list?.map((item) => (
        <Button
          key={item._id}
          className="cheeseBtn"
          btnText={item.topping}
          btnAction={() => dispatch({ type: 'ADD_TOPPING_TO_PIZZA', data: item })}
        />
      ))}
      <Button className="cheeseBtn" />
    </>
  );
}

Cheese.defaultProps = {
  list: [],
};

Cheese.propTypes = {
  list: array,
};

export default Cheese;
