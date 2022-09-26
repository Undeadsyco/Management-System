import { Link } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';

import Button from '../../components/Button';
import Container from './styles';

function MainScreen({ onLogout }) {
  return (
    <Container>
      <Link className="rowOne colOne" to="/users">
        <Button className="nested" btnText="manage users" btnStyles={{ colSpan: '3/5', rowSpan: '3/6' }} />
      </Link>
      <Link className="rowOne colTwo" to="/">
        <Button className="nested" btnText="manage employees" btnStyles={{ colSpan: '6/8', rowSpan: '3/6' }} />
      </Link>
      <Link className="rowOne colThree" to="/">
        <Button className="nested" btnText="manage income" btnStyles={{ colSpan: '9/11', rowSpan: '3/6' }} />
      </Link>
      <Link className="rowTwo colOne" to="/">
        <Button className="nested" btnText="manage orders" btnStyles={{ colSpan: '3/5', rowSpan: '8/11' }} />
      </Link>
      <Link className="rowTwo colTwo" to="/pizzas">
        <Button className="nested" btnText="manage pizzas" btnStyles={{ colSpan: '6/8', rowSpan: '8/11' }} />
      </Link>
      <Link className="rowTwo colThree" to="/inventory">
        <Button className="nested" btnText="manage inventory" btnStyles={{ colSpan: '9/11', rowSpan: '8/11' }} />
      </Link>
      <Link className="logoutBtn" to="/lock_screen">
        <Button btnText="Logout" btnAction={onLogout} />
      </Link>
    </Container>
  );
}

MainScreen.defaultProps = { onLogout: checkPropTypes() };

MainScreen.propTypes = { onLogout: PropTypes.func };

export default MainScreen;
