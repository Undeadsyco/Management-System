import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import PropTypes, { checkPropTypes } from 'prop-types';

import { pizzaActions } from '../../../../actions';

import PizzaTable from './PizzaTable';
import AddPizzaForm from './AddPizza';
import { AddBtn, SectionLabel, CountContainer } from './styles';

function AddPizza(props) {
  const {
    sectionList, doughList, toppings, pizzaList,
    onGetSections, onGetDoughList, onGetToppings, onAddPizza, onGetPizzas,
  } = props;
  const [section, setSection] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    onGetSections();
    onGetDoughList();
    onGetToppings();
    onGetPizzas();
  }, []);

  useEffect(() => {
    dispatch({ type: 'CLEAR_PIZZA_LIST' });
    onGetPizzas(section);
  }, [section]);

  return (
    <>
      <SectionLabel htmlFor="section">
        <div>Select A Section:</div>
        <select id="section" name="section" value={section} onChange={(e) => setSection(e.target.value)}>
          <option value="">All</option>
          {sectionList?.map(({ _id, name }) => (
            <option key={_id}>{name}</option>
          ))}
        </select>
      </SectionLabel>
      <AddBtn>
        <Link to="/pizzas/manage_pizza/add_pizza">Add Pizza</Link>
      </AddBtn>
      <CountContainer>
        <h3>
          # of Pizzas: &nbsp;
          {pizzaList.length}
        </h3>
      </CountContainer>
      <PizzaTable pizzaList={pizzaList} />
      <Routes>
        <Route
          path="/add_pizza"
          element={(
            <AddPizzaForm
              doughList={doughList}
              sectionList={sectionList}
              toppingsList={toppings}
              onAddPizza={onAddPizza}
            />
          )}
        />
      </Routes>
    </>
  );
}

AddPizza.defaultProps = {
  sectionList: [],
  doughList: [],
  toppings: {},
  pizzaList: [],
  onGetSections: checkPropTypes(),
  onGetDoughList: checkPropTypes(),
  onGetToppings: checkPropTypes(),
  onAddPizza: checkPropTypes(),
  onGetPizzas: checkPropTypes(),
};

AddPizza.propTypes = {
  sectionList: PropTypes.array,
  doughList: PropTypes.array,
  toppings: PropTypes.object,
  pizzaList: PropTypes.array,
  onGetSections: PropTypes.func,
  onGetDoughList: PropTypes.func,
  onGetToppings: PropTypes.func,
  onAddPizza: PropTypes.func,
  onGetPizzas: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { menu } = state;
  return ({
    doughList: menu.doughList,
    sectionList: menu.sectionList,
    toppings: menu.toppings,
    pizzaList: menu.pizzaList,
  });
};

const mapStateToDispatch = (dispatch) => {
  const {
    doughActions: { getDoughList },
    sectionActions: { getSections },
    pizzaActions: { getToppings, addPizza, getPizzaList },
  } = pizzaActions;

  return ({
    onGetDoughList: () => getDoughList().then((data) => dispatch({ type: 'GET_DOUGH_LIST', data })),
    onGetSections: () => getSections().then((data) => dispatch({ type: 'GET_SECTION_LIST', data })),
    onGetToppings: () => getToppings().then((data) => dispatch({ type: 'GET_TOPPING_LIST', data })),
    onAddPizza: (body) => addPizza(body).then((data) => dispatch({ type: 'ADD_NEW_PIZZA', data })),
    onGetPizzas: (section) => getPizzaList(section).then((data) => dispatch({ type: 'GET_PIZZA_LIST', data })),
  });
};

export default connect(mapStateToProps, mapStateToDispatch)(AddPizza);
