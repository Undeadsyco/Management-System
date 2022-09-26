import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const useEmployeeActions = (user) => {
  const [currentUser, setCurrentUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    } else {
      navigate('/');
    }
  }, [user]);

  const clockIn = useCallback(
    (action, empId) => {
      action(empId).then((data) => {
        if (!data.user) {
          alert('something went wrong');
          return;
        }

        dispatch({ type: 'CLOCK_IN', data });

        if (data.user.Password === 0) {
          dispatch({ type: 'SET_NUMBER_PAD_TYPE', data: { type: 'change_password' } });
          navigate('/numberPad');
          return;
        }

        if (data.user.Is_Clocked_In === 1) {
          navigate('/menu');
        } else {
          navigate('/clock-in');
        }
      });
    },
    [dispatch],
  );

  const breakIn = useCallback(
    (action, empId) => {
      action(empId).then((data) => {
        if (!data.user) {
          alert('something went wrong');
          return;
        }

        dispatch({ type: 'BREAK_IN', data });
        if (data.user.Is_On_Break === 0) {
          navigate('/menu');
        } else {
          navigate('/clock-in');
        }
      });
    },
  );

  return { currentUser, clockIn, breakIn };
};

export default useEmployeeActions;
