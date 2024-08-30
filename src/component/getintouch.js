import React, { useRef as UseRef, useState as UseSate } from 'react';
import emailjs from '@emailjs/browser'; 
import Image from '../constants/image';


function getintouch() {
    const contactRef = UseRef();
    const [done, setDone] = UseSate(false)

    const getinform = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jzs5v4y', 'template_vhfhmhc', contactRef.current, 'g37oRf3Y_-EYekRKF')
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
        <div className='custom-get-section' id="get-section">
            <div className='uk-section'>
                <div className='uk-container'>
                    <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                        <div>
                            <div className="">
                                <h3 className='cust-title uk-margin-remove'>Want to <span>Know your Karma ?</span></h3> 
                                <h2 className='uk-margin-remove custom-title'>Get in touch with us?</h2>
                                <div>
                                    <form ref={contactRef} onSubmit={getinform}>                                       
                                        <div class="uk-child-width-1-2@m uk-margin-top" data-uk-grid>
                                            <div>
                                                <div className="group">                                            
                                                    <input type="text" name="name" required="required" />
                                                    <span className="highlight"></span>
                                                    <span className="bar"></span>
                                                    <label>Name</label>
                                                </div> 
                                            </div>
                                            <div>
                                                <div className="group">                                            
                                                    <input type="text" name="gender" required="required" pattern="(?i)male|female" 
    title="Please enter 'male' or 'female' (case-insensitive)" />
                                                    <span className="highlight"></span>
                                                    <span className="bar"></span>
                                                    <label>Gender</label>
                                                </div> 
                                            </div>  

                                            <div>
                                                <div className="group">                                            
                                                    <input type="text" name="pob" required="required"/>
                                                    <span className="highlight"></span>
                                                    <span className="bar"></span>
                                                    <label>Place of Birth</label>
                                                </div> 
                                            </div>
                                            <div>
                                                <div className="group">                                            
                                                    <input type="number" name="phone" required="required" pattern="[6789][0-9]{9}" 
    title="Phone number start with 6-9 and remaining 9 digit with 0-9"/>
                                                    <span className="highlight"></span>
                                                    <span className="bar"></span>
                                                    <label>Phone Number</label>
                                                </div> 
                                            </div>  
                                        </div>  

                                        <div class="uk-child-width-1-3" data-uk-grid>
                                            <div>
                                                <div className="group">                                            
                                                    <input type="number" name="bornofdate" maxLength={'2'} required="required" min="1" max="31"/>
                                                    <span className="highlight"></span>
                                                    <span className="bar"></span>
                                                    <label>Date</label>
                                                </div> 
                                            </div>
                                            <div>
                                                <div className="group">                                            
                                                    <input type="number" name="bornofmonth" maxLength={'2'} required="required" min="1" max="12"/>
                                                    <span className="highlight"></span>
                                                    <span className="bar"></span>
                                                    <label>Month</label>
                                                </div> 
                                            </div>
                                            <div>
                                                <div className="group">                                            
                                                    <input type="number" name="bornofyear" maxLength={'4'} required="required" min="1940" max="2005"/>
                                                    <span className="highlight"></span>
                                                    <span className="bar"></span>
                                                    <label>Year</label>
                                                </div> 
                                            </div>   
                                        </div>                                          

                                        <div class="uk-child-width-1-3 uk-padding-remove" data-uk-grid>
                                            <div>
                                                <div className="group">                                            
                                                    <input type="number" name="bornoftime" maxLength={'2'} required="required" min="1" max="12"/>
                                                    <span className="highlight"></span>
                                                    <span className="bar"></span>
                                                    <label>Hours</label>
                                                </div> 
                                            </div>
                                            <div>
                                                <div className="group">                                            
                                                    <input type="number" name="bornofmin" maxLength={'2'} required="required" min="1" max="60"/>
                                                    <span className="highlight"></span>
                                                    <span className="bar"></span>
                                                    <label>Minutes</label>
                                                </div> 
                                            </div>  
                                            
                                            <div>
                                                <div className="group"> 
                                                    <select name="bornofdue" required="required">
                                                        <option value="" disabled selected></option>
                                                        <option value="Am">Am</option>
                                                        <option value="Pm">Pm</option>
                                                    </select>
                                                    <span className="highlight"></span>
                                                    <span className="bar"></span>
                                                    <label>AM / PM</label>
                                                </div> 
                                            </div>                                                  
                                        </div>                                          
                                        
                                        <div className="uk-margin-medium-top">                                            
                                            <div className="group">                                            
                                                <select name="meetingFormat" required="required">
                                                <option value="" disabled selected></option>
                                                <option value="offline">Offline</option>
                                                <option value="online">Online</option>
                                                </select>
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>Is the meeting scheduled to be offline or online?</label>
                                            </div> 
                                        </div> 

                                        <div className='uk-margin-medium-top'>
                                            <div className="group">                                            
                                                <input type="email" name="email" required="required"  />
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>Email</label>
                                            </div> 
                                        </div>

                                        <div className='uk-margin-medium-top'>
                                            <div className="group">
                                                <textarea type="textarea" name='msg' rows="3"></textarea>
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>Reason</label>
                                            </div>
                                        </div>
                                       
                                        
                                        <div className="uk-text-center">
                                            <button type="submit" class="custom-submit-btn">
                                                <span>Submit</span>
                                            </button>
                                        </div>

                                        <div className="clear">{done && <div style={{color: "#fd7e14", marginTop: "10px", fontSize: "18px", textAlign: "center"}}>We've received your message & will respond within 24 hours.</div>}</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='uk-visible@m '>
                            <div className="custom-position-center">
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
