import { array } from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from '../../../globalComponents/button';

function Sauce({ list }) {
  const dispatch = useDispatch();
  return (
    <>
      {list?.map((item) => (
        <Button
          key={item._id}
          className="sauceBtn"
          btnText={item.topping}
          btnAction={() => dispatch({ type: 'ADD_TOPPING_TO_PIZZA', data: item })}
        />
      ))}
      <Button className="sauceBtn" />
    </>
  );
}

Sauce.defaultProps = {
  list: [],
};

Sauce.propTypes = {
  list: array,
};

export default Sauce;
