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

export default function Discussion() {
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
    title: 'How AI will shape the Metaverse',
    author: 'Madisson  - 11 hours ago',
    message: 'Hi guys, The Metaverse has become one of the hottest technology and socioeconomic topic. Combining different technologies like VR, 3D animation, blockchain and many others, lots of companies are already working on creating services for this new digital world  .....',
    views: 'View 100 Comments',
  },
  {
    id: 'user-2',
    title: 'How AI will shape the Metaverse',
    author: 'Madisson  - 11 hours ago',
    message: 'Hi guys, The Metaverse has become one of the hottest technology and socioeconomic topic. Combining different technologies like VR, 3D animation, blockchain and many others, lots of companies are already working on creating services for this new digital world  .....',
    views: 'View 100 Comments',
  }]

  const onClick = (id) => {
    switch (id) {
      case 'preview':
        history.push('/detail-course-mentor');
        break;
      default:
        break;
    }
  }

  const createCourse = () => {
    history.push('/create-discussion');
  } 

  return (
    <Styles.Container>
    <div style={{display: 'flex', flexDirection:'row', gap: '20px', padding: '20px', justifyContent: 'flex-end'}}>
      <ButtonAtom
          onClick={() => (createCourse())}
          buttonText="Create Discussion"
          variant="contained"
          width='auto'
      />
    </div>
    <Styles.NonCardWrapper isCourse>
      {cardDataAll && cardDataAll?.map((item) => (
        <Card sx={{border: '1px black', width: '100%', height: 'auto', margin: '10px 20px' }}>
          <Styles.ProfileSection isCourse>
              <Styles.InnerProfile>
              <AccountCircleIcon />
              <Styles.InnerUser>
                <TextAtom size='16px' color='grey'>
                  {item.title}
                </TextAtom>
                <TextAtom size='10px' color='blue'>
                  {item.author}
                </TextAtom>
              </Styles.InnerUser>
              </Styles.InnerProfile>
          </Styles.ProfileSection>
            <TextAtom padding='20px 20px 20px 15px' size='md' textAlign='justify' color='grey'>
              {item.message}
            </TextAtom>
            <TextAtom padding='0px 20px 10px 15px' size='md' textAlign='justify' color='blue'>
              {item.views}
            </TextAtom>
          </Card>
      ))}
    </Styles.NonCardWrapper>
    </Styles.Container>
  );
}