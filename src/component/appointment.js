import React from 'react';
import { Input, Stack, InputGroup} from "@chakra-ui/react";

function appointment() {
  return (
    <div>
        <div className='uk-section custom-light-section'>
            <div className='uk-container'>
                <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                    <div>
                        <div className="uk-card uk-card-secondary custom-card-secondary uk-card-body">
                            <h3 className='cust-title uk-margin-remove'>Want to <span>Know your Karma ?</span></h3> 
                            <h2 className='uk-margin-remove custom-title'>Book an Appoinment</h2>
                            <div>
                                <Stack spacing={25} mt={5}>
                                    <InputGroup>
                                        <Input type='text' variant='flushed' placeholder='Name' _placeholder={{ color: 'inherit' }} width={'80%'} />
                                    </InputGroup>
                                    <InputGroup>
                                        <Input type='text' variant='flushed' placeholder='Email
        ' _placeholder={{ color: 'inherit' }} width={'80%'} />
                                    </InputGroup>
                                    <InputGroup>
                                        <Input type='text' variant='flushed' placeholder='Location
        ' _placeholder={{ color: 'inherit' }} width={'80%'} />
                                    </InputGroup>
                                    <button className='submit' type='button'>Submit</button>
                                </Stack>
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
                                            {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        >
        <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
        />
        </GoogleMapReact> */}
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
</div>
  )
}

export default appointment