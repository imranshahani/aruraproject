import React from 'react'
import firstPic from '../../../assets/firstDevice.png'
import secondPic from '../../../assets/secondDevice.png'
import thirdPic from '../../../assets/thirdDevice.png'
import '../styles/devicesAnimations.css'



const DevicesAnimations = () => {
  return (
    <div className='deviceAnimationWrapper' >
      <div className='deviceAnimationContainer'>
        <img className='firstPic' src={firstPic} alt="" />
        <img className='secondPic' src={secondPic} alt="" />
        <img className='thirdPic' src={thirdPic} alt="" />
      </div>
    </div>
  )
}

export default DevicesAnimations