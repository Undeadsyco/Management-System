// dependencies
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkPropTypes, func, array } from 'prop-types';
import moment from 'moment';
// components
import InventoryTable from './tables/InventoryTable';
import Button from '../../components/Button';
import Container from './styles';
// utils
import { inventoryActions } from '../../actions';

function InventoryScreen(props) {
  const {
    onGetInventoryStats, inventory, onSubmitStats, onGetPreviousStats,
  } = props;

  const navigate = useNavigate();

  // page number for ui
  const [page, setPage] = useState(1);
  const [inventoryList, setInventoryList] = useState([]);
  const [date, setDate] = useState(new Date());

  // getting inventory for dough and toppings
  useEffect(() => {
    onGetInventoryStats();
  }, []);

  useEffect(() => {
    setInventoryList([...inventory]);
  }, [inventory]);

  const inventoryPage = (
    <InventoryTable
      page={page}
      setPage={setPage}
      list={inventoryList}
    />
  );

  const lastPage = (
    <>
      <InventoryTable
        page={page}
        setPage={setPage}
        list={inventoryList}
      />
    </>
  );

  // displays tables based on page number
  const switchPage = () => {
    switch (page) {
      case 7:
        return lastPage;
      default:
        return inventoryPage;
    }
  };

  const handleSubmit = () => {
    onSubmitStats(inventoryList).then((res) => {
      if (res.success) {
        alert(res.message);
        navigate(-1);
      }
    });
  };

  return (
    <Container>
      <div className="btnBox">
        <Button btnText="Back" btnAction={() => navigate(-1)} />
        <Button btnText="View This Weeks Usage" />
        <input
          type="date"
          value={moment(date).format('YYYY-MM-DD')}
          onChange={(e) => {
            console.log(e.target.value);
            const newDate = new Date(new Date(e.target.value));
            newDate.setDate(newDate.getDate() + 1);
            setDate(newDate);
          }}
          onBlur={() => onGetPreviousStats(date)}
        />
        <Button type="submit" btnText="Submit" btnAction={handleSubmit} />
      </div>
      <div className="routeContainer">
        {switchPage()}
      </div>
    </Container>
  );
}

// prop validation
InventoryScreen.defaultProps = {
  onGetInventoryStats: checkPropTypes(),
  onSubmitStats: checkPropTypes(),
  onGetPreviousStats: checkPropTypes(),
  inventory: [],
};

InventoryScreen.propTypes = {
  onGetInventoryStats: func,
  onSubmitStats: func,
  onGetPreviousStats: func,
  inventory: array,
};

// maping global state and actions to props
const mapStateToProps = (state) => {
  const { inventory } = state.inventory;

  return ({
    inventory,
  });
};

const mapDispatchTOProps = (dispatch) => {
  const { getInventoryStats, submitStats, getPreviousStats } = inventoryActions;

  return ({
    onGetInventoryStats: () => getInventoryStats().then((data) => dispatch({ type: 'GET_INVENTORY_STATS', data })),
    onSubmitStats: (body) => submitStats(body),
    onGetPreviousStats: (date) => getPreviousStats(date).then((data) => dispatch({ type: '', data })),
  });
};

export default connect(mapStateToProps, mapDispatchTOProps)(InventoryScreen);
