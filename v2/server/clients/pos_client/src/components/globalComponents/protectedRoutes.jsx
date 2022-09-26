import { Navigate } from 'react-router-dom';
import { checkPropTypes, func } from 'prop-types';
import { useEffect, useState } from 'react';

// import useCheckAuth from '../../utils/useCheckAuth';

function ProtectedRoutes({ checkIsClockedIn }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    checkIsClockedIn().then((res) => {
      setIsLoggedIn(res.is_clocked_in);
    });
  }, [checkIsClockedIn]);

  return isLoggedIn ? <Navigate to="/menu" /> : <Navigate to="/lock_screen" />;
}

ProtectedRoutes.defaultProps = { checkIsClockedIn: checkPropTypes() };

ProtectedRoutes.propTypes = { checkIsClockedIn: func };

export default ProtectedRoutes;
