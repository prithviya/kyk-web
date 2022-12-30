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
                            <p className='uk-margin-top uk-text-justify'>
                            We are here to analyse each Graha that holds the reins of your life and study its characteristics to offer the right advice and solutions to your problems. In Astrology, every Graha (Planet) has a special characteristic and is associated to each day of the week. Hence every day is considered to be significant to do certain things, perform some actions, take decisions or conduct ceremonies on the stipulated days. They are called after some specific names in Sanskrit based on their special features and their corresponding colours are as follows:
                            </p><br/>
                            <ul className='uk-list uk-list-hyphen'>
                                <li>Monday – Chandran – White Colour </li>
                                <li>Tuesday – Sevvaai – Red Colour</li>
                                <li>Wednesday – Budhan – Green Colour</li>
                                <li>Thursday – Guru – Yellow Colour</li>
                                <li>Friday – Sukran – White colour</li>
                                <li>Saturday – Sani, Rahu – Black or Dark blue</li>
                                <li>Sunday – Suriyan – Orange or Red</li>
                            </ul>
                            
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