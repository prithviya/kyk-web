import React from 'react';
import "uikit/dist/css/uikit-core.min.css";
import Image from '../constants/image';
import { Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AtSignIcon, CalendarIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { Radio, RadioGroup } from '@chakra-ui/react';
import { useState } from "react";

function Home() {
    const [planet, setPlanet] = useState(1); // 0 is assigned to first planet and image

    const planetObj = [
      {
        id: 1,
        planet: "Mercury",
        image: Image.BUDHAN,
        content: "Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 2,
        planet: "Venus",
        image: Image.SHUKRA,
        content: "Content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 3,
        planet: "Moon",
        image: Image.CHANDRAN,
        content: "Content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 4,
        planet: "Mars",
        image: Image.SEVAI,
        content: "Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      },
      {
        id: 5,
        planet: "Jupiter",
        image: Image.GURU,
        content: "Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      },
      {
        id: 6,
        planet: "Saturn",
        image: Image.SHANI,
        content: "Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      },
      {
        id: 7,
        planet: "Ketu",
        image: Image.KETU,
        content: "Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      },
      {
        id: 8,
        planet: "Raahu",
        image: Image.RAHU,
        content: "Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      },
      {
        id: 9,
        planet: "Sun",
        image: Image.SURYA,
        content: "Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      },
    ];
    console.log(planet);
  return (
    <div>
        {/* banner */}
        <div className='custom-banner-section'>
            <div className='uk-container'>
                <div className='uk-child-width-1-2@m uk-grid-small uk-grid-match' data-uk-grid>
                    <div>
                        <div className='uk-card uk-card-body uk-margin-large-top'>
                            <h1 className='cust-header'>Want to know your <span>KARMA ?</span></h1>
                            <p className='uk-margin-remove'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua laboris nisi ut aliquip ex. </p>
                        </div>
                    </div>
                    <div className='uk-visible@m'>
                        <div class="uk-card custom-position-center">
                            <img src= { Image.BANNER_SECT} className='rotater' />
                        </div>
                    </div>
                    <div className='uk-hidden@m'>
                        <div class="uk-card custom-position-center">
                            <img src= { Image.BANNER_SECT} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* banner over */}
        {/* carousel */}
        <div className='custom-abt-section'>
            <div className='uk-section uk-text-center'>
                <div className='uk-container uk-padding uk-padding-remove-bottom'>
                    <div className='underline-text2'>
                        <h1 className='cust-head uk-margin-remove'>About <span>Know your Karma</span></h1>
                    </div>
                    <p className='uk-margin-top'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/> ut labore et dolore magna aliqua laboris nisi ut aliquip ex.</p>
                </div>
                <div className='uk-container uk-padding-large uk-padding-remove-bottom uk-padding-remove-top' >
                    <h1 className='cust-head uk-margin-small uk-margin-top'>Recent <span>Updates</span></h1>
                    <div data-uk-slider>
                        <ul class="uk-slider-items">                            
                            <li class="uk-width-1-1">
                                <div class="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                    <h3 className='cust-title uk-margin-remove'>Know <span>your Karma</span></h3>
                                        <p className='uk-margin-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                                </div>
                            </li>
                            <li className='uk-width-1-1'>
                                <div class="uk-card uk-card-default uk-padding uk-width-1-1@m">
                                    <h3 className='cust-title uk-margin-remove'>Know <span>your Karma</span></h3>
                                        <p className='uk-margin-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                                </div>
                            </li>
                        </ul>
                        {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a> */}
                        <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                    </div>                    
                </div>
            </div>
        </div>
        {/* carousel over */}
        {/* about */}
        <div className='uk-section custom-light-section'>
            <div className='uk-container'>
                <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                    <div>
                        <div class="uk-card custom-position-center">
                            <img src={Image.ABOUT_SECT}/>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-padding">
                            <div className='underline-text2 uk-margin-top'>
                                <h1 className='cust-head uk-margin-remove'>About <span>Know your Karma</span></h1>
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
        {/* about over */}
        {/* get in touch */}
        <div className='custom-get-section'>
            <div className='uk-section'>
                <div className='uk-container'>
                    <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                        <div>
                            <div class="uk-padding uk-padding-remove-bottom uk-margin-medium-top">
                                <h3 className='cust-title uk-margin-remove'>Want to <span>Know your Karma ?</span></h3> 
                                <h2 className='uk-margin-remove custom-title'>Get in touch with us?</h2>
                                <div>
                                    <Stack spacing={25} mt={5}>
                                        <InputGroup>
                                            <InputLeftElement
                                            pointerEvents='none'
                                            children={<AtSignIcon color='gray.300' />}
                                            />
                                            <Input type='text' variant='flushed' placeholder='Name' _placeholder={{ color: 'inherit' }} width={'80%'} />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftElement
                                            pointerEvents='none'
                                            children={<CalendarIcon color='gray.300' />}
                                            />
                                            <Input type='text' variant='flushed' placeholder='Date of Birth
    ' _placeholder={{ color: 'inherit' }} width={'80%'} />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftElement
                                            pointerEvents='none'
                                            children={<InfoOutlineIcon color='gray.300' />}
                                            />
                                            <Input type='text' variant='flushed' placeholder='Date of Place
    ' _placeholder={{ color: 'inherit' }} width={'80%'} />
                                        </InputGroup>
                                        <RadioGroup defaultValue='1' ml={'5'}>
                                            <Stack spacing={5} direction='row'>
                                                <Radio colorScheme='orange' value='1'>
                                                Male
                                                </Radio>
                                                <Radio colorScheme='orange' value='2'>
                                                Female
                                                </Radio>
                                            </Stack>
                                        </RadioGroup>  
                                        <button className='clickhere' type='button'  data-uk-toggle="target: #modal-close-default">Submit</button>
                            
                                        <div id="modal-close-default" data-uk-modal>
                                            <div class="uk-modal-dialog uk-padding-large">
                                                <button class="uk-modal-close-default" type="button" uk-close></button>
                                                <div className=''>
                                                    <ul class="uk-subnav uk-subnav-pill" data-uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
                                                        
                                                        <li><a href="#">Vithi</a></li>
                                                        <li><a href="#">Mathi</a></li>
                                                        <li><a href="#">Gathi</a></li>
                                                    </ul>

                                                    <ul class="uk-switcher uk-margin">
                                                        <li>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                        </li>
                                                        <li>
                                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                        </li>
                                                        <li>
                                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                                                        </li>
                                                    </ul>
                                                    <div className='uk-text-center'>
                                                        <p className='custom-pop-title uk-text-capitalize'>Click Unlock to know more</p><br/>
                                                        <button className='know_btn_pop' type='button'>Know More</button>
                                                    </div>
                                                </div>                                               
                                            </div>
                                        </div>
                                    </Stack>
                                </div>
                            </div>
                        </div>
                        <div className='uk-visible@m'>
                            <div class="uk-card-body custom-position-center">
                                <img src= {Image.CHAKRA} className='rotater'/>
                            </div>
                        </div>
                        <div className='uk-hidden@m'>
                            <div class="custom-position-center">
                                <img src= {Image.CHAKRA} />
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        {/* get in touch over */}
        {/* testimonial */}
        <div className='uk-section custom-light-section'>
            <div className='uk-container uk-text-center'>
                <div className='underline-text2'>
                    <h1 className='cust-head uk-margin-remove'>What our <span>Customers </span>Say</h1>
                </div>
                <p className='uk-margin-top'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    <br/> eiusmod tempor incididunt ut labore et dolore"</p>
            </div>
            <div>
                <div className='uk-padding-remove-bottom' >
                    <div data-uk-slider="center: True">
                        <ul class="uk-slider-items  uk-grid uk-grid-match">
                            <li class="uk-width-1-2@m">
                                <div class="">
                                    <div class="uk-card-body uk-padding-remove-top">
                                        <div class="wrapper">
                                            <div class="profile-card js-profile-card">
                                                <div class="profile-card__img">
                                                    <img src= {Image.PROFILE}/>
                                                </div>
                                                <div class="profile-card__cnt js-profile-cnt">
                                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                                    <h3>Name</h3>
                                                    <h5>Position</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-width-1-2@m">
                                <div class="">
                                    <div class="uk-card-body uk-padding-remove-top">
                                        <div class="wrapper">
                                            <div class="profile-card js-profile-card">
                                                <div class="profile-card__img">
                                                    <img src= {Image.PROFILE}/>
                                                </div>
                                                <div class="profile-card__cnt js-profile-cnt">
                                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                                    <h3>Name</h3>
                                                    <h5>Position</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-width-1-2@m">
                                <div class="">
                                    <div class="uk-card-body uk-padding-remove-top">
                                        <div class="wrapper">
                                            <div class="profile-card js-profile-card">
                                                <div class="profile-card__img">
                                                    <img src= {Image.PROFILE}/>
                                                </div>
                                                <div class="profile-card__cnt js-profile-cnt">
                                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                                    <h3>Name</h3>
                                                    <h5>Position</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-width-1-2@m">
                                <div class="">
                                    <div class="uk-card-body uk-padding-remove-top">
                                        <div class="wrapper">
                                            <div class="profile-card js-profile-card">
                                                <div class="profile-card__img">
                                                    <img src= {Image.PROFILE}/>
                                                </div>
                                                <div class="profile-card__cnt js-profile-cnt">
                                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                                    <h3>Name</h3>
                                                    <h5>Position</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-width-1-2@m">
                                <div class="">
                                    <div class="uk-card-body uk-padding-remove-top">
                                        <div class="wrapper">
                                            <div class="profile-card js-profile-card">
                                                <div class="profile-card__img">
                                                    <img src= {Image.PROFILE}/>
                                                </div>
                                                <div class="profile-card__cnt js-profile-cnt">
                                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                                    <h3>Name</h3>
                                                    <h5>Position</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                    </div>                    
                </div>
            </div>
        </div>
        {/* testimonial over */}
        {/* How to Activate your Grahas */}
        <div className='uk-section custom-activated-section'>
            <div className='uk-container'>
                <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                    <div>
                        <div class="uk-card custom-position-center">
                            <img src={Image.ACTIVATED}/>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-padding">
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
                                <img src= {item.image} style={{width: 470}}/>
                                {/* <img src={item.image} alt="img" className='' /> */}
                            </div>
                            <div class="uk-card uk-padding-large uk-padding-remove-top uk-text-center">
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
                    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="sets: true">
                            <ul class="uk-slider-items uk-text-center uk-width-1-1@s">
                                <li className='uk-text-center'>
                                    <img src={ Image. BUDHAN} />
                                    <h1 className='uk-margin-top custom-tab-title'>Mercury</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    <img src={ Image.SHUKRA} />
                                    <h1 className='uk-margin-top custom-tab-title'>Venus</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    <img src={ Image.CHANDRAN} />
                                    <h1 className='uk-margin-top custom-tab-title'>Moon</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    <img src={ Image.SURYA} />
                                    <h1 className='uk-margin-top custom-tab-title'>Sun</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    <img src={ Image.SEVAI} />
                                    <h1 className='uk-margin-top custom-tab-title'>Mars</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    <img src={ Image.GURU} />
                                    <h1 className='uk-margin-top custom-tab-title'>Jupiter</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    <img src={ Image.SHANI} />
                                    <h1 className='uk-margin-top custom-tab-title'>Saturn</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    <img src={ Image.KETU} />
                                    <h1 className='uk-margin-top custom-tab-title'>Ketu</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    <img src={ Image.RAHU} />
                                    <h1 className='uk-margin-top custom-tab-title'>Raahu</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                
                            </ul>

                            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>

                        </div>
               </div>
            </div>
        </div>
        {/* appointment */}
        <div className='uk-section custom-light-section'>
            <div className='uk-container'>
                <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                    <div>
                        <div class="uk-card uk-card-secondary custom-card-secondary uk-card-body">
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
                        <div class="uk-card uk-padding">
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
                            
                            <div class="uk-child-width-1-4@m uk-child-width-1-2 uk-grid-small uk-grid-match uk-margin" data-uk-grid>
                                <div>
                                    <div class="uk-card uk-card-secondary custom-secondary uk-card-body">
                                        <img src={ Image.WHATSAPP }/>
                                    </div>
                                </div>
                                <div>
                                    <div class="uk-card uk-card-secondary custom-secondary uk-card-body">
                                        <img src={ Image.INSTAGRAM }/>
                                    </div>
                                </div>
                                <div>
                                    <div class="uk-card uk-card-secondary custom-secondary uk-card-body">
                                        <img src={ Image.TWITTER }/>
                                    </div>
                                </div>
                                <div>
                                    <div class="uk-card uk-card-secondary custom-secondary uk-card-body">
                                        <img src={ Image.FACEBOOK }/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="uk-child-width-1-3@m uk-text-center uk-grid-small uk-grid-match" data-uk-grid>
                                    <div>
                                        <div class="uk-card cust-card">
                                            <a href='info@kyk.in'>
                                                <i class="fa-solid fa-envelope uk-margin-small-right"></i>info@kyk.in
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="uk-card cust-card">
                                            <a href='+91 12345 67890'>
                                                <i class="fa-solid fa-phone uk-margin-small-right"></i>1234567890
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="uk-card cust-card">
                                            <a href='+91 12345 67890'>
                                            <i class="fa-solid fa-location-dot uk-margin-small-right"></i>location
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