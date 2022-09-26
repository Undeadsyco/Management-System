// dependencies
import { Route, Routes } from 'react-router-dom';

// components
import {
  CommentView, DeliveryView, DiscountView, WalkInView,
  TendersView, CrewView, ManagerView, AosView,
} from '../../components/mainScreenViews';
import {
  SizeBar, MenuView, CommandBar, CommandBox, OrderView,
} from '../../components/mainScreenComponents';
import Container from './styles';

function MainScreen() {
  return (
    <Container>
      <OrderView />
      <CommandBox />
      <SizeBar />
      <Routes>
        <Route path="/*" element={<MenuView />} />
        <Route path="/comment/*" element={<CommentView />} />
        <Route path="/discounts/*" element={<DiscountView />} />
        <Route path="/delivery" element={<DeliveryView />} />
        <Route path="/walkin" element={<WalkInView />} />
        <Route path="/tenders/*" element={<TendersView />} />
        <Route path="/crew" element={<CrewView />} />
        <Route path="/manager/*" element={<ManagerView />} />
        <Route path="/aos" element={<AosView />} />
      </Routes>
      <CommandBar />
    </Container>
  );
}

export default MainScreen;
