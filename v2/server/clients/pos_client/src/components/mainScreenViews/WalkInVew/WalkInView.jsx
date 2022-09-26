import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import KeyBoard from '../../globalComponents/KeyBoard';

function WalkInVew() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return <KeyBoard
    className="nameKeyBoard"
    submitAction={(data) => {
      dispatch({ type: 'ADD_NAME_TO_ORDER', data });
      navigate('/menu');
    }}
    cancelAction={() => navigate('/menu')}
  />;
}

export default WalkInVew;
