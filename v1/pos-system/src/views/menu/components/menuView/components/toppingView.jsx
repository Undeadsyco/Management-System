import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../../../../../components/button';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(9, 1fr);
`;

const ToppingView = ({ toppings }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Button name="1/2" />
      <Button name="1/3" />
      <Button name="1/4" />
      {toppings[2]?.map((item) => (
        <Button
          key={item.topping_id}
          name={item.topping}
          className="blue-btn"
          action={() => dispatch({ type: 'ADD_TOPPING', item: item.topping })}
        />
      ))}

      <Button name="SAUSES" className="invisible" />
      {toppings[0]?.map((item) => (
        <Button
          key={item.topping_id}
          name={item.topping}
          className="red2-btn"
          action={() => dispatch({ type: 'ADD_TOPPING', item: item.topping })}
        />
      ))}
      <Button name="" className="red2-btn" />
      <Button name="" className="red2-btn" />

      <Button name="CHEESES" className="invisible" />
      {toppings[1]?.map((item) => (
        <Button
          key={item.topping_id}
          name={item.topping}
          className="orange-btn"
          action={() => dispatch({ type: 'ADD_TOPPING', item: item.topping })}
        />
      ))}
      <Button name="" className="orange-btn" />

      <Button name="MEATS" className="invisible" />
      {toppings[3]?.map((item) => (
        <Button
          key={item.topping_id}
          name={item.topping}
          className="red-btn"
          action={() => dispatch({ type: 'ADD_TOPPING', item: item.topping })}
        />
      ))}
      <Button name="" className="red-btn" />
      <Button name="" className="red-btn" />

      <Button name="PRODUCE" className="invisible" />
      {toppings[4]?.map((item) => (
        <Button
          key={item.topping_id}
          name={item.topping}
          className="green-btn"
          action={() => dispatch({ type: 'ADD_TOPPING', item: item.topping })}
        />
      ))}
      <Button name="" className="green-btn" />
      <Button name="" className="green-btn" />
      <Button name="" className="green-btn" />
      <Link to="/menu"><Button name="Back" className="red3-btn" /></Link>
    </Container>
  );
};

ToppingView.defaultProps = {
  toppings: [],
};

ToppingView.propTypes = {
  toppings: PropTypes.array,
};

export default ToppingView;
