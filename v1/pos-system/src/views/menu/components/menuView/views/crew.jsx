/* eslint-disable camelcase */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes, { checkPropTypes } from 'prop-types';
import Button from '../../../../../components/button';

const Container = styled.div`
  padding: 30px;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const Row = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 30px;
`;

const CrewFunctions = ({ onClockOut, user: { Employee_Id }, onBreakOut }) => (
  <Container>
    <Row>
      <Link to="/"><Button name="Break" className="yellow2-btn" action={() => onBreakOut(Employee_Id)} /></Link>
      <Link to="/"><Button action={() => onClockOut(Employee_Id)} name="Clock Out" className="yellow2-btn" /></Link>
      <Button name="Print Schedule" className="yellow2-btn" />
    </Row>
    <Row>
      <Button name="Reassign Drawer" className="yellow2-btn" />
      <Button name="CC Tip Report" className="orange2-btn" />
      <Button name="Record Tips/ Manage Drawers" className="orange2-btn" />
      <Button name="Checkout" className="orange2-btn" />
    </Row>
    <Row>
      <Link to="/closed-orders"><Button name="Recall Closed" className="yellow2-btn" /></Link>
      <Button name="Print Check" className="yellow2-btn" />
      <Button name="New Order" className="grey-btn" />
      <Link to="/menu"><Button name="Back to Menu" className="" /></Link>
    </Row>
  </Container>
);

CrewFunctions.defaultProps = {
  user: {},
  Employee_Id: undefined,
  onClockOut: checkPropTypes(),
  onBreakOut: checkPropTypes(),
};

CrewFunctions.propTypes = {
  user: PropTypes.object,
  Employee_Id: PropTypes.number,
  onClockOut: PropTypes.func,
  onBreakOut: PropTypes.func,
};

export default CrewFunctions;
