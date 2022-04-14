import React from 'react';
import * as Styles from './styles';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Card, Avatar } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import TextAtom from '../../atoms/Text';
import mataAnginWhiteLogo from '../../../assets/mata-angin-white.svg';
import mataAnginLandingIcon from '../../../assets/mata-angin-landing-icon.svg';

export default function LandingPageTemplate({carouselData, cardData}) {

  return (
    <Styles.Container>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
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
          <Card sx={{border: '1px black', width: '19.16%', height: '42%', marginTop: '20px', marginRight: item.id !== 'user-5' ? '15px' : null }}>
            <img src={item.roleImgUrl} alt={`role ${item.id}`} style={{ width: '100%', height: '194px' }} />
            <Styles.ProfileSection>
              <Styles.InnerProfile>
              <Avatar alt={`user ${item.id}`} src={item.userImgUrl}/>
              <Styles.InnerUser>
                <TextAtom size='10px' color='grey'>
                  {item.role}
                </TextAtom>
                <TextAtom size='20px' color='black'>
                  {item.name}
                </TextAtom>
              </Styles.InnerUser>
              </Styles.InnerProfile>
              <ShareIcon />
            </Styles.ProfileSection>
              <TextAtom padding='0px 15px 10px 15px' size='14px' textAlign='justify' color='grey'>
                {item.review}
              </TextAtom>
            </Card>
        ))}
      </Styles.CardWrapper>
    </Styles.Container>
  );
}