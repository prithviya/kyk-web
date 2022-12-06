import React from 'react';
import Image from '../constants/image';
import { Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AtSignIcon, CalendarIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { Radio, RadioGroup } from '@chakra-ui/react';

function getintouch() {
  return (
    <div>
        {/* get in touch */}
        <div className='custom-get-section'>
            <div className='uk-section'>
                <div className='uk-container'>
                    <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                        <div>
                            <div className="uk-padding uk-padding-remove-bottom uk-margin-medium-top">
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
                                            <div className="uk-modal-dialog uk-padding-large">
                                                <button className="uk-modal-close-default" type="button" uk-close></button>
                                                <div className=''>
                                                    <ul className="uk-subnav uk-subnav-pill" data-uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
                                                        
                                                        <li><a href="#/"rel="noreferrer noopener">Vithi</a></li>
                                                        <li><a href="#/"rel="noreferrer noopener">Mathi</a></li>
                                                        <li><a href="#/"rel="noreferrer noopener">Gathi</a></li>
                                                    </ul>

                                                    <ul className="uk-switcher uk-margin">
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
                            <div className="uk-card-body custom-position-center">
                                <img src= {Image.CHAKRA} alt='chakra iamges' className='rotater'/>
                            </div>
                        </div>
                        <div className='uk-hidden@m'>
                            <div className="custom-position-center">
                                <img src= {Image.CHAKRA} alt='chakra iamges'/>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        {/* get in touch over */}
    </div>
  )
}

export default getintouch