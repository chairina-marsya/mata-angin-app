// import { useContext } from "react";
// import { GlobalContext } from "../../context/global";

import MyProfile from '../../../assets/profile_bg.png';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url(${MyProfile});
    background-repeat: no-repeat;
    background-position: top;
`;

const UserProfile = () => {
    const history = useHistory();
  return (
      <div style={{ marginTop: '4vh' }}>
      <Container />
      </div>
  );
};

export default UserProfile;