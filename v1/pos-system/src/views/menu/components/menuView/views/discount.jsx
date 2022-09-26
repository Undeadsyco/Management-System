import { useState } from 'react';
import DiscountBtns from './discountBtns';
import DiscountTypes from './discountTypes';

const DiscountView = (props) => {
  const [view, setView] = useState('main');

  return (
    <>
      <DiscountTypes {...props} view={view} setView={setView} />
      <DiscountBtns {...props} view={view} setView={setView} />
    </>
  );
};

export default DiscountView;
