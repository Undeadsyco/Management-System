import { useEffect, useState } from 'react';
import { number } from 'prop-types';

function PriceContainer({ price, paidAmount }) {
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [amountOwed, setAmountOwed] = useState(0);
  const [change, setChange] = useState(0);

  useEffect(() => {
    setTax(parseFloat(price) * 0.086);
    setAmountOwed(
      parseFloat(paidAmount) <= parseFloat(total)
        ? (parseFloat(total) - parseFloat(paidAmount))
        : 0,
    );
  }, [price, paidAmount]);

  useEffect(() => {
    setTotal(parseFloat(tax) + parseFloat(price));
  }, [tax]);

  useEffect(() => {
    setChange(parseFloat(paidAmount - parseFloat(total.toFixed(2))));
  }, [amountOwed, total, price, paidAmount]);

  return (
    <div className="priceContainer">
      <div>
        <h4>
          Subtotal:
          {price.toFixed(2)}
        </h4>
        <h4>
          Tax:
          {tax.toFixed(2)}
        </h4>
        <h4>
          Total:
          {total.toFixed(2)}
        </h4>
      </div>
      <div style={paidAmount > 0 ? { display: 'block' } : { display: 'none' }}>
        <h4>
          Amount Paid:
          {paidAmount.toFixed(2)}
        </h4>
        <h4 style={paidAmount < total ? { display: 'block' } : { display: 'none' }}>
          Amount Owed:
          {amountOwed.toFixed(2)}
        </h4>
        <h4 style={paidAmount >= total ? { display: 'block' } : { display: 'none' }}>
          Change:
          {change.toFixed(2)}
        </h4>
      </div>
    </div>
  );
}

PriceContainer.defaultProps = {
  price: 0,
  paidAmount: 0,
};

PriceContainer.propTypes = {
  price: number,
  paidAmount: number,
};

export default PriceContainer;
