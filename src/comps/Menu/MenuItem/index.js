import React from "react";

const MenuItem = ({ itemTitle, OnClick, itemTitleColor }) => {
  return (
    <div className="menuItem" style={{ color: itemTitleColor }}>
      {itemTitle}
    </div>
  );
};

MenuItem.defaultProps = {
  itemTitle: "default item",
  OnClick: () => {},
  itemTitleColor: "#101010"
};

export default MenuItem;
