import { checkPropTypes, func, object } from 'prop-types';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import Button from '../../../globalComponents/button';

import { XLVewContainer as Container } from '../styles';

function XLPizzaListContainer(props) {
  const {
    pizzaList, onGetPizzaById,
    selectedSize: { _id: doughId },
  } = props;

  const [list, setList] = useState([]);

  const constructList = () => {
    for (let i = pizzaList.xlny.length; i < ((6 * 8)); i += 1) {
      pizzaList.xlny.push({ _id: v4(), name: ' ' });
    }

    setList(pizzaList.xlny);
  };

  useEffect(() => {
    constructList();
  }, [pizzaList]);

  const handleClick = (pizzaId) => {
    if (!pizzaId) return;
    onGetPizzaById(pizzaId, doughId);
  };

  return (
    <Container>
      {list?.map((pizza, index) => {
        let className;
        if (index < 6 * 2) {
          className = 'signatureBtn';
        } else if (index >= 6 * 2 && index < 6 * 4) {
          className = 'otherBtn';
        } else if (index >= 6 * 4 && index < 6 * 6) {
          className = 'specialBtn';
        } else {
          className = 'delightBtn';
        }

        return (
          <Button
            className={className}
            key={pizza._id} btnText={pizza.name}
            btnAction={() => handleClick(pizza._id)}
          />
        );
      })}
    </Container>
  );
}

XLPizzaListContainer.defaultProps = {
  pizzaList: {},
  onGetPizzaById: checkPropTypes(),
  selectedSize: {},
};

XLPizzaListContainer.propTypes = {
  pizzaList: object,
  onGetPizzaById: func,
  selectedSize: object,
};

export default XLPizzaListContainer;
