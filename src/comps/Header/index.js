import React from "react";
import Menu from "../Menu";

import {
  Link
} from "react-router-dom";

const Header = () => {
  function RefreshPage() {
    window.location.reload(true)
  }

  return (
    <div className="headerCont">
      <div>
        <Link className="logo" to='/'>QuikPix</Link>
      </div>
      <Menu items={headerItems} />
    </div>
  );
};

Header.defaultProps = {};

var headerItems = [
  {
    itemTitle: "Upgrade",
    itemTitleColor: "#101010",
    itemWidth: "100px"
  },
  {
    itemTitle: "Contact",
    itemTitleColor: "#101010",
    itemWidth: "100px"
  },
  {
    itemTitle: "Account",
    itemTitleColor: "#101010",
    itemWidth: "100px"
  }
];

export default Header;
