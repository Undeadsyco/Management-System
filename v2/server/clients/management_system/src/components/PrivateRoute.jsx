import { Outlet, Navigate } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';

import useCheckAuth from '../utils/useCheckAuth';

function PrivateRoute({ onCheckAuth }) {
  const [checkAuth] = useCheckAuth(onCheckAuth);
  const isLoggedIn = checkAuth();

  console.log('isLoggedIn', isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/lock_screen" />;
}

PrivateRoute.defaultProps = { onCheckAuth: checkPropTypes() };

PrivateRoute.propTypes = { onCheckAuth: PropTypes.func };

export default PrivateRoute;
