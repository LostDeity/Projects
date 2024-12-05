import React from "react";
import "./NavBar.scss";
import Sidebar from "./Sidebar/SideBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      {/* <div className={"rightArea"}>
        <div className={"smallInput"}>
          <img className={"icon2"} alt="Search_logo" src="/images/icon.svg" />
          <input className={"search"} type="text" placeholder="Search...." />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
