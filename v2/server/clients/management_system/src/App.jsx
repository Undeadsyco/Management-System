import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';

import {
  MainScreen, UsersScreen, LockScreen, PizzasScreen, InventoryScreen,
} from './screens';
import { PrivateRoute } from './components';

import { mainActions } from './actions';

function App({ onLogin, onCheckAuth, onLogout }) {
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <Routes>
        <Route path="/" element={<PrivateRoute onCheckAuth={onCheckAuth} />}>
          <Route path="/" element={<MainScreen onLogout={onLogout} />} />
          <Route path="/users/*" element={<UsersScreen />} />
          <Route path="/pizzas/*" element={<PizzasScreen />} />
          <Route path="/inventory/*" element={<InventoryScreen />} />
        </Route>
        <Route path="/lock_screen" element={<LockScreen submit={onLogin} />} />
      </Routes>
    </div>
  );
}

App.defaultProps = {
  onLogin: checkPropTypes(),
  onCheckAuth: checkPropTypes(),
  onLogout: checkPropTypes(),
};

App.propTypes = {
  onLogin: PropTypes.func,
  onCheckAuth: PropTypes.func,
  onLogout: PropTypes.func,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  const {
    login, checkAuth, logout,
  } = mainActions;

  return ({
    onLogin: (body) => login(body),
    onCheckAuth: () => checkAuth(),
    onLogout: () => logout().then(() => dispatch({ type: 'LOGOUT' })),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
