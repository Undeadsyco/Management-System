import {
  checkPropTypes, func, object, string,
} from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../../globalComponents/button';

function MenuContainer(props) {
  const { pizzaList, onGetPizzaById, selectedSize: { _id: doughId } } = props;

  return (
    <div className="menuContainer">
      <div>
        <Button className="signatureBtn" btnText="CYO" />
        {pizzaList?.signature?.map((pizza) => (
          <Button key={pizza._id} className="signatureBtn" btnText={pizza.name} btnAction={() => onGetPizzaById(pizza._id, doughId)} />
        ))}
        <Button className="signatureBtn" />
        <Button className="signatureBtn" />
      </div>

      <div>
        {pizzaList?.other?.map((pizza) => (
          <Button key={pizza._id} className="otherBtn" btnText={pizza.name} btnAction={() => onGetPizzaById(pizza._id, doughId)} />
        ))}
        <Button className="otherBtn" />
        <Button className="otherBtn" />
        <Button className="otherBtn" />
        <Button className="otherBtn" />
        <Button className="otherBtn" />
      </div>

      <div>
        {pizzaList?.special?.map((pizza) => (
          <Button key={pizza._id} className="specialBtn" btnText={pizza.name} btnAction={() => onGetPizzaById(pizza._id, doughId)} />
        ))}
        <Button className="specialBtn" />
        <Button className="specialBtn" />
        <Button className="specialBtn" />
        <Button className="specialBtn" />
      </div>

      <div>
        {pizzaList?.delight?.map((pizza) => (
          <Button key={pizza._id} className="delightBtn" btnText={pizza.name} btnAction={() => onGetPizzaById(pizza._id, doughId)} />
        ))}
        <Link to="/menu/toppings"><Button className="toppingBtn" btnText="Toppings" /></Link>
      </div>
    </div>
  );
}

MenuContainer.defaultProps = {
  pizzaList: {},
  onGetPizzaById: checkPropTypes(),
  selectedSize: {},
  _id: '',
};

MenuContainer.propTypes = {
  pizzaList: object,
  onGetPizzaById: func,
  selectedSize: object,
  _id: string,
};

export default MenuContainer;
