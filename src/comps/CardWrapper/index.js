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

  // cleaning the title to remove hyphen
  const newTitle = title.toLowerCase().replace("-", "");
  const obj = {
    instagram: [
      {
        titleTxt: 'Profile Picture',
        dimTxt: '110 x 110px',
        cardHeight: '110px',
        cardWidth: '110px'
      },
      {
        titleTxt: 'Square Post',
        dimTxt: '1080 x 1080px',
        cardHeight: '200px',
        cardWidth: '200px'
      },
      {
        titleTxt: 'Landscape Post',
        dimTxt: '1350 x 1080px',
        cardHeight: '200px',
        cardWidth: '250px'
      },
      {
        titleTxt: 'Instagram Story',
        dimTxt: '1080 x 1920px',
        cardHeight: '400px',
        cardWidth: '200px'
      },
      {
        titleTxt: 'Panorama Bulk Post',
        dimTxt: '1080 x 1080px',
        cardHeight: '200px',
        cardWidth: '200px'
      }
    ],
    linkedin: [
      {
        titleTxt: 'Header Cover Image',
        dimTxt: '1584 x 396px',
        cardHeight: '100px',
        cardWidth: '350px'
      },
      {
        titleTxt: 'Profile Picture',
        dimTxt: '400 x 400px',
        cardHeight: '150px',
        cardWidth: '150px'
      },
      {
        titleTxt: 'Business Logo',
        dimTxt: '300 x 300px',
        cardHeight: '120px',
        cardWidth: '120px'
      },
      {
        titleTxt: 'Company Photo',
        dimTxt: '900 x 600px',
        cardHeight: '150px',
        cardWidth: '300px'
      }
    ],
    facebook: [
      {
        titleTxt: 'Header Cover Image',
        dimTxt: '1200 x 675px',
        cardHeight: '100px',
        cardWidth: '350px'
      },
      {
        titleTxt: 'Profile Picture',
        dimTxt: '180 x 180px',
        cardHeight: '150px',
        cardWidth: '150px'
      },
      {
        titleTxt: 'Shared Link Image',
        dimTxt: '1200 x 630px',
        cardHeight: '120px',
        cardWidth: '120px'
      },
      {
        titleTxt: 'Event Image',
        dimTxt: '1920 x 1080px',
        cardHeight: '150px',
        cardWidth: '300px'
      },
      {
        titleTxt: 'Group Cover Image',
        dimTxt: '1640 x 859px',
        cardHeight: '100px',
        cardWidth: '350px'
      },
      {
        titleTxt: 'Carousel Ad',
        dimTxt: '1080 x 1080px',
        cardHeight: '150px',
        cardWidth: '150px'
      },
      {
        titleTxt: 'Facebook Story',
        dimTxt: '1080 x 1920px',
        cardHeight: '400px',
        cardWidth: '200px'
      },
      {
        titleTxt: 'Link Ad',
        dimTxt: '1200 x 628px',
        cardHeight: '150px',
        cardWidth: '300px'
      }
    ],
    twitter: [
      {
        titleTxt: 'Header Cover Image',
        dimTxt: '1584 x 396px',
        cardHeight: '100px',
        cardWidth: '350px',
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
        cardWidth: '150px'
      },
      {
        titleTxt: 'Tweet Image',
        dimTxt: '1200 x 675px',
        cardHeight: '160px',
        cardWidth: '220px'
      },
      {
        titleTxt: 'Shared Link Image',
        dimTxt: '1200 x 628px',
        cardHeight: '160px',
        cardWidth: '200px'
      }
    ],
    ecommerce: [
      {
        titleTxt: 'Company Logo',
        dimTxt: '100 x 100px',
        cardHeight: '110px',
        cardWidth: '110px'
      },
      {
        titleTxt: 'Hero Image',
        dimTxt: '1920 x 800px',
        cardHeight: '250px',
        cardWidth: '420px'
      },
      {
        titleTxt: 'Product Image',
        dimTxt: '800 x 800px',
        cardHeight: '300px',
        cardWidth: '300px'
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
          onClick={() => {
            alert(`You clicked ${card.titleTxt}`)
            console.log(`card index: ${index}`)
            console.log(`card title: ${card.titleTxt}`)
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
