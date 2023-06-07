import React from 'react'
import "./Tax.css"
import { Row, Col, Container } from 'react-bootstrap';
import tax from "../images/aboutback2.jpg";
// import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import {Data} from "../Legal translation/data";
import { BiChevronRightCircle } from "react-icons/bi";

function Tax() {  return (
    <div>
        <div className='aboutmainback '>
        <span className='taxspan' style={{marginLeft:"-160px"}}>Tax Consultancy</span>
        </div>
      <Container>
      
      <Row className='legalfrstraw' >
        
  
        <Col className='legalfrstcol' > 
        {Data.map((newdata) => (
          <div key={newdata.id} style={{ display: 'flex', flexDirection: 'row' }}>
            <BiChevronRightCircle 
            style={{paddingLeft:"5px",height:"30px",width:"30px",justifyContent:"center",alignItems:"center",marginLeft:"2rem",
            marginTop:"1.5rem",color: 'rgb(9, 140, 9)'}}/>
            <Tooltip placement="top"  title={newdata.data}>
              <Button className='button-legal' sx={{ m: 0.4,width:"200px",color: 'rgb(9, 140, 9)',fontWeight:"bold",fontSize:"1rem",
              backgroundColor:"rgb(234, 224, 224)",borderRadius:"2px",textTransform:"capitalize"}} >{newdata.head}</Button>
            </Tooltip>
            
          </div>
           ))}
        </Col>
     
    
              
                <Col>
                      <Row className='mainall' >
                    
                    <Col style={{width:"75%"}} >
                    
                    <div className='abouttextmain' style={{paddingLeft:"3px",textAlign:"justify"}}>
                    <h1 style={{textDecoration:"underline"}}> Tax Consultancy</h1> 
                        <span > In UAE now legal translation is mandatory, For example,
                          documents like birth certificates, marriage certificates, 
                          divorce certificate, death certificate, affidavits, power 
                          of attorney, the list are endless. We are experts in translation services.
                          Each language has its own exclusive localized terms; lexes
                          and terminologies that are distinct to that particular
                            region and language. 
                          Each language has its own exclusive localized terms; lexes
                          and terminologies that are distinct to that particular
                            region and language. 
                            </span>
                        </div>
                    </Col>
                    <Col style={{display:'flex',alignItems:'center'}}>
                    <img className="cardimageoflegal-1" src={tax} alt=""/>
                    </Col>
                    
                </Row>
                <Row style={{marginTop:'5px'}} >
                  <Col className='abouttextmain legalcol' >
                    Each language has its own exclusive localized terms; lexes and terminologies that are distinct to that particular
                  region and language. Translators need to localize
                    the information from a source language to its exact equivalent in 
                    another language at the same time modifying it to 
                    take into consideration local cultural sensitivities.
                    Translation is required in Dubai in various areas 
                    including commercial, legal, advertising, medical,
                      technical, marketing and financial and scientific business domains.
                  region and language. Translators need to localize
                    the information from a source language to its exact equivalent in 
                    another language at the same time modifying it to 
                    take into consideration local cultural sensitivities.
                    Translation is required in Dubai in various areas 
                    including commercial, legal, advertising, medical,
                      technical, marketing and financial and scientific business domains.
                      </Col>
                      </Row>
                </Col>
        </Row>
   </Container>


    </div>
  )
}

export default Tax