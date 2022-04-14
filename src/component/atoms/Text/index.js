import React from 'react';
import PropTypes from 'prop-types';

import TextGeneral from './styles';

export default function TextAtom(props) {
  const {
    size, children, weight, color, margin, visible,
    fontFamily, position, right, textAlign, fontStyle,
    // preWrap: to convert \n to line breaks
    preWrap, padding,
  } = props;

  return (
    <TextGeneral
      weight={weight}
      size={size}
      color={color}
      margin={margin}
      visible={visible}
      fontFamily={fontFamily}
      position={position}
      right={right}
      textAlign={textAlign}
      preWrap={preWrap}
      fontStyle={fontStyle}
      padding={padding}
    >
      {children}
    </TextGeneral>
  );
}

TextAtom.propTypes = {
  size: PropTypes.oneOf([
    'xxxs', 'xxs', 'xs', 'sm', 'md',
    'lg', 'xl', 'xxl', '10px' ,'14px',
    '16px','18px','20px', '24px',
  ]),
  weight: PropTypes.oneOf(['normal', 'lighter', 'semibold', 'bold']),
  color: PropTypes.string,
  children: PropTypes.node,
  margin: PropTypes.string,
  visible: PropTypes.bool,
  fontFamily: PropTypes.string,
  position: PropTypes.string,
  right: PropTypes.string,
  textAlign: PropTypes.string,
  preWrap: PropTypes.bool,
  fontStyle: PropTypes.string,
};

TextAtom.defaultProps = {
  size: 'sm',
  weight: 'normal',
  color: '#000000',
  margin: '',
  visible: true,
  children: '',
  fontFamily: '',
  position: '',
  right: '',
  textAlign: 'unset',
  preWrap: false,
  fontStyle: 'normal',
};
