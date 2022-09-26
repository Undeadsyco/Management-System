import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './button';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const NumberPad = (props) => {
  const {
    action, submitAction, setView,
  } = props;

  const cancelAction = () => {
    action('');
    if (setView) setView();
  };

  return (
    <Container>
      <Button
        classname="number-pad-btn"
        action={() => action((prev) => `${prev}1`)}
        name="1"
      />
      <Button
        classname="number-pad-btn"
        action={() => action((prev) => `${prev}2`)}
        name="2"
      />
      <Button
        classname="number-pad-btn"
        action={() => action((prev) => `${prev}3`)}
        name="3"
      />
      <Button
        classname="number-pad-btn"
        action={() => action((prev) => `${prev}4`)}
        name="4"
      />
      <Button
        classname="number-pad-btn"
        action={() => action((prev) => `${prev}5`)}
        name="5"
      />
      <Button
        classname="number-pad-btn"
        action={() => action((prev) => `${prev}6`)}
        name="6"
      />
      <Button
        classname="number-pad-btn"
        action={() => action((prev) => `${prev}7`)}
        name="7"
      />
      <Button
        classname="number-pad-btn"
        action={() => action((prev) => `${prev}8`)}
        name="8"
      />
      <Button
        classname="number-pad-btn"
        action={() => action((prev) => `${prev}9`)}
        name="9"
      />
      <Link to="/menu">
        <Button
          classname="number-pad-btn"
          action={() => submitAction()}
          name="Ok"
          type
        />
      </Link>
      <Button
        classname="number-pad-btn"
        action={() => action((prev) => `${prev}0`)}
        name="0"
      />
      <Button
        classname="number-pad-btn"
        action={() => cancelAction()}
        name="Cancel"
      />
    </Container>
  );
};

NumberPad.defaultProps = {
  action: undefined,
  submitAction: PropTypes.checkPropTypes(),
  setView: PropTypes.checkPropTypes(),
};

NumberPad.propTypes = {
  action: PropTypes.func,
  submitAction: PropTypes.func,
  setView: PropTypes.func,
};

export default NumberPad;
