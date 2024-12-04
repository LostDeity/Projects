import React from 'react';
import { NavLink } from "react-router-dom";

import './NavLinks.css'

const NavLinks = props => {
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to= "/" exact>
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink to = "/AboutUs">
                ABOUT US
            </NavLink>
        </li>
        <li>
            <NavLink to = "/ProductRange">
                PRODUCT RANGE
            </NavLink>
        </li>
        <li>
            <NavLink to = "/FAQ">
                FAQ
            </NavLink>
        </li>
    </ul>
  )
}


export default NavLinks