import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import legal from "../images/legal.jpg";
import tax from "../images/bg2.jpg";
import typing from "../images/aboutback2.jpg"
import { BiChevronRightCircle } from "react-icons/bi";
import "./Details.css"

function Details() {
  return (
    <div className='detail-main' >
<Container>
        <Row style={{marginTop:"5rem"}}>
            <Col className='columone'>
            <img className='imagedetail' src={legal} alt=""></img>
                <h4 style={{paddingTop:"15px"}}>Legal Translation</h4>
                <p  className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias enim maiores corporis qui, hic impedit repellendus tempora porro consectetur
                    doloribus adipisci fugiat libero quaerat ad? Rerum soluta dolores perspiciatis.</p>
                <a href="/Legaltranslation"><button className='detai-button'>Read more
                <BiChevronRightCircle style={{paddingLeft:"5px",height:"25px",width:"25px"}}/>
                </button>
                </a>
            </Col>
            <Col>
            <img className='imagedetail' src={tax} alt="" ></img>
                <h4 style={{paddingTop:"15px"}}>Tax Consultancy</h4>
                <p className='para'  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias enim maiores corporis qui, hic impedit repellendus tempora porro consectetur
                    doloribus adipisci fugiat libero quaerat ad? Rerum soluta dolores perspiciatis.</p>
                <a href="/Tax"><button className='detai-button'>Read more
                <BiChevronRightCircle style={{paddingLeft:"5px",height:"25px",width:"25px"}}/>
                </button>
                </a>
            </Col>
            <Col className='detaillastcol'>
            <img className='imagedetail imglast' src={typing} alt="" ></img>
                <h4 style={{paddingTop:"15px"}}>Typing Services</h4>
                <p className='para lastpara'  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias enim maiores corporis qui, hic impedit repellendus tempora porro consectetur
                    doloribus adipisci fugiat libero quaerat ad? Rerum soluta dolores perspiciatis.</p>
                <a href="/Typing"><button className='detai-button'>Read more
                <BiChevronRightCircle style={{paddingLeft:"5px",height:"25px",width:"25px"}}/>
                </button>
                </a>
            </Col>
        </Row>
</Container>

    </div>
  )
}

export default Details