// import { useContext } from "react";
// import { GlobalContext } from "../../context/global";

import detailMentor from '../../../assets/invoice.png';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url(${detailMentor});
    background-repeat: no-repeat;
    background-size: 98% 88%;
    background-position: center;
`;

const Invoice = () => {
    const history = useHistory();
  return (
      <Container onClick={() => history.push('/subscription')}/>
  );
};

export default Invoice;