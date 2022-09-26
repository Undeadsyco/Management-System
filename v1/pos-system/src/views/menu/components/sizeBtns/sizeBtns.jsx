import { Link } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';
import styled from 'styled-components';
import Button from '../../../../components/button';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

const SizeBtns = (props) => {
  const { sizes, onGetPizzasBySize } = props;

  return (
    <Container>
      {sizes.map((size) => (
        <Link key={size.id} to="/menu">
          <Button name={size.size} action={() => onGetPizzasBySize(size.id)} />
        </Link>
      ))}
      <Link to="/menu/xl"><Button name="XL" action={undefined} /></Link>
      <Link to="/menu/stuffed"><Button name="Stuffed" action={undefined} /></Link>
      <Link to="/menu/other"><Button name="AOS/Other" action={undefined} /></Link>
    </Container>
  );
};

SizeBtns.defaultProps = {
  onGetPizzasBySize: checkPropTypes(),
  sizes: PropTypes.array,
};

SizeBtns.propTypes = {
  onGetPizzasBySize: PropTypes.func,
  sizes: PropTypes.array,
};

export default SizeBtns;
