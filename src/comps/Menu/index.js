import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items, menuWidth }) => {
  return (
    <div className="cont" style={{ width: menuWidth }}>
      {items.map((o, i) => {
        return <MenuItem {...o} key={i} />;
      })}
    </div>
  );
};

Menu.defaultProps = {
  items: [
    {
      itemTitle: "item1"
    },
    {
      itemTitle: "item2"
    },
    {
      itemTitle: "item3"
    }
  ],
  menuWidth: ""
};

export default Menu;
