import React from 'react';
import Image from '../constants/image';

function Whatwe() {
  return (
    <div>
        {/* what we do */}
        <div className='uk-section custom-light-section'>
            <div className='uk-container'>
                <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                    <div>
                        <div className="uk-card custom-position-center">
                            <img src={Image.ABOUT_SECT} alt="what we do iamge"/>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-padding">
                            <div className='underline-text2 uk-margin-top'>
                                <h1 className='cust-head uk-margin-remove'>What <span>We Do</span></h1>
                            </div>
                            <p className='uk-margin-top uk-text-justify'>
                            ‘Know Your Karma’ is the complete solution and guide for sorting out your astrological issues and prepare you for this life as well as the next one. You just need to update us with your gender, date, place & time of Birth and see how the wonder works.
                            </p><br/>
                            <p className='uk-text-justify'>
                            We read and relate the positions of your Gragum and stars, activate them, deactivate them and normalize them through appropriate yugnas (rites) that will save you from landing into problems. 
                            </p><br/>
                            <p className='uk-text-justify'>
                            Find ‘Know Your Karma’ with us to lead a happy, peaceful and righteous life now and prepare to lead the same in the next life too.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* what we do over */}
    </div>
  )
}

export default Whatwe