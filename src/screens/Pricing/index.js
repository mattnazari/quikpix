import React from 'react';

import Header from '../../comps/Header';
import PlansCard from '../../comps/PlansCard';
import AddonsCard from '../../comps/AddonsCard';
import Button from '../../comps/Button';
import Footer from '../../comps/Footer';

import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div>
      <Header />
      <h2 className='wrapper center'>Choose your plan</h2>
      <div className='flex row wrapper between'>
        <PlansCard
          planCardH="623px"
          planCardW="306px"
          planPriceTopTxt="$3.99"
          planPriceBotTxt="per month"
          planPriceTxtFont="Poppins-SemiBold"
          planPriceTxtWeight="600"
          planPriceTxtSize="24px"
          planCardPadding="53px 20px 20px 20px"
          planTitle="Free"
          topPlanImg="url('http://www.matthewnazari.ca/basicImg.svg')"
          topPlanImgH="153px"
          topPlanImgW="188px"
          planTitleColor="#115195"
          planTitleTopPosition="0"
          planCardTopPosition="205px" />
        <PlansCard
          planCardH="623px"
          planCardW="306px"
          planPriceTopTxt="$3.99"
          planPriceBotTxt="per month"
          planPriceTxtFont="Poppins-SemiBold"
          planPriceTxtWeight="600"
          planPriceTxtSize="24px"
          planCardPadding="53px 20px 20px 20px"
          planTitle="Basic"
          topPlanImg="url('http://www.matthewnazari.ca/basicImg.svg')"
          topPlanImgH="153px"
          topPlanImgW="188px"
          planTitleColor="#115195"
          planTitleTopPosition="0"
          planCardTopPosition="205px" />
        <PlansCard
          planCardH="623px"
          planCardW="306px"
          planPriceTopTxt="$3.99"
          planPriceBotTxt="per month"
          planPriceTxtFont="Poppins-SemiBold"
          planPriceTxtWeight="600"
          planPriceTxtSize="24px"
          planCardPadding="53px 20px 20px 20px"
          planTitle="Pro"
          topPlanImg="url('http://www.matthewnazari.ca/basicImg.svg')"
          topPlanImgH="153px"
          topPlanImgW="188px"
          planTitleColor="#115195"
          planTitleTopPosition="0"
          planCardTopPosition="205px" />
      </div>
      <div className='flex row wrapper' style={{ justifyContent: 'flex-start' }}>
        <AddonsCard
          addonPriceTopTxt="$0.99"
          addonPriceBotTxt="per upload"
          addonsTitle="One-time Use" />
        <AddonsCard
          addonPriceTopTxt="$2.99"
          addonPriceBotTxt="per upload"
          addonsTitle="Unlimited Dimensions" />
      </div>
      <div className='flex wrapper'>
        <Link to='/'>
          <Button
            buttonTitle="Back to Home"
            buttonBgColor="transparent"
            buttonTextColor="#FFB647"
            buttonBorder="2px solid #FFB647" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;