import React from 'react'
import background from '../../images/background.jpg'
import {Button, Container} from 'react-bootstrap';

import './Home.css'
const Hero = () => {
  return (
    <div>
        
        <figure className='position-relative'>

        <img src={background} 
          height="1536"
          alt='Hill-Top Mountain' />
          <div className='centered'>
                <p>Welcome </p> 
                <p>Start Your Meditation Journey Here</p>
                <Button href='/relax' variant="outline-light">Start Now</Button>
          </div>
          <figcaption>
            Slow Down. Breathe.
          </figcaption>
        </figure>

    
        
    </div>
  )
}

export default Hero