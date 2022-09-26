import { Link } from 'react-router-dom';

import Button from '../../../components/Button';

function MainView() {
  return (
    <>
      <Link className="btn1" to="/users/add_user">
        <Button btnText="Add New User" />
      </Link>
      <Link className="btn2" to="/users/manage_users">
        <Button btnText="Manage Users" />
      </Link>
    </>
  );
}

export default MainView;
