import React, { useRef as UseRef, useState as UseSate } from 'react';
import emailjs from '@emailjs/browser'; 
import Image from '../constants/image';
import POSTER_IMG_1 from '../images/poster/img-1.jpeg';
import POSTER_IMG_2 from '../images/poster/img-2.jpeg';
import POSTER_IMG_3 from '../images/poster/img-3.jpeg';
import POSTER_IMG_4 from '../images/poster/img-4.jpeg';
import POSTER_IMG_5 from '../images/poster/img-5.jpeg';

function about() {
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
    <div>
         {/* carousel */}
         <div className='custom-abt-section'>
            <div className='uk-section uk-text-center'>
                <div className='uk-container'>
                    <div class="uk-text-center" data-uk-grid>
                        <div class="uk-width-2-3@m">
                            <div class="uk-card uk-card-body">
                                <div className='underline-text2'>
                                    <h1 className='cust-head uk-margin-remove'>About <span>Know your Karma</span></h1>
                                </div>
                                <p className='uk-margin-top'>‘Know Your Karma’ is here to address this concept and ameliorate you from becoming a victim to your own actions. We are a comprehensive astrological company who strongly avow that our KARMA decides our next life based on three significant categories: VIDHI <i>(fate)</i>, MADI <i>(reasoning)</i> and GADHI <i>(state)</i>.</p>
                                <div className='uk-container uk-padding-large uk-padding-remove-bottom uk-padding-remove-top' >
                                    <h1 className='cust-head uk-margin-small uk-margin-top'>Recent <span>Updates</span></h1>
                                    <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                                        <div>
                                            <div data-uk-slider='animation: push; autoplay:true; autoplay-interval: 3200; pause-on-hover: true;'>
                                                <ul className="uk-slider-items">                            
                                                    <li className="uk-width-1-1">
                                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                                            <b className='uk-margin-small'>Pradosham</b>
                                                            <p className='uk-margin-small'>Date : 04-01-2023</p>
                                                            <div class="uk-clearfix uk-text-center">
                                                                <div class="uk-float-left">
                                                                    <a href={ POSTER_IMG_1 } download="Brochure.jpeg"  loading="lazy" className='custom-align-center' style={{textDecoration:'none'}}>
                                                                        <button className='uk-button uk-margin-small-right' type='button'>
                                                                            <img src="https://img.icons8.com/sf-regular/32/FFFFFF/downloading-updates.png" alt="download icon" style={{margin: 'auto'}}/>
                                                                        </button>
                                                                    </a>
                                                                </div>
                                                                <div class="uk-float-right">
                                                                <button class="uk-button uk-margin-small-right" type="button" data-uk-toggle="target: #modal-poster-1"><img src="https://img.icons8.com/windows/32/FFFFFF/visible--v1.png" alt='view icon'/></button>

                                                                    <div id="modal-poster-1" data-uk-modal>
                                                                        <div class="uk-modal-dialog uk-modal-body uk-text-center">
                                                                        <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                                                            <img src= {Image.POSTER_1}  width={'450px'} height={'450px'} alt='chakra_iamges' style={{margin: 'auto'}}/>                                                           
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className='uk-width-1-1'>
                                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                                            <b className='uk-margin-small'>Paurnami</b>
                                                            <p className='uk-margin-small'>Date : 06-01-2023</p>

                                                        </div>
                                                    </li>
                                                    <li className='uk-width-1-1'>
                                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                                            <b className='uk-margin-small'>Sankatahara Chaturthi</b>
                                                            <p className='uk-margin-small'>Date : 10-01-2023</p>
                                                            <div class="uk-clearfix uk-text-center">
                                                                <div class="uk-float-left">
                                                                    <a href={ POSTER_IMG_5 } download="Brochure.jpeg"  loading="lazy" className='custom-align-center' style={{textDecoration:'none'}}>
                                                                        <button className='uk-button uk-margin-small-right' type='button'>
                                                                            <img src="https://img.icons8.com/sf-regular/32/FFFFFF/downloading-updates.png" alt='down icon'/>
                                                                        </button>
                                                                    </a>
                                                                </div>
                                                                <div class="uk-float-right">
                                                                <button class="uk-button uk-margin-small-right" type="button" data-uk-toggle="target: #modal-poster-5"><img src="https://img.icons8.com/windows/32/FFFFFF/visible--v1.png" alt='show icon'/></button>

                                                                    <div id="modal-poster-5" data-uk-modal>
                                                                        <div class="uk-modal-dialog uk-modal-body uk-text-center">
                                                                        <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                                                            <img src= {Image.POSTER_5}  width={'450px'} height={'450px'} alt='chakra_iamges' style={{margin: 'auto'}}/>                                                           
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className='uk-width-1-1'>
                                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                                            <b className='uk-margin-small'>Shashthi</b>
                                                            <p className='uk-margin-small'>Date : 13-01-2023</p>
                                                            <div class="uk-clearfix uk-text-center">
                                                                <div class="uk-float-left">
                                                                    <a href={ POSTER_IMG_2 } download="Brochure.jpeg"  loading="lazy" className='custom-align-center' style={{textDecoration:'none'}}>
                                                                        <button className='uk-button uk-margin-small-right' type='button'>
                                                                            <img src="https://img.icons8.com/sf-regular/32/FFFFFF/downloading-updates.png" alt='down icon'/>
                                                                        </button>
                                                                    </a>
                                                                </div>
                                                                <div class="uk-float-right">
                                                                <button class="uk-button uk-margin-small-right" type="button" data-uk-toggle="target: #modal-poster-2"><img src="https://img.icons8.com/windows/32/FFFFFF/visible--v1.png" alt='show icon'/></button>

                                                                    <div id="modal-poster-2" data-uk-modal>
                                                                        <div class="uk-modal-dialog uk-modal-body uk-text-center">
                                                                        <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                                                            <img src= {Image.POSTER_2}  width={'450px'} height={'450px'} alt='chakra_iamges' style={{margin: 'auto'}}/>                                                           
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="uk-width-1-1">
                                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                                            <b className='uk-margin-small'>Ashtami (Deipirai)</b>
                                                            <p className='uk-margin-small'>Date : 14-01-2023</p>
                                                            <div class="uk-clearfix uk-text-center">
                                                                <div class="uk-float-left">
                                                                    <a href={ POSTER_IMG_2 } download="Brochure.jpeg"  loading="lazy" className='custom-align-center' style={{textDecoration:'none'}}>
                                                                        <button className='uk-button uk-margin-small-right' type='button'>
                                                                            <img src="https://img.icons8.com/sf-regular/32/FFFFFF/downloading-updates.png" alt='down icon'/>
                                                                        </button>
                                                                    </a>
                                                                </div>
                                                                <div class="uk-float-right">
                                                                <button class="uk-button uk-margin-small-right" type="button" data-uk-toggle="target: #modal-poster-2"><img src="https://img.icons8.com/windows/32/FFFFFF/visible--v1.png" alt='show icon'/></button>

                                                                    <div id="modal-poster-2" data-uk-modal>
                                                                        <div class="uk-modal-dialog uk-modal-body uk-text-center">
                                                                            <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                                                            <img src= {Image.POSTER_2}  width={'450px'} height={'450px'} alt='chakra_iamges' style={{margin: 'auto'}}/>                                                           
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                                            </div>
                                        </div>
                                        <div>
                                            <div data-uk-slider='animation: slide; autoplay:true; autoplay-interval: 2800; pause-on-hover: true;'>
                                                <ul className="uk-slider-items">                            
                                                    <li className='uk-width-1-1'>
                                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                                            <b className='uk-margin-small'>Pradosham</b>
                                                            <p className='uk-margin-small'>Date : 19-01-2023</p>
                                                            <div class="uk-clearfix uk-text-center">
                                                                <div class="uk-float-left">
                                                                    <a href={ POSTER_IMG_3 } download="Brochure.jpeg"  loading="lazy" className='custom-align-center' style={{textDecoration:'none'}}>
                                                                            <button className='uk-button uk-margin-small-right' type='button'>
                                                                            <img src="https://img.icons8.com/sf-regular/32/FFFFFF/downloading-updates.png" alt='down icon'/>
                                                                        </button>
                                                                    </a>
                                                                </div>
                                                                <div class="uk-float-right">
                                                                <button class="uk-button uk-margin-small-right" type="button" data-uk-toggle="target: #modal-poster-3"><img src="https://img.icons8.com/windows/32/FFFFFF/visible--v1.png" alt='show icon'/></button>

                                                                    <div id="modal-poster-3" data-uk-modal>
                                                                        <div class="uk-modal-dialog uk-modal-body uk-text-center">
                                                                            <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                                                            <img src= {Image.POSTER_3}  width={'450px'} height={'450px'} alt='chakra_iamges' style={{margin: 'auto'}}/>                                                           
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className='uk-width-1-1'>
                                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                                            <b className='uk-margin-small'>Chaturthi</b>
                                                            <p className='uk-margin-small'>Date : 25-01-2023</p>

                                                        </div>
                                                    </li>
                                                    <li className='uk-width-1-1'>
                                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                                            <b className='uk-margin-small'>Shashthi</b>
                                                            <p className='uk-margin-small'>Date : 27-01-2023</p>

                                                        </div>
                                                    </li>
                                                    <li className="uk-width-1-1">
                                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                                            <b className='uk-margin-small'>Ashtami (Valarpirai)</b>
                                                            <p className='uk-margin-small'>Date : 28-01-2023</p>
                                                            <div class="uk-clearfix uk-text-center">
                                                                <div class="uk-float-left">
                                                                    <a href={ POSTER_IMG_4 } download="Brochure.jpeg"  loading="lazy" className='custom-align-center' style={{textDecoration:'none'}}>
                                                                        <button className='uk-button uk-margin-small-right' type='button'>
                                                                            <img src="https://img.icons8.com/sf-regular/32/FFFFFF/downloading-updates.png" alt='download pic'/>
                                                                        </button>
                                                                    </a>
                                                                </div>
                                                                <div class="uk-float-right">
                                                                <button class="uk-button uk-margin-small-right" type="button" data-uk-toggle="target: #modal-poster-4"><img src="https://img.icons8.com/windows/32/FFFFFF/visible--v1.png" alt='view more'/></button>

                                                                    <div id="modal-poster-4" data-uk-modal>
                                                                        <div class="uk-modal-dialog uk-modal-body uk-text-center">
                                                                            <button class="uk-modal-close-default" type="button" data-uk-close></button>
                                                                            <img src= {Image.POSTER_4}  width={'450px'} height={'450px'} alt='chakra_iamges' style={{margin: 'auto'}} />                                             
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>                                    
                                                </ul>    
                                                <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>                        
                                            </div>
                                        </div>
                                    </div>                                        
                                </div>
                            </div>
                        </div>
                        <div class="uk-width-1-3@m">
                            <div class="uk-card uk-text-center uk-card-body">
                            <h1 className='cust-head uk-margin-remove'>Pooja <span>Requires</span></h1>
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
                                        <div className="uk-text-center">
                                            <button type="submit" class="custom-submit-btn">
                                                <span>Submit</span>
                                            </button>
                                        </div>
                                        <div className="clear">{done && <div style={{color: "#fd7e14", marginTop: "5px", fontSize: "18px", textAlign: "center"}}>Thank you!!! For more details or enquiries contact us knowyourkarmakyk@gmail.com</div>}</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* carousel over */}
    </div>
  )
}

export default about