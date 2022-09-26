import { Link, useNavigate } from 'react-router-dom';

import Button from '../../globalComponents/button';
import { DiscountViewContainer as Container } from './styles';

function DiscountView() {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <Button
          className="blueBtn"
          btnText="SBP Print $"
          btnAction={() => navigate('/menu/discounts/amounts', { state: { discountType: 'SBP Print $' } })}
        />
        <Button
          className="blueBtn"
          btnText="TV / In Store $"
          btnAction={() => navigate('/menu/discounts/amounts', { state: { discountType: 'TV / In Store $' } })}
        />
        <Button
          className="blueBtn"
          btnText="local $"
          btnAction={() => navigate('/menu/discounts/amounts', { state: { discountType: 'local $' } })}
        />
        <Button
          className="blueBtn"
          btnText="Online/E-Club $"
          btnAction={() => navigate('/menu/discounts/amounts', { state: { discountType: 'Online/E-Club $' } })}
        />
        <Button
          className="blueBtn"
          btnText="Text Message $"
          btnAction={() => navigate('/menu/discounts/amounts', { state: { discountType: 'Text Message $' } })}
        />
        <Button
          className="blueBtn"
          btnText="Special Tracking $"
          btnAction={() => navigate('/menu/discounts/amounts', { state: { discountType: 'Special Tracking $' } })}
        />
        <Button
          className="crimsonBTn"
          btnText="Institional $"
          btnAction={() => navigate('/menu/discounts/amounts', { state: { discountType: 'Institional $' } })}
        />
      </div>
      <div>
        <Button
          className="greyBtn"
          btnText="SBP Print"
          btnAction={() => navigate('/menu/discounts/numberpad', { state: { discountType: 'SBP Print' } })}
        />
        <Button
          className="greyBtn"
          btnText="TV / In Store"
          btnAction={() => navigate('/menu/discounts/numberpad', { state: { discountType: 'TV / In Store' } })}
        />
        <Button
          className="greyBtn"
          btnText="local"
          btnAction={() => navigate('/menu/discounts/numberpad', { state: { discountType: 'local' } })}
        />
        <Button
          className="greyBtn"
          btnText="Online/E-Club"
          btnAction={() => navigate('/menu/discounts/numberpad', { state: { discountType: 'Online/E-Club' } })}
        />
        <Button
          className="greyBtn"
          btnText="Text Message"
          btnAction={() => navigate('/menu/discounts/numberpad', { state: { discountType: 'Text Message' } })}
        />
        <Button
          className="greyBtn"
          btnText="Special Tracking"
          btnAction={() => navigate('/menu/discounts/numberpad', { state: { discountType: 'Special Tracking' } })}
        />
        <Button
          className="crimsonBTn"
          btnText="Institional %"
          btnAction={() => navigate('/menu/discounts/percentagepad', { state: { discountType: 'Institional %' } })}
        />
      </div>
      <div>
        <Button
          className="crimsonBTn"
          btnText="Manager %"
          btnAction={() => navigate('/menu/discounts/percentagepad', { state: { discountType: 'Manager %' } })}
        />
        <Button
          className="crimsonBTn"
          btnText="Employee %"
          btnAction={() => navigate('/menu/discounts/percentagepad', { state: { discountType: 'Employee %' } })}
        />
        <Button
          className="crimsonBTn"
          btnText="Business %"
          btnAction={() => navigate('/menu/discounts/percentagepad', { state: { discountType: 'Business %' } })}
        />
        <Button
          className="yellowBtn"
          btnText="Online/E-Club %"
          btnAction={() => navigate('/menu/discounts/percentagepad', { state: { discountType: 'Online/E-Club %' } })}
        />
        <Button
          className="yellowBtn"
          btnText="Text Message %"
          btnAction={() => navigate('/menu/discounts/percentagepad', { state: { discountType: 'Text Message %' } })}
        />
        <Link to="/menu"><Button className="greenBtn" btnText="Back To Menu" /></Link>
        <Link to="/menu/tenders"><Button className="redBtn" btnText="Back To Tenders" /></Link>
      </div>
    </Container>
  );
}

export default DiscountView;
