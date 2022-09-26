import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NumberPad from '../../components/globalComponents/numberPad';
import GridContainer from '../../globalStyles/gridContainer';

const LockScreenContainer = styled(GridContainer)`
  width: 100vw;
  height: 100vh;
  background-color: black;

  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: repeat(12, 1fr);
`;

function LockScreen({ onGetUser }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (pin) => {
    const user = await onGetUser(pin);

    if (user) {
      dispatch({ type: 'GET_USER', data: user });
      if (!user.is_clocked_in || user.is_on_break) navigate('/clock_in', { state: user });
      else navigate('/menu');
    }
  };

  return (
    <LockScreenContainer className="multiGrid" rows={12} cols={12}>
      <NumberPad colSpan="5/9" rowSpan="4/12" submit={onSubmit} />
    </LockScreenContainer>
  );
}

LockScreen.defaultProps = { onGetUser: undefined };
LockScreen.propTypes = { onGetUser: PropTypes.func };

export default LockScreen;
