import React from 'react';

import LandingPageTemplate from '../../component/templates/LandingPage';
import { carouselData, cardData } from '../../utils/dummy/landingPageData';

export default function LandingPage() {

return (
    <LandingPageTemplate carouselData={carouselData} cardData={cardData}/>
  );
}