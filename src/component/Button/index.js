import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

export default function ButtonAtom(props) {
    const {
      variant,
      color,
      onClick,
      buttonText,
    } = props;

return (
    <Button
    variant={variant}
    color={color}
    onClick={() => onClick}
    >
        {buttonText}
    </Button>
  );
}

ButtonAtom.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    buttonText: PropTypes.string,
};
  
ButtonAtom.defaultProps = {
    variant: 'outline',
    color: 'yellow',
    onClick : () => {},
    buttonText: PropTypes.string,
};