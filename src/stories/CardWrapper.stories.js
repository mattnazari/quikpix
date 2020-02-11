import React from "react";
import "../App.scss";

import CardWrapper from "../comps/CardWrapper";

export default {
  title: "CardWrapper",
  components: CardWrapper
};

export const DropdownCardWrapper = () => {
  return <div>
    <CardWrapper type='dropdown' title='Instagram' mediaIcon='https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png' />
    <CardWrapper type='dropdown' title='LinkedIn' mediaIcon='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' />
    <CardWrapper type='dropdown' title='Facebook' mediaIcon='https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png' />
    <CardWrapper type='dropdown' title='Twitter' mediaIcon='https://i.imgur.com/DTlQVjT.png' />
    <CardWrapper type='dropdown' title='E-Commerce' mediaIcon='https://i.imgur.com/cED6SbI.png' />
  </div>;
};
