/* eslint-disable react/forbid-prop-types */
import styled from 'styled-components';
import PropTypes, { checkPropTypes } from 'prop-types';

const StyledBtn = styled.button`
  width: ${(props) => props.btnStyles.width || '100%'};
  height: ${(props) => props.btnStyles.height || '100%'};
  border: ${(props) => props.btnStyles.border || '2px solid black'};
  color: ${(props) => props.btnStyles.color};
  background-color: ${(props) => props.btnStyles.bgColor};
  font-size: ${(props) => props.btnStyles.fontSize};
  font-weight: ${(props) => props.btnStyles.fontWeight};

  &.nested {
    grid-column: ${(props) => props.btnStyles.colSpan};
    grid-row: ${(props) => props.btnStyles.rowSpan};
  }
`;

function Button(props) {
  const {
    btnText, className, btnStyles, btnAction,
  } = props;

  return (
    <StyledBtn
      className={className}
      btnStyles={btnStyles}
      onClick={btnAction}
    >
      {btnText}
    </StyledBtn>
  );
}

Button.defaultProps = {
  btnText: '',
  className: '',
  btnStyles: {},
  btnAction: checkPropTypes(),
};

Button.propTypes = {
  btnText: PropTypes.string,
  className: PropTypes.string,
  btnStyles: PropTypes.object,
  btnAction: PropTypes.func,
};

export default Button;
