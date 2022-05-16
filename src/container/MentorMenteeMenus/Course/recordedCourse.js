// import { useContext } from "react";
// import { GlobalContext } from "../../context/global";

import RecordedRoom from '../../../assets/RecordedRoom.png';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 85vh;
    background-image: url(${RecordedRoom});
    background-repeat: no-repeat;
    background-size: 97% 90%;
    background-position: center;
`;

const RecordedCourse = () => {
  return (
    <Container />
  );
};

export default RecordedCourse;