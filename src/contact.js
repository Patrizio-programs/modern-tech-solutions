import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {


    const form = useRef();

    const btn = document.getElementById('btn');
    const sendEmail = (e) => {

        
 
        e.preventDefault();

        
    
        emailjs.sendForm('efault_service', 'template_pspf1fi', form.current, 'LfuScSUIeiHe69orR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';})

          
      };

    const Mailer = () =>{

        return <div>



            <br/><br/>

            <form ref={form} onSubmit={sendEmail}>

            <div className="pageTitle title">Contact Form </div>

            <div className="secondaryTitle title">Please fill out this form to contact us via email.</div>
            
            <input type="text" className="name formEntry" placeholder="Name" name="name"/>

            <input type="text" className="email formEntry" placeholder="Email" name="email"/>

            <input type="text" className="phone formEntry" placeholder="Phone" name="phone"/>

            <textarea className="message formEntry" placeholder="Message" name="message"></textarea>
            
            <input type="submit" id="btn" className="submit formEntry" value="Send"/>

            </form>
        </div>
    }
    return (<div className="form-div">
        <h2>Contact</h2> 

        <br/>


        <h4>Call us or Whatsapp:</h4>
        
        <i className="fa-brands fa-whatsapp">(784)527-8041/(784)498-6565</i>

        
        <br/>
        <br/>

        <div><i className="fa-solid fa-envelope"></i>moderntechsvg@gmail.com</div>

       

        
        <p>Or fill out this form here below:  <i className="fa-solid fa-arrow-turn-down"></i></p>

        <div>
     
        <Mailer/>
        </div>

        
        <br/><br/>
        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>
        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>


    </div>
)}

export default Contact;