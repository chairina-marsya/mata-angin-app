// import { useContext } from "react";
// import { GlobalContext } from "../../context/global";

import detailCourse from '../../../assets/detailCourse.png';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url(${detailCourse});
    background-repeat: no-repeat;
    background-size: 98% 88%;
    background-position: center;
`;

const DetailCourse = () => {
    const history = useHistory();
  return (
      <Container>
        <div
        onClick={() => (history.push('/join-course'))}
        style={{
        margin: '63vh 34vw',
        width: '120px',
        color:'transparent'
        }}
        >
        <p >test</p>
        </div>
      </Container>
  );
};

export default DetailCourse;