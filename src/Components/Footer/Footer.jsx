import React from 'react'
import "./Footer.css"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import { BsFacebook,BsWhatsapp,BsInstagram} from "react-icons/bs";
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer1'>
        <MDBFooter  className='text-center text-lg-start text-muted footer-main'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        

        <div>
          <a href='https://www.facebook.com/login/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://twitter.com/i/flow/login' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='https://www.google.com/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://www.linkedin.com/feed/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://github.com/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                <span style={{fontSize:"20px",textDecoration:"underline"}}>Al YAmama Typing</span>
              </h6>
              <span style={{textAlign:"space-between"}}>
              Al Yamama Typing Centre is UAE based dedicated team
               providing All based government related document works
              </span>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{fontSize:"20px",textDecoration:"underline"}}>Our Services</h6>
              <p>
                <Link to={"/Legaltranslation"}>
                    Legal Translation
                </Link>
              </p>
              <p>
                <Link to={'/Tax'} className='text-reset'>
                  Tax consulting
                </Link>
              </p>
              <p>
                <Link to='/Typing' className='text-reset'>
                    All Typing
                </Link>
              </p>
              <p>
                <Link to='/About' className='text-reset'>
                  pakistani Passpor
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{fontSize:"20px",textDecoration:"underline"}}>More Services</h6>
              <p>
                <Link to='/Typing' className='text-reset'>
                  Immigration services
                </Link>
              </p>
              <p>
                <Link to='/Typing' className='text-reset'>
                  Certificate Attestation
                </Link>
              </p>
              <p>
                <Link to='/Typing' className='text-reset'>
                  Medical Services
                </Link>
              </p>
              <p>
                <Link to='/Typing' className='text-reset'>
                  Family Visa
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{fontSize:"20px",textDecoration:"underline"}}>Contact Us</h6>
              <p>
                Al Yamama Typing
              </p>
              <p>
              Funairah Town
              
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' />(Near Km Trading)
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 919876546790
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 footer-below' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' ,display:"flex"}}>
       <div className='divfooterlast'> © 2021 All rights company of journey:
        <a className='text-reset fw-bold' href='https://web.whatsapp.com//'>
          jazeela
        </a>
        </div>
        <div style={{marginRight:"0px",marginLeft:"20rem"}} >
          <Row>
          <Col><a href="https://www.facebook.com/"><BsFacebook style={{width:"25px",height:"25px",color:"green"}}/></a></Col>
            <Col> <a href="https://wa.me/+919633070078?text=Hello,%20can%20want%20i%20help%20you%20a%20message"
       target="_blank"
       rel="noopener noreferrer"
    >     <BsWhatsapp style={{width:"25px",height:"25px",color:"green"}}/></a></Col>
            <Col><a href="https://www.instagram.com/"><BsInstagram style={{width:"25px",height:"25px",color:"green"}}/></a></Col>
          </Row>
        </div>
      </div>
    </MDBFooter>


    </div>
  )
}

export default Footer