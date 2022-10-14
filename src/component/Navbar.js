import React from 'react';
import Image from '../constants/image';

function navbar() {
  return (
    <div>
        <nav className='uk-navbar-container' data-uk-navbar>
            <div className='uk-navbar-left'>
                <ul className='uk-navbar-nav uk-margin-medium-left'>
                    <li className='uk-hidden@m'>
                        <a className='logo-title'>
                            <img src= {Image.BRAND_LOGO} style={{ height: 50, width: 50 }}/> 
                        </a>
                    </li>
                    <li className='uk-visible@m'>
                        <a className='logo-title'>
                            <img src= {Image.BRAND_LOGO} style={{ height: 50, width: 50 }}/> Know your Karma
                        </a>
                    </li>   
                </ul>
            </div>

            <div className='uk-navbar-right'>
                <ul className='uk-navbar-nav uk-margin-medium-right'>
                   
                    <li className='uk-visible@m'>
                        <a href="#" className='uk-text-capitalize'>
                            About us
                        </a>
                    </li>
                    <li className='uk-visible@m'>
                        <a>
                            <hr className='uk-divider-vertical'/>
                        </a>
                    </li> 
                    <li className='uk-visible@m'>
                        <a href="#" className='uk-text-capitalize'>
                            Contact us
                        </a>
                    </li>
                    <li  className='uk-hidden@m'>
                    <a href="" class="uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-slide">  
                        <img src= { Image.TOGGLE } style={{ height: 50, width: 50 }}/>
                    </a>
                        <div id="offcanvas-slide" uk-offcanvas="overlay: true">
                            <div class="uk-offcanvas-bar uk-flex uk-flex-column">
                                <ul className='uk-list uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical'>
                                    <li className=''>
                                        <a className='logo-title'>
                                            <img src= {Image.BRAND_LOGO} style={{ height: 50, width: 50 }}/> 
                                        </a>
                                    </li>
                                    <li>
                                        <a className='logo-title'>Know your Karma</a>
                                    </li>
                                    <hr/>
                                    <li>
                                        <a href="#" className='uk-text-capitalize'>
                                            About us
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="#" className='uk-text-capitalize'>
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