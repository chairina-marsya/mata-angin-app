import styled from 'styled-components';

export const InputGroupContainer = styled.div`
  margin: ${(props) => (props.margin ? props.margin : '32px 0')};
  width: ${(props) => (props.width ? props.width : '100%')};
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${(props) => (props.gap ? props.gap : '20px 32px')};
`;

export const InputContainer = styled.div`
  width: auto;
  height: 44px;
  display: flex;
  align-items: center;
  place-items: ${(props) => (props.placeItems ? props.placeItems : 'baseline')};
`;

export const Separator = styled.div`
  width: ${(props) => (props.width ? props.width : '20px')};
`;

