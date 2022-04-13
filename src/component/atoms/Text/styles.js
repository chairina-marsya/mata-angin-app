import styled from 'styled-components';

const handleSize = (size) => {
  switch (size) {
    case 'xxxs':
      return '8px';
    case 'xxs':
      return '10px';
    case 'xs':
      return '12px';
    case 'sm':
      return '14px';
    case 'md':
      return '16px';
    case 'lg':
      return '18px';
    case 'xl':
      return '20px';
    case 'xxl':
      return '24px';
    default:
      return '34px';
  }
};

const TextGeneral = styled.p`
  font-size: ${({ size }) => handleSize(size)};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  visibility: ${({ visible }) => {
    if (visible) {
      return 'visible';
    }
    if (visible === false) {
      return 'hidden';
    }
    return 'visible';
  }};
  position: ${({ position }) => position || ''};
  right: ${({ right }) => right || ''};
  text-align: ${({ textAlign }) => textAlign || ''};
  white-space: ${(props) => (props.preWrap ? 'pre-wrap' : '')};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
`;

export default TextGeneral;
