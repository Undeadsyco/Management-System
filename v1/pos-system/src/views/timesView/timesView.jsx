import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import Button from '../../components/button';
import { setEditors, setBtns } from './components/editors';

import {
  Container, EmployeeContainer, EditContainer,
  BtnContainer, btnStyles, itemStyles,
} from './styles';

const TimesView = (props) => {
  const { times, timesType } = props;
  const [employee, setEmployee] = useState(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
  }, [times, employee, timesType]);

  return (
    <Container>
      <EmployeeContainer>
        {times?.map((item) => {
          if (!item) {
            return null;
          }
          return (
            <Button key={v4()} style={itemStyles} action={() => setEmployee(item)}>
              {setBtns({ item, timesType })}
            </Button>
          );
        })}
      </EmployeeContainer>
      <EditContainer>
        {setEditors({ employee, timesType, ...props })}
      </EditContainer>
      <BtnContainer>
        <Link to="/menu"><Button style={btnStyles} name="Back" action={() => dispatch({ type: 'CLEAR_TIMES' })} /></Link>
      </BtnContainer>
    </Container>
  );
};

TimesView.defaultProps = {
  times: [],
  timesType: '',
};

TimesView.propTypes = {
  times: PropTypes.array,
  timesType: PropTypes.string,
};

export default TimesView;
