import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../../../components/button';

const Container = styled.div`
  box-sizing: border-box;
  padding: 5px 10px 15px 10px;
  width: 100%;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 100%;
  gap: 5px;
`;

const Row = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: 100%;
  gap: 5px;
`;

const DeliveryView = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Button name="DoorDash" className="orange-btn" />
        <Button name="Grubhub" className="orange-btn" />
        <Button name="Postmates" className="orange-btn" />
        <Button name="Uber Eats" className="orange-btn" />
        <Button name="Bite Squad" className="orange-btn" />
        <Button name="Food Dudes" className="orange-btn" />
        <Button name="EatStreet" className="orange-btn" />
        <Button name="Cafe Courier" className="orange-btn" />
        <Button name="GrubSouth" className="orange-btn" />
      </Row>
      <Row>
        <Button name="Surfside Express" className="orange-btn" />
        <Button name="Munchy's" className="orange-btn" />
        <Button name="My Order Out" className="orange-btn" />
        <Button name="Goldsboro" className="orange-btn" />
        <Button name="" className="orange-btn" />
      </Row>
      <Row>{}</Row>
      <Row>{}</Row>
      <Row>
        <Button name="TAX EXEMPT" className="red-btn" />
        <Button name="Back To Menu" action={() => navigate('/menu')} className="red-btn push-to-end" />
      </Row>
    </Container>
  );
};

export default DeliveryView;
