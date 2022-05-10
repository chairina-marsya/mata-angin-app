import styled from 'styled-components';
import * as Color from '../../../helpers/colors';
import mataAnginLogo from '../../../assets/mata-angin-logo.png'

export const PlatformLogo = styled.div`
  background-image: url(${mataAnginLogo});
  width: 100%;
  height: 15%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  object-fit: contain;
`;

export const InnerProfile = styled.div`
  display: flex; 
  flex-direction: row;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.isDrawer ? Color.blue : 'transparent')};
`;

export const InnerUser = styled.div`
  margin-left: 10px;
`;