import React, { useState } from 'react';
import * as Styles from '../../../component/templates/LandingPage/styles';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import TextAtom from '../../../component/atoms/Text';
import ButtonGroup from '../../../component/molecules/ButtonGroup';
import { useHistory } from 'react-router-dom';
import ButtonAtom from '../../../component/atoms/Button';

export default function Feedback() {
  const history = useHistory();
  const [OpenModal, setOpenModal] = useState(false);

  const buttonGroupData = [
    {
      id:'preview',
      label: 'Preview',
      variant: 'filled',
      color: 'white',
      bordercolor: 'blue',
      btncolor: 'blue',
      fontSize: '14px',
      fullwidth: true,
    },
  ]

  const cardDataAll = [{
    id: 'user-1',
    roleImgUrl: 'https://images.pexels.com/photos/34600/pexels-photo.jpg',
    role: 'Data Analyst',
    name: 'Jackson Satria',
    time: '24 April 2022 at 9.30 AM',
    message: 'Good Student, always active in mentoring session!',
  },
  {
    id: 'user-2',
    roleImgUrl: 'https://images.pexels.com/photos/34600/pexels-photo.jpg',
    role: 'Data Analyst',
    name: 'Jackson Satria',
    time: '24 April 2022 at 9.30 AM',
    message: 'Good Student, always active in mentoring session!',
  }]

  const createCourse = () => {
    history.push('/create-feedback');
  } 

  return (
    <Styles.Container>
    <div style={{display: 'flex', flexDirection:'row', gap: '20px', padding: '20px', justifyContent: 'flex-end'}}>
      <ButtonAtom
          onClick={() => (createCourse())}
          buttonText="Create Feedback"
          variant="contained"
          width='auto'
      />
    </div>
    <Styles.NonCardWrapper isCourse>
      {cardDataAll && cardDataAll?.map((item) => (
        <Card sx={{border: '1px black', width: '100%', height: 'auto', margin: '10px 20px' }}>
          <Styles.ProfileSection>
              <Styles.InnerProfile>
              <img src={item.roleImgUrl} alt={`role ${item.id}`} style={{ width: '10vw', height: '10vh' }} />
              <Styles.InnerUser>
                <TextAtom size='16px' color='grey' margin='5px 0'>
                  {item.role}
                </TextAtom>
                <TextAtom size='14px' color='gray' margin='5px 0'>
                  {item.name}
                </TextAtom>
                <TextAtom size='14px' color='gray' margin='5px 0'>
                  {item.time}
                </TextAtom>
                <TextAtom size='20px' color='black' weight='bold' margin='10px 0'>
                  {item.message}
                </TextAtom>
              </Styles.InnerUser>
              </Styles.InnerProfile>
            </Styles.ProfileSection>
          </Card>
      ))}
    </Styles.NonCardWrapper>
    </Styles.Container>
  );
}