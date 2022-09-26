/* eslint-disable no-unneeded-ternary */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 20%;
  font-weight: bold;
  /* background-color: inherit; */
`;

const Button = (props) => {
  const {
    type, className, action, name, style, children,
  } = props;

  return (
    <StyledButton
      type={type ? 'submit' : 'button'}
      className={className}
      onClick={action}
      style={style}
    >
      {children ? children : name}
    </StyledButton>
  );
};

Button.defaultProps = {
  className: undefined,
  action: undefined,
  name: undefined,
  type: false,
  style: undefined,
  children: undefined,
};

Button.propTypes = {
  className: PropTypes.string,
  action: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.array,
};

export default Button;
