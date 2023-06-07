import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import "./Icon.css"

function Icon() {
  return (
    <div>
        <div  className='icondiv'>
            <div style={{borderRadius:"50%",backgroundColor:"white"}}>
            <a href="https://wa.me/+919633070078?text=Hello,%20can%20want%20i%20help%20you%20a%20message"
       target="_blank"
       rel="noopener noreferrer"
    >
            <IoLogoWhatsapp style={{width:"50px",height:"50px",color:"green"}}/>
            </a>
            </div>
        </div>



    </div>
  )
}

export default Icon