import React from "react";

import {
  Link
} from "react-router-dom";

const MenuItem = ({ itemTitle, OnClick, itemTitleColor, itemWidth }) => {
  return (
    <div
      className="menuItemCont"
      style={{ color: itemTitleColor, width: itemWidth }}>
      <Link className="link" to={itemTitle}>{itemTitle}</Link>
    </div>
  );
};

MenuItem.defaultProps = {
  itemTitle: "default title",
  OnClick: () => { },
  itemTitleColor: "#101010",
  itemWidth: ""
};

export default MenuItem;
