import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import faqPic1 from '../Images/FAQ/undraw_faq_re_31cw.svg';
import faqPic2 from '../Images/FAQ/undraw_my_answer_re_k4dv.svg';
import faqPic3 from '../Images/FAQ/undraw_questions_re_1fy7.svg';

import './FAQ.css'

function createData(option, litres, cost, calculation) {
  return { option, litres, cost, calculation };
}

const rows = [
  createData('1', '1500', 'R22.70', 'Grid + R1'),
  createData('Ice cream sandwich', '10000', 'R22', 'Grid'),
  createData('Eclair', '10K and Above', 'Price Negotiation Available', 'Grid - R?'),
];

const FAQ = props => {


  
  return (
    <div className='container'>
      <h1 className='title'>FREQUENTLY ASKED QUESTIONS</h1>
      <div className='Cards'>
        <div className='cardSection'>
          <h2 className='question'>Where do you deliver?</h2>
          <div
            className='answer_container'
          >
            <img src={faqPic1} className='picture_1' alt=' Question avatar'/>
            <div className='answer'>
              <div className='answer_text'>
                We deliver fuel in quantities of 1000L- 40000L at a time directly to your premises. Our turnaround time is 24 hours from order placement.
              </div>
              <div className='answer_text'>
                <ul>
                    <li>We supply diesel in and around Gauteng</li>
                    <li>We are a diesel supplier to Johannesburg surrounding areas</li>
                    <li>We are a diesel supplier to Pretoria and surrounding areas</li>
                    <li>We are a diesel supplier to Nelspruit and surrounding areas</li>
                    <li>We are a diesel supplier to Emalahleni and surrounding areas</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        <div className='cardSection'>
          <h2 className='question'>Is your diesel of a high standard?</h2>
          <div
            className='answer_container'
          >
            <div className='answer'>
              <div className='answer_text'>
                Yes, at JADOIL, we are committed to providing only the best pure grade 50 PPM diesel. 
                We take the quality of our diesel seriously and have it regularly tested at a laboratory to ensure it meets the highest industry standards.
                You can trust that you’re receiving top-quality diesel for your operations.
              </div>
            </div>
            <img src={faqPic2} className='picture_2' alt=' Question avatar'/>
          </div>
        </div>
        <div className='cardSection'>
          <h2 className='question' >What is your pricing?</h2>
          <div className='answer'>
            <div className='answer_container'>
              <img src={faqPic3} className='picture_3' alt=' Question avatar'/>
              <div className='answer_text'>
                We offer competitive pricing for our diesel delivery services. 
                Since we buy in big quantities from major oil companies, we can guarantee you will save anywhere from R1.00 to R1.50 on a litre from the pump prices. 
                For a personalized quote that meets your specific needs, please don’t hesitate to give us a call. 
                Our team is ready to provide you with the most cost-effective solution tailored to your requirements.
              </div>
            </div>
            <div className='tableAnswer'>
              {/* Make this a table rather*/ }
                <h4 className='guideline'>Here with below is a guideline on our pricing structure:</h4>
                <TableContainer  >
                  <Table sx={{ minWidth: 650, borderColor:'black', borderStyle:'solid',borderRadius:'1rem'  }} aria-label="simple table">
                    <TableHead>
                      <TableRow sx={{borderColor:'black', borderStyle:'solid'}}>
                        <TableCell ><h3>Payment Option</h3></TableCell>
                        <TableCell align="right"><h3>Litres (L)</h3></TableCell>
                        <TableCell align="right"><h3>Cost Per Litre (R/L)</h3></TableCell>
                        <TableCell align="right"><h3>Calculation</h3></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody >
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.option}
                          </TableCell>
                          <TableCell align="right">{row.litres}</TableCell>
                          <TableCell align="right">{row.cost}</TableCell>
                          <TableCell align="right">{row.calculation}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <h5 className='payment'>All payments must be Cash on Delivery (EFT/Credit Card).</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default FAQ