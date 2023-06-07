import React from 'react'
import "./Contact.css";

function Contact() {
  return (
    <div className='CONTACTBODY'>
        <div class="containercontact">  
  <form id="contact" action="" method="post">
    <h3> Get in touch</h3>
    <h4>Contact us for all works</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" />
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Type yuur field of works" type="url" tabindex="4" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="What can i help you...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    
  </form>
</div>





    </div>
  )
}

export default Contact