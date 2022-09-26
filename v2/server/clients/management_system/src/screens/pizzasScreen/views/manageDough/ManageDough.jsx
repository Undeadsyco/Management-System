import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';

import DoughList from './DoughList';
import DoughForm from './DoughForm';
import { AddBtn } from './styles';

import { pizzaActions } from '../../../../actions';

function ManageDough(props) {
  const {
    doughList, onGetDoughList, onAddDough, onUpdateDough, onDeleteDough,
  } = props;

  useEffect(() => {
    onGetDoughList();
  }, []);

  return (
    <>
      <AddBtn>
        <Link to="/pizzas/manage_dough/add_dough">Add New</Link>
      </AddBtn>
      <DoughList doughList={doughList} onDeleteDough={onDeleteDough} />
      <Routes>
        <Route path="/add_dough" element={<DoughForm submit={onAddDough} />} />
        <Route path="/edit/:id" element={<DoughForm submit={onUpdateDough} />} />
      </Routes>
    </>
  );
}

ManageDough.defaultProps = {
  doughList: [],
  onAddDough: checkPropTypes(),
  onGetDoughList: checkPropTypes(),
  onUpdateDough: checkPropTypes(),
  onDeleteDough: checkPropTypes(),
};

ManageDough.propTypes = {
  doughList: PropTypes.array,
  onAddDough: PropTypes.func,
  onGetDoughList: PropTypes.func,
  onUpdateDough: PropTypes.func,
  onDeleteDough: PropTypes.func,
};

const mapStateToProps = (state) => ({
  doughList: state.menu.doughList,
});

const mapDispatchToProps = (dispatch) => {
  const {
    addDough, getDoughList, updateDough, deleteDough,
  } = pizzaActions.doughActions;

  return ({
    onAddDough: (body) => addDough(body).then((data) => dispatch({ type: 'ADD_NEW_DOUGH', data })),
    onGetDoughList: () => getDoughList().then((data) => dispatch({ type: 'GET_DOUGH_LIST', data })),
    onUpdateDough: (body) => updateDough(body).then((data) => dispatch({ type: 'GET_DOUGH_LIST', data })),
    onDeleteDough: (id) => deleteDough(id).then((data) => dispatch({ type: 'GET_DOUGH_LIST', data })),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDough);
