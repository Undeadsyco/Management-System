import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import {
  CommandBtns, OrderView, SizeBtns, MenuView, ViewBtns,
} from './components';

import {
  Container, StyledP, OrderContainer, MenuContainer,
} from './styles';

const MenuScreen = (props) => {
  const { user } = props;
  const [time] = useState(new Date());
  const [hours, setHours] = useState(time.getHours());
  const [minuets, setMinuets] = useState(time.getMinutes());

  const displayClock = () => {
    const display = new Date();
    setHours(display.getHours());
    setMinuets(display.getMinutes());
    return setTimeout(displayClock, 1000);
  };

  useEffect(() => {
    const timer = displayClock();
    return () => {
      clearTimeout(timer);
    };
  }, [user]);

  return (
    <div>
      <Container>
        <OrderContainer>
          <OrderView {...props} />
          <CommandBtns {...props} />
        </OrderContainer>
        <MenuContainer>
          <SizeBtns {...props} />
          <MenuView {...props} />
          <ViewBtns {...props} />
        </MenuContainer>
      </Container>
      <div style={{ border: '2px solid black' }}>
        <StyledP>
          {`
            ${hours <= 12 ? hours : hours - 12}:${minuets < 10 ? `0${minuets}` : minuets}
            ${hours < 12 ? 'am' : 'pm'}
          `}
        </StyledP>
        <StyledP>{user?.Position}</StyledP>
        <StyledP>{user?.Employee_Name}</StyledP>
      </div>
    </div>
  );
};

MenuScreen.defaultProps = {
  user: undefined,
};

MenuScreen.propTypes = {
  user: PropTypes.object,
};

export default MenuScreen;
