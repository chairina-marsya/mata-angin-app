import React, { useState } from 'react';
import * as Styles from '../../../component/templates/LandingPage/styles';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import TextAtom from '../../../component/atoms/Text';
import ButtonGroup from '../../../component/molecules/ButtonGroup';
import BasicModal from '../../../component/organisms/Modal';
import { useHistory } from 'react-router-dom';
import ButtonAtom from '../../../component/atoms/Button';

export default function MentorCourse() {
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
      fullWidth: true,
    },
  ]

  const cardDataAll = [{
    id: 'user-1',
    role: 'Data Analyst',
    name: 'Remy Sharp',
    subsNum: '123 Students',
    roleImgUrl: 'https://images.pexels.com/photos/34600/pexels-photo.jpg',
  },
  {
    id: 'user-2',
    role: 'Data Analyst',
    name: 'Remy Sharp',
    subsNum: '123 Students',
    roleImgUrl: 'https://images.pexels.com/photos/34600/pexels-photo.jpg',
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
    history.push('/create-course');
  } 

  return (
    <Styles.Container>
    <div style={{display: 'flex', flexDirection:'row', gap: '20px', padding: '20px', justifyContent: 'flex-end'}}>
      <ButtonAtom
          onClick={() => (createCourse())}
          buttonText="Create Course"
          variant="contained"
          width='auto'
      />
    </div>
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
            onClick={(id) => onClick(id)}
          />
          </div>
          </Card>
      ))}
    </Styles.CardWrapper>
    </Styles.Container>
  );
}