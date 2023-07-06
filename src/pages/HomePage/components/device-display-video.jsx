import React, {useState, useEffect} from 'react'
import DisplayVideo from '../../../assets/deviceDisplay.mp4';
import ReactPlayer from 'react-player';

function DeviceDisplayVideo() {

    // useEffect(() => {

    //     // Start playing the video when the component mounts
    //     setPlaying(true);

    //     // Clean up the effect
    //     return () => {
    //         setPlaying(false);
    //     }
        
    // }, [])

  return (

    <div className='DisplayVideoWrapper'>
        <div className='DisplayVideoContainer'>
            <ReactPlayer playing muted loop url={DisplayVideo}  width={'100%'} height={"auto"} /> 
        </div>
    </div>

  )

}
    
export default DeviceDisplayVideo;