import React from 'react';

import Header from '../../comps/Header';
import StepsBar from '../../comps/StepsBar';
import Button from '../../comps/Button';
import Footer from '../../comps/Footer';

import Dropzone from 'react-dropzone';

const Home = () => {
  let file;

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
      <Dropzone accept='image/*' onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section className='dropzone'>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <img height='300' src={require('../../assets/graphics/dropzone.png')} alt='Drop file placeholder' />
              <div className='dropzone-text'>
                <p>Drag 'n' drop some files here</p>
                <p>or click to select files</p>
                <p>{file}</p>
              </div>
            </div>
          </section>
        )}
      </Dropzone>
      <Button buttonTitle="CONVERT" />
      <Footer />
    </div>
  );
}

export default Home;