import React, { useRef as UseRef, useState as UseSate } from 'react';
import emailjs from '@emailjs/browser'; 
import Image from '../constants/image';


function getintouch() {
    const contactRef = UseRef();
    const [done, setDone] = UseSate(false)

    const getinform = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_x56ik2b', 'template_dte24gb', contactRef.current, 'Z6ebx-H-iTm_3ZVpB')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div>
        {/* get in touch */}
        <div className='custom-get-section'>
            <div className='uk-section'>
                <div className='uk-container'>
                    <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                        <div>
                            <div className="uk-padding-large">
                                <h3 className='cust-title uk-margin-remove'>Want to <span>Know your Karma ?</span></h3> 
                                <h2 className='uk-margin-remove custom-title'>Get in touch with us?</h2>
                                <div>
                                    <form ref={contactRef} onSubmit={getinform}>                                       
                                        <div className="group">                                            
                                            <input type="text" name="name" required="required" />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Name</label>
                                        </div>                                  
                                        <div className="group">                                            
                                            <input type="date" name="dob" required="required" />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            {/* <label>Date of Birth</label> */}
                                        </div> 
                                        <div className="group">                                            
                                            <input type="time" name="tob" required="required" step={'1'} />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            {/* <label>Date of Birth</label> */}
                                        </div> 
                                        <div className="group">                                            
                                            <input type="text" name="pob" required="required"/>
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Place of Birth</label>
                                        </div> 
                                        <div className="group">                                            
                                            <input type="tel" name="phone" required="required"/>
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Phone Number</label>
                                        </div> 
                                        <div className="btn-box">
                                            <button className="clickhere" type="submit">Submit</button>
                                        </div>
                                        <div className="clear">{done && <div style={{color: "#fd7e14", marginTop: "10px", fontSize: "18px", textAlign: "center"}}>We've received your message & will respond within 24 hours.</div>}</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='uk-visible@m'>
                            <div className="uk-card-body custom-position-center">
                                <img src= {Image.CHAKRA} alt='chakra iamges' className='rotater'/>
                            </div>
                        </div>
                        <div className='uk-hidden@m'>
                            <div className="custom-position-center">
                                <img src= {Image.CHAKRA} alt='chakra iamges' className='rotater' style={{width:'80%'}}/>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        {/* get in touch over */}
    </div>
  )
}

export default getintouch