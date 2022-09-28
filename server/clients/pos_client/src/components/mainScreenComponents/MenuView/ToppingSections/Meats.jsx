import { array } from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from '../../../globalComponents/button';

function Meats({ list }) {
  const dispatch = useDispatch();
  return (
    <>
      {list?.map((item) => (
        <Button
          key={item._id}
          className="meatBtn"
          btnText={item.topping}
          btnAction={() => dispatch({ type: 'ADD_TOPPING_TO_PIZZA', data: item })}
        />
      ))}
      <Button className="meatBtn" />
    </>
  );
}

Meats.defaultProps = {
  list: [],
};

Meats.propTypes = {
  list: array,
};

export default Meats;
