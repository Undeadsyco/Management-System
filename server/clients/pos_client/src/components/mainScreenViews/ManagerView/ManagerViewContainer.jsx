// dependecies
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  array, checkPropTypes, func, object,
} from 'prop-types';
// componets
import ManagerView from './ManagerView';
import ListContainer from './ListContainer/ListContainer';
import { TimeListItem, BreakListItem } from './ListContainer/ListItems';
import EditTime from './EditTime';
// utils
import { mainActions } from '../../../actions';

function ManagerViewContainer(props) {
  const {
    currentUser, onGetEmployeeTimes, employeeTimes, onEditTime,
  } = props;
  return (
    <Routes>
      <Route path="/" element={<ManagerView currentUser={currentUser} onGetEmployeeTimes={onGetEmployeeTimes} />} />
      <Route path="/edit_time" element={<EditTime onEditTime={onEditTime} onGetEmployeeTimes={onGetEmployeeTimes} />} />
      <Route path="/time_view" element={<ListContainer employeeTimes={employeeTimes} ListItem={TimeListItem} />} />
      <Route path="/break_view" element={<ListContainer employeeTimes={employeeTimes} ListItem={BreakListItem} />} />
      <Route path="/change_password" element={undefined} />
    </Routes>
  );
}

ManagerViewContainer.defaultProps = {
  currentUser: {},
  employeeTimes: [],
  onGetEmployeeTimes: checkPropTypes(),
  onEditTime: checkPropTypes(),
};

ManagerViewContainer.propTypes = {
  currentUser: object,
  employeeTimes: array,
  onGetEmployeeTimes: func,
  onEditTime: func,
};

const mapStateToProps = (state) => {
  const { currentUser, employeeTimes } = state.main;

  return ({
    currentUser,
    employeeTimes,
  });
};

const mapDispatchToProps = (dispatch) => {
  const { getEmployeeTimes, editTime } = mainActions;

  return ({
    onGetEmployeeTimes: () => getEmployeeTimes().then((data) => dispatch({ type: 'GET_EMPLOYEE_TIMES', data })),
    onEditTime: (route, body) => editTime(route, body),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagerViewContainer);
