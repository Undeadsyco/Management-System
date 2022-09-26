import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';
import { v4 } from 'uuid';

import Button from '../../components/button';

import {
  Container, ListContainer, ListItem, BtnBox,
} from './styles';

const DrawerView = ({ registers, onGetAllEmployees }) => {
  useEffect(() => { }, [registers]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const assignDrawer = (register) => {
    onGetAllEmployees();
    dispatch({ type: 'SELECT_REGISTER', data: { register } });
    dispatch({ type: 'SET_LIST_ACTION', data: { type: 'assign_drawer' } });
    navigate('/employee-list');
  };

  return (
    <Container>
      <ListContainer>
        <ListItem style={{ justifyItems: 'start' }}>
          {registers?.filter(
            (item) => item.Register_type === 'WalkIn',
          ).map((item) => (
            <Button
              key={v4()}
              style={{ width: '60%', height: '80%', justifyContent: 'start' }}
              action={() => assignDrawer(item)}
            >
              <div>{item.Register_Name}</div>
              <div>{item.Is_Assigned ? 'Assigned' : 'Not Assigned'}</div>
            </Button>
          ))}
        </ListItem>
        <ListItem style={{ justifyItems: 'end' }}>
          {registers?.filter(
            (item) => item.Register_type === 'CallIn',
          ).map((item) => (
            <Button key={v4()} style={{ width: '60%', height: '80%' }}>
              <div>{item.Register_Name}</div>
            </Button>
          ))}
        </ListItem>
      </ListContainer>
      <BtnBox>
        <Link to="/menu/manager"><Button style={{ width: '250px', height: '100px' }} name="Back" /></Link>
      </BtnBox>
    </Container>
  );
};

DrawerView.defaultProps = {
  registers: [],
  onGetAllEmployees: checkPropTypes,
};

DrawerView.propTypes = {
  registers: PropTypes.array,
  onGetAllEmployees: PropTypes.func,
};

export default DrawerView;
