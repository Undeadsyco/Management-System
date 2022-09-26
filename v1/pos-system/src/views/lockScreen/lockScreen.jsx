import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropType, { checkPropTypes } from 'prop-types';

import NumberPad from '../../components/numberPad';

import {
  ViewContainer, HeadingContainer, Heading,
  SecondaryHeading, Input, PadContainer,
} from './styles';

const LockScreen = (props) => {
  const { onLogin } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pin, setPin] = useState('');

  const login = useCallback(
    () => {
      onLogin({ pin }).then((data) => {
        if (!data.user) {
          alert(data.message);
          navigate('/');
          return;
        }

        dispatch({ type: 'LOGIN_COMPLETE', data });
        if (data.user?.Is_Clocked_In === 1 && data.user?.Is_On_Break === 0) {
          navigate('/menu');
        } else {
          navigate('/clock-in');
        }
      });
    },
  );

  return (
    <ViewContainer className="multyGrid" colNum={3} rowNum={6}>
      <HeadingContainer colStart={2} colEnd={3}>
        <Heading>Papa Murphy&#39;s</Heading>
        <SecondaryHeading>Enter Password To Login</SecondaryHeading>
      </HeadingContainer>
      <Input
        id="pin"
        name="pin"
        type="text"
        value={pin}
        onChange={(e) => e.target.value}
      />
      <PadContainer colStart={2} colEnd={3} rowStart={3} rowEnd={6}>
        <NumberPad submitAction={login} action={setPin} value={pin} />
      </PadContainer>
    </ViewContainer>
  );
};

LockScreen.defaultProps = {
  onLogin: checkPropTypes(),
};

LockScreen.propTypes = {
  onLogin: PropType.func,
};

export default LockScreen;
