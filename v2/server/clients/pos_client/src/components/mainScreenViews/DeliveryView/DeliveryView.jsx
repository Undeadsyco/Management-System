import { Link } from 'react-router-dom';
import Button from '../../globalComponents/button';
import Container from './styles';

function DeliveryView() {
  return (
    <Container>
      <div>
        <Button className="yellowBtn" btnText="Door Dash" />
        <Button className="yellowBtn" btnText="GrubHub" />
        <Button className="yellowBtn" btnText="PostMates" />
        <Button className="yellowBtn" btnText="Uber Eats" />
        <Button className="yellowBtn" btnText="Bite Squad" />
        <Button className="yellowBtn" btnText="Food Dudes" />
        <Button className="yellowBtn" btnText="Eat Street" />
      </div>
      <div>
        <Button className="yellowBtn" btnText="Cafe Courier" />
        <Button className="yellowBtn" btnText="GrubSouth" />
        <Button className="yellowBtn" btnText="Surfside Express" />
        <Button className="yellowBtn" btnText="Munchy's" />
        <Button className="yellowBtn" btnText="My Order Out" />
        <Button className="yellowBtn" btnText="GoldsBoro" />
      </div>
      <div>
        <Button className="crimsonBtn" btnText="Tax Exempt" />
        <Link to="/menu"><Button className="crimsonBtn" btnText="Back To Menu" /></Link>
      </div>
    </Container>
  );
}

export default DeliveryView;
