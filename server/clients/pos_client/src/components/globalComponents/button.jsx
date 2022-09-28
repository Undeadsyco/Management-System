import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBtn = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  color: ${(props) => `${props.color}`};
  background-color: ${(props) => `${props.bgColor}`};
  font-weight: 600;

  &.nested {
    grid-column: ${(props) => props.colSpan};
    grid-row: ${(props) => props.rowSpan};
  }
`;

function Button(props) {
  const {
    btnText, btnColor, bgBtnColor, btnAction, className, rowSpan, colSpan, supText,
  } = props;
  return (
    <StyledBtn
      className={className}
      color={btnColor}
      bgColor={bgBtnColor}
      onClick={btnAction}
      rowSpan={rowSpan}
      colSpan={colSpan}
    >
      {supText ? <sup>{supText}</sup> : null}
      {btnText}
    </StyledBtn>
  );
}

Button.defaultProps = {
  btnText: '',
  supText: '',
  btnColor: '',
  bgBtnColor: '',
  className: '',
  colSpan: '',
  rowSpan: '',
  btnAction: undefined,
};

Button.propTypes = {
  btnText: PropTypes.string,
  supText: PropTypes.string,
  btnColor: PropTypes.string,
  bgBtnColor: PropTypes.string,
  className: PropTypes.string,
  colSpan: PropTypes.string,
  rowSpan: PropTypes.string,
  btnAction: PropTypes.func,
};

export default Button;
