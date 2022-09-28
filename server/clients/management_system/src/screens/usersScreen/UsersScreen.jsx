import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';

import { AddUser, ManageUsers, MainView } from './views';
import { Button } from '../../components';

import { employeeActions } from '../../actions';

import Container from './styles';

function UsersScreen({ onGetEmployees, employees, onAddNewUser }) {
  useEffect(() => {
    onGetEmployees();
  }, []);

  return (
    <Container>
      <div className="btnBox1">
        <MainView />
      </div>
      <div className="routeContainer">
        <Routes>
          <Route path="/add_user" element={<AddUser employees={employees} onAddNewUser={onAddNewUser} />} />
          <Route path="/manage_users" element={<ManageUsers />} />
        </Routes>
      </div>
      <div className="btnBox2">
        <Link to="/">
          <Button className="backBtn" btnText="Back" />
        </Link>
      </div>
    </Container>
  );
}

UsersScreen.defaultProps = {
  onGetEmployees: checkPropTypes(),
  onAddNewUser: checkPropTypes(),
  employees: [],
};

UsersScreen.propTypes = {
  onGetEmployees: PropTypes.func,
  onAddNewUser: PropTypes.func,
  employees: PropTypes.array,
};

const mapStateToProps = (state) => ({
  employees: state.employee.employees,
});

const mapDispatchToProps = (dispatch) => {
  const { getEmployees, addNewUser } = employeeActions;
  return ({
    onGetEmployees: () => getEmployees().then((data) => dispatch({ type: 'GET_EMPLOYEES', data })),
    onAddNewUser: (body) => addNewUser(body),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen);
