import React from 'react'
import AboutUsMain from '../../components/aboutUs/AboutUsMain';
import CompanyPromo from '../../slides/ComapnyPromoSlide/CompanyPromo';
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs';
import CompanyStateSlide from '../../slides/CompanyStatesSlide/CompanyStateSlide'
import Services from '../../components/services/Services';
import GetInTouchMain from '../../Forms/GetInTouchForm/GetInTouchMain';
import ElmechCommentsSecPage from '@/components/clientCommentsSecPage/ElmechComments';
import HeroSectionPage from '@/components/heroSection/HeroSectionPage';

const HomePageMain = () => {
  return (<>

    <HeroSectionPage />
    <AboutUsMain/>
    <CompanyPromo />
    <Services />
    <CompanyStateSlide />
    <WhyChooseUs />
    <ElmechCommentsSecPage/>
    <GetInTouchMain />
    

  </>)
}
export default HomePageMain;
