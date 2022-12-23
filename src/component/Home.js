import React from 'react';
import "uikit/dist/css/uikit-core.min.css";
import Image from '../constants/image';
import { useState } from "react";
import Navbar from './Navbar'
import Banner from './banner';
import About from './about';
import Testimonial from './testimonial';
import Whatwe from './Whatwe';
import Getintouch from './getintouch';
import Activated from './Activated';
// import MERCURY_PDF from '../images/pdf/mercury.pdf';
// import JUPITER_PDF from '../images/pdf/jupiter.pdf';
// import KETU_PDF from '../images/pdf/ketu.pdf';
// import MOON_PDF from '../images/pdf/moon.pdf';
// import RAAHU_PDF from '../images/pdf/raahu.pdf';
// import SATURN_PDF from '../images/pdf/saturn.pdf';
// import VENUS_PDF from '../images/pdf/venus.pdf';
// import MARS_PDF from '../images/pdf/mars.pdf';   
// import SUN_PDF from '../images/pdf/sun.pdf'; 
// import GoogleMapReact from 'google-map-react';
import Appointment from './appointment';

function Home() {
    
    const [planet, setPlanet] = useState(1); // 0 is assigned to first planet and image

    const planetObj = [
      {
        id: 1,
        planet: "Mercury",
        image: Image.BUDHAN,
        learnmore:  Image.MERCURY_PDF,
        content: "Mercury represents the principles of communication, mentality, thinking patterns, rationality/reasoning, adaptability and variability. Mercury governs schooling and education, the immediate environment of neighbors, siblings and cousins, transport over short distances, messages and forms of communication such as post, email and telephone, newspapers, journalism and writing, information gathering skills and physical dexterity. Mercury is the messenger of the gods in mythology. It is the planet of day-to-day expression and relationships. Mercury's action is to take things apart and put them back together again. It is an opportunistic planet, decidedly unemotional and curious.Mercury rules over Wednesday."
      },
      {
        id: 2,
        planet: "Venus",
        image: Image.SHUKRA,
        learnmore:  Image.VENUS_PDF,
        content: "Venus in astrology, known as Sukra in Hindu astrology.Venus is associated with the principles of harmony, beauty, refinement, , love, and the urge to sympathize and unite with others. It is involved with the desire for pleasure, comfort and ease. It governs romantic relations, sex (the origin of the words 'venery' and 'venereal'), marriage and business partnerships, the arts and fashion.Venus rules over FridayVenus is known as Shukra and represents wealth, pleasure.Venus rules over the eye, nose, chin, mouth, sexual organs, and kidneys, as well as bladderaffections."
      },
      {
        id: 3,
        planet: "Moon",
        image: Image.CHANDRAN,
        learnmore:  Image.MOON_PDF,
        content: "Moon is associated for some with the mother, maternal instincts or the urge to nurture, the home, the need for security and the past, especially early experiences and childhood. the Moon is associated with a person's intuition, emotional make-up, unconscious habits, rhythms, memories, moods, femininity and their ability to react and adapt to those around them.In Indian astrology, the Moon is called Chandra or Soma and represents the mind, queenship and mother.Left eye of a male, right eye of female, breasts, stomach, uterus, ovaries, synovial fluid, lymphatic vessels, sympathetic nerves, bladder etc. are represented by the planet Moon in Vedic Astrology.Moon rules over on monday. "
      },
      {
        id: 4,
        planet: "Mars",
        image: Image.SEVAI,
        learnmore:  Image.MARS_PDF,
        content: "Mars is associated with aggression, confrontation, energy, strength, ambition and impulsiveness. Mars governs sports, competitions and physical activities in general. The 1st-century poet Manilius, described the planet as ardent and as the lesser malefic. In medicine, Mars presides over the genitals, the muscular system, the gonads and adrenal glands. It was traditionally held to be hot and excessively dry and rules the choleric humor. It was associated with fever, accidents, trauma, pain and surgery. Mars is the passionate impulse and action, the masculine aspect, discipline, willpower and stamina.Mars rules over Tuesday."
      },
      {
        id: 5,
        planet: "Jupiter",
        image: Image.GURU,
        learnmore:  Image.JUPITER_PDF,
        content: "Jupiter is associated with the principles of growth, expansion, healing, prosperity, good fortune, and miracles. Jupiter governs long distance and foreign travel, big business and wealth, higher education, religion, and the law. It is also associated with the urge for freedom and exploration, as well with gambling and merrymaking.upiter is associated with the liver, pituitary gland, and the disposition of fats; it governs the sanguine humor. Jupiter rules over Thursday."
      },
      {
        id: 6,
        planet: "Saturn",
        image: Image.SHANI,
        learnmore:  Image.SATURN_PDF,
        content: "Saturn is associated with focus, precision, nobility, ethics, civility, lofty goals, career, great achievements, dedication, authority figures, stability, virtues, productiveness, valuable hard lessons learned, destiny, structures, protective roles, balance, meritocracy, conservatism, and karma (reaping what you have sown or cosmic justice) but with limitations, restrictions, boundaries, anxiety, tests, practicality, reality, and time. It concerns a person's sense of duty, commitment, responsibility, including their physical and emotional endurance in times of hardships. Saturn is fundamentally economical. It also represents concern with long-term planning or foresight.He is also the bringer of obstacles and hardship. SATURN rules over saturday."
      },
      {
        id: 7,
        planet: "Ketu",
        image: Image.KETU,
        learnmore:  Image.KETU_PDF,
        content: "Ketu is considered responsible for moksha, sannyasa, self-realization, gnana, a wavering nature, restlessness, the endocrine system and slender physique."
      },
      {
        id: 8,
        planet: "Raahu",
        image: Image.RAHU,
        learnmore:  Image.RAAHU_PDF,
        content: "A lunar node is either of the two orbital nodes of the Moon, that is, the two points at which the orbit of the Moon intersects the ecliptic."
      },
      {
        id: 9,
        planet: "Sun",
        image: Image.SURYA,
        learnmore:  Image.SUN_PDF,
        content: "The Sun is usually thought to represent the conscious ego, the self and its expression, personal power, pride and authority, leadership qualities and the principles of creativity, spontaneity, health and vitality, the sum of which is named the <i>life force.</i> The Sun rules over Sunday."
      },
    ];
    console.log(planet);
  return (
    <div>
        <Navbar/>
        <Banner/>
        <About/>
        <Whatwe/>
        <Getintouch/>
        <Testimonial/>
        <Activated/>
        {/* menu */}
        <div className='custom-get-section'>
            <div className='uk-section uk-visible@m'>
                <div className='uk-container'>
                    <div className='mercury_btn'>
                        <button className='mercury' onClick={() => setPlanet(1)}>Mercury</button>
                    </div>
                    <div className='venus_btn'>
                        <button className='venus' onClick={() => setPlanet(2)}>Venus</button>
                    </div>                    
                    <div className='earth_btn'>
                        <button className='earth' onClick={() => setPlanet(3)}>Moon</button>
                    </div>
                    <div className='mars_btn'>
                        <button className='mars' onClick={() => setPlanet(4)}>Mars</button>
                    </div>
                    <div className='jupiter_btn'>
                        <button className='jupiter' onClick={() => setPlanet(5)}>Jupiter</button>
                    </div>               
                    <div className='saturn_btn'>
                        <button className='saturn' onClick={() => setPlanet(6)}>Saturn</button>
                    </div>
                    <div className='uranus_btn'>
                        <button className='uranus' onClick={() => setPlanet(7)}>Ketu</button>
                    </div>
                    <div className='neptune_btn'>
                        <button className='neptune' onClick={() => setPlanet(8)}>Raahu</button>
                    </div>
                    <div className='pluto_btn'>
                        <button className='pluto' onClick={() => setPlanet(9)}>Sun</button>
                    </div>
                {planetObj.map(
                    (item) =>
                    item.id === planet && (
                        <>
                            <div className='uk-text-center custom-tab-img'>
                                <img src= {item.image} alt='iamge tab' style={{width: 470}}/>
                            </div>
                            <div className="uk-card uk-padding-large uk-padding-remove-top uk-text-center">
                                <h1 className='uk-margin-top custom-tab-title'>{item.planet}</h1>
                                <p className='uk-margin-top'>{item.content}</p>
                            </div>                            
                        </>                        
                    )
                )}
                
                </div>
            </div>
            <div className='uk-section uk-hidden@m'>
               <div className='uk-container'>
                    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slider="sets: true">
                        <ul className="uk-slider-items uk-text-center uk-width-1-1@s">
                            <li className='uk-text-center'>
                                <img alt='planets' src={ Image.BUDHAN} />
                                <h1 className='uk-margin-top custom-tab-title'>Mercury</h1>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.SHUKRA} />
                                <h1 className='uk-margin-top custom-tab-title'>Venus</h1>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.CHANDRAN} />
                                <h1 className='uk-margin-top custom-tab-title'>Moon</h1>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.SURYA} />
                                <h1 className='uk-margin-top custom-tab-title'>Sun</h1>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.SEVAI} />
                                <h1 className='uk-margin-top custom-tab-title'>Mars</h1>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.GURU} />
                                <h1 className='uk-margin-top custom-tab-title'>Jupiter</h1>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.SHANI} />
                                <h1 className='uk-margin-top custom-tab-title'>Saturn</h1>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.KETU} />
                                <h1 className='uk-margin-top custom-tab-title'>Ketu</h1>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.RAHU} />
                                <h1 className='uk-margin-top custom-tab-title'>Raahu</h1>
                            </li> 
                            
                        </ul>

                        {/* <a className="uk-position-center-left uk-position-small uk-hidden-hover" rel="noreferrer noopener" href="#/" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                        <a className="uk-position-center-right uk-position-small uk-hidden-hover" rel="noreferrer noopener" href="#/" data-uk-slidenav-next data-uk-slider-item="next"></a> */}

                    </div>
               </div>
            </div>
        </div>
        {/* appointment */}
        <Appointment/>
        <div className='custom-get-section'>
            <div className='uk-padding-small'>
                <p className='uk-text-center'>© 2021 Know your Karmaa. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Home