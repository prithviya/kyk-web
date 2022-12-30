
import { Link } from "react-scroll";
import Image from '../constants/image';

function request() {
    
  return (
    <div className='uk-section custom-banner-section'>
        <div className='uk-container'>
            <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                <div>
                    
                </div>
                <div>
                    <div class="uk-card uk-card-body uk-text-center uk-margin-medium-top">
                        <img src= {Image.CHAKRA} alt='chakra iamges'/>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-body uk-text-center uk-margin-medium-top">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <h1 className='cust-head uk-margin-small uk-margin-top'>Click Here <span>To Know More</span></h1>                        
                        <Link to = "/request" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
                            <button className='clickhere' type='button'>Apply</button> 
                        </Link>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default request