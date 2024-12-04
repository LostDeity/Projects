import React from "react";
import "./Navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <span><img src="/pictures/IMG-20240820-WA0001.jpg" alt="" /></span>
                <div className="socials">
                    <div>Search Bar Here</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
