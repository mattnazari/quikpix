import React from "react";

const MenuItem = (itemTitle, OnClick) => {
  return <div>{itemTitle}</div>;
};

MenuItem.defaultProps = {
  itemTitle: "default item",
  OnClick: () => {}
};

export default MenuItem;
