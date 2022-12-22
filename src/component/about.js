import React from 'react';
import Image from '../constants/image';
import POSTER_IMG_1 from '../images/poster/img-1.jpeg';


function about() {

  return (
    <div>
         {/* carousel */}
         <div className='custom-abt-section'>
            <div className='uk-section uk-text-center'>
                <div className='uk-container uk-padding uk-padding-remove-bottom'>
                    <div className='underline-text2'>
                        <h1 className='cust-head uk-margin-remove'>About <span>Know your Karma</span></h1>
                    </div>
                    <p className='uk-margin-top'>‘Know Your Karma’ is here to address this concept and ameliorate you from becoming a victim to your own actions. <br/>We are a comprehensive astrological company who strongly avow that our KARMA decides our next life <br/>based on three significant categories:<br/> VIDHI <i>(fate)</i>, MADI <i>(reasoning)</i> and GADHI <i>(state)</i>.</p>
                </div>
   
                <div className='uk-container uk-padding-large uk-padding-remove-bottom uk-padding-remove-top' >
                    <h1 className='cust-head uk-margin-small uk-margin-top'>Recent <span>Updates</span></h1>
                    <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                        <div>
                            <div class="uk-card uk-card-body">
                                <h1 className='cust-head uk-margin-small uk-margin-top'>Pooja <span>Requires</span></h1>
                                <button className='clickhere' type='button'>Apply</button>    
                            </div>
                        </div>
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
                                                            <img src="https://img.icons8.com/sf-regular/32/FFFFFF/downloading-updates.png" alt="download icon"/>
                                                        </button>
                                                    </a>
                                                </div>
                                                <div class="uk-float-right">
                                                <button class="uk-button uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example"><img src="https://img.icons8.com/windows/32/FFFFFF/visible--v1.png" alt='view icon'/></button>

                                                    <div id="modal-example" data-uk-modal>
                                                        <div class="uk-modal-dialog uk-modal-body uk-text-center">
                                                            <img src= {Image.POSTER_1}  width={'450px'} height={'450px'} alt='chakra_iamges' />                                                           
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
                                            <p className='uk-margin-small'>Time :</p>
                                        </div>
                                    </li>
                                    <li className='uk-width-1-1'>
                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                            <b className='uk-margin-small'>Sankatahara Chaturthi</b>
                                            <p className='uk-margin-small'>Date : 10-01-2023</p>
                                            <p className='uk-margin-small'>Time :</p>
                                        </div>
                                    </li>
                                    <li className='uk-width-1-1'>
                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                            <b className='uk-margin-small'>Shashthi</b>
                                            <p className='uk-margin-small'>Date : 13-01-2023</p>
                                            <p className='uk-margin-small'>Time :</p>
                                        </div>
                                    </li>
                                    <li className="uk-width-1-1">
                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                            <b className='uk-margin-small'>Ashtami (valarpirai)</b>
                                            <p className='uk-margin-small'>Date : 14-01-2023</p>
                                            <div class="uk-clearfix uk-text-center">
                                                <div class="uk-float-left">
                                                    <a href={ POSTER_IMG_1 } download="Brochure.jpeg"  loading="lazy" className='custom-align-center' style={{textDecoration:'none'}}>
                                                        <button className='uk-button uk-margin-small-right' type='button'>
                                                            <img src="https://img.icons8.com/sf-regular/32/FFFFFF/downloading-updates.png" alt='down icon'/>
                                                        </button>
                                                    </a>
                                                </div>
                                                <div class="uk-float-right">
                                                <button class="uk-button uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example"><img src="https://img.icons8.com/windows/32/FFFFFF/visible--v1.png" alt='show icon'/></button>

                                                    <div id="modal-example" data-uk-modal>
                                                        <div class="uk-modal-dialog uk-modal-body uk-text-center">
                                                            <img src= {Image.POSTER_1}  width={'450px'} height={'450px'} alt='chakra_iamges' />                                                           
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
                                            <p className='uk-margin-small'>Time :</p>
                                        </div>
                                    </li>
                                    <li className='uk-width-1-1'>
                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                            <b className='uk-margin-small'>Chaturthi</b>
                                            <p className='uk-margin-small'>Date : 25-01-2023</p>
                                            <p className='uk-margin-small'>Time :</p>
                                        </div>
                                    </li>
                                    <li className='uk-width-1-1'>
                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                            <b className='uk-margin-small'>Shashthi</b>
                                            <p className='uk-margin-small'>Date : 27-01-2023</p>
                                            <p className='uk-margin-small'>Time :</p>
                                        </div>
                                    </li>
                                    <li className="uk-width-1-1">
                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                            <b className='uk-margin-small'>Ashtami (Deipirai)</b>
                                            <p className='uk-margin-small'>Date : 28-01-2023</p>
                                            <div class="uk-clearfix uk-text-center">
                                                <div class="uk-float-left">
                                                    <a href={ POSTER_IMG_1 } download="Brochure.jpeg"  loading="lazy" className='custom-align-center' style={{textDecoration:'none'}}>
                                                        <button className='uk-button uk-margin-small-right' type='button'>
                                                            <img src="https://img.icons8.com/sf-regular/32/FFFFFF/downloading-updates.png" alt='download pic'/>
                                                        </button>
                                                    </a>
                                                </div>
                                                <div class="uk-float-right">
                                                <button class="uk-button uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example"><img src="https://img.icons8.com/windows/32/FFFFFF/visible--v1.png" alt='view more'/></button>

                                                    <div id="modal-example" data-uk-modal>
                                                        <div class="uk-modal-dialog uk-modal-body uk-text-center">
                                                            <img src= {Image.POSTER_1}  width={'450px'} height={'450px'} alt='chakra_iamges' />                                                           
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
        {/* carousel over */}
    </div>
  )
}

export default about