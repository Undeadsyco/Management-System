/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { checkPropTypes, func } from 'prop-types';

import Button from '../../globalComponents/button';
import { EditTimeContainer as Container } from './styles';

function EditTime({ onEditTime, onGetEmployeeTimes }) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [employeeName, setEmployeeName] = useState('');
  const [heading, setHeading] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [timeToEdit, setTimeToEdit] = useState(new Date());
  const [editedTime, setEditedTime] = useState(new Date());
  const [timeToEditId, setTimeToEditId] = useState('');
  const [route, setRoute] = useState('');

  useEffect(() => {
    if (state) {
      const { _id, name, time } = state;
      setEmployeeName(name);
      setEmployeeId(_id);
      setTimeToEditId(time?._id);
      setHeading(() => {
        if (time?.clocked_out_at) return 'currwnt clock out time';
        if (time?.clocked_in_at) return 'current clock in time';
        if (time?.break_out_time) return 'current break start time';
        if (time?.break_in_time) return 'current break end time';
        return '';
      });
      setTimeToEdit(() => {
        if (time?.clocked_out_at) return new Date(time?.clocked_out_at);
        if (time?.clocked_in_at) return new Date(time?.clocked_in_at);
        if (time?.break_out_time) return new Date(time?.break_out_time);
        if (time?.break_in_time) return new Date(time?.break_in_time);
        return undefined;
      });
      setRoute(() => {
        if (time?.clocked_in_at) return 'clock_in';
        if (time?.clocked_out_at) return 'clock_out';
        if (time?.break_out_time) return 'break_out';
        if (time?.break_in_time) return 'break_in';
        return '';
      });
    }
  }, [state]);

  useEffect(() => {
    setEditedTime(new Date(timeToEdit));
  }, [timeToEdit]);

  const editMinuets = (amount) => {
    setEditedTime((prev) => new Date(new Date(prev).setMinutes(prev.getMinutes() + amount)));
  };

  const editHours = (amount) => {
    setEditedTime((prev) => new Date(new Date(prev).setHours(prev.getHours() + amount)));
  };

  const handleSubmit = () => {
    const body = {
      employeeId,
      timeToEditId,
      editedTime,
    };

    onEditTime(route, body).then(({ modifiedCount, matchedCount }) => {
      if (modifiedCount === 1 && matchedCount === 1) {
        onGetEmployeeTimes();
        alert('time edit was successful');
        navigate(-1);
      }
    });
  };

  return (
    <Container>
      <div>
        <h3>Employee:</h3>
        <h3>{employeeName}</h3>
      </div>
      <div className="headingContianer">
        <div>
          <h4>{heading}</h4>
          <p>{timeToEdit.toLocaleTimeString()}</p>
        </div>
        <div>
          <h4>Edit time to:</h4>
          <p>{editedTime.toLocaleTimeString()}</p>
        </div>
      </div>
      <div className="editTimeBtns">
        <div>
          <h4>minuets</h4>
          <Button btnText="+1" btnAction={() => editMinuets(1)} />
          <Button btnText="-1" btnAction={() => editMinuets(-1)} />
          <Button btnText="+10" btnAction={() => editMinuets(10)} />
          <Button btnText="-10" btnAction={() => editMinuets(-10)} />
          <Button btnText="+30" btnAction={() => editMinuets(30)} />
          <Button btnText="-30" btnAction={() => editMinuets(-30)} />
        </div>
        <div>
          <h4>hours</h4>
          <Button btnText="+1" btnAction={() => editHours(1)} />
          <Button btnText="-1" btnAction={() => editHours(-1)} />
          <Button btnText="+3" btnAction={() => editHours(3)} />
          <Button btnText="-3" btnAction={() => editHours(-3)} />
          <Button btnText="+6" btnAction={() => editHours(6)} />
          <Button btnText="-6" btnAction={() => editHours(-6)} />
        </div>
      </div>
      <div className="actionBtns">
        <Button btnText="Cancel" btnAction={() => navigate(-1)} />
        <Button btnText="Submit" btnAction={handleSubmit} />
      </div>
    </Container>
  );
}

EditTime.defaultProps = {
  onEditTime: checkPropTypes(),
  onGetEmployeeTimes: checkPropTypes(),
};

EditTime.propTypes = {
  onEditTime: func,
  onGetEmployeeTimes: func,
};

export default EditTime;
