import { object } from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Cheese, Meats, Sauce, Seasoning, Produce,
} from '../ToppingSections';
import Button from '../../../globalComponents/button';

function ToppingListContainer({ toppingsList }) {
  return (
    <div className="toppingListContainer">
      <Button btnText="1/4" />
      <Button btnText="1/3" />
      <Button btnText="1/2" />
      <Button btnText="" />
      <Button btnText="" />
      <Button btnText="" />
      <Seasoning list={toppingsList?.seasonings} />
      <Sauce list={toppingsList?.sauce} />
      <Cheese list={toppingsList?.cheese} />
      <Meats list={toppingsList?.meat} />
      <Produce list={toppingsList?.produce} />
      <Link to="/menu"><Button btnText="Back" /></Link>
    </div>
  );
}

ToppingListContainer.defaultProps = {
  toppingsList: {},
};

ToppingListContainer.propTypes = {
  toppingsList: object,
};

export default ToppingListContainer;
