import React from 'react';
import * as Styles from '../../../component/templates/LandingPage/styles';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import TextAtom from '../../../component/atoms/Text';
import ButtonGroup from '../../../component/molecules/ButtonGroup';
import { useHistory } from 'react-router-dom';

export default function Subscription() {
  const history = useHistory();

  const buttonGroupData = [
    {
      id:'1',
      label: 'Rp 230.000',
      variant: 'filled',
      btncolor:'#ECFFF8',
      bordercolor:'rgba(10, 207, 131, 1)',
      color:'rgba(10, 207, 131, 1)',
      fontSize: '14px',
      width: 'auto',
    },
    {
      id:'2',
      label: 'in 3 Month',
      variant: 'filled',
      btncolor:'rgba(218, 238, 255, 1)',
      bordercolor:'blue',
      color:'blue',
      fontSize: '14px',
      width: 'auto',
    },
  ]

  const buttonGroupData1 = [
    {
      id:'joinMeeting',
      label: 'Subscription',
      variant: 'filled',
      btncolor:'rgba(10, 207, 131, 1)',
      bordercolor:'rgba(10, 207, 131, 1)',
      color:'white',
      fontSize: '14px',
      fullWidth: true
    }
  ]

  const cardDataAll = [{
    id: 'user-1',
    role: 'Manager of Engineering',
    name: 'Alex Ackerman',
    subsNum: '320 Students',
    roleImgUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    buttons: buttonGroupData1,
  },{
    id: 'user-1',
    role: 'Manager of Engineering',
    name: 'Alex Ackerman',
    subsNum: '320 Students',
    roleImgUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    buttons: buttonGroupData1,
  },
]

  const onClick = (id) => {
    switch (id) {
      case 'joinMeeting':
        history.push('/detail-subscription');
        break;
      default:
        break;
    }
  }

  return (
    <Styles.Container>
    <Styles.CardWrapper isCourse>
      {cardDataAll && cardDataAll?.map((item) => (
        <Card sx={{border: '1px black', width: '20%', height: 'auto', marginTop: '20px', margin: '20px' }}>
          <img src={item.roleImgUrl} alt={`role ${item.id}`} style={{ width: '100%', height: '250px' }} />
            <TextAtom padding='15px' size='xl' textAlign='justify' color='grey' weight='bold'>
              {item.role}
            </TextAtom>
          <Styles.ProfileSection isCourse>
            <AccountCircleIcon />
            <TextAtom padding='0px 15px 10px 15px' size='md' textAlign='justify' color='grey'>
              {item.name}
            </TextAtom>
          </Styles.ProfileSection>
          <Styles.ProfileSection isCourse>
            <PeopleIcon />
            <TextAtom padding='0px 20px 10px 15px' size='md' textAlign='justify' color='grey'>
              {item.subsNum}
            </TextAtom>
          </Styles.ProfileSection>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px'}}>
          <ButtonGroup
            display='row'
            width='auto'
            buttonGap='27px'
            buttonGroup={buttonGroupData}
          />
          </div>
          <ButtonGroup
            display='row'
            width='auto'
            buttonGap='27px'
            buttonGroup={item.buttons}
            onClick={(id) => onClick(id)}
          />
          </Card>
      ))}
    </Styles.CardWrapper>
    </Styles.Container>
  );
}