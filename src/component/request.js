import React, { useRef as UseRef, useState as UseSate } from 'react';
import emailjs from '@emailjs/browser'; 
import { Link } from "react-scroll";
import Image from '../constants/image';

function request() {
    const formRef = UseRef();
    const [done, setDone] = UseSate(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_k8eaft2', 'template_hiurimb', formRef.current, 'g37oRf3Y_-EYekRKF')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className='uk-section custom-banner-section'>
        <div className='uk-container'>
            <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                <div>
                    <div class="uk-card uk-card-default uk-text-center uk-card-body">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className=''>
                                <div className="group">
                                    <input type="text" name="name" required="required" />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Name</label>
                                </div>
                                <div className="group">
                                    <input type="tel" name='phoneno' required="required" />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Phone No</label>
                                </div>
                                <div className="group">
                                    <input type="text" name='natchathiram' required="required" />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Natchathiram</label>
                                </div>       
                                <div className="group">
                                    <textarea type="textarea" name='msg' rows="3" required="required"></textarea>
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Reason</label>
                                </div>
                                <div className="btn-box">
                                    <button className="btn btn-submit uk-text-left" type="submit">submit</button>
                                </div>
                                <div className="clear">{done && <div style={{color: "#fd7e14", marginTop: "15px", fontSize: "18px", textAlign: "center"}}>Thank you </div>}</div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-body uk-text-center uk-margin-medium-top">
                        <img src= {Image.CHAKRA} alt='chakra iamges'/>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-body uk-text-center uk-margin-medium-top">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <h1 className='cust-head uk-margin-small uk-margin-top'>Click Here <span>To Know More</span></h1>                        
                        <Link to = "/request" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
                            <button className='clickhere' type='button'>Apply</button> 
                        </Link>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default request