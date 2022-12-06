import React from 'react';
import Image from '../constants/image';

function navbar() {
  return (
    <div>
        <nav className='uk-navbar-container' data-uk-navbar>
            <div className='uk-navbar-left'>
                <ul className='uk-navbar-nav uk-margin-medium-left'>
                    <li className='uk-hidden@m'>
                        <a className='logo-title' href='/#'>
                            <img src= {Image.BRAND_LOGO} style={{ height: 50, width: 50 }} alt='logo'/> 
                        </a>
                    </li>
                    <li className='uk-visible@m'>
                        <a className='logo-title' href='/#'>
                            <img src= {Image.BRAND_LOGO} style={{ height: 50, width: 50 }} alt='logo'/> Know your Karma
                        </a>
                    </li>   
                </ul>
            </div>

            <div className='uk-navbar-right'>
                <ul className='uk-navbar-nav uk-margin-medium-right'>
                   
                    <li className='uk-visible@m'>
                        <a href="/#" rel="noreferrer noopener" className='uk-text-capitalize'>
                            Book An Appointment
                        </a>
                    </li>
                    <li className='uk-visible@m'>
                        <a href="/#" rel="noreferrer noopener" >
                            <hr className='uk-divider-vertical'/>
                        </a>
                    </li> 
                    <li className='uk-visible@m'>
                        <a  href="/#" rel="noreferrer noopener" className='uk-text-capitalize'>
                            Contact us
                        </a>
                    </li>
                    <li  className='uk-hidden@m'>
                    <a  href="/#" rel="noreferrer noopener"  className="uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-slide">  
                        <img src= { Image.TOGGLE } alt="toggle" style={{ height: 50, width: 50 }}/>
                    </a>
                        <div id="offcanvas-slide" uk-offcanvas="overlay: true">
                            <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                                <ul className='uk-list uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical'>
                                    <li className=''>
                                        <a className='logo-title' href="/#" rel="noreferrer noopener" >
                                            <img src= {Image.BRAND_LOGO} alt='brand logo' style={{ height: 50, width: 50 }}/> 
                                        </a>
                                    </li>
                                    <li>
                                        <a className='logo-title' href="/#" rel="noreferrer noopener">
                                            Know your Karma
                                        </a>
                                    </li>
                                    <hr/>
                                    <li>
                                        <a href="/#" rel="noreferrer noopener" className='uk-text-capitalize'>
                                            Book An Appointment
                                        </a>
                                    </li>                                    
                                    <li>
                                        <a href="/#" rel="noreferrer noopener" className='uk-text-capitalize'>
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