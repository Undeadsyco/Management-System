/* eslint-disable camelcase */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes, { checkPropTypes } from 'prop-types';

import useManagerFunctions from '../../../../../utils/useManagerFunctions';

import Button from '../../../../../components/button';

const Container = styled.div`
  padding: 20px;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const Row = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
`;

const ManagerFunctions = (props) => {
  const {
    onClockOut, user: { Employee_Id, Position }, onBreakOut, onGetReport,
    onGetAllEmployees, onGetTimes, onGetBreakTimes, onGetRegisters,
  } = props;
  const {
    changePassowrd, clearPassword, getTimes, getRegisters,
  } = useManagerFunctions();

  return (
    <Container>
      <Row>
        <Button name="Delete Checkout" className="green-btn" />
        <Button name="Edit Time" className="green-btn" action={() => getTimes(onGetTimes, Position)} />
        <Button name="Change My Password" className="green-btn" action={() => changePassowrd()} />
        <Button name="Allow Clock In" className="green-btn" />
        <Button name="Delete Checkout" className="green-btn" />
        <Button name="Calibrate Screen" className="orange-btn" />
      </Row>
      <Row>
        <Button name="Print Checkout" className="green-btn" />
        <Button name="Edit Break" className="green-btn" action={() => getTimes(onGetBreakTimes, Position)} />
        <Button name="Clear Password" className="green-btn" action={() => clearPassword(onGetAllEmployees, Position)} />
        <Button name="Disable Punctuality" className="green-btn" />
        <Button name="" className="green-btn" />
        <Button name="Reroute Printer" className="orange-btn" />
      </Row>
      <Row>
        <Button name="Get Open Check" className="yellow-btn" />
        <Button name="Recall Open" className="yellow-btn" />
        <Button name="CC Tip Report" className="yellow-btn" />
        <Button name="Checkout" className="yellow-btn" />
        <Link to="/"><Button action={() => onClockOut(Employee_Id)} name="Clock Out" className="yellow-btn" /></Link>
        <Button name="Resend To Makeline" className="yellow-btn" />
      </Row>
      <Row>
        <Button name="Close Check" className="yellow-btn" />
        <Link to="/closed-orders"><Button name="Recall Closed" className="yellow-btn" /></Link>
        <Button name="Print Check" className="yellow-btn" />
        <Link to="/"><Button name="Break" className="yellow-btn" action={() => onBreakOut(Employee_Id)} /></Link>
        <Button name="" className="yellow-btn" />
        <Button name="GC Cash Out" className="" />
      </Row>
      <Row>
        <Button name="Record Tips/Manage Drawers" className="blue-btn" action={() => getRegisters(onGetRegisters, Position)} />
        <Button name="Refund" className="blue-btn" />
        <Button name="Daily Summary Report" className="red-btn" />
        <Button name="PMIX Report" className="red-btn" />
        <Button name="Employee Break Report" className="red-btn" />
        <Link to="/report"><Button name="Flash Report" className="red-btn" action={() => onGetReport()} /></Link>
      </Row>
      <Row>
        <Button name="Open Drawer" className="blue-btn" />
        <Button name="Reassign Drawer" className="blue-btn" />
        <Button name="Sales Report" className="red-btn" />
        <Button name="Labor Report" className="red-btn" />
        <Button name="Break Alert Report" className="red-btn" />
        <Button name="" className="red-btn" />
      </Row>
    </Container>
  );
};

ManagerFunctions.defaultProps = {
  user: {},
  Employee_Id: undefined,
  onClockOut: checkPropTypes(),
  onBreakOut: checkPropTypes(),
  onGetReport: checkPropTypes(),
  onGetAllEmployees: checkPropTypes(),
  onGetTimes: checkPropTypes(),
  onGetBreakTimes: checkPropTypes(),
  onGetRegisters: checkPropTypes(),
};

ManagerFunctions.propTypes = {
  user: PropTypes.object,
  Employee_Id: PropTypes.number,
  onClockOut: PropTypes.func,
  onBreakOut: PropTypes.func,
  onGetReport: PropTypes.func,
  onGetAllEmployees: PropTypes.func,
  onGetTimes: PropTypes.func,
  onGetBreakTimes: PropTypes.func,
  onGetRegisters: PropTypes.func,
};

export default ManagerFunctions;
