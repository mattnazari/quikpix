import React from "react";

const MenuItem = ({ itemTitle, OnClick, itemTitleColor, itemWidth }) => {
  return (
    <div
      className="menuItemCont"
      style={{ color: itemTitleColor, width: itemWidth }}
    >
      <p className="link">{itemTitle}</p>
    </div>
  );
};

MenuItem.defaultProps = {
  itemTitle: "default title",
  OnClick: () => {},
  itemTitleColor: "#101010",
  itemWidth: ""
};

export default MenuItem;
