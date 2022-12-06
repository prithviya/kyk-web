import React from 'react'

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
                    <div data-uk-slider>
                        <ul className="uk-slider-items">                            
                            <li className="uk-width-1-1">
                                <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                    <h3 className='cust-title uk-margin-remove'>Know <span>your Karma</span></h3>
                                        <p className='uk-margin-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                                </div>
                            </li>
                            <li className='uk-width-1-1'>
                                <div className="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                    <h3 className='cust-title uk-margin-remove'>Know <span>your Karma</span></h3>
                                        <p className='uk-margin-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                                </div>
                            </li>
                        </ul>
                        {/* <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a> */}
                        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                    </div>                    
                </div>
            </div>
        </div>
        {/* carousel over */}
    </div>
  )
}

export default about