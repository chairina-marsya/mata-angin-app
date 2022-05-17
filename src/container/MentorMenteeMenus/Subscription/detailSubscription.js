// import { useContext } from "react";
// import { GlobalContext } from "../../context/global";

import detailCourse from '../../../assets/detailSubscription.png';
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

const DetailSubscription = () => {
    const history = useHistory();
  return (
      <Container>
        <div
        onClick={() => (history.push('/payment'))}
        style={{
          margin: '25vh 59vw',
          width: '123px',
          color:'transparent'
        }}
        >
        <p >test</p>
        </div>
      </Container>
  );
};

export default DetailSubscription;