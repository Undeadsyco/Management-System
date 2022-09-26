import { array } from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from '../../../globalComponents/button';

function Produce({ list }) {
  const dispatch = useDispatch();
  return list?.map((item) => (
    <Button
      key={item._id}
      className="produceBtn"
      btnText={item.topping}
      btnAction={() => dispatch({ type: 'ADD_TOPPING_TO_PIZZA', data: item })}
    />
  ));
}

Produce.defaultProps = {
  list: [],
};

Produce.propTypes = {
  list: array,
};

export default Produce;
