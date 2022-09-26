import { useEffect } from 'react';
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

const XlMenu = (props) => {
  const { onGetXlPizzas, xlPizzas } = props;

  useEffect(() => {
    onGetXlPizzas();
  }, []);

  const mapPizzas = (limit, styles, list = []) => {
    const newList = list?.reverse();
    for (let i = newList?.length; i < limit; i += 1) {
      newList.push({ pizza_id: Math.random(), pizza_name: ' ' });
    }

    return newList?.map(
      (pizza) => (
        <Button
          className={styles}
          key={pizza.pizza_id}
          name={pizza.pizza_name}
        />
      ),
    ).reverse();
  };

  return (
    <Container>
      <PortionBtns>
        <Button />
        <Button />
        <Button />
      </PortionBtns>
      <PizzaBtnSections>
        <PizzaBtns>
          {mapPizzas(12, 'red-btn', xlPizzas)}
        </PizzaBtns>
        <PizzaBtns>
          {mapPizzas(12, 'orange-btn')}
        </PizzaBtns>
        <PizzaBtns>
          {mapPizzas(12, 'grey-btn')}
        </PizzaBtns>
        <PizzaBtns>
          {mapPizzas(11, 'blue-btn')}
          <Link to="/menu/toppings"><Button name="Modify" action={undefined} className="yellow-btn" /></Link>
        </PizzaBtns>
      </PizzaBtnSections>
    </Container>
  );
};

XlMenu.defaultProps = {
  onGetXlPizzas: checkPropTypes(),
  xlPizzas: [],
};

XlMenu.propTypes = {
  onGetXlPizzas: PropTypes.func,
  xlPizzas: PropTypes.array,
};

export default XlMenu;
