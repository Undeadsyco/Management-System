/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'prop-types';
// components
import { TimeItemContainer as Container } from '../styles';

function TimeListItem(props) {
  const {
    employeeName, employeeClockIn, employeeClockOut, employeeHoursWorked,
  } = props;

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState(undefined);
  const [endTime, setEndTime] = useState(undefined);
  const [hoursWorked, setHoursWorked] = useState(0);

  useEffect(() => {
    setName(employeeName);
    setStartTime(employeeClockIn);
    setEndTime(employeeClockOut);
    setHoursWorked(employeeHoursWorked);
  }, []);

  const handleClick = (time) => {
    if (!time) alert('No time to edit');
    else {
      navigate('/menu/manager/edit_time', {
        state: {
          name,
          time,
        },
      });
    }
  };

  return (
    <Container>
      <div>
        <p>
          <span>Employee: &nbsp;&nbsp;&nbsp;</span>
          <span>{name},</span>
        </p>
        <p>
          <span>Clocked in at: &nbsp;&nbsp;&nbsp;</span>
          <span>{new Date(startTime?.clocked_in_at).toLocaleTimeString()},</span>
        </p>
        <p>
          <span>Clocked out at: &nbsp;&nbsp;&nbsp;</span>
          <span>{endTime ? new Date(endTime?.clocked_out_at).toLocaleTimeString() : 'NA'},</span>
        </p>
        <p>
          <span>Hours Worked: &nbsp;&nbsp;&nbsp;</span>
          <span>{hoursWorked},</span>
        </p>
      </div>
      <div>
        <button
          onClick={() => handleClick(startTime)}
        >
          Edit Clockin Time
        </button>
        <button
          onClick={() => handleClick(endTime)}
        >
          Edit Clockout TIme
        </button>
      </div>
    </Container>
  );
}

TimeListItem.defaultProps = {
  employeeName: '',
  employeeClockIn: undefined,
  employeeClockOut: undefined,
  employeeHoursWorked: 0,
};

TimeListItem.propTypes = {
  employeeName: string,
  employeeClockIn: object,
  employeeClockOut: object,
  employeeHoursWorked: string,
};

export default TimeListItem;
