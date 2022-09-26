import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  array,
  checkPropTypes, func, object,
} from 'prop-types';

import {
  ToppingContainer, ToppingListContainer, MenuView, XLPizzaListContainer, StuffedListContainer,
} from './components';
import Button from '../../globalComponents/button';
import Container from './styles';

import { menuActions } from '../../../actions';

function MenuContainer(props) {
  const {
    pizzaList, toppingsList,
    selectedPizza, selectedPizza: { toppings },
    onGetPizzaById, selectedSize, stuffedPizzasList,
  } = props;

  return (
    <Container>
      <ToppingContainer toppings={toppings} selectedPizza={selectedPizza} />
      <Routes>
        <Route path="/" element={(
          <>
            <div className="portionsContainer">
              <Button btnText="1/2" />
              <Button btnText="1/3" />
              <Button btnText="1/4" />
            </div>
            <MenuView
              pizzaList={pizzaList}
              onGetPizzaById={onGetPizzaById}
              selectedSize={selectedSize}
            />
          </>
        )} />
        <Route path="/toppings" element={<ToppingListContainer toppingsList={toppingsList} />} />
        <Route path="/xl" element={(
          <>
            <div className="portionsContainer">
              <Button btnText="1/2" />
              <Button btnText="1/3" />
              <Button btnText="1/4" />
            </div>
            <XLPizzaListContainer
              pizzaList={pizzaList}
              onGetPizzaById={onGetPizzaById}
              selectedSize={selectedSize}
            />
          </>
        )} />
        <Route path="/stuffed" element={(
          <>
            <div className="portionsContainer">
              <Button btnText="1/2" />
              <Button btnText="1/3" />
              <Button btnText="1/4" />
            </div>
            <StuffedListContainer
              stuffedPizzasList={stuffedPizzasList}
              onGetPizzaById={onGetPizzaById}
            />
          </>
        )} />
      </Routes>
    </Container>
  );
}

MenuContainer.defaultProps = {
  pizzaList: {},
  stuffedPizzasList: [],
  toppingsList: {},
  selectedSize: {},
  selectedPizza: {},
  toppings: [],
  onGetPizzaById: checkPropTypes(),
};

MenuContainer.propTypes = {
  pizzaList: object,
  stuffedPizzasList: array,
  toppingsList: object,
  selectedSize: object,
  selectedPizza: object,
  toppings: array,
  onGetPizzaById: func,
};

const mapStateToProps = (state) => {
  const { menu } = state;

  return ({
    pizzaList: menu.pizzaList,
    toppingsList: menu.toppingsList,
    selectedPizza: menu.selectedPizza,
    selectedSize: menu.selectedSize,
    stuffedPizzasList: menu.stuffedPizzasList,
  });
};

const mapDispatchToProps = (dispatch) => {
  const { getPizzaById } = menuActions;

  return ({
    onGetPizzaById: (pId, dId) => getPizzaById(pId, dId).then((data) => dispatch({ type: 'SELECT_PIZZA', data })),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
