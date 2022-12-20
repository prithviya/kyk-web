import React from 'react';
import { Input, Stack, InputGroup} from "@chakra-ui/react";
import Image from '../constants/image';

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
                            <div class="uk-card uk-card-default uk-card-body">
                                <h1 className='cust-head uk-margin-small uk-margin-top'>Pooja <span>Requires</span></h1>
                               
                                <button className='clickhere' type='button'  data-uk-toggle="target: #modal-pooja-requires">Apply</button>
                            
                            <div id="modal-pooja-requires" className='uk-modal-container' data-uk-modal>
                                <div className="uk-modal-dialog uk-padding-large">
                                    <button className="uk-modal-close-default" type="button" data-uk-close></button>
                                    <div className=''>
                                        <h1 className='cust-head uk-margin-remove uk-text-center'>Personal <span>Details</span></h1>
                                        <div class="uk-child-width-1-2@s uk-grid-match" data-uk-grid>
                                            <div>
                                                <div class="uk-card uk-card-body">
                                                    <div>
                                                        <Stack spacing={25} mt={5}>
                                                            <InputGroup>
                                                                <Input type='text' variant='flushed' placeholder='Name' _placeholder={{ color: 'inherit' }} />
                                                            </InputGroup>
                                                            <InputGroup>
                                                                <Input type='number' variant='flushed' placeholder='Phoneno' _placeholder={{ color: 'inherit' }} maxLength={10} />
                                                            </InputGroup>
                                                            <InputGroup>
                                                                <Input type='text' variant='flushed' placeholder='DOB' _placeholder={{ color: 'inherit' }} />
                                                            </InputGroup>
                                                            <InputGroup>
                                                                <Input type='text' variant='flushed' placeholder='Rasi' _placeholder={{ color: 'inherit' }} />
                                                            </InputGroup>
                                                            <InputGroup>
                                                                <Input type='text' variant='flushed' placeholder='Natchathiram' _placeholder={{ color: 'inherit' }} />
                                                            </InputGroup>
                                                            <InputGroup>
                                                                <Input type='text' variant='flushed' placeholder='Email
                            ' _placeholder={{ color: 'inherit' }} />
                                                            </InputGroup>
                                                            <InputGroup>
                                                                <Input type='text' variant='flushed' placeholder='Reason'
                            _placeholder={{ color: 'inherit' }} />
                                                            </InputGroup>
                                                            <br/>
                                                        </Stack>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className=''>
                                                    <div className="uk-card-body custom-position-center">
                                                        <img src= {Image.CHAKRA} alt='chakra iamges' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='uk-text-center'>
                                            <p className='custom-pop-title uk-text-capitalize'>Click Unlock to know more</p><br/>
                                            <a href='tel:+916383956452'>
                                                <button className='know_btn_pop' type='button'>Know More</button>
                                            </a>
                                        </div>
                                    </div>                                               
                                </div>
                            </div>
                            </div>
                        </div>
                       <div>
                            <div data-uk-slider='animation: push; autoplay:true; autoplay-interval: 2800; pause-on-hover: true;'>
                                <ul className="uk-slider-items">                            
                                    <li className="uk-width-1-1">
                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                            <b className='uk-margin-small'>Pradosham</b>
                                            <p className='uk-margin-small'>Date : 04-01-2023</p>
                                            <p className='uk-margin-small'>Time :</p>
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
                                    <li className='uk-width-1-1'>
                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                            <b className='uk-margin-small'>Ashtami</b>
                                            <p className='uk-margin-small'>Date : 14-01-2023</p>
                                            <p className='uk-margin-small'>Time :</p>
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
                                    <li className='uk-width-1-1'>
                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                            <b className='uk-margin-small'>Chaturthi</b>
                                            <p className='uk-margin-small'>Date : 19-01-2023</p>
                                            <p className='uk-margin-small'>Time :</p>
                                        </div>
                                    </li>
                                    <li className='uk-width-1-1'>
                                        <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                            <b className='uk-margin-small'>Chaturthi</b>
                                            <p className='uk-margin-small'>Date : 19-01-2023</p>
                                            <p className='uk-margin-small'>Time :</p>
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