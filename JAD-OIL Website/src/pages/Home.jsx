import React from 'react';
import logo from '../Images/CompanyLogo/JADLogo.jpeg';
import { NavLink } from "react-router-dom";
import picture1 from "../Images/JADOIL Images/JADOIL Building/WhatsApp Image 2024-11-27 at 17.18.25 (2).jpeg";
import picture2 from "../Images/JADOIL Images/JADOIL Trucks/WhatsApp Image 2024-11-27 at 13.19.23 (1).jpeg";
import picture3 from "../Images/home/undraw_pending_approval_xuu9.svg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import "./Home.css";

const Home = () => {



  return (
    <React.Fragment>
      <div className='mainContainer'>
        <div 
          className='homeSection' 
          
        >
          <div>WELCOME TO THE  <b>HOME</b> OF </div>
          <img className='homeImage' src={logo} alt="Jad Logo" />
        </div>
        <div
          className='aboutSection'
        >
          <h4>About JAD-OIL</h4>
          <div className='about_body_container'>
            
            <div className='about_text'> 
              Gain insight into the founder's background, motivations, and the vision that led to the establishment of the business. 
              Gain a key understanding on JAD-OIL, Our Mission, and Our Vision for the future in being a leading Supplier of fuel to the African Continent.
            </div>
            <img className='pictureProps'src={picture1} alt="Conference Room" />
          </div>
          <div>
            <NavLink  className='buttonStyle'  to = "/AboutUs">
              Find Out More
            </NavLink>
          </div>
        </div>
        <div className='productSection'>
          <h4>Products Offered</h4>
            <div className='product_body_container'>
              <img className='pictureProps'src={picture2} alt="Conference Room" />
              <div className='product_text'>
                JAD oil provides a diverse range of affordable products to cater for all your business's needs.
                From Diesel 50 PPM and Petrol ULP 95 to Quality Oil for your trucks to make sure that your vehicle's are able
                to go the reach every destination successfully.
              </div>           
            </div>
            <div>
              <NavLink  className='buttonStyle'  to = "/ProductRange">
                Find Out More
              </NavLink>
            </div>
        </div>
        <div className='FAQSection'>
          <h4>Frequently Asked Questions</h4>
            <div className='FAQ_body_container'>
              <div className='FAQ_text'>
                <div>JADOIL understands that there are several questions that you as customer might have.
                We'll provide you with the most needed information about JADOIL. Such as Prices, Delivery and standard of Diesel.
                If we are unable to answer these questions , then pop us an email <strong>admin@jadoil.co.za</strong>               
                </div>
              </div>
              <img className='pictureProps'src={picture3} alt="Conference Room" />           
            </div>
            <div>
              <NavLink  className='buttonStyle'  to = "/FAQ">
                Find Out More
              </NavLink>
            </div>
        </div>
        <div className='get_in_touch_container'>
          <h4>Get In Touch with US</h4>
          <div className='get_in_touch'>
            <div className='contact_us'>
              <h5>Contact US</h5>
              <div className='contact_us_item'>
                <LocationOnIcon/>
                <div>JADOIL (PTY) Ltd, Block D, Hertford Office Park, 90 Bekker RD, Midrand, Gauteng</div>
              </div>
              <div className='contact_us_item'>
                <EmailIcon/>
                <div>admin@jadoil.co.za</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}



export default Home