import React, { useRef as UseRef, useState as UseSate } from 'react';
import emailjs from '@emailjs/browser'; 


function appointment() {
    const bookRef = UseRef();
    const [done, setDone] = UseSate(false)

    const getinform = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vnf19jo', 'template_knq6b9f', bookRef.current, 'Z6ebx-H-iTm_3ZVpB')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div>
        <section id='appointment'>
            <div className='uk-section custom-light-section'>
                <div className='uk-container'>
                    <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                        <div>
                            <div className="uk-card uk-card-secondary custom-card-secondary uk-card-body">
                                <h3 className='cust-title uk-margin-remove'>Want to <span>Know your Karma ?</span></h3> 
                                <h2 className='uk-margin-remove custom-title'>Book an Appoinment</h2>
                                <div>
                                    <form ref={bookRef} onSubmit={getinform}> 
                                        <div className="group">                                            
                                            <input type="text" name="name" required="required" />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Name</label>
                                        </div>
                                        <div className="group">                                            
                                            <input type="email" name="mailid" required="required" />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Email</label>
                                        </div> 
                                        <div className="group">                                            
                                            <input type="tel" name="phone" required="required" />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Phone Number</label>
                                        </div> 
                                        <div className="group">                                            
                                            <input type="text" name="location" required="required" />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Location</label>
                                        </div>  
                                        <div className="btn-box">
                                            <button className="clickhere" type="submit">Submit</button>
                                        </div>
                                        <div className="clear">{done && <div style={{color: "#fd7e14", marginTop: "10px", fontSize: "18px", textAlign: "center"}}>We've received your message & will respond within 24 hours.</div>}</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="uk-card uk-padding">
                                <div className='underline-text2'>
                                    <h1 className='cust-head uk-margin-remove'>Contact Us </h1>
                                </div>                                
                                <p>
                                    If you have any questions, just fill in the contact form, and we will answer you shortly. If you are living nearby, come visit kyk at one of our comfortable offices. We will help you realize your ideas. Feel free to contact us at a time convenient to you.
                                </p>                                                    
                                <div className='uk-margin-top'>
                                    <div className="uk-child-width-1-1@m uk-text-left uk-grid-small uk-grid-match" data-uk-grid>
                                        <div>
                                            <div className="uk-card cust-card">
                                                <a href='Mailto:knowyourkarmakyk@gmail.com'>
                                                    <i className="fa-solid fa-envelope uk-margin-small-right"></i>knowyourkarmakyk@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="uk-card cust-card">
                                                <a href='tel:+916383956452'>
                                                    <i className="fa-solid fa-phone uk-margin-small-right"></i>Contact Us
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="uk-card cust-card">
                                                <a href='https://goo.gl/maps/WYU5yQYzgSBMd2HcA'>
                                                <i className="fa-solid fa-location-dot uk-margin-small-right"></i>location
                                                </a>                                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="social-menu uk-margin">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/profile.php?id=100088508124878" target="blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/knowyourkarmakyk/" target="blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://api.whatsapp.com/send/?phone=916383956452&text=Hi,&app_absent=0" target="blank">
                                                <i className="fab fa-whatsapp"></i>
                                            </a>
                                        </li>                                    
                                    </ul>                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default appointment