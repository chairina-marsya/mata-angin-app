import React from 'react';
import * as Styles from './styles';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Card, Avatar } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import TextAtom from '../../component/atoms/Text';
import mataAnginWhiteLogo from '../../assets/mata-angin-white.svg';
import mataAnginLandingIcon from '../../assets/mata-angin-landing-icon.svg';

export default function LandingPage() {

  const carouselData = [{
    id: 'carousel-1',
    label: 'Tumbuh Bersama',
    bgcolor: '#00b19c',
  },
  {
    id: 'carousel-2',
    label: 'Berbagi Bersama',
    bgcolor: '#3b72ff',
  },
  {
    id: 'carousel-3',
    label: 'Terhubung Bersama',
    bgcolor: '#8e43f4',
  },
  {
    id: 'carousel-4',
    label: 'Terarah Bersama',
    bgcolor: '#ca0e68',
  },
  {
    id: 'carousel-5',
    label: 'Bermimpin Bersama',
    bgcolor: '#ffa800',
  }];

  const reviewDetail = 'Dengan mengikuti program mentoring ini saya mendapatkan ilmu dan cerita pengalaman dari para mentor nantinya. Para mentor dapat membimbing saya dalam perjalanan belajar software engineer dan kiat-kiat menjadi seorang software engineer yang handal.'

  const cardData = [{
    id: 'user-1',
    role: 'Front-End Engineer',
    name: 'Remy Sharp',
    roleImgUrl: 'https://images.pexels.com/photos/34600/pexels-photo.jpg',
    userImgUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    review: reviewDetail
  },
  {
    id: 'user-2',
    role: 'Back-End Engineer',
    name: 'Justin Shaifer',
    roleImgUrl: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg',
    userImgUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    review: reviewDetail
  },
  {
    id: 'user-3',
    role: 'Data Analyst',
    name: 'Andrea Lima',
    roleImgUrl: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg',
    userImgUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    review: reviewDetail
  },
  {
    id: 'user-4',
    role: 'Graphic Designer',
    name: 'Stefan Stefancik',
    roleImgUrl: 'https://images.pexels.com/photos/955405/pexels-photo-955405.jpeg',
    userImgUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    review: reviewDetail
  },
  {
    id: 'user-5',
    role: 'Front-End Engineer',
    name: 'Suzan Amana',
    roleImgUrl: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg',
    userImgUrl: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg',
    review: reviewDetail
  }];

return (
    <Styles.Container>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {carouselData && carouselData?.map((item) => (
            <Styles.CarouselWrapper bgColor={item.bgcolor}>
              <Styles.LeftWrapper>
                <Styles.TitleText>{item.label}</Styles.TitleText>
                <img src={mataAnginWhiteLogo} alt={`mata-angin-icon-${item.id}`} style={{ width: '300px', height: '100%' }} />
              </Styles.LeftWrapper>
              <img src={mataAnginLandingIcon} alt={`mata-angin-logo-${item.id}`} style={{ width: '1000px', height: '440px'}} />
              </Styles.CarouselWrapper>
          ))}
        </Carousel>
      <Styles.CardWrapper>
        {cardData && cardData?.map((item) => (
          <Card sx={{border: '1px black', width: '359px', height: '450px', margin: '15px 10px'}}>
            <img src={item.roleImgUrl} alt={`role ${item.id}`} style={{ width: '359px', height: '194px' }} />
            <Styles.ProfileSection>
              <div style={{display: 'flex', flexDirection: 'row' }}>
              <Avatar alt={`user ${item.id}`} src={item.userImgUrl}/>
              <div style={{ marginLeft: '20px' }}>
                <TextAtom size='md' color='grey'>
                  {item.role}
                </TextAtom>
                <TextAtom size='xxl' color='black'>
                  {item.name}
                </TextAtom>
              </div>
              </div>
              <ShareIcon />
            </Styles.ProfileSection>
              <TextAtom padding='0px 15px 10px 15px' size='md' textAlign='justify' color='grey'>
                {item.review}
              </TextAtom>
            </Card>
        ))}
      </Styles.CardWrapper>
    </Styles.Container>
  );
}