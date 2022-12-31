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
                            <div>
                             <br/>   
                            <button class="uk-button uk-margin-small-right clickhere" type="button" data-uk-toggle="target: #read_more">
                                Read More
                            </button>

                                <div id="read_more" data-uk-modal>
                                    <div class="uk-modal-dialog uk-modal-body uk-text-center uk-padding-large">
                                        <h3 className='cust-head uk-text-left'>
                                            KYK Calibrates your Life
                                        </h3>
                                        <p className='uk-text-justify'>
                                            KYK does no magic but examines the position of the Grahas in your life and evaluates their positive or negative characteristics associating your problems over a period of time, hence activates or deactivates the Grahas that were predominantly getting you in trouble. So at KYK you are out of the tussle of performing any Pooja, Pariharam or go out of your way to set things right in your life. You carry on your daily routine with prayers and faith, at the same time practice certain guidelines or rules advised by the expert to activate or deactivate the Grahas. You are sure to witness the decline of your problems and a rejuvenating spirit in your life.
                                        </p>
                                        <br/>
                                        <h3 className='cust-head uk-text-left'>
                                            One-of-a-kind Astrology Experience
                                        </h3>
                                        <p className='uk-text-justify'>
                                            KYK is one-stop-shop solution for all your queries, especially related to business, career and health. It creates a unique fusion of planetary features, astrology and science and hence is able to analyse your problems in practical and scientific aspects. It proves as a boon for those in business for this industry is one of the most unpredictable venture which puts you in great risk, distress and peril. But KYK is the best resort with regard to such issues as it proposes you the finest counsel to startup such business that will activate the Grahas which will take you to the path of prosperity, for example activating Sani Bhagavaan to do extremely well at iron business, Chandra Bhagavaan for  business related to catering industry, Dairy farming or Water treatment industry and Sukra Bhagavaan for Beauty  industry & Cosmetic trade, Garment & Apparels marketing or Confectionery marketing.
                                        </p><br/>
                                        <p className='uk-text-justify'>
                                            As health is above all priority, KYK has incredible solutions for any health issues that makes you a cripple and slows down your life. Did you know that every part of our body is also controlled by these ethereal spheres, for example Sani Bhagavaan governs our legs, Suriya Bhagavaan our head and heart etc; and by taking care of them, we activate these Grahas to have a sound body and mind. KYK exactly does this by detecting the position of these Grahas, activates or deactivates them leading to a positive direction for a great wellbeing. 
                                        </p><br/>
                                        <p className='uk-text-justify'>
                                            Since the known human civilization, humanity has sort the aid of astrology for its problems and the legacy has been followed till date. KYK adapts to both astrology and science of Grahas and hence the expert is able to guide you through your problems as well as reverse your life for a wonderful change.
                                        </p>
                                        <h3 className='cust-head'>
                                            Know Your Karma is always at your service for your betterment.
                                        </h3>
                                    </div>
                                </div>
                            </div>
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