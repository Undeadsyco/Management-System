import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../../../components/button';

const Container = styled.div`
  grid-column: 1/3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1px;
`;
const BottomSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1px;
`;

const AosView = () => (
  <Container>
    {/* salads */}
    <TopSection>
      <Button name="CYO Salad" className="green-btn" />
      <Button name="" className="green-btn" />
      <Button name="Chk Caeser Salad" className="green-btn" />
      <Button name="Club Salad" className="green-btn" />
      <Button name="Garden Salad" className="green-btn" />
      <Button name="Italian Salad" className="green-btn" />
      <Button name="Chk Bcn Art Salad" className="green-btn" />
      <Button name="Medt Salad" className="green-btn" />
      <Button name="Modify" className="yellow-btn" />
    </TopSection>
    {/* deserts */}
    <TopSection>
      <Button name="Cheesy Bread" className="tan-btn" />
      <Button name="Cinnamon Wheel" className="tan-btn" />
      <Button name="Choc Chip Dough" className="tan-btn" />
      <Button name="5 Cheese Bread" className="tan-btn" />
      <Button name="Pumpkin Spice Bars" className="tan-btn" />
      <Button name="Choc x3 Dough" className="tan-btn" />
      <Button name="" className="tan-btn" />
      <Button name="S'mores Bars" className="tan-btn" />
      <Button name="Cowboy Dough" className="tan-btn" />
    </TopSection>
    {/* other */}
    <BottomSection>
      <Button name="" className="blue-btn" />
      <Button name="" className="blue-btn" />
      <Button name="" className="blue-btn" />
      <Button name="" className="blue-btn" />
      <Button name="MM Pep 1" className="blue-btn" />
      <Button name="MM Pep Free" className="blue-btn" />
      <Button name="MM Chz 1" className="blue-btn" />
      <Button name="MM Chz Free" className="blue-btn" />
      <Button name="2L Soda" className="blue-btn" />
      <Button name="" className="blue-btn" />
      <Button name="20 OZ Soda" className="blue-btn" />
      <Button name="Bottled Water" className="blue-btn" />
      <Button name="Sides" className="orange-btn" />
      <Button name="Retail" className="orange-btn" />
      <Button name="" className="orange-btn" />
      <Button name="Other Beverages" className="orange-btn" />
    </BottomSection>
    {/* seasonal pizzas */}
    <BottomSection>
      <Button name="Cheese Fave" className="" />
      <Button name="Pep Fave" className="" />
      <Button name="Sausage Fave" className="" />
      <Button name="Heartbaker" className="" />
      <Button name="LTN Chz non-mod" className="" />
      <Button name="LTN Pep non-mod" className="" />
      <Button name="LTN Ssg non-mod" className="" />
      <Button name="Heartbaker Cheese" className="" />
      <Button name="" className="green2-btn" />
      <Button name="" className="green2-btn" />
      <Button name="L Jack O Lantern" className="" />
      <Button name="F Jack O Lantern" className="" />
      <Button name="FTN Chz non-mod" className="" />
      <Button name="FTN Pep non-mod" className="" />
      <Button name="FTN Ssg non-mod" className="" />
      <Link to="/menu"><Button name="Back To Home" className="red2-btn" /></Link>
    </BottomSection>
  </Container>
);

export default AosView;
