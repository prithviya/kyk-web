import React from 'react';
import Image from '../constants/image';
import Logo from '../images/svgkyk.svg';

function navbar() {
  return (
    <div>
        <nav className='uk-navbar-container' data-uk-navbar>
            <div className='uk-navbar-left'>
                <ul className='uk-navbar-nav uk-margin-medium-left'>
                    <li className='uk-hidden@m'>
                        <a className='logo-title' href='/#'>
                            <img src= { Image.BRAND_LOGO } alt='logo' style ={{ width:"100%" , height: "57px" }} /> 
                        </a>
                    </li>
                    <li className='uk-visible@m'>
                        <a className='logo-title' href='/#'>
                            <img src= {Logo} alt='logo' style ={{ width:"100%" , height: "90px" }}/> 
                        </a>
                    </li>   
                </ul>
            </div>

            <div className='uk-navbar-right'>
                <ul className='uk-navbar-nav uk-margin-medium-right'>
                    
                    <li className='uk-visible@m'>
                        <a href="#get-section" rel="noreferrer noopener" className='uk-text-capitalize text-white'>
                            Book An Appointment
                        </a>
                    </li>
                    <li className='uk-visible@m'>
                        <a href="/#" rel="noreferrer noopener" >
                            <hr className='uk-divider-vertical'/>
                        </a>
                    </li> 
                    <li className='uk-visible@m'>
                        <a href='tel:+919500064889' rel="noreferrer noopener" className='uk-text-capitalize text-white'>
                            Contact us
                        </a>
                    </li>
                   
                    <li  className='uk-hidden@m'>
                    <a  href="/#" rel="noreferrer noopener" type="button" uk-toggle="target: #offcanvas-slide">  
                        <img src= { Image.TOGGLE } alt="toggle" style={{ maxWidth: "100px" , maxHeight: "40px"}}/>
                    </a>
                        <div id="offcanvas-slide" uk-offcanvas="overlay: true">
                            <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                                <ul className='uk-list uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical'>
                                    <li className=''>
                                        <a className='logo-title' href="/#" rel="noreferrer noopener" >
                                            <img src= {Logo} alt='brand logo'/> 
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a className='logo-title' href="/#" rel="noreferrer noopener">
                                            Know your Karma
                                        </a>
                                    </li> */}
                                    <hr/>
                                    <li>
                                        <a href="#get-section" rel="noreferrer noopener" className='uk-text-capitalize'>
                                            Book An Appointment
                                        </a>
                                    </li>                                    
                                    <li>
                                        <a href='tel:+916383956452' rel="noreferrer noopener" className='uk-text-capitalize'>
                                            Contact us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default navbar
