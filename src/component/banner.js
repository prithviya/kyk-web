import React from 'react';
import Image from '../constants/image';

function banner() { 
  return (
    <div>
        {/* banner */}
        <div className='custom-banner-section'>
            <div className='uk-container'>
                <div className='uk-child-width-1-2@m uk-grid-small uk-grid-match' data-uk-grid>
                    <div>
                        <div className='uk-card uk-card-body uk-margin-large-top'>
                            <h1 className='cust-header'>“You are accountable for <span>your reincarnation</span> in the next life”</h1>
                            <p className='uk-margin-remove'>This verily explains that your thoughts and actions of the past life will surely reap the outcome in the next. Your KARMA speaks from your side, the best and the grossest of your actions. </p>
                        </div>
                    </div>
                    <div className='uk-visible@m'>
                        <div className="uk-card custom-position-center">
                            <img src= { Image.BANNER_SECT} className='rotater' alt='image_rotate' />
                        </div>
                    </div>
                    <div className='uk-hidden@m'>
                        <div className="uk-card custom-position-center">
                            <img src= { Image.BANNER_SECT} className='rotater' alt='image_rotate' style={{width:'82%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* banner over */}
    </div>
  )
}

export default banner