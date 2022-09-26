import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes, { checkPropTypes } from 'prop-types';

import Button from './button';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 75%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
`;

const InfoContainer = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Heading = styled.h1`
  grid-column: 1/3;
`;

const BtnContainer = styled.div`
  grid-row: 2/3;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const BtnBox = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const SubmitContainer = styled.div`
  grid-column: 1/3;
`;

const EditTime = (props) => {
  const {
    heading, time, onChangeTime, empId, timeId,
  } = props;
  const [date, setDate] = useState(undefined);

  useEffect(() => {
    setDate(time ? new Date(time) : undefined);
  }, [time, timeId]);

  const changeTime = (obj) => {
    const {
      hour, minute, type, amount,
    } = obj;

    if (hour) {
      if (type === 'plus') {
        setDate(new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours() + 1,
          date.getMinutes(),
        ));
      }
      if (type === 'minus') {
        setDate(new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours() - 1,
          date.getMinutes(),
        ));
      }
    }

    if (minute) {
      if (type === 'plus') {
        setDate(new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes() + amount,
        ));
      }
      if (type === 'minus') {
        setDate(new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes() - amount,
        ));
      }
    }
  };

  return (
    <Container style={date ? { display: 'grid' } : { display: 'none' }}>
      <InfoContainer>
        <Heading>{heading}</Heading>
        <div>
          <h3>Current Time</h3>
          <p>{new Date(time).toLocaleTimeString()}</p>
        </div>
        <div>
          <h3>Edited Time</h3>
          <p>
            {date?.toLocaleTimeString()}
          </p>
        </div>
      </InfoContainer>
      <BtnContainer>
        <BtnBox>
          <Button name="+1 Hour" action={() => changeTime({ hour: true, type: 'plus' })} />
          <Button name="-1 Hour" action={() => changeTime({ hour: true, type: 'minus' })} />
        </BtnBox>
        <BtnBox>
          <Button name="+1 minute" action={() => changeTime({ minute: true, type: 'plus', amount: 1 })} />
          <Button name="-1 minute" action={() => changeTime({ minute: true, type: 'minus', amount: 1 })} />
          <Button name="+10 minutes" action={() => changeTime({ minute: true, type: 'plus', amount: 10 })} />
          <Button name="-10 minutes" action={() => changeTime({ minute: true, type: 'minus', amount: 10 })} />
          <Button name="+30 minutes" action={() => changeTime({ minute: true, type: 'plus', amount: 30 })} />
          <Button name="-30 minutes" action={() => changeTime({ minute: true, type: 'minus', amount: 30 })} />
        </BtnBox>
        <SubmitContainer>
          <Link to="/menu">
            <Button
              style={{ width: '50%' }}
              name="Submit"
              action={() => onChangeTime({
                empId,
                timeId,
                type: heading,
                date,
              })}
            />
          </Link>
        </SubmitContainer>
      </BtnContainer>
    </Container>
  );
};

EditTime.defaultProps = {
  empId: undefined,
  timeId: undefined,
  heading: '',
  time: checkPropTypes(),
  onChangeTime: checkPropTypes(),
};

EditTime.propTypes = {
  empId: PropTypes.number,
  timeId: PropTypes.number,
  heading: PropTypes.string,
  time: PropTypes.string,
  onChangeTime: PropTypes.func,
};

export default EditTime;
