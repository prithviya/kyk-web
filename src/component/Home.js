import React from 'react';
import "uikit/dist/css/uikit-core.min.css";
import Image from '../constants/image';
import { Input, Stack, InputGroup} from "@chakra-ui/react";
// import { AtSignIcon, CalendarIcon, InfoOutlineIcon } from '@chakra-ui/icons';
// import { Radio, RadioGroup } from '@chakra-ui/react';
import { useState } from "react";
import Banner from './banner';
import About from './about';
import Testimonial from './testimonial';
import Whatwe from './Whatwe';
import Getintouch from './getintouch';
import Activated from './Activated';


function Home() {
    const [planet, setPlanet] = useState(1); // 0 is assigned to first planet and image

    const planetObj = [
      {
        id: 1,
        planet: "Mercury",
        image: Image.BUDHAN,
        learnmore:  Image.MERCURY_PDF,
        content: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets."
      },
      {
        id: 2,
        planet: "Venus",
        image: Image.SHUKRA,
        learnmore:  Image.VENUS_PDF,
        content: "Venus is the second planet from the Sun. It is sometimes called Earth's sister or twin planet as it is almost as large and has a similar composition."
      },
      {
        id: 3,
        planet: "Moon",
        image: Image.CHANDRAN,
        learnmore:  Image.MOON_PDF,
        content: "The Moon is Earth's only natural satellite. Its diameter is about one-quarter the diameter of the Earth. The Moon is the fifth largest satellite in the Solar System. "
      },
      {
        id: 4,
        planet: "Mars",
        image: Image.SEVAI,
        learnmore:  Image.MARS_PDF,
        content: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. Mars is named for the Roman god of war."
      },
      {
        id: 5,
        planet: "Jupiter",
        image: Image.GURU,
        learnmore:  Image.JUPITER_PDF,
        content: "Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times.  "
      },
      {
        id: 6,
        planet: "Saturn",
        image: Image.SHANI,
        learnmore:  Image.SATURN_PDF,
        content: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System. It is a gas giant with an average radius of about nine and a half times that of Earth."
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
        content: "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core."
      },
    ];
    console.log(planet);
  return (
    <div>
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
                                <button className='uk-align-center'>
                                    <a href={item.learnmore} rel="noreferrer noopener" download='9 planets files' target='_blank' > Readmore </a>
                                </button>
                            </div>                            
                        </>                        
                    )
                )}
                
                </div>
            </div>
            <div className='uk-section uk-hidden@m'>
               <div className='uk-container'>
                    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="sets: true">
                        <ul className="uk-slider-items uk-text-center uk-width-1-1@s">
                            <li className='uk-text-center'>
                                <img alt='planets' src={ Image.BUDHAN} />
                                <h1 className='uk-margin-top custom-tab-title'>Mercury</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.SHUKRA} />
                                <h1 className='uk-margin-top custom-tab-title'>Venus</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.CHANDRAN} />
                                <h1 className='uk-margin-top custom-tab-title'>Moon</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.SURYA} />
                                <h1 className='uk-margin-top custom-tab-title'>Sun</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.SEVAI} />
                                <h1 className='uk-margin-top custom-tab-title'>Mars</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.GURU} />
                                <h1 className='uk-margin-top custom-tab-title'>Jupiter</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.SHANI} />
                                <h1 className='uk-margin-top custom-tab-title'>Saturn</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.KETU} />
                                <h1 className='uk-margin-top custom-tab-title'>Ketu</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            <li>
                                <img alt='planets' src={ Image.RAHU} />
                                <h1 className='uk-margin-top custom-tab-title'>Raahu</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            
                        </ul>

                        <a className="uk-position-center-left uk-position-small uk-hidden-hover" rel="noreferrer noopener" href="#/" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                        <a className="uk-position-center-right uk-position-small uk-hidden-hover" rel="noreferrer noopener" href="#/" data-uk-slidenav-next data-uk-slider-item="next"></a>

                    </div>
               </div>
            </div>
        </div>
        {/* appointment */}
        <div className='uk-section custom-light-section'>
            <div className='uk-container'>
                <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                    <div>
                        <div className="uk-card uk-card-secondary custom-card-secondary uk-card-body">
                            <h3 className='cust-title uk-margin-remove'>Want to <span>Know your Karma ?</span></h3> 
                            <h2 className='uk-margin-remove custom-title'>Book an Appoinment</h2>
                            <div>
                                <Stack spacing={25} mt={5}>
                                    <InputGroup>
                                        <Input type='text' variant='flushed' placeholder='Name' _placeholder={{ color: 'inherit' }} width={'80%'} />
                                    </InputGroup>
                                    <InputGroup>
                                        <Input type='text' variant='flushed' placeholder='Email
    ' _placeholder={{ color: 'inherit' }} width={'80%'} />
                                    </InputGroup>
                                    <InputGroup>
                                        <Input type='text' variant='flushed' placeholder='Location
    ' _placeholder={{ color: 'inherit' }} width={'80%'} />
                                    </InputGroup>
                                    <button className='submit' type='button'>Submit</button>
                                </Stack>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-padding">
                            <div className='underline-text2'>
                                <h1 className='cust-head uk-margin-remove'>Contact Us On</h1>
                            </div>
                            <p className='uk-margin-top'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.
                            </p>
                            
                            <div className="uk-child-width-1-4@m uk-child-width-1-2 uk-grid-small uk-grid-match uk-margin" data-uk-grid>
                                <div>
                                    <div className="uk-card uk-card-secondary custom-secondary uk-card-body">
                                        <img alt='planets' src={ Image.WHATSAPP }/>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card uk-card-secondary custom-secondary uk-card-body">
                                        <img alt='planets' src={ Image.INSTAGRAM }/>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card uk-card-secondary custom-secondary uk-card-body">
                                        <img alt='planets' src={ Image.TWITTER }/>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card uk-card-secondary custom-secondary uk-card-body">
                                        <img alt='planets' src={ Image.FACEBOOK }/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-child-width-1-3@m uk-text-center uk-grid-small uk-grid-match" data-uk-grid>
                                    <div>
                                        <div className="uk-card cust-card">
                                            <a href='info@kyk.in'>
                                                <i className="fa-solid fa-envelope uk-margin-small-right"></i>info@kyk.in
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="uk-card cust-card">
                                            <a href='+91 12345 67890'>
                                                <i className="fa-solid fa-phone uk-margin-small-right"></i>1234567890
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="uk-card cust-card">
                                            <a href='+91 12345 67890'>
                                            <i className="fa-solid fa-location-dot uk-margin-small-right"></i>location
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='custom-get-section'>
            <div className='uk-padding-small'>
                <p className='uk-text-center'>© 2021 Know your Karmaa. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Home