import React from 'react';
import Image from '../constants/image';

function Activated() {
  return (
    <div>
        {/* How to Activate your Grahas */}
        <div className='uk-section custom-activated-section'>
            <div className='uk-container'>
                <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                    <div>
                        <div className="uk-card custom-position-center">
                            <img src={Image.ACTIVATED} alt='activated iamges'/>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-padding">
                            <div className='underline-text2 uk-margin-top'>
                                <h1 className='cust-head uk-margin-remove'>How to Activate your <span>Grahas</span></h1>
                            </div>
                            <p className='uk-margin-top'>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum."
                            </p><br/>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* How to Activate your Grahas over */}
    </div>
  )
}

export default Activated