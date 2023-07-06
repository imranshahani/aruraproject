import React, {useState, useEffect} from 'react'
// import '../styles/device-display-video.css';
import DisplayVideo from '../../../assets/deviceGlowing.mp4';
import ReactPlayer from 'react-player';

const DeviceGlowingVideo = () => {


  return (

    // <div className='FeaturesVideoWrapper'>
        <div className='FeaturesVideoContainer'>
            <ReactPlayer url={DisplayVideo} playing muted loop width={'100%'} height={"100%"} /> 
        </div>
    // </div>

  )

}
    
export default DeviceGlowingVideo;