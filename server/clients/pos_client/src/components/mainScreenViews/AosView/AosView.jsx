import { Link } from 'react-router-dom';

import Button from '../../globalComponents/button';
import Container from './styles';

function AosView() {
  return (
    <Container>
      <div className="saladContainer">
        <Button btnText="CYO Salad" />
        <Button btnText="" />
        <Button btnText="Chk Caeser Salad" />
        <Button btnText="Club Salad" />
        <Button btnText="Garden Salad" />
        <Button btnText="Italian Salad" />
        <Button btnText="Modify" />
        <Button btnText="Chk Bcn Art Salad" />
        <Button btnText="Medt Salad" />
      </div>
      <div className="sideContainer">
        <Button btnText="Cheesy Bread" />
        <Button btnText="Cinnamon Wheel" />
        <Button btnText="Choc Chip Dough" />
        <Button btnText="5 Cheese Bread" />
        <Button btnText="Pumpkin Spice Bars" />
        <Button btnText="Choc x3 Dough" />
        <Button btnText="" />
        <Button btnText="S'mores BarsS" />
        <Button btnText="Cowboy Dough" />
      </div>
      <div>
        <Button btnText="" />
        <Button btnText="" />
        <Button btnText="" />
        <Button btnText="" />
        <Button btnText="MM Pep" />
        <Button btnText="MM Pep Free" />
        <Button btnText="MM Cheese" />
        <Button btnText="MM cheese Free" />
        <Button btnText="2L Sode" />
        <Button btnText="" />
        <Button btnText="20 OZ Sode" />
        <Button btnText="Bottled Water" />
        <Button btnText="Sides" />
        <Button btnText="Retail" />
        <Button btnText="" />
        <Button btnText="Other Beverages" />
      </div>
      <div>
        <Button btnText="Cheese Fave" />
        <Button btnText="Pep Fave" />
        <Button btnText="Sausage Fave" />
        <Button btnText="Heartbaker" />
        <Button btnText="LTN Chz non-mod" />
        <Button btnText="LTN Pep non-mod" />
        <Button btnText="LTN Ssg non-mod" />
        <Button btnText="Heartbaker Cheese" />
        <Button btnText="" />
        <Button btnText="" />
        <Button btnText="L Jack O Lantern" />
        <Button btnText="F Jack O Lantern" />
        <Button btnText="FTN Chz non-mod" />
        <Button btnText="FTN Pep non-mod" />
        <Button btnText="FTN Ssg non-mod" />
        <Link to='/menu'><Button btnText="Back" /></Link>
      </div>
    </Container>
  );
}

export default AosView;
