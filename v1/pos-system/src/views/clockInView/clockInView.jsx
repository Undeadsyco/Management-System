import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes, { checkPropTypes } from 'prop-types';

import useEmployeeActions from '../../utils/useEmployeeActions';
import useClock from '../../utils/useClock';

import Button from '../../components/button';

const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 70% 30%;
`;

const InfoContainer = styled.div`
  padding: 50px;
  font-size: 32px;
  font-weight: bolder;
`;

const BtnContainer = styled.div`
  display: grid;
  padding: 30px;
  grid-template-columns: 100%;
  grid-template-rows: repeat(10, 1fr);
  gap: 20px;
`;

const ClockInView = ({ user, onClockIn, onBreakIn }) => {
  const dispatch = useDispatch();
  const { currentUser, clockIn, breakIn } = useEmployeeActions(user);
  const { hour, minute } = useClock();

  return (
    <Container>
      <InfoContainer>
        <div>
          {hour}
          :
          {minute}
        </div>
        <div>
          {currentUser?.Employee_Name}
        </div>
        <div>
          {currentUser?.Position}
        </div>
      </InfoContainer>
      <BtnContainer>
        <Button
          style={currentUser?.Is_Clocked_In === 1 ? { display: 'none' } : { display: 'inline-block' }}
          action={() => clockIn(onClockIn, currentUser.Employee_Id)}
          name="Clock In"
        />
        <Button
          style={currentUser?.Is_On_Break === 0 ? { display: 'none' } : { display: 'inline-block' }}
          action={() => breakIn(onBreakIn, currentUser.Employee_Id)}
          name="End Break"
        />
        <Button name="Change Password" />
        <Link style={{ gridRow: '10/11' }} to="/"><Button action={() => dispatch({ type: 'CLEAR_USER ' })} name="Exit" /></Link>
      </BtnContainer>
    </Container>
  );
};

ClockInView.defaultProps = {
  user: undefined,
  onClockIn: checkPropTypes(),
  onBreakIn: checkPropTypes(),
};

ClockInView.propTypes = {
  user: PropTypes.object,
  onClockIn: PropTypes.func,
  onBreakIn: PropTypes.func,
};

export default ClockInView;
