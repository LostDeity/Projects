import React from 'react'
import directorP from '../Images/beautiful-woman-supporting-body-positivity.jpg'
import fuelTanker from '../Images/JADOIL Images/JADOIL Trucks/WhatsApp Image 2024-11-27 at 13.19.23.jpeg'
import depot from '../Images/justus-menke-rN3W0kwlETE-unsplash.jpg'
import fuelPump from '../Images/engin-akyurt-nipgFe8mWB8-unsplash.jpg'
import "./AboutUs.css"

const AboutUs = props => {
  return (
    <React.Fragment>
      <div className='about-background'>
        <div className='about-container'>
          <div className='about_body'>
            <h1 className='about-title'>ABOUT JAD OIL</h1>
            <div className='about_body_text'>
              JADOIL, a startup company, was founded in September 2023 by Tarin Daniels. 
              Tarin, the Managing Director, graduated in 2018 with a Bachelor of Arts degree, as well as a Post Graduate Certificate in Education. 
              Family dynamic mentored her into entering the fuel industry.
            </div>
          </div>
          <div className='about_picture'>
              <img className='about_picture_image_2' src={directorP} alt="Director" />
          </div>
        </div>
        
        <div className='about-container'>
          <div className='about_picture'>
              <img className='about_picture_image' src={fuelTanker} alt="Fuel Tanker" />
          </div>
          <div className='about_body'>
            <h1 className='about-title'>WHO WE ARE</h1>
            <div className='about_body_text'>
              JADOIL is a company that specializes in the sales and distribution of bulk fuel products. These fuel products include diesel, petrol and illuminating paraffin. 
              This can be ordered through JADOIL and these products can be collected from a JADOIL warehouse or delivered to your premises.
              We keep our clients informed at all times on when they can expect their delivery. We strive on client satisfaction and being of service.
              Our deliveries are confined within and around Gauteng and Mpumalanga province. Fuel deliveries is facilitated by a fleet of tanker trucks. 
              Deliveries can range anywhere from 1000 litres to 40000 litres at a time.
              Fuel gets uplifted daily, exclusively from major oil companies then gets pumped into storage tanks, from there fuel goes out on smaller trucks to service our client base. 
              As a constant supply of fuel is being kept in our storage tanks, we can guarantee you a very fast turnaround time.
              Service is our passion and selling, moving, delivering fuel is our game.
              Any person or business that uses more than 1500 litres a month of diesel, petrol and/or paraffin is our client.
              </div>
          </div>
        </div>
        <div className='about-container'>
          
          <div className='about_body'>
            <h1 className='about-title'>OUR MISSION</h1>
            <div className='about_body_text'>
              Our mission from our first day of business our aim is to do everything possible to be the front runners in diesel supply, 
              finding the most efficient ways of saving our clients time and money. 
              Our competitive edge is our passion for client service. 
              We strive to be the market disrupters out serving our competitors by being of value, 
              great service and solving their fuel needs in unique ways. 
              We love being of value and serving our clients. 
              Client satisfaction is our culture, and having prosperous relationships is our way of doing business.
            </div>
          
          </div>
          <div className='about_picture'>
              <img className='about_picture_image' src={depot} alt="depot" />
          </div>
        </div>
        <div className='about-container'>
          <div className='about_picture'>
              <img className='about_picture_image' src={fuelPump} alt="Fuel Pump" />
          </div>
          <div className='about_body'>
            <h1 className='about-title'>OUR VISION</h1>
            <div className='about_body_text'>
              Our vision is to be an independent fuel supplier in the areas where we are focused. 
              Furthermore, the startup of multiple retail and wholesale depots until we have a national successful footprint of sites and trucks running under our brand. 
              This will include being a recognizable brand in our areas and dominating the markets where we are based. 
              In our areas of business, we aim to be the go-to supplier of choice when our clients think diesel, they think JADOIL.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}



export default AboutUs