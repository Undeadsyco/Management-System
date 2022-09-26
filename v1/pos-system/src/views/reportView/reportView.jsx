import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../components/button';

import {
  Container, HeaderRow, Table, Row,
} from './styles';

const ReportView = ({ reports, totalReport }) => {
  useEffect(() => {}, [reports, totalReport]);

  const navigate = useNavigate();

  return (
    <Container>
      <h1>Daily Report</h1>
      <HeaderRow>
        <h2>Time:</h2>
        <h2>SubTotal:</h2>
        <h2>GrossTotal:</h2>
        <h2>Tax:</h2>
        <h2>Total:</h2>
      </HeaderRow>
      <Table>
        {reports?.map((item) => {
          const {
            subTotal, tax, total, grossTotal,
          } = item.report[0];

          return (
            <Row>
              <div>
                {item.time.hour <= 12 ? item.time.hour : item.time.hour - 12}
                :
                {item.time.minutes ? item.time.minutes : '00'}
                {item.time.hour <= 12 ? ' AM' : ' PM'}
              </div>
              <div>
                $
                {subTotal ? subTotal.toFixed(2) : '0.00'}
              </div>
              <div>
                $
                {grossTotal ? grossTotal.toFixed(2) : '0.00'}
              </div>
              <div>
                $
                {tax ? tax.toFixed(2) : '0.00'}
              </div>
              <div>
                $
                {total ? total.toFixed(2) : '0.00'}
              </div>
            </Row>
          );
        })}
        <Row style={{ marginTop: '20px' }}>
          <div>Daily Total:</div>
          <div>
            $
            {totalReport.subTotal ? totalReport.subTotal.toFixed(2) : null}
          </div>
          <div>
            $
            {totalReport.grossTotal ? totalReport.grossTotal.toFixed(2) : null}
          </div>
          <div>
            $
            {totalReport.tax ? totalReport.tax.toFixed(2) : null}
          </div>
          <div>
            $
            {totalReport.total ? totalReport.total.toFixed(2) : null}
          </div>
        </Row>
      </Table>
      <div>
        <Button
          style={{ width: '100px', height: '50px' }}
          name="Back"
          action={() => navigate('/menu')}
        />
      </div>
    </Container>
  );
};

ReportView.defaultProps = {
  reports: [],
  totalReport: {},
};

ReportView.propTypes = {
  reports: PropTypes.array,
  totalReport: PropTypes.object,
};

export default ReportView;
