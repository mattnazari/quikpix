import React from "react";

const MenuItem = ({ itemTitle, OnClick, itemTitleColor, menuWidth }) => {
  return (
    <div
      className="menuItemCont"
      style={{ color: itemTitleColor, width: menuWidth }}
    >
      {itemTitle}
    </div>
  );
};

MenuItem.defaultProps = {
  itemTitle: "default title",
  OnClick: () => {},
  itemTitleColor: "#101010",
  menuWidth: "100px"
};

export default MenuItem;
