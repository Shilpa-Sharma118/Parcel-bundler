import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import "./App.scss";

function Header() {
  return (
    <div className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt=""
      />
      <input type="text" placeholder="Search" />
      <PersonIcon />
    </div>
  );
}

export default Header;
