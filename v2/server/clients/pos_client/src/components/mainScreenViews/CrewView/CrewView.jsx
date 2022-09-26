// dependentices
import { Link, useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { checkPropTypes, func, object } from 'prop-types';

// components
import Button from '../../globalComponents/button';
import Container from './styles';

// utils
import { mainActions } from '../../../actions';

function CrewView({ onClockOut, onBreakOut, currentUser }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clockout = () => {
    onClockOut(currentUser._id);
    navigate('/lock_screen');
  };

  const breakOut = () => {
    onBreakOut(currentUser._id);
    navigate('/lock_screen');
  };

  return (
    <Container>
      <div>
        <Button className="" btnText="Break" btnAction={breakOut} />
        <Button className="" btnText="Clock Out" btnAction={clockout} />
        <Button className="" btnText="Print Schedule" />
      </div>
      <div>
        <Button className="" btnText="Reassign Drawer" />
        <Button className="" btnText="CC Tip Report" />
        <Button className="" btnText="Record Tips/Manage Drawer" />
        <Button className="" btnText="CheckOut" />
      </div>
      <div>
        <Button className="" btnText="Recall Closed" />
        <Button className="" btnText="Print Check" />
        <Button className="" btnText="New Order" btnAction={() => dispatch({ type: 'ADD_ORDER_TO_LIST' })} />
        <Link to="/menu"><Button className="" btnText="Back To Menu" /></Link>
      </div>
    </Container>
  );
}

// prop type checking
CrewView.propTypes = {
  onClockOut: func,
  onBreakOut: func,
  currentUser: {},
};

CrewView.defaultProps = {
  onClockOut: checkPropTypes(),
  onbreakOut: checkPropTypes(),
  currentUser: object,
};

// bringsin global state and maps it to props
const mapStateToProps = (state) => {
  const { currentUser } = state.main;

  return ({
    currentUser,
  });
};

// maps actions to props
const mapDispatchToProps = (dispatch) => {
  const { clockOut, breakOut } = mainActions;

  return ({
    onClockOut: (id) => clockOut(id).then(() => dispatch({ type: 'CLOCK_OUT' })),
    onBreakOut: (id) => breakOut(id),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CrewView);
