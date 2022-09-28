import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import {
  array, checkPropTypes, func, number, object,
} from 'prop-types';

import { TableContainer as Container } from '../styles';

function TableItem({ item }) {
  const dispatch = useDispatch();
  const [usage, setUsage] = useState(item.actualUsage ? item.actualUsage : 0);

  return (
    <section>
      <div>{item.item}</div>
      <div>{item.calculatedUsage}</div>
      <div>
        <input
          name={`${item.item}`}
          id={`${item.item}`}
          type="number"
          value={usage}
          onChange={(e) => setUsage(e.target.value)}
          onBlur={() => {
            dispatch({ type: 'SET_USAGE', data: { item, usage } });
          }}
        />
      </div>
      <div>{item.measurement}</div>
      <div>${item.amountSpent}</div>
      <div>$0</div>
      <div>0%</div>
    </section>
  );
}

TableItem.defaultProps = { item: {} };
TableItem.propTypes = { item: object };

function InventoryTable(props) {
  const {
    list, setPage, page,
  } = props;
  const [listMin, setListMin] = useState(0);
  const [listMax, setListMax] = useState(8);

  useEffect(() => {
    if (page !== 0) {
      setListMin((8 * page) - 8);
      setListMax(8 * page);
    }
  }, [page]);

  const handlePrevClick = () => setPage((prev) => {
    if (prev === 1) return prev;
    return prev - 1;
  });

  const handleNextClick = () => setPage((prev) => {
    if ((prev * 8) > list?.length) return prev;
    return prev + 1;
  });

  return (
    <Container>
      <div className="cover">
        <h3>Inventory</h3>
        <div>
          <button type="button" onClick={handlePrevClick}>prev</button>
          <div>Page {page}/8</div>
          <button type="button" onClick={handleNextClick}>next</button>
        </div>
      </div>
      <div className='tableHeader'>
        <div>Item</div>
        <div>Calculated Usage</div>
        <div>Actual Usage</div>
        <div>Measurement</div>
        <div>Amount Spent</div>
        <div>Calculated Difference $</div>
        <div>Calculated Difference %</div>
      </div>
      {/* mapping  */}
      {list?.slice(listMin, listMax).map((item) => (
        <TableItem key={v4()} item={item} />
      ))}
    </Container>
  );
}

// prop validation
InventoryTable.defaultProps = {
  list: [],
  setPage: checkPropTypes(),
  page: 1,
};

InventoryTable.propTypes = {
  list: array,
  setPage: func,
  page: number,
};

export default InventoryTable;
