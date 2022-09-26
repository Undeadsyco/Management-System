import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import {
  MenuBtns, StuffedMenu, ToppingList, ToppingView, XlMenu,
} from './components';

import {
  DiscountView, TendersView, DeliveryView, CommentView, CrewFunctions, ManagerFunctions, AosView,
} from './views';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 25% 75%;
`;

const MenuView = (props) => (
  <Container>
    <Routes>
      <Route
        path="/*"
        element={(
          <>
            <ToppingList {...props} />
            <Routes>
              <Route path="/" element={<MenuBtns {...props} />} />
              <Route path="/toppings" element={<ToppingView {...props} />} />
              <Route path="/xl" element={<XlMenu {...props} />} />
              <Route path="/stuffed" element={<StuffedMenu {...props} />} />
            </Routes>
          </>
        )}
      />
      <Route path="/other" element={<AosView />} />
      <Route path="/tenders" element={<TendersView {...props} />} />
      <Route path="/discount" element={<DiscountView {...props} />} />
      <Route path="/delivery" element={<DeliveryView />} />
      <Route path="/comment" element={<CommentView {...props} />} />
      <Route path="/crew" element={<CrewFunctions {...props} />} />
      <Route path="/manager" element={<ManagerFunctions {...props} />} />
    </Routes>
  </Container>
);

export default MenuView;
