import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import DiscountView from './DiscountView';
import DiscountAmountView from './DIscountAmountView';
import NumberPad from '../../globalComponents/numberPad';

function DiscountViewContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const discountNumberpadSubmitAction = (data) => {
    dispatch({ type: 'ADD_DISCOUNT_TO_PIZZA', data });
    navigate('/menu/discounts');
  };

  const cancelAction = () => {
    navigate('/menu/discounts');
  };

  const discountPercentagepadSubmitAction = (data) => {
    dispatch({ type: 'ADD_DISCOUNT_PERCENT_TO_PIZZA', data });
    navigate('/menu/discounts');
  };

  return (
    <Routes>
      <Route path="/" element={<DiscountView />} />
      <Route path="/amounts" element={<DiscountAmountView />} />
      <Route
        path="/numberpad"
        element={<NumberPad
          submit={discountNumberpadSubmitAction}
          cancel={cancelAction}
          rowSpan="3/9"
          colSpan="6/10"
        />}
      />
      <Route
        path="/percentagepad"
        element={<NumberPad
          submit={discountPercentagepadSubmitAction}
          cancel={cancelAction}
          rowSpan="3/9"
          colSpan="6/10"
        />}
      />
    </Routes>
  );
}

export default DiscountViewContainer;
