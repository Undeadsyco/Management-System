import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';

import Button from '../../components/button';

import {
  Container, Heading, List, Item, ItemText, BtnContainer,
} from './styles';

const UserListView = (props) => {
  const {
    employees, onClearPassword, listAction, onAssignRegister,
    selectedRegister: { Register_Id: id },
  } = props;
  const [name, setName] = useState('');

  useEffect(() => {
    switch (listAction) {
      case 'assign_drawer':
        setName('Assign Drawer');
        break;
      case 'clear_password':
        setName('Clear Password');
        break;
      default:
        break;
    }
  }, [employees, listAction, name, id]);

  return (
    <Container>
      <Heading>{name}</Heading>
      <List>
        {employees?.map((employee) => (
          <Item>
            <ItemText style={{ fontSize: 'larger', fontWeight: 'bolder' }}>{employee.Employee_name}</ItemText>
            <Button
              style={listAction === 'clear_password' ? { width: '150px', height: '50px' } : { display: 'none' }}
              name={name}
              action={() => onClearPassword(employee.Employee_Id)}
            />
            <Button
              style={listAction === 'assign_drawer' ? { width: '150px', height: '50px' } : { display: 'none' }}
              name={name}
              action={() => onAssignRegister(employee.Employee_Id, id)}
            />
          </Item>
        ))}
      </List>
      <BtnContainer>
        <Link to="/menu">
          <Button style={{ width: '100px', height: '50px' }} name="Back" />
        </Link>
      </BtnContainer>
    </Container>
  );
};

UserListView.defaultProps = {
  employees: [],
  listAction: '',
  selectedRegister: {},
  onClearPassword: checkPropTypes(),
  onAssignRegister: checkPropTypes(),
};

UserListView.propTypes = {
  employees: PropTypes.array,
  listAction: PropTypes.string,
  selectedRegister: PropTypes.object,
  onClearPassword: PropTypes.func,
  onAssignRegister: PropTypes.func,
};

export default UserListView;
