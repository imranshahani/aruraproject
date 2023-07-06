import React, {useState, useEffect, useRef} from 'react'
import DisplayVideo from '../../../assets/deviceFeatures.mp4';
import ReactPlayer from 'react-player'

const DeviceFeaturesVideo = () => {

  return (

    // <div className='FeaturesVideoWrapper'>
        <div className='FeaturesVideoContainer'>
            <ReactPlayer playing muted url={DisplayVideo} loop  width={'100%'} height={"100%"} /> 
        </div>
    // </div>

  )

}
    
export default DeviceFeaturesVideo;