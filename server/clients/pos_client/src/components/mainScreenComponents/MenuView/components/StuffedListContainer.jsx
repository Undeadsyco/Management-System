import { array, checkPropTypes, func } from 'prop-types';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import Button from '../../../globalComponents/button';
import { StuffedViewContainer as Container } from '../styles';

function StuffedListContainer({ stuffedPizzasList, onGetPizzaById }) {
  const [list, setList] = useState([]);

  const createList = () => {
    const lgList = [];
    const famList = [];
    stuffedPizzasList?.forEach((pizza) => {
      pizza.sizes.forEach((size, index) => {
        if (index % 2) {
          famList.push({
            _id: pizza._id,
            name: `${size.size[0]} ${pizza.name}`,
            section: pizza.section,
            size,
          });
        } else {
          lgList.push({
            _id: pizza._id,
            name: `${size.size[0]} ${pizza.name}`,
            section: pizza.section,
            size,
          });
        }
      });
    });

    for (let i = 0; i < 2; i += 1) {
      lgList.push({ _id: 0, name: ' ' });
      famList.push({ _id: 0, name: ' ' });
    }

    const combinedList = [...lgList, ...famList];

    for (let i = combinedList.length; i < (8 * 6); i += 1) {
      combinedList.push({ _id: 0, name: ' ' });
    }

    return combinedList;
  };

  useEffect(() => {
    setList(createList());
  }, [stuffedPizzasList]);

  return (
    <Container>
      {list?.map((pizza, index) => {
        let className;
        if (index < (6 * 2)) {
          className = 'signatureBtn';
        } else if (index >= (6 * 2) && index < (6 * 4)) {
          className = 'otherBtn';
        } else if (index >= (6 * 4) && index < (6 * 6)) {
          className = 'specialBtn';
        } else {
          className = 'delightBtn';
        }

        return (
          <Button
            className={className}
            key={v4()}
            btnText={pizza.name}
            btnAction={() => onGetPizzaById(pizza._id, pizza.size.dough)}
          />
        );
      })}
    </Container>
  );
}

StuffedListContainer.defaultProps = {
  stuffedPizzasList: [],
  onGetPizzaById: checkPropTypes(),
};

StuffedListContainer.propTypes = {
  stuffedPizzasList: array,
  onGetPizzaById: func,
};

export default StuffedListContainer;
