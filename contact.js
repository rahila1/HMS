import React from 'react'
import "./contact.css"
// import Image from "../Contact/contact.jpg"
import Button  from '@mui/material/Button'




const Contact = () => {
    
  return (
    <>
    {/* <section className='section'  style={{backgroundImage : `url (${Image})` }} > */}

    <section className='section'>
    <div className='cover'>
        <h1 >Contact Us</h1>
      <p>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.
</p>
<div className='shape'>
      <svg viewBox="0 0 2880 90" >
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
      </div>
      </section>

      <div>
        
        <div className='contact-form'>
            <form action ="#" method="POST" className='contact-inputs'>
                <input 
                label="UserName"
                type="email"
                name="Username"
                placeholder="Email"
                autoComplete="off"
                required
                />

            <input 
                type="text"
                name="Username"
                placeholder="username"
                autoComplete="off"
                required
                />

                <textarea 
                type="text" 
                name="message" 
                cols="30"
                 rows="6" 
                 autoComplete="off"
                 required>
             </textarea>
             <Button variant="contained">Send</Button>

            </form>
        </div>
        </div>
        

        <iframe
        title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463175.15591636114!2d66.83539192527361!3d24.91312543728018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339fc7861e19b%3A0xc3039a8a08d19bfd!2sKarachi%20urban%20nafsiati%20hospital%2FKarachi%20nafsiati%20hospital!5e0!3m2!1sen!2s!4v1708444852707!5m2!1sen!2s"
         width="70%"
          height="400"
           style={{border:1}}
            allowFullScreen=""
             loading="fast"
             mb ="2px"
              referrerpolicy="no-referrer-when-downgrade">
</iframe>
    
    </> 
  )
  
}

export default Contact