import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';

import Button from '../../components/globalComponents/button';
import Container from './styles';

import useClock from '../../utils/useClock';

function ClockInScreen({ onCancelClockIn, onClockIn, onBreakIn }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [employee, setEmployee] = useState();

  const { hours, minutes } = useClock();

  useEffect(() => {
    if (!state) navigate('/lock_screen');
    else setEmployee(state);
  }, [state]);

  useEffect(() => {
    console.log('employee', employee);
  }, [employee]);

  const cancelAction = () => {
    onCancelClockIn();
    navigate('/lock_screen');
  };

  const clockInAction = () => {
    onClockIn();
    navigate('/menu');
  };

  const breakInAction = () => {
    onBreakIn(employee?._id);
    navigate('/menu');
  };

  return (
    <Container
      className="multyGrid"
      rows={12}
      cols={12}
      clockInDisplay={!employee?.is_clocked_in ? 'block' : 'none'}
      breakInDisplay={employee?.is_on_break && employee?.is_clocked_in ? 'block' : 'none'}
    >
      <h2>
        {hours}
        :
        {minutes}
      </h2>
      <h2 className="name">{employee?.employee_name}</h2>
      <h2 className="position">{employee?.position}</h2>
      <Button
        className="clockInBtn"
        rowSpan="1/3"
        btnText="Clock In"
        btnAction={clockInAction}
      />
      <Button
        className="breakInBtn"
        rowSpan="1/3"
        btnText="End Break"
        btnAction={breakInAction}
      />
      <Button className="nested" rowSpan="3/5" btnText="Change Password" />
      <Button
        className="nested"
        rowSpan="11/13"
        btnText="Cancel"
        bgBtnColor="red"
        btnAction={cancelAction}
      />
    </Container>
  );
}

ClockInScreen.defaultProps = {
  onCancelClockIn: checkPropTypes(),
  onClockIn: checkPropTypes(),
  onBreakIn: checkPropTypes(),
};

ClockInScreen.propTypes = {
  onCancelClockIn: PropTypes.func,
  onClockIn: PropTypes.func,
  onBreakIn: PropTypes.func,
};

export default ClockInScreen;
