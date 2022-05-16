// import { useContext } from "react";
// import { GlobalContext } from "../../context/global";

import detailCourseMentor from '../../../assets/detailCourseMentor.png';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { color } from '@mui/system';
import BasicModal from '../../../component/organisms/Modal';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url(${detailCourseMentor});
    background-repeat: no-repeat;
    background-size: 98% 88%;
    background-position: center;
`;

const DetailCourseMentor = () => {
  const [OpenModal, setOpenModal] = useState(false);
  const history = useHistory();

  return (
      <Container>
        <div
        id='1'
        onClick={() => {}}
        style={{
          width: '112px',
          top: '40vh',
          left: '52.5vw',
          position: 'absolute',
          color:'transparent'
        }}
        >
        <p >edit</p>
        </div>
        <div
        id='2'
        onClick={() => (setOpenModal(true))}
        style={{
          width: '112px',
          top: '40vh',
          left: '59.5vw',
          position: 'absolute',
          color:'transparent'
        }}
        >
        <p >delete</p>
        </div>
        <div
        id='3'
        onClick={() => (history.push('/join-course'))}
        style={{
        width: '280px',
        top: '83vh',
        left: '18vw',
        position: 'absolute',
        color:'transparent'
        }}
        >
        <p >join</p>
        </div>
        <div
        id='4'
        onClick={() => (history.push('/recorded-course'))}
        style={{
          width: '280px',
          top: '88vh',
          left: '18vw',
          position: 'absolute',
          color:'transparent'
        }}
        >
        <p >view</p>
        </div>
        
    {OpenModal && (
      <BasicModal
      confirmText = 'Are you sure want to delete this data ?'
      handleButtonConfirm = {() => (history.push('/course-mentor'))}
      handleCancelConfirm = {() => setOpenModal(false)}
      buttonCofirm = 'Delete'
    />
    )}
      </Container>
  );
};

export default DetailCourseMentor;