// import { useContext } from "react";
// import { GlobalContext } from "../../context/global";

import verificationBg from '../../../assets/verification_bg.png';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url(${verificationBg});
    background-repeat: no-repeat;
    background-size: 98% 88%;
    background-position: center;
`;

const VerificationMentee = () => {
    const history = useHistory();

  return (
    <Container onClick={() => history.push("/course-mentee")}/>
  );
};

export default VerificationMentee;