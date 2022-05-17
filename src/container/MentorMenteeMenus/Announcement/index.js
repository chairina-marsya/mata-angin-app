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

export default function Announcement() {
  const history = useHistory();

  const cardDataAll = [{
    id: 'user-1',
    category: 'Course',
    title: 'Your course will be expired on Monday, Stay updated with new Course',
    message: 'Hi Stev! ...',
    time: '24 April 2022 at 9.30 AM',
  },
  {
    id: 'user-2',
    category: 'Account',
    title: 'Your account has new Promo',
    message: 'Hi Stev! ...',
    time: '24 April 2022 at 9.30 AM',
  }]

  return (
    <Styles.Container>
    <Styles.NonCardWrapper isCourse style={{ marginTop: '10px' }}>
      {cardDataAll && cardDataAll?.map((item) => (
        <Card sx={{border: '1px black', width: '100%', height: 'auto', margin: '10px 20px', padding: '15px' }}>
            <ButtonAtom
                buttonText={item.category}
                variant="contained"
                width='auto'
                btncolor='rgba(218, 238, 255, 1)'
                bordercolor='blue'
                color='blue'
                fontSize='10px'
            />
            <TextAtom padding='5px 0' size='14px' textAlign='justify' color='black' weight='bold'>
              {item.title}
            </TextAtom>
            <TextAtom padding='5px 0' size='16px' textAlign='justify' color='grey'>
              {item.message}
            </TextAtom>
            <TextAtom padding='5px 0' size='10px' textAlign='justify' color='grey'>
              {item.time}
            </TextAtom>
          </Card>
      ))}
    </Styles.NonCardWrapper>
    </Styles.Container>
  );
}