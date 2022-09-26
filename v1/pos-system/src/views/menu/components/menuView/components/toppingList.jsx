import styled from 'styled-components';
import PropTypes, { checkPropTypes } from 'prop-types';
import { v4 } from 'uuid';

import Button from '../../../../../components/button';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, 1fr);
`;

const ToppingList = (props) => {
  const {
    selectedPizza, onAddToOrder, currentSize,
  } = props;
  const { toppings } = selectedPizza;

  const fillList = () => {
    for (let i = toppings?.length; i < 10; i += 1) {
      toppings.push({ id: toppings.length + i, topping: ' ' });
    }

    return toppings ? toppings.map((topping) => (
      <Button
        key={v4()}
        name={topping.topping}
        action={undefined}
      />
    )) : (
      <>
        <Button name="" action={undefined} />
        <Button name="" action={undefined} />
        <Button name="" action={undefined} />
        <Button name="" action={undefined} />
        <Button name="" action={undefined} />
        <Button name="" action={undefined} />
        <Button name="" action={undefined} />
        <Button name="" action={undefined} />
        <Button name="" action={undefined} />
        <Button name="" action={undefined} />
      </>
    );
  };

  return (
    <Container>
      <Button name="LESS" action={undefined} />
      <Button name="EXTRA" action={undefined} />
      {fillList()}
      <Button name="DOWN size" action={undefined} />
      <Button name="UP size" action={undefined} />
      <Button name="REPRINT LAST CHK" action={undefined} />
      <Button name="ADD TO ORDERS" action={() => onAddToOrder(currentSize, selectedPizza)} />
    </Container>
  );
};

ToppingList.defaultProps = {
  selectedPizza: {},
  onAddToOrder: checkPropTypes(),
  currentSize: '',
};

ToppingList.propTypes = {
  selectedPizza: PropTypes.object,
  onAddToOrder: PropTypes.func,
  currentSize: PropTypes.string,
};

export default ToppingList;
