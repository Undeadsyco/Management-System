/* eslint-disable react/jsx-props-no-spreading */
// dependecies
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import PropTypes, { checkPropTypes } from 'prop-types';
import styled from 'styled-components';

// components
import { LockScreen, ClockInScreen, MainScreen } from './screens';

// utils
import { mainActions, menuActions } from './actions';
import ProtectedRoutes from './components/globalComponents/protectedRoutes';

// component styles
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

function App(props) {
  const dispatch = useDispatch();

  const {
    onClockIn, onCancelClockIn, onCheckIsClockedIn,
    onGetSizes, onGetPizzas, onGetToppings, onGetUser,
    onGetStuffedPizzas, onBreakIn,
  } = props;

  // on mount check if local storage has saved state and save it to global state if so
  // else fetch state from server
  useEffect(() => {
    const fls = false;
    if (fls) {
      const { main, menu, order } = JSON.parse(localStorage.getItem('state'));
      dispatch({ type: 'MAIN_INIT', data: main });
      dispatch({ type: 'MENU_INIT', data: menu });
      dispatch({ type: 'ORDER_INIT', data: order });
    } else {
      onGetSizes().then((data) => {
        dispatch({ type: 'GET_DOUGH_LIST', data });
        dispatch({ type: 'SELECT_SIZE', data: data[0] });
        onGetPizzas(data[0]._id);
      });
      onGetToppings();
      onGetStuffedPizzas();
    }

    // on unmount remove saved state from local storage
    return () => {
      localStorage.removeItem('state');
    };
  }, []);

  return (
    <AppContainer className="App">
      <Routes>
        <Route path="/" >
          <Route path='/' element={<ProtectedRoutes checkIsClockedIn={onCheckIsClockedIn} />} />
          <Route path="/menu/*" element={<MainScreen />} />
        </Route>
        <Route path="/lock_screen" element={<LockScreen onGetUser={onGetUser} />} />
        <Route path="/clock_in" element={
          <ClockInScreen
            onClockIn={onClockIn}
            onCancelClockIn={onCancelClockIn}
            onBreakIn={onBreakIn}
          />
        } />
      </Routes>
    </AppContainer>
  );
}

// prop type checking
App.propTypes = {
  onGetUser: PropTypes.func,
  onClockIn: PropTypes.func,
  onBreakIn: PropTypes.func,
  onCheckIsClockedIn: PropTypes.func,
  onCancelClockIn: PropTypes.func,
  onGetSizes: PropTypes.func,
  onGetPizzas: PropTypes.func,
  onGetToppings: PropTypes.func,
  onGetStuffedPizzas: PropTypes.func,
};

App.defaultProps = {
  onGetUser: checkPropTypes(),
  onClockIn: checkPropTypes(),
  onBreakIn: checkPropTypes(),
  onCheckIsClockedIn: checkPropTypes(),
  onCancelClockIn: checkPropTypes(),
  onGetSizes: checkPropTypes(),
  onGetPizzas: checkPropTypes(),
  onGetToppings: checkPropTypes(),
  onGetStuffedPizzas: checkPropTypes(),
};

// retreiving global state and mapping it to props
const mapStateToProps = () => ({});

// mapping actions to props
const mapDispatchToProps = (dispatch) => {
  const {
    getUser, cancelClockIn, clockIn, checkIsClockedIn, breakIn,
  } = mainActions;
  const {
    getSizes, getPizzas, getToppings, getStuffedPizzas,
  } = menuActions;

  return ({
    onGetUser: (pin) => getUser(pin),
    onClockIn: () => clockIn(),
    onCheckIsClockedIn: () => checkIsClockedIn(),
    onCancelClockIn: () => cancelClockIn().then(() => dispatch({ type: 'CLEAR_USER' })),
    onGetSizes: () => getSizes(),
    onGetPizzas: (doughId) => getPizzas(doughId).then((data) => dispatch({ type: 'GET_PIZZA_LIST', data })),
    onGetToppings: () => getToppings().then((data) => dispatch({ type: 'GET_TOPPINGS_LIST', data })),
    onGetStuffedPizzas: () => getStuffedPizzas().then((data) => dispatch({ type: 'GET_STUFFED_PIZZAS', data })),
    onBreakIn: (id) => breakIn(id),
  });
};

// connectiong to redux for state
export default connect(mapStateToProps, mapDispatchToProps)(App);
