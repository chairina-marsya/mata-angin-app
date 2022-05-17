import React from 'react';
import * as Styles from '../../../component/templates/LandingPage/styles';

// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import TextAtom from '../../../component/atoms/Text';
import { useHistory } from 'react-router-dom';

export default function MentorList() {
  const history = useHistory();
  const cardDataAll = [{
    id: 'user-1',
    role: 'Data Analyst',
    name: 'Alex',
    subsNum: '123 Students',
    roleImgUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
  },
  {
    id: 'user-2',
    role: 'Data Analyst',
    name: 'Alex',
    subsNum: '123 Students',
    roleImgUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
  },
  {
    id: 'user-3',
    role: 'Data Analyst',
    name: 'Alex',
    subsNum: '123 Students',
    roleImgUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
  },
  ]

  return (
    <Styles.Container>
    <Styles.CardWrapper isCourse>
      {cardDataAll && cardDataAll?.map((item) => (
        <Card
        sx={{border: '1px black', width: '20%', height: 'auto', marginTop: '20px', margin: '20px' }}
        onClick={() => (history.push('/detail-mentor'))}
        >
          <img src={item.roleImgUrl} alt={`role ${item.id}`} style={{ width: '100%', height: '275px' }} />
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
          </Card>
      ))}
    </Styles.CardWrapper>
    </Styles.Container>
  );
}