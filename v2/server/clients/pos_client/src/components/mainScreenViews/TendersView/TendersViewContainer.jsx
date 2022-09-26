import { Route, Routes, useNavigate } from 'react-router-dom';

import TendersView from './TendersView';
import NumberPad from '../../globalComponents/numberPad';

function TendersViewContainer() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<TendersView />} />
      <Route
        path="/pinpad"
        element={<NumberPad
          submit={undefined}
          cancel={() => navigate('/menu/tenders')}
          rowSpan="3/9"
          colSpan="6/10"
        />}
      />
    </Routes>
  );
}

export default TendersViewContainer;
