import { Link } from 'react-router-dom';

import { Button } from '../../../components';

function LinkContainer() {
  return (
    <>
      <Link className="manageDougnBtn" to="/pizzas/manage_dough">
        <Button btnText="Manage Dough Sizes" />
      </Link>
      <Link className="manageSectionBtn" to="/pizzas/manage_section">
        <Button btnText="Manage Sections" />
      </Link>
      <Link className="managePizzaBtn" to="/pizzas/manage_pizza">
        <Button btnText="Manage Pizzas" />
      </Link>
      <Link className="backBtn" to="/">
        <Button btnText="Back" />
      </Link>
    </>
  );
}

export default LinkContainer;
