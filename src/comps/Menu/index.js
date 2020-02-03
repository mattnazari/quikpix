import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items, children }) => {
  return (
    <div className='cont'>
      {items.map((o, i) => {
        return <MenuItem {...o} />;
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
  children: null
};

export default Menu;
