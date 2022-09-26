import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../utils/useAuth';

const PrivateRoute = ({ user }) => {
  const isAuth = useAuth(user);

  return (
    isAuth ? <Outlet /> : <Navigate to="/clock-in" />
  );
};

PrivateRoute.defaultProps = {
  user: undefined,
};

PrivateRoute.propTypes = {
  user: PropTypes.object,
};

export default PrivateRoute;
