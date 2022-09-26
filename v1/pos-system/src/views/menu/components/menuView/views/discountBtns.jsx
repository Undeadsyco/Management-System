import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes, { checkPropTypes } from 'prop-types';

import Button from '../../../../../components/button';

const Container = styled.div`
  box-sizing: border-box;
  padding: 20px;
  grid-column: 1/4;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Row = styled.div`
  box-sizing: border-box;
  padding: 0 50px;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
`;

const DiscountBtns = (props) => {
  const {
    discountType, view, setView,
  } = props;

  const dispatch = useDispatch();

  return (
    <Container style={view === 'doller' ? { display: 'grid' } : { display: 'none' }}>
      <Row>
        <Button name="$1" action={() => dispatch({ type: 'ADD_DISCOUNT', data: { value: 1, type: discountType } })} />
        <Button name="$2" action={() => dispatch({ type: 'ADD_DISCOUNT', data: { value: 2, type: discountType } })} />
        <Button name="$3" action={() => dispatch({ type: 'ADD_DISCOUNT', data: { value: 3, type: discountType } })} />
        <Button name="$4" action={() => dispatch({ type: 'ADD_DISCOUNT', data: { value: 4, type: discountType } })} />
        <Button name="$5" action={() => dispatch({ type: 'ADD_DISCOUNT', data: { value: 5, type: discountType } })} />
      </Row>
      <Row>
        <Button name="$6" action={() => dispatch({ type: 'ADD_DISCOUNT', data: { value: 6, type: discountType } })} />
        <Button name="$7" action={() => dispatch({ type: 'ADD_DISCOUNT', data: { value: 7, type: discountType } })} />
        <Button name="$8" action={() => dispatch({ type: 'ADD_DISCOUNT', data: { value: 8, type: discountType } })} />
        <Button name="$9" action={() => dispatch({ type: 'ADD_DISCOUNT', data: { value: 9, type: discountType } })} />
        <Button name="$10" action={() => dispatch({ type: 'ADD_DISCOUNT', data: { value: 10, type: discountType } })} />
        <Button name="back" action={() => setView('main')} />
      </Row>
    </Container>
  );
};

DiscountBtns.defaultProps = {
  view: '',
  setView: checkPropTypes(),
  discountType: '',
};

DiscountBtns.propTypes = {
  view: PropTypes.string,
  setView: PropTypes.func,
  discountType: PropTypes.string,
};

export default DiscountBtns;
