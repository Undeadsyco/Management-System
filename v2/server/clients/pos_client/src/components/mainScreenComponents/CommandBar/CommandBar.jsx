import { Link } from 'react-router-dom';
import Button from '../../globalComponents/button';
import Container from './styles';

function CommandBar() {
  return (
    <Container className="commandBar">
      <Link to="/menu/comment"><Button btnText="Comment" /></Link>
      <Link to="/menu/discounts"><Button btnText="Apply Discount" /></Link>
      <Link to="/menu/delivery"><Button btnText="Delivery Tablet" /></Link>
      <Button btnText="Make It Call In" />
      <Link to="/menu/walkin"><Button btnText="Walk In" /></Link>
      <Link to="/menu/tenders"><Button btnText="Tenders" /></Link>
      <Link to="/lock_screen"><Button btnText="Exit" /></Link>
    </Container>
  );
}

export default CommandBar;
