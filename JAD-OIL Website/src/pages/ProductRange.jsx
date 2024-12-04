import React from 'react';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import diesel50PPM from '../Images/productRange/diesel_50_PPM.png';
import pULP95 from '../Images/productRange/pulp95.jpg';
import iPG from '../Images/productRange/illuminating-paraffin-gas.png';
import VO from '../Images/productRange/vehicle_oil.png';
import './ProductRange.css'

const ProductRange = props => {
  const [isOpenDiesel, setIsOpenDiesel] = React.useState(false);
  const handleOpenDiesel = () => setIsOpenDiesel(true);
  const handleCloseDiesel = () => setIsOpenDiesel(false);

  const [isOpenULP, setIsOpenULP] = React.useState(false);
  const handleOpenULP = () => setIsOpenULP(true);
  const handleCloseULP = () => setIsOpenULP(false);

  const [isOpenIP, setIsOpenIP] = React.useState(false);
  const handleOpenIP = () => setIsOpenIP(true);
  const handleCloseIP = () => setIsOpenIP(false);

  const [isOpenVO, setIsOpenVO] = React.useState(false);
  const handleOpenVO = () => setIsOpenVO(true);
  const handleCloseVO = () => setIsOpenVO(false);

  return (
    <React.Fragment>
      <div className='container'>
        <h1 className='title'>PRODUCT RANGE</h1>
        <h2>
            We supply the following products:
        </h2>
        <div className='body'>
          
            <div className='section'>
              <Card sx={{ maxWidth: 345, height:'100%',display: 'flex', flexDirection: 'column' }}>
                <CardActionArea onClick={handleOpenDiesel}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={diesel50PPM}
                    alt="Diesel 50 PPM"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      Diesel 50PPM
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} className='sectionText'>
                      50 PPM diesel refers to diesel fuel that contains 50 parts per million of sulfur. 
                      This designation is crucial as it indicates the sulfur content, which is a significant factor in diesel fuel quality and its environmental impact. 
                      Diesel fuels are categorized mainly by their sulfur levels, with common grades including 10 PPM, 50 PPM, and 500 PPM.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{marginTop:'auto'}}>
                  <Button size="small" sx={{'color': 'black', backgroundColor:'#FF3131'}} onClick={handleOpenDiesel}>
                    Find Out More
                  </Button>
                </CardActions>
              </Card>
            </div>
            <div className='section'>
              <Card sx={{ maxWidth: 345 ,height:'100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea onClick={handleOpenULP}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={pULP95}
                    alt="Petrol ULP 95"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      Petrol ULP 95
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} className='sectionText'>
                      ULP 95, or <b>Unleaded Petrol 95</b>, is a type of gasoline with an octane rating of 95. 
                      This rating indicates the fuel's ability to resist knocking or pinging during combustion, which can damage engines. 
                      ULP 95 is specifically formulated for high-performance vehicles and is suitable for use in internal combustion engines, 
                      including those with fuel injection systems and carburetors.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{marginTop:'auto'}}>
                  <Button size="small" sx={{'color': 'black', backgroundColor:'#FF3131'}} onClick={handleOpenULP}>
                    Find Out More
                  </Button>
                </CardActions>
              </Card>
            </div>
            <div className='section'>
              <Card sx={{ maxWidth: 345, height:'100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea onClick={handleOpenIP}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={iPG}
                    alt="Illuminating Parrafin"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      Illuminating Paraffin
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} className='sectionText'>
                      Illuminating paraffin, commonly referred to as kerosene in many regions, 
                      is a type of refined petroleum product used primarily as a fuel for lighting, heating, and cooking. 
                      It is a combustible hydrocarbon liquid that is derived from crude oil through a refining process that removes impurities, 
                      making it suitable for various applications.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{marginTop:'auto'}}>
                  <Button size="small" sx={{'color': 'black', backgroundColor:'#FF3131'}} onClick={handleOpenIP}>
                    Find Out More
                  </Button>
                </CardActions>
              </Card>
            </div>
            <div className='section'>
              <Card sx={{ maxWidth: 345, height:'100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea onClick={handleOpenVO}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={VO}
                    alt="Vehicle Oil"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      Quality oils for your trucks
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} className='sectionText'>
                      Vehicle oil, commonly referred to as motor oil or engine oil, is a lubricant used in internal combustion engines to reduce friction, 
                      protect engine components, and enhance overall performance. 
                      It plays a crucial role in maintaining the efficiency and longevity of an engine by providing lubrication to moving parts, 
                      cooling the engine, and preventing wear and tear.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{marginTop:'auto'}}>
                  <Button size="small" sx={{'color': 'black', backgroundColor:'#FF3131'}} onClick={handleOpenVO}>
                    Find Out More
                  </Button>
                </CardActions>
              </Card>
            </div>
          
        </div>
      </div>
      {isOpenDiesel && <Modal
        className= 'modal_styling'
        open = {isOpenDiesel}
        onClose = {handleCloseDiesel}

      >
        <Box className= 'modalBox'>
          <Typography id="modal-modal-title" variant="h4" component="h4">
            Benefits of 50PPM diesel
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ul className='sectionText'>
                <li>
                  <b>Cleaner Combustion:</b> 
                  The lower sulfur content leads to reduced particulate emissions, improving air quality. 
                  This is particularly important in urban areas where air pollution is a major concern.
                </li>
                <li>
                  <b>Enhanced Engine Performance:</b>
                  Using 50 PPM diesel can improve fuel efficiency and reduce maintenance costs. 
                  The cleaner combustion process minimizes engine wear and the formation of corrosive byproducts, extending the lifespan of engine components.
                </li>
                <li>
                  <b>Regulatory Compliance:</b>
                  Many regions have implemented regulations mandating the use of low sulfur diesel to mitigate environmental impacts. 
                  Utilizing 50 PPM diesel helps vehicle owners comply with these regulations while contributing to broader sustainability goals.
                </li>
              </ul>
          </Typography>
        </Box>
      </Modal>}
      {
        isOpenULP && <Modal
          className= 'modal_styling'
          open = {isOpenULP}
          onClose = {handleCloseULP}
        >
          <Box className= 'modalBox'>
            <Typography id="modal-modal-title" variant="h4" component="h4">
              Benefits of ULP 95
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <ul className='sectionText'>
                <li>
                  <b>Enhanced Engine Performance:</b> 
                  ULP 95 provides better performance for high-compression and turbocharged engines. 
                  The higher octane rating allows for more efficient combustion, resulting in improved power output and acceleration.
                </li>
                <li>
                  <b>Reduced Engine Knock:</b>
                  The stability of ULP 95 under compression minimizes the risk of pre-ignition or knocking, which can harm engine components. 
                  This is particularly important for performance vehicles that operate at higher pressures.
                </li>
                <li>
                  <b>Cleaner Combustion:</b>
                  ULP 95 burns more cleanly than lower octane fuels, leading to fewer emissions and reduced deposits within the engine. 
                  This contributes to a cleaner fuel system and can lower maintenance costs over time.
                </li>
                <li>
                  <b>Improved Fuel Efficiency:</b>
                  Vehicles designed to run on higher octane fuels often achieve better fuel economy when using ULP 95. 
                  The optimized combustion process maximizes energy extraction from the fuel, which can result in savings at the pump.
                </li>
                <li>
                  <b>Compatibility with Advanced Technologies:</b>
                  ULP 95 is suitable for modern engines equipped with advanced technologies like Gasoline Direct Injection (GDI). 
                  These systems benefit from the cleaner burning characteristics of higher octane fuels, maintaining component cleanliness and efficiency.
                </li>
              </ul>
            </Typography>
          </Box>
        </Modal>
      }
      {
        isOpenIP && <Modal
          className= 'modal_styling'
          open = {isOpenIP}
          onClose = {handleCloseIP}
        >
          <Box className= 'modalBox'>
            <Typography id="modal-modal-title" variant="h4" component="h4">
              Benefits of Illumination Paraffin
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <ul className='sectionText'>
                <li>
                  <b>Versatile Fuel Source:</b> 
                  Illuminating paraffin is widely used in households, particularly in areas without reliable electricity. 
                  It serves as a primary energy source for cooking, heating, and lighting, making it essential for many low-income communities.
                </li>
                <li>
                  <b>Cost-Effective:</b>
                  It is often more affordable than other forms of energy, such as electricity or gas. 
                  This affordability allows households to purchase it in small quantities, making it accessible for families with limited financial resources.
                </li>
                <li>
                  <b>Efficient Heating and Lighting:</b>
                  When burned, illuminating paraffin produces a steady flame that provides consistent heat and light. 
                  This makes it ideal for use in lamps and stoves, especially in rural or off-grid areas.
                </li>
                <li>
                  <b>Reduced Soot Production:</b>
                  Compared to traditional kerosene, illuminating paraffin is more refined and produces less soot when burned. 
                  This characteristic helps maintain cleaner indoor air quality and reduces the buildup of soot on lamps and stoves.
                </li>
                <li>
                  <b>Low Odor:</b>
                  Modern formulations of illuminating paraffin often include additives that minimize odor during combustion. 
                  This makes it more suitable for indoor use compared to other fuels that may emit strong smells
                </li>
                <li>
                  <b>Wide Range of Applications:</b>
                  Beyond household use, illuminating paraffin is also utilized in various industries, 
                  including agriculture (for heating greenhouses), 
                  aviation (as jet fuel), and even in some medical applications due to its refined nature.
                </li>
              </ul>
            </Typography>
          </Box>
        </Modal>
      }
      {
        isOpenVO && <Modal
          className= 'modal_styling'
          open = {isOpenVO}
          onClose = {handleCloseVO}
        >
          <Box className= 'modalBox'>
            <Typography id="modal-modal-title" variant="h4" component="h4">
              Benefits of Quality Oil From JAD OIL
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <ul className='sectionText'>
                <li>
                  <b>Improved Fuel Efficiency:</b> 
                  Proper lubrication reduces friction, allowing the engine to operate more efficiently. 
                  This can lead to better fuel economy as the engine requires less energy to overcome resistance.
                </li>
                <li>
                  <b>Temperature Regulation:</b>
                  Motor oil maintains a consistent temperature within the engine by absorbing heat during operation. 
                  This temperature regulation is vital for optimal performance and longevity.
                </li>
                <li>
                  <b>Corrosion Protection:</b>
                  Motor oil protects against rust and corrosion by neutralizing acids produced during combustion. 
                  This protective layer helps maintain the integrity of metal components within the engine.
                </li>
              </ul>
            </Typography>
          </Box>
        </Modal>
      }
    </React.Fragment>
  )
}


export default ProductRange