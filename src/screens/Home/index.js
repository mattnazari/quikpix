import React, { useState } from 'react';

import Header from '../../comps/Header';
import StepsBar from '../../comps/StepsBar';
import Button from '../../comps/Button';
import Footer from '../../comps/Footer';
import CardWrapper from '../../comps/CardWrapper';

import Dropzone from 'react-dropzone';

const ConvertImage = () => {
  alert("Convert Button Pressed!")
}

const Home = () => {
  const [file, setFile] = useState(require('../../assets/graphics/dropzone.png'))
  const [buttonTitle, setButtonTitle] = useState('UPLOAD')
  const [isDropped, setIsDropped] = useState(false)

  const [width, setWidth] = useState(600)
  const img = {
    display: 'block',
    width: `${width}px`,
    height: 'auto',
    maxWidth: '100%'
  }

  return (
    <div>
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
      <Dropzone
        accept='image/*'
        onDrop={acceptedFiles => {
          const upload = URL.createObjectURL(acceptedFiles[0]);
          setFile(upload);
          setButtonTitle('CONVERT');
          setIsDropped(true);
          console.log(upload)
          
          const i = new Image();
          i.src = upload;
          i.onload = () => {
            console.log("current image height:", i.height)
            console.log("current image width:", i.width)
            if (i.width > 1000) {
              setWidth(1000)
              return
            }
            setWidth(i.width)
          }
        }}
        minSize={0}
        maxSize={5242880}>
        {({ getRootProps, getInputProps }) => (
          <section className='dropzone wrapper'>
            <div className='flex' {...getRootProps()}>
              <input {...getInputProps()} />
              <img src={file} style={img} alt='Drop file placeholder' />
              {isDropped ? null : (
                <div className='dropzone-text'>
                  <h2>Drag 'n' drop some files here</h2>
                  <h2>or click to select files</h2>
                </div>
              )}
            </div>
          </section>
        )}
      </Dropzone>

      {isDropped ? (
        <div className='wrapper'>
          <div className='wrapper center'>
            <h2>Choose Dimension</h2>
            <p>(Choose up to two)</p>
          </div>
          <CardWrapper type='dropdown' title='Instagram' mediaIcon='https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png' />
          <CardWrapper type='dropdown' title='LinkedIn' mediaIcon='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' />
          <CardWrapper type='dropdown' title='Facebook' mediaIcon='https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png' />
          <CardWrapper type='dropdown' title='Twitter' mediaIcon='https://i.imgur.com/DTlQVjT.png' />
          <CardWrapper type='dropdown' title='E-Commerce' mediaIcon='https://i.imgur.com/cED6SbI.png' />
          <div className='wrapper center'>
            <Button buttonTitle={buttonTitle}
              onClick={() => {
                if (isDropped) {
                  ConvertImage()
                }
              }} />
          </div>
        </div>
      ) : <div className='wrapper center'>
          <p>Accepted file types: .PNG, .JPG/JPEG, .TIFF, .GIF</p>
        </div>}

      <Footer />
    </div>
  );
}

export default Home;