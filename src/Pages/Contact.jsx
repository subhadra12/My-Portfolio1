import React from 'react'
import mail_icon from '../assets/mail_icon.svg'
import call_icon from '../assets/call_icon.svg'
import location_icon from '../assets/location_icon.svg'

function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "7f0c7e27-d750-4db6-9c85-ff5201c4012a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         alert(res.message)
        }
      };
    
    return (
        <>
            <div className="container">
                <div className="contact"  id="contact">
                    <div className="title text-center">
                        <h1>Get in touch</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-1">
                            <div className="con text-center gap-2">
                            <h1>Let's talk</h1>
                            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                            </div>
                            <div className="contact-details">
                                <div className="contact-detail d-flex">
                                    <img src={mail_icon} alt="" />
                                    <p>dahalsubhadra2001@gmail.com</p>
                                </div>
                                <div className="contact-detail d-flex">
                                    <img src={call_icon} alt="" />
                                    <p>9863443310</p>
                                </div>
                                <div className="contact-detail d-flex">
                                    <img src={location_icon} alt="" />
                                    <p>Mulpani, Kathmandu</p>
                                </div>
                                </div>
                        </div>
                        <div className="col-lg-6 col-md-1">
                            <form onSubmit={onSubmit} className="form">
                                <label htmlFor="" >Your Name</label>
                                <input type="text" placeholder='Enter your name' name='name' required />
                                <label htmlFor="">Your Email</label>
                                <input type="email" placeholder='Enter your email' name='email' required />
                                <label htmlFor="">Write your message here</label>
                                <textarea name="message" placeholder='Enter your message' rows="8" id=""></textarea>
                                <button className="button" type='submit'>Submit Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact