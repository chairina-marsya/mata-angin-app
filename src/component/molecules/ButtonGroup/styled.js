import styled from 'styled-components';

const ContainerButton = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.display ? props.display : 'column')};
  width: ${({ width }) => (width || '100%')};
  gap: ${({ buttonGap }) => buttonGap};
  justify-content: ${({ justifyContent }) => justifyContent || 'unset'};
`;

export default ContainerButton;
