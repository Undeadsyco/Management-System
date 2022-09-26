import { array } from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from '../../../globalComponents/button';

function Seasoning({ list }) {
  const dispatch = useDispatch();
  return (
    <>
      {list?.map((item) => (
        <Button
          key={item._id}
          className="seasoningBtn"
          btnText={item.topping}
          btnAction={() => dispatch({ type: 'ADD_TOPPING_TO_PIZZA', data: item })}
        />
      ))}
      <Button className="seasoningBtn" />
      <Button className="seasoningBtn" />
    </>
  );
}

Seasoning.defaultProps = {
  list: [],
};

Seasoning.propTypes = {
  list: array,
};

export default Seasoning;
