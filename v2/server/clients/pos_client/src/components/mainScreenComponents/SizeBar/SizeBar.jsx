import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { array, checkPropTypes, func } from 'prop-types';

import Button from '../../globalComponents/button';
import Container from './styles';

import { menuActions } from '../../../actions';

function SizeBar({ doughList, onGetPizzas }) {
  const [xl, setXl] = useState({});
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (doughList) {
      setXl(doughList[doughList.length - 1]);
      doughList.pop();
      setList(doughList);
    }
  }, [doughList]);

  const handleClick = (obj) => {
    onGetPizzas(obj._id);
    dispatch({ type: 'SELECT_SIZE', data: obj });
  };

  return (
    <Container colNum={doughList.length + 3}>
      {list?.map((dough) => (
        <Link key={dough._id} to="/menu">
          <Button btnText={dough.size} btnAction={() => handleClick(dough)} />
        </Link>
      ))}
      <Link to="/menu/xl"><Button btnText="XL" btnAction={() => handleClick(xl)} /></Link>
      <Link to="/menu/stuffed"><Button btnText="Stuffed" /></Link>
      <Link to="/menu/aos"><Button btnText="AOS/Other" /></Link>
    </Container>
  );
}

SizeBar.defaultProps = {
  doughList: [],
  onGetPizzas: checkPropTypes(),
};

SizeBar.propTypes = {
  doughList: array,
  onGetPizzas: func,
};

const mapStateToProps = (state) => {
  const { menu } = state;

  return ({
    doughList: menu.doughList,
  });
};

const mapDispatchToProps = (dispatch) => {
  const { getPizzas } = menuActions;

  return ({
    onGetPizzas: (doughId) => getPizzas(doughId).then((data) => dispatch({ type: 'GET_PIZZA_LIST', data })),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SizeBar);
