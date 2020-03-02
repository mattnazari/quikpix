import React, { useState } from "react";
import Card from "../Card";
import { IoIosArrowDropdownCircle, IoIosArrowDropdown } from "react-icons/io";

const CardWrapper = ({ type, title, mediaIcon }) => {
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

  // change placeholder images here
  const img = {
    instagram: 'https://i.imgur.com/tA4jwnb.jpg',
    linkedin: 'https://i.imgur.com/hnCcMMu.jpg',
    facebook: 'https://i.imgur.com/sPQtU5k.jpg',
    twitter: 'https://i.imgur.com/aGYEjtA.jpg',
    ecommerce: 'https://i.imgur.com/yL26cVY.jpg',
  }
  const obj = {
    instagram: [
      {
        titleTxt: 'Profile Picture',
        dimTxt: '110 x 110px',
        cardHeight: '110px',
        cardWidth: '110px',
        bgImg: img.instagram
      },
      {
        titleTxt: 'Square Post',
        dimTxt: '1080 x 1080px',
        cardHeight: '200px',
        cardWidth: '200px',
        bgImg: img.instagram
      },
      {
        titleTxt: 'Landscape Post',
        dimTxt: '1350 x 1080px',
        cardHeight: '200px',
        cardWidth: '250px',
        bgImg: img.instagram
      },
      {
        titleTxt: 'Instagram Story',
        dimTxt: '1080 x 1920px',
        cardHeight: '400px',
        cardWidth: '200px',
        bgImg: img.instagram
      },
      {
        titleTxt: 'Panorama Bulk Post',
        dimTxt: '1080 x 1080px',
        cardHeight: '200px',
        cardWidth: '200px',
        bgImg: img.instagram
      }
    ],
    linkedin: [
      {
        titleTxt: 'Header Cover Image',
        dimTxt: '1584 x 396px',
        cardHeight: '100px',
        cardWidth: '350px',
        bgImg: img.linkedin
      },
      {
        titleTxt: 'Profile Picture',
        dimTxt: '400 x 400px',
        cardHeight: '150px',
        cardWidth: '150px',
        bgImg: img.linkedin
      },
      {
        titleTxt: 'Business Logo',
        dimTxt: '300 x 300px',
        cardHeight: '120px',
        cardWidth: '120px',
        bgImg: img.linkedin
      },
      {
        titleTxt: 'Company Photo',
        dimTxt: '900 x 600px',
        cardHeight: '150px',
        cardWidth: '300px',
        bgImg: img.linkedin
      }
    ],
    facebook: [
      {
        titleTxt: 'Header Cover Image',
        dimTxt: '1200 x 675px',
        cardHeight: '100px',
        cardWidth: '350px',
        bgImg: img.facebook
      },
      {
        titleTxt: 'Profile Picture',
        dimTxt: '180 x 180px',
        cardHeight: '150px',
        cardWidth: '150px',
        bgImg: img.facebook
      },
      {
        titleTxt: 'Shared Link Image',
        dimTxt: '1200 x 630px',
        cardHeight: '120px',
        cardWidth: '120px',
        bgImg: img.facebook
      },
      {
        titleTxt: 'Event Image',
        dimTxt: '1920 x 1080px',
        cardHeight: '150px',
        cardWidth: '300px',
        bgImg: img.facebook
      },
      {
        titleTxt: 'Group Cover Image',
        dimTxt: '1640 x 859px',
        cardHeight: '100px',
        cardWidth: '350px',
        bgImg: img.facebook
      },
      {
        titleTxt: 'Carousel Ad',
        dimTxt: '1080 x 1080px',
        cardHeight: '150px',
        cardWidth: '150px',
        bgImg: img.facebook
      },
      {
        titleTxt: 'Facebook Story',
        dimTxt: '1080 x 1920px',
        cardHeight: '400px',
        cardWidth: '200px',
        bgImg: img.facebook
      },
      {
        titleTxt: 'Link Ad',
        dimTxt: '1200 x 628px',
        cardHeight: '150px',
        cardWidth: '300px',
        bgImg: img.facebook
      }
    ],
    twitter: [
      {
        titleTxt: 'Header Cover Image',
        dimTxt: '1584 x 396px',
        cardHeight: '100px',
        cardWidth: '350px',
        bgImg: img.twitter,
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
        bgImg: img.twitter,
      },
      {
        titleTxt: 'Tweet Image',
        dimTxt: '1200 x 675px',
        cardHeight: '160px',
        cardWidth: '220px',
        bgImg: img.twitter,
      },
      {
        titleTxt: 'Shared Link Image',
        dimTxt: '1200 x 628px',
        cardHeight: '160px',
        cardWidth: '200px',
        bgImg: img.twitter,
      }
    ],
    ecommerce: [
      {
        titleTxt: 'Company Logo',
        dimTxt: '100 x 100px',
        cardHeight: '110px',
        cardWidth: '110px',
        bgImg: img.ecommerce,
      },
      {
        titleTxt: 'Hero Image',
        dimTxt: '1920 x 800px',
        cardHeight: '250px',
        cardWidth: '420px',
        bgImg: img.ecommerce,
      },
      {
        titleTxt: 'Product Image',
        dimTxt: '800 x 800px',
        cardHeight: '300px',
        cardWidth: '300px',
        bgImg: img.ecommerce,
      },
    ],
  }

  return (
    <div className="wrapCont">
      <div
        className="bar"
        onClick={() => {
          setVisible(!visible);
        }}
      >
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
          onClick={() => {
            console.log(`card title: ${card.titleTxt}`)
            console.log(`card index: ${index}`)
            console.log(`card data: ${JSON.stringify(card.data)}`)
          }}/>
        }) : null }
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
