import React, { useState } from 'react';

import Header from '../../comps/Header';
import StepsBar from '../../comps/StepsBar';
import Button from '../../comps/Button';
import Footer from '../../comps/Footer';
import CardWrapper from '../../comps/CardWrapper';
import ResultsCard from '../../comps/ResultsCard';

import Dropzone from 'react-dropzone';
import FileSaver from 'file-saver';

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

const Home = ({ isLocked, isPremium }) => {
  const [file, setFile] = useState(require('../../assets/graphics/dropzone.png'))
  const [buttonTitle, setButtonTitle] = useState('UPLOAD')
  const [isDropped, setIsDropped] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [selected, setSelected] = useState([])

  // function that takes an image url
  // to build a new image and canvas from
  // that image based on selected dimensions
  // and return it to the client as a blob
  const newImage = (url, width, height) => {
    return new Promise((resolve, reject) => {
      var img = new Image()
      img.src = url
      img.width = width
      img.height = height

      img.onload = () => {
        // need a way to properly crop the canvas
        // to maintain aspect ratio
        // and to keep the image looking proper
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)

        // canvas toBlob to convert svg to png
        ctx.canvas.toBlob(
          blob => { // need to allow dynamic input for the file name
            const convert = new File([blob], 'convert.png', {
              type: 'image/png',
              lastModified: Date.now()
            })
            resolve(convert)
          },
          'image/png',
          1
        )
      }
      img.onerror = () => {
        reject(img)
      }
    })
  }

  const [convertedImage, setConvertedImage] = useState([])

  function saveAs(f) {
    FileSaver.saveAs(f, 'convertedimage.jpeg')
    console.log('file downloaded')
  }

  const pushSelected = (obj) => {
    // executed on click of a card
    // need to write code to limit pushing more than 2 selections
    // if not a premium user
    var arr = selected;
    if (!isPremium) {
      if (arr.length < 2) {
        arr.push(obj);
        setSelected(arr);
      } else {
        // TODO
        // modal display for 2 dimensions
        alert('Choose 2 dimensions only MODAL')
      }
    } else {
      arr.push(obj);
      setSelected(arr);
    }
    console.log('selected array:', selected)
  }

  const spliceSelected = (obj) => {
    var arr = selected;
    const index = arr.indexOf(obj);
    if (index > -1) {
      arr.splice(index, 1);
      setSelected(arr);
    }
    console.log('splice array:', selected)
  }

  const [width, setWidth] = useState(600)
  const img = {
    display: 'block',
    width: `${width}px`,
    height: 'auto',
    maxWidth: '100%'
  }

  // states of the step bar component
  const [uploadColor, setUploadColor] = useState("#31C1FF")
  const [chooseColor, setChooseColor] = useState("#5C5C5C")
  const [convertColor, setConvertColor] = useState("#5C5C5C")
  const [uploadCheck, setUploadCheck] = useState("http://www.matthewnazari.ca/stepsCheck.svg")
  const [chooseCheck, setChooseCheck] = useState("http://www.matthewnazari.ca/stepsCheck2nd.svg")
  const [convertCheck, setConvertCheck] = useState("http://www.matthewnazari.ca/stepsCheck2nd.svg")
  const [firstBLColor, setFirstBLColor] = useState("#DAF4FF")
  const [secondBLColor, setSecondBLColor] = useState("#DAF4FF")

  const ChooseStep = () => {
    // called once a file gets uploaded into drop zone
    // write code here to get executed once a file is uploaded
    setChooseColor("#31C1FF")
    setChooseCheck("http://www.matthewnazari.ca/stepsCheck.svg")
    setFirstBLColor("#31C1FF")
    setButtonTitle('CONVERT');
    setIsDropped(true);
  }

  const ConvertStep = () => {
    // called once the user presses CONVERT button during second step
    // write code here to get executed once user reaches results screen
    setIsUploaded(true);
    setConvertColor("#31C1FF")
    setConvertCheck("http://www.matthewnazari.ca/stepsCheck.svg")
    setSecondBLColor("#31C1FF")
    scrollToTop()
    console.log('current image:', file)
  }

  const ConvertAnother = () => {
    // called once user presses CONVERT ANOTHER button during step 3
    // write code here to get executed when the user resets to the beginning
    setChooseColor("#5C5C5C")
    setConvertColor("#5C5C5C")
    setChooseCheck("http://www.matthewnazari.ca/stepsCheck2nd.svg")
    setConvertCheck("http://www.matthewnazari.ca/stepsCheck2nd.svg")
    setFirstBLColor("#DAF4FF")
    setSecondBLColor("#DAF4FF")
    setIsDropped(false)
    setIsUploaded(false)
    setFile(require('../../assets/graphics/dropzone.png'))
    setWidth(600)
    setSelected([])
    setConvertedImage([])
  }

  return (
    <div>
      <Header />
      <StepsBar
        uploadColor={uploadColor}
        chooseColor={chooseColor}
        convertColor={convertColor}
        uploadCheck={uploadCheck}
        chooseCheck={chooseCheck}
        convertCheck={convertCheck}
        firstBLColor={firstBLColor}
        secondBLColor={secondBLColor} />
      {isUploaded ?
        // display results if an image was successfully converted
        <div className='wrapper center'>
          <h2>Results</h2>
          {selected.map((result, index) => {
            const str = result.dimTxt.split(" ")
            // converting to number from str, cleaning the str
            const width = parseInt(str[0])
            const height = parseInt(str[2].replace("px", ""))

            // getting dimensions for the resultimg for styling purposes
            // this is not dimensions for the converted image
            const cWidth = parseInt(result.cardWidth.replace("px", ""))
            const cHeight = parseInt(result.cardHeight.replace("px", ""))

            console.log(`result ${index} dimensions`)
            console.log('width:', width)
            console.log('height:', height)

            setTimeout(() => {
              if (convertedImage.length < selected.length) {
                newImage(file, width, height)
                  .then((successFile) => {
                    console.log('image successfully converted')
                    console.log('successfile:', successFile)

                    const image = URL.createObjectURL(successFile)

                    const i = selected.indexOf(image);
                    if (i === -1) {
                      let arr = convertedImage;
                      arr.push(image)
                      setConvertedImage(arr)
                    }
                    console.log(convertedImage)
                  }).catch((errorFile) => {
                    console.log('error in converting the image')
                    console.log(errorFile)
                  })
              }
            }, 200);


            return <ResultsCard
              key={index}
              index={index}
              resultsCardTitle={result.titleTxt}
              resultsCardIcon={result.logo}
              innerImg={file}
              dimNum={result.dimTxt}
              width={cWidth}
              height={cHeight}
              saveAs={saveAs}
              convertedImage={convertedImage}
            />
          })}
          <Button
            buttonTitle="CONVERT ANOTHER FILE"
            buttonBgColor="#31C1FF"
            buttonWidth="400px"
            buttonHeight="80px"
            onClick={() => {
              ConvertAnother()
            }}
          />
        </div>
        : // otherwise display the very first step
        <div>
          <Dropzone
            accept='image/*'
            onDropAccepted={acceptedFiles => {
              const upload = URL.createObjectURL(acceptedFiles[0]);
              setFile(upload);
              console.log(upload)

              const i = new Image();
              i.src = upload;
              i.onload = () => {
                console.log("current image height:", i.height)
                console.log("current image width:", i.width)
                if (i.width > 1000) {
                  setWidth(i.width / 2)
                  return
                }
                setWidth(i.width)
              }

              ChooseStep()
            }}
            onDropRejected={() => {
              // replace this with a real modal
              alert('Image too large! [REPLACE]')
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

          {isDropped ? // only display social media cards/wrappers once an image is placed into drop zone
            (<div className='wrapper'>
              <div className='wrapper center'>
                <h2>Choose Dimension</h2>
                { isPremium ? null : <p>(Choose up to two)</p> }
              </div>
              <CardWrapper type='dropdown' title='Instagram'
                pushSelected={pushSelected}
                spliceSelected={spliceSelected}
                selected={selected}
                isLocked={isLocked}
                isPremium={isPremium}
                mediaIcon='https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png' />
              <CardWrapper type='dropdown' title='LinkedIn'
                pushSelected={pushSelected}
                spliceSelected={spliceSelected}
                selected={selected}
                isLocked={isLocked}
                isPremium={isPremium}
                mediaIcon='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' />
              <CardWrapper type='dropdown' title='Facebook'
                pushSelected={pushSelected}
                spliceSelected={spliceSelected}
                selected={selected}
                isLocked={isLocked}
                isPremium={isPremium}
                mediaIcon='https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png' />
              <CardWrapper type='dropdown' title='Twitter'
                pushSelected={pushSelected}
                spliceSelected={spliceSelected}
                selected={selected}
                isLocked={isLocked}
                isPremium={isPremium}
                mediaIcon='https://i.imgur.com/DTlQVjT.png' />
              <CardWrapper type='dropdown' title='E-Commerce'
                pushSelected={pushSelected}
                spliceSelected={spliceSelected}
                selected={selected}
                isLocked={isLocked}
                isPremium={isPremium}
                mediaIcon='https://i.imgur.com/cED6SbI.png' />
              <div className='wrapper center'>
                <Button buttonTitle={buttonTitle}
                  onClick={() => {
                    if (isDropped) {
                      if (selected.length !== 0) {
                        ConvertStep()
                      } else {
                        // replace this with a custom modal
                        alert('you have nothing selected MODAL')
                      }
                    }
                  }} />
              </div>
            </div>
            ) : <div className='wrapper center'>
              <p>Accepted file types: .PNG, .JPG/JPEG, .TIFF, .GIF</p>
            </div>}
        </div>}

      <Footer />
    </div>
  );
}

export default Home;