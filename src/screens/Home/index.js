import React from 'react';

import Header from '../../comps/Header';
import StepsBar from '../../comps/StepsBar';
import Button from '../../comps/Button';
import Footer from '../../comps/Footer';

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <StepsBar
        uploadColor="#31C1FF"
        chooseColor="#5C5C5C"
        convertColor="#5C5C5C"
        uploadCheck="http://www.matthewnazari.ca/stepsCheck.svg"
        chooseCheck="http://www.matthewnazari.ca/stepsCheck2nd.svg"
        convertCheck="http://www.matthewnazari.ca/stepsCheck2nd.svg"
        firstBLColor="#DAF4FF"
        secondBLColor="#DAF4FF"
      />
      <Button buttonTitle="CONVERT" />
      <Footer />
    </div>
  );
}

export default Home;