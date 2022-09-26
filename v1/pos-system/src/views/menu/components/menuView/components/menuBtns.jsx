import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes, { checkPropTypes } from 'prop-types';

import Button from '../../../../../components/button';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(9, 1fr);
`;

const PortionBtns = styled.div`
  grid-column: 1/7;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const PizzaBtnSections = styled.div`
  grid-column: 1/7;
  grid-row: 2/10;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const PizzaBtns = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const MenuBtns = (props) => {
  const {
    pizzas, onGetPizzaById, currentSize,
  } = props;

  const mapPizzas = (list, limit, styles) => {
    const newList = list;
    for (let i = newList?.length; i < limit; i += 1) {
      newList.push({ pizza_id: Math.random(), pizza_name: ' ' });
    }

    return newList?.map(
      (pizza) => (
        <Button
          className={styles}
          key={pizza.pizza_id}
          name={pizza.pizza_name}
          action={() => onGetPizzaById(currentSize, pizza.pizza_name)}
        />
      ),
    );
  };

  return (
    <Container>
      <PortionBtns>
        <Button name="Half" />
        <Button name="Third" />
        <Button name="Quarter" />
      </PortionBtns>
      <PizzaBtnSections>
        <PizzaBtns>
          {mapPizzas(pizzas[0]?.pizzas, 12, 'red-btn signiture-btn')}
        </PizzaBtns>
        <PizzaBtns>
          {mapPizzas(pizzas[1]?.pizzas, 12, 'orange-btn')}
        </PizzaBtns>
        <PizzaBtns>
          {mapPizzas(pizzas[2]?.pizzas, 12, 'grey-btn')}
        </PizzaBtns>
        <PizzaBtns>
          {mapPizzas(pizzas[3]?.pizzas, 11, 'blue-btn')}
          <Link to="/menu/toppings"><Button name="Modify" action={undefined} className="yellow-btn" /></Link>
        </PizzaBtns>
      </PizzaBtnSections>
    </Container>
  );
};

MenuBtns.defaultProps = {
  pizzas: [],
  onGetPizzaById: checkPropTypes(),
  currentSize: '',
};

MenuBtns.propTypes = {
  pizzas: PropTypes.array,
  onGetPizzaById: PropTypes.func,
  currentSize: PropTypes.string,
};

export default MenuBtns;
