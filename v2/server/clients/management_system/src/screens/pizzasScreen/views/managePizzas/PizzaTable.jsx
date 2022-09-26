import { array } from 'prop-types';

import { TableContainer as Container } from './styles';

function PizzaTable({ pizzaList }) {
  return (
    <Container numOfRows={pizzaList.length}>
      <div className="row heading">
        <h4>pizza name</h4>
        <h4>section</h4>
        <h4># of sizes</h4>
        <h4># of toppings</h4>
        <h4>actions</h4>
      </div>
      {pizzaList.length > 0 ? pizzaList?.map((pizza) => (
        <div key={pizza._id} className="row">
          <p>{pizza.name}</p>
          <p>{pizza.section.name}</p>
          <p>{pizza.sizes.length}</p>
          <p>{pizza.toppings.length}</p>
          <span>
            <button type="button">edit</button>
            <button type="button">delete</button>
          </span>
        </div>
      )) : <div className="loading">...loading</div>}
    </Container>
  );
}

PizzaTable.defaultProps = {
  pizzaList: [],
};

PizzaTable.propTypes = {
  pizzaList: array,
};

export default PizzaTable;
