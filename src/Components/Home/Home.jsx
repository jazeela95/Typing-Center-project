import React from 'react';
import "./Home.css";
import back from "../images/bg2.jpg";
import pexel1 from "../images/pexels1.jpg";
import pexel2 from "../images/pexels2.jpg";
import Carousel from 'react-bootstrap/Carousel';
import { BiChevronRightCircle } from "react-icons/bi";
// import Button from 'react-bootstrap/Button';
import Details from '../Details/Details';


import Icon from '../Icons/Icon';
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      <Carousel interval={3500} style={{ position: "relative" }}>
        <Carousel.Item>
          <img
            className="d-block w-100 slideimg"
            src={back}
            alt="First slide"
          />
          <div className='cardiv-1'>
            <Carousel.Caption className='caro-1'>
              <motion.span
                 initial={{ y: "30rem" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 3 }}
              >
                We can provide all your
              </motion.span>
              <motion.span
               initial={{ y: "30rem" }}
               animate={{ y: 0 }}
               transition={{ duration: 3 ,delay:"0.1"}}
              >DEP APPLICATIONS</motion.span>

              <motion.span
                  initial={{ y: "30rem" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 3 ,delay:"0.2"}}
              >All License related services can be<br></br> available from our centre now
              </motion.span>
              <motion.a 
              initial={{ x: "-40rem" }}
              animate={{ x: 0 }}
              transition={{ duration: 3 ,delay:"0.1"}}
              href="/About" className="btn btn-success button-home" style={{ paddingTop: "13px" }}>
                Read More
                <BiChevronRightCircle style={{ paddingLeft: "5px", height: "20px", width: "20px" }} />
              </motion.a>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slideimg"
            src={pexel1}
            alt="Second slide"
          />

          <Carousel.Caption className='caro-2'>
            <motion.span
               initial={{ y: "30rem" }}
               animate={{ y: 0 }}
               transition={{ duration: 2 }}
            >
              Tax Consultancy
            </motion.span>

            <motion.span
               initial={{ y: "30rem" }}
               animate={{ y: 0 }}
               transition={{ duration: 2 ,delay:"0.1"}}
            >We provide all Tax-related Works<br></br> with experts
            </motion.span>
            <motion.a
             initial={{ y: "-10rem" }}
             animate={{ y: 0 }}
             transition={{ duration: 2 ,delay:"0.1"}}
            href="/Legaltranslation" className="btn btn-success button-home" style={{ paddingTop: "13px" }}>
              Read More
              <BiChevronRightCircle style={{ paddingLeft: "5px", height: "20px", width: "20px" }} />
            </motion.a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slideimg"
            src={pexel2}
            alt="Third slide"
          />

          <Carousel.Caption className='caro-3'>
            <motion.span
            initial={{ y: "30rem" }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
            >Legal Translation</motion.span>

            <span>English and Arabic Legal Translation<br></br> & Any other translations</span>
            <a href="/Legaltranslation" className="btn btn-success button-home" style={{ paddingTop: "13px" }}>
              Read More
              <BiChevronRightCircle style={{ paddingLeft: "5px", height: "20px", width: "20px" }} />
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Details />
      
      <Icon />
    </div>
  );
}


export default Home       