import React, { useState } from "react";
import Card from "../Card";
import { IoIosArrowDropdownCircle, IoIosArrowDropdown } from "react-icons/io";

const CardWrapper = ({ type, title, mediaIcon, pushSelected, spliceSelected, selected }) => {
  let cn;
  if (type === "dropdown") {
    cn = "dropdown";
  }

  let icon = <IoIosArrowDropdown size={32} color={"31C1FF"} />;
  const [visible, setVisible] = useState(false);
  if (visible) {
    cn = "dropdown dropdown_active";
    icon = <IoIosArrowDropdownCircle size={32} color={"31C1FF"} />;
  }

  // cleaning the title to remove hyphen and lowercase it
  const newTitle = title.toLowerCase().replace("-", "");

  const [isLocked, setIsLocked] = useState(true)

  // change placeholder images here
  const img = {
    instagram: 'https://i.imgur.com/tA4jwnb.jpg',
    linkedin: 'https://i.imgur.com/hnCcMMu.jpg',
    facebook: 'https://i.imgur.com/sPQtU5k.jpg',
    twitter: 'https://i.imgur.com/aGYEjtA.jpg',
    ecommerce: 'https://i.imgur.com/yL26cVY.jpg',
  }

  const logo = {
    instagram: 'https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png',
    linkedin: 'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg',
    facebook: 'https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png',
    twitter: 'https://i.imgur.com/DTlQVjT.png',
    ecommerce: 'https://i.imgur.com/cED6SbI.png',
  }

  const obj = {
    instagram: [
      {
        titleTxt: 'Profile Picture',
        dimTxt: '110 x 110px',
        cardHeight: '110px',
        cardWidth: '110px',
        logo: logo.instagram,
        bgImg: img.instagram,
        isLocked: false
      },
      {
        titleTxt: 'Square Post',
        dimTxt: '1080 x 1080px',
        cardHeight: '200px',
        cardWidth: '200px',
        logo: logo.instagram,
        bgImg: img.instagram,
        isLocked: false
      },
      {
        titleTxt: 'Landscape Post',
        dimTxt: '1350 x 1080px',
        cardHeight: '200px',
        cardWidth: '250px',
        logo: logo.instagram,
        bgImg: img.instagram,
        isLocked: false
      },
      {
        titleTxt: 'Instagram Story',
        dimTxt: '1080 x 1920px',
        cardHeight: '400px',
        cardWidth: '200px',
        logo: logo.instagram,
        bgImg: img.instagram,
        isLocked: false
      },
      {
        titleTxt: 'Panorama Bulk Post',
        dimTxt: '1080 x 1080px',
        cardHeight: '200px',
        cardWidth: '200px',
        logo: logo.instagram,
        bgImg: img.instagram,
        isLocked: isLocked
      }
    ],
    linkedin: [
      {
        titleTxt: 'Header Cover Image',
        dimTxt: '1584 x 396px',
        cardHeight: '100px',
        cardWidth: '350px',
        logo: logo.linkedin,
        bgImg: img.linkedin,
        isLocked: false
      },
      {
        titleTxt: 'Profile Picture',
        dimTxt: '400 x 400px',
        cardHeight: '150px',
        cardWidth: '150px',
        logo: logo.linkedin,
        bgImg: img.linkedin,
        isLocked: false
      },
      {
        titleTxt: 'Business Logo',
        dimTxt: '300 x 300px',
        cardHeight: '120px',
        cardWidth: '120px',
        logo: logo.linkedin,
        bgImg: img.linkedin,
        isLocked: isLocked
      },
      {
        titleTxt: 'Company Photo',
        dimTxt: '900 x 600px',
        cardHeight: '150px',
        cardWidth: '300px',
        logo: logo.linkedin,
        bgImg: img.linkedin,
        isLocked: isLocked
      }
    ],
    facebook: [
      {
        titleTxt: 'Header Cover Image',
        dimTxt: '1200 x 675px',
        cardHeight: '100px',
        cardWidth: '350px',
        logo: logo.facebook,
        bgImg: img.facebook
      },
      {
        titleTxt: 'Profile Picture',
        dimTxt: '180 x 180px',
        cardHeight: '150px',
        cardWidth: '150px',
        logo: logo.facebook,
        bgImg: img.facebook
      },
      {
        titleTxt: 'Shared Link Image',
        dimTxt: '1200 x 630px',
        cardHeight: '120px',
        cardWidth: '120px',
        logo: logo.facebook,
        bgImg: img.facebook
      },
      {
        titleTxt: 'Event Image',
        dimTxt: '1920 x 1080px',
        cardHeight: '150px',
        cardWidth: '300px',
        logo: logo.facebook,
        bgImg: img.facebook
      },
      {
        titleTxt: 'Group Cover Image',
        dimTxt: '1640 x 859px',
        cardHeight: '100px',
        cardWidth: '350px',
        logo: logo.facebook,
        bgImg: img.facebook,
        isLocked: isLocked
      },
      {
        titleTxt: 'Carousel Ad',
        dimTxt: '1080 x 1080px',
        cardHeight: '150px',
        cardWidth: '150px',
        logo: logo.facebook,
        bgImg: img.facebook,
        isLocked: isLocked
      },
      {
        titleTxt: 'Facebook Story',
        dimTxt: '1080 x 1920px',
        cardHeight: '400px',
        cardWidth: '200px',
        logo: logo.facebook,
        bgImg: img.facebook,
        isLocked: isLocked
      },
      {
        titleTxt: 'Link Ad',
        dimTxt: '1200 x 628px',
        cardHeight: '150px',
        cardWidth: '300px',
        logo: logo.facebook,
        bgImg: img.facebook,
        isLocked: isLocked
      }
    ],
    twitter: [
      {
        titleTxt: 'Header Cover Image',
        dimTxt: '1584 x 396px',
        cardHeight: '100px',
        cardWidth: '350px',
        logo: logo.twitter,
        bgImg: img.twitter,
        isLocked: false,
        data: {
          title: null, // this should dynamically grab titleTxt from level above ?
          width: 1584,
          height: 396
        }
      },
      {
        titleTxt: 'Profile Picture',
        dimTxt: '400 x 400px',
        cardHeight: '150px',
        cardWidth: '150px',
        logo: logo.twitter,
        bgImg: img.twitter,
        isLocked: false,
      },
      {
        titleTxt: 'Tweet Image',
        dimTxt: '1200 x 675px',
        cardHeight: '160px',
        cardWidth: '220px',
        logo: logo.twitter,
        bgImg: img.twitter,
        isLocked: isLocked
      },
      {
        titleTxt: 'Shared Link Image',
        dimTxt: '1200 x 628px',
        cardHeight: '160px',
        cardWidth: '200px',
        logo: logo.twitter,
        bgImg: img.twitter,
        isLocked: isLocked
      }
    ],
    ecommerce: [
      {
        titleTxt: 'Company Logo',
        dimTxt: '100 x 100px',
        cardHeight: '110px',
        cardWidth: '110px',
        logo: logo.ecommerce,
        bgImg: img.ecommerce,
      },
      {
        titleTxt: 'Hero Image',
        dimTxt: '1920 x 800px',
        cardHeight: '250px',
        cardWidth: '420px',
        logo: logo.ecommerce,
        bgImg: img.ecommerce,
        isLocked: isLocked
      },
      {
        titleTxt: 'Product Image',
        dimTxt: '800 x 800px',
        cardHeight: '300px',
        cardWidth: '300px',
        logo: logo.ecommerce,
        bgImg: img.ecommerce,
        isLocked: isLocked
      },
    ],
  }

  return (
    <div className="wrapCont">
      <div
        className="bar"
        onClick={() => {
          setVisible(!visible);
        }}>
        <div className="row">
          <img src={mediaIcon} height="32" />
          <h3>{title}</h3>
        </div>
        {icon}
      </div>
      <div className={cn}>
        {obj[newTitle] ? obj[newTitle].map((card, index) => {
          return <Card
            key={index}
            titleTxt={card.titleTxt}
            dimTxt={card.dimTxt}
            cardHeight={card.cardHeight}
            cardWidth={card.cardWidth}
            bgImg={card.bgImg}
            isLocked={card.isLocked}
            selected={selected}
            pushSelected={pushSelected}
            spliceSelected={spliceSelected}
            card={card}
            onClick={() => {
              console.log(`card title: ${card.titleTxt}`)
              console.log(`card index: ${index}`)
              console.log(`card data: ${JSON.stringify(card.data)}`)
              console.log(`card locked status: ${card.isLocked}`)
            }} />
        }) : null}
      </div>
    </div>
  );
};

CardWrapper.defaultProps = {
  type: "dropdown",
  title: "default title",
  mediaIcon: null
};

export default CardWrapper;
