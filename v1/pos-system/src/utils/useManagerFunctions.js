import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useManagerFunctions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changePassowrd = useCallback(
    () => {
      dispatch({ type: 'SET_NUMBER_PAD_TYPE', data: { type: 'change_password' } });
      navigate('/numberPad');
    },
  );

  const clearPassword = useCallback(
    (action, position) => {
      if (position === 'Asst Mgr' || position === 'Manager') {
        action();
        navigate('/employee-list');
        dispatch({ type: 'SET_LIST_ACTION', data: { type: 'clear_password' } });
      } else {
        alert('You do not have the athority for this');
      }
    },
  );

  const getTimes = useCallback(
    (action, position) => {
      if (position === 'Asst Mgr' || position === 'Manager') {
        action();
        navigate('/times');
      } else {
        alert('You Do Not Have The Athority For This');
      }
    },
  );

  const getRegisters = useCallback(
    (action, position) => {
      if (position === 'Asst Mgr' || position === 'Manager') {
        action();
        navigate('/drawer-view');
      } else {
        alert('You Do Not Have The Athority For This');
      }
    },
  );

  return {
    changePassowrd, clearPassword, getTimes, getRegisters,
  };
};

export default useManagerFunctions;
