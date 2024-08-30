import React, { useRef as UseRef, useState as UseSate } from 'react';
import emailjs from '@emailjs/browser'; 
import Image from '../constants/image';

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
            <div className='uk-section custom-activated-section'>
                <div className='uk-container'>
                    <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                        <div>
                            <div className="uk-card ">
                                <div className='uk-visible@m'>
                                    <div className="uk-card custom-position-center">
                                        <img src= { Image.BANNER_SECT} className='rotater' alt='image_rotate' />
                                    </div>
                                </div>
                                <div className='uk-hidden@m'>
                                    <div className="uk-card custom-position-center">
                                        <img src= { Image.BANNER_SECT} className='rotater' alt='image_rotate' style={{width:'82%'}}/>
                                    </div>
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
                                                <a href='tel:+917639892609'>
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
                                            <a href="https://api.whatsapp.com/send/?phone=917639892609&text=Hi,&app_absent=0" target="blank">
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
