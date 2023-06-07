import React from 'react'
import "./About.css";
import cardimg1 from "../images/aboutback2.jpg"
import temp from "../images/pexels-lil-artsy-3278757.jpg"

import { Row, Col } from 'react-bootstrap';

function About() {
  return (
    <div className='maindiv'>
        <div className='aboutmainback'>
        <span className='aboutfrstsnap textspan22 ' style={{textDecoration:"underline"}}>About Us</span>
        </div>
        
        <Row className='mainallmain'>
       
            <Col>
           
            <div className='abouttextmain1'>
            <span  className='textspan1  ' style={{textDecoration:"underline"}}> Al yamama Typing,Translation & Tax consultancy</span>
                <span className='textspan2'> Al yamama typing centre is UAE based dedicated team providing All government related document works. Institution
                    established 2001 at bur dubai near Al Fahidi metro station. Our team has a experience of twenty six years.To make ease to our customers we always focused on taking of exact needs patiently and deliver service within the time by proper updates.
                    We always happy to say that our team work helped for exceeding the customer satisfaction always.
                </span>
                <span className='textspan3'>Al yamama contribute quality works moreover we educate our clients by providing latest updates of concern
                        departments as per their requirements.
                </span>
                </div>
            </Col>
            <Col style={{justifyContent:"center",marginTop:"auto",marginBottom:"auto"}}>
            {/* <Row style={{justifyContent:"center",marginBottom:"2rem"}}> */}

            <img className=" cardimage-1" src={temp} alt=""/>
            {/* </Row> */}
            {/* <Row>

            <span>Highest Quality Services</span>
            </Row> */}

            </Col>
            
        </Row>
    </div>
  )
}

export default About