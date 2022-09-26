/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'prop-types';
// components
import { TimeItemContainer as Container } from '../styles';

function BreakListItem(props) {
  const {
    employeeName, employeeBreakOut, employeeBreakIn, employeeHoursWorked,
  } = props;

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState(undefined);
  const [endTime, setEndTime] = useState(undefined);
  const [hoursWorked, setHoursWorked] = useState(0);

  useEffect(() => {
    setName(employeeName);
    setStartTime(employeeBreakOut);
    setEndTime(employeeBreakIn);
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
          <span>{new Date(startTime?.break_out_time).toLocaleTimeString()},</span>
        </p>
        <p>
          <span>Clocked out at: &nbsp;&nbsp;&nbsp;</span>
          <span>{endTime ? new Date(endTime?.break_in_time).toLocaleTimeString() : 'NA'},</span>
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
          Edit Start Time
        </button>
        <button
          onClick={() => handleClick(endTime)}
        >
          Edit End TIme
        </button>
      </div>
    </Container>
  );
}

BreakListItem.defaultProps = {
  employeeName: '',
  employeeBreakOut: undefined,
  employeeBreakIn: undefined,
  employeeHoursWorked: 0,
};

BreakListItem.propTypes = {
  employeeName: string,
  employeeBreakOut: object,
  employeeBreakIn: object,
  employeeHoursWorked: string,
};

export default BreakListItem;
