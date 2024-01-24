import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import {useNavigate} from 'react-router-dom';
import '../Components/Shapes.css';
import '../Components/Layout.css';

const Timer = () => {



  /**
   *     duration={180}
    colors={['#4EBAFF', '#4EE2FF', '#4EF7FF', '#4EFFE2', '#4EFFC6', '#4EFFB1', '#4EE2FF', '#85D8F9', '#92FFFD', '#7EEDD5']}
    colorsTime={[180, 160, 140, 120, 100, 80, 60, 20, 10, 5, 2]}
   * 
   */
    const navigate = useNavigate();

  return (
    <div className='timer'>

<CountdownCircleTimer
    isPlaying
    duration={20}
    colors={['#4EBAFF', '#4EE2FF', '#4EF7FF', '#4EFFE2']}
    colorsTime={[20, 10, 5, 2]}
    onComplete={() => {
        navigate(`/complete`);
        return {
            shouldRepeat: false
        }
    }}
    
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>



    </div>
  )
}

export default Timer