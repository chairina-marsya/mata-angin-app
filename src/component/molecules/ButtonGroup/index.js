import React from 'react';
import PropTypes from 'prop-types';

import ContainerButton from './styled';
import ButtonAtom from '../../atoms/Button';

const buttonUi = (values, onClick) => (
  <ButtonAtom
    id={values.id}
    buttonText={values.label}
    variant={values.variant}
    color={values.color}
    startIcon={values.startIcon}
    endIcon={values.endIcon}
    width={values.width}
    height={values.height}
    fontSize={values.fontSize}
    btncolor={values.btncolor}
    bordercolor={values.bordercolor}
    disabled={values.disabled}
    onClick={onClick}
    fullWidth={values.fullWidth}
  />
);

export default function ButtonGroup(props) {
  const {
    buttonGroup, onClick, display, justifyContent, buttonGap, width,
  } = props;
  return (
    <ContainerButton
      display={display}
      justifyContent={justifyContent}
      buttonGap={buttonGap}
      width={width}
    >
      {buttonGroup.length > 0 && buttonGroup.map((val) => buttonUi(val, onClick))}
    </ContainerButton>
  );
}

ButtonGroup.propTypes = {
  buttonGroup: PropTypes.arrayOf(PropTypes.any),
  onClick: PropTypes.func,
  display: PropTypes.string,
  justifyContent: PropTypes.string,
  buttonGap: PropTypes.string,
  width: PropTypes.string,
};

ButtonGroup.defaultProps = {
  buttonGroup: [],
  onClick: () => null,
  display: '',
  justifyContent: '',
  buttonGap: '8px',
  width: '100%',
};
