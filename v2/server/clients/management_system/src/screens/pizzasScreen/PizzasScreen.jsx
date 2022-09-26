import { Routes, Route } from 'react-router-dom';

import {
  LinkContainer, ManageDough, ManagePizzas, ManageSections,
} from './views';
import Container from './styles';

function PizzasScreen() {
  return (
    <Container>
      <LinkContainer />
      <Routes>
        <Route path="/manage_dough/*" element={<ManageDough />} />
        <Route path="/manage_section/*" element={<ManageSections />} />
        <Route path="/manage_pizza/*" element={<ManagePizzas />} />
      </Routes>
    </Container>
  );
}

export default PizzasScreen;
