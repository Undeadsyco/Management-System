import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes, { checkPropTypes } from 'prop-types';

import Button from '../../../../../components/button';

const Container = styled.div`
  box-sizing: border-box;
  padding: 30px 30px 30px 30px;
  width: 100%;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100%;
  gap: 30px;
`;

const Row = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: 100%;
  gap: 10px;
`;

const DiscountTypes = ({ view, setView }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openPad = useCallback(
    (discountType) => {
      dispatch({ type: 'SET_NUMBER_PAD_TYPE', data: { type: 'discount_$', discountType } });
      navigate('/numberPad');
    },
  );

  const openView = useCallback(
    (discountType) => {
      dispatch({ type: 'SET_DISCOUNT_TYPE', discountType });
      setView('doller');
    },
  );

  const discount = useCallback(
    (discountType) => {
      dispatch({ type: 'SET_NUMBER_PAD_TYPE', data: { type: 'discount_%', discountType } });
      navigate('/numberPad');
    },
  );

  return (
    <Container style={view === 'main' ? { display: 'grid' } : { display: 'none' }}>
      <Row>
        <Button name="SBP Print $" className="blue-btn" action={() => openView('SBP Print $')} />
        <Button name="TV/In Store $" className="blue-btn" action={() => openView('TV/In Store $')} />
        <Button name="Local $" className="blue-btn" action={() => openView('Local $')} />
        <Button name="Online/E-Club $" className="blue-btn" action={() => openView('Online/E-Club $')} />
        <Button name="Text Message $" className="blue-btn" action={() => openView('Text Message $')} />
        <Button name="Special Tracking $" className="blue-btn" action={() => openView('Special Tracking $')} />
        <Button name="Institutional $" className="red-btn" action={() => openView('Institutional $')} />
      </Row>
      <Row>
        <Button name="SBP Print" className="grey-btn" action={() => openPad('SBP Print')} />
        <Button name="TV/In Store" className="grey-btn" action={() => openPad('TV/In Store')} />
        <Button name="Local" className="grey-btn" action={() => openPad('Local')} />
        <Button name="Online/E-Club" className="grey-btn" action={() => openPad('Online/E-Club')} />
        <Button name="Text Message" className="grey-btn" action={() => openPad('Text Message')} />
        <Button name="Special Tracking" className="grey-btn" action={() => openPad('Special Tracking')} />
        <Button name="Institutional %" className="red-btn" action={() => discount('Institutional %')} />
      </Row>
      <Row>
        <Button name="Manager %" className="red2-btn" action={() => discount('Manager %')} />
        <Button name="Employee %" className="red2-btn" action={() => discount('Employee %')} />
        <Button name="Business %" className="red2-btn" action={() => discount('Business %')} />
        <Button name="Online/E-Club %" className="yellow2-btn" action={() => discount('Online/E-Club %')} />
        <Button name="Text Msg %" className="yellow2-btn" action={() => discount('Text Msg %')} />
        <Button name="Back To Menu" className="red3-btn" action={() => navigate('/menu')} />
        <Link to="/menu/tenders">
          <Button name="Back To TENDERS" className="green2-btn" />
        </Link>
      </Row>
    </Container>
  );
};

DiscountTypes.defaultProps = {
  view: 'main',
  setView: checkPropTypes(),
};

DiscountTypes.propTypes = {
  view: PropTypes.string,
  setView: PropTypes.func,
};

export default DiscountTypes;
