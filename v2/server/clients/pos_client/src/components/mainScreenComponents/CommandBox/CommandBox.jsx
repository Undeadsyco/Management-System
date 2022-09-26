import { object } from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../globalComponents/button';
import Container from './styles';

function CommandBox({ pizzaSelectedInOrder }) {
  const dispatch = useDispatch();
  return (
    <Container className="commandBar">
      <Button btnText="Delete" btnAction={() => dispatch({ type: 'REMOVE_ONE_FROM_ORDER', data: pizzaSelectedInOrder })} />
      <Button btnText="Delete All" btnAction={() => dispatch({ type: 'REMOVE_ALL_FROM_ORDER' })} />
      <Button btnText="New Order" btnAction={() => dispatch({ type: 'ADD_ORDER_TO_LIST' })} />
      <Button btnText="Order Lookup" />
      <Button btnText="Customer Lookup" />
      <Button btnText="Repeat" />
      <Link to="/menu/crew"><Button btnText="Crew Functions" /></Link>
      <Link to="/menu/manager"><Button btnText="Manager Functions" /></Link>
      <Button btnText="Open Orders" />
    </Container>
  );
}

CommandBox.defaultProps = {
  pizzaSelectedInOrder: {},
};

CommandBox.propTypes = {
  pizzaSelectedInOrder: object,
};

const mapStateToProps = (state) => {
  const { currentOrder: { pizzaSelectedInOrder } } = state.order;
  return ({
    pizzaSelectedInOrder,
  });
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CommandBox);
