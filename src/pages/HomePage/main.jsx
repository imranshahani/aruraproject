import React from 'react'
import Navbar from './components/navbar';
import DeviceDisplayVideo from './components/device-display-video';
import Header from './components/header';
import DeviceGlowingVideo from './components/deviceGlowingVideo';
import RoomManager from './components/roomManager';
import DeviceFeaturesVideo from './components/deviceFeaturesVideo';
import UserInterface from './components/userInterface';
import FindRoom from './components/findRoom';
import HomePageStyle from './main.module.css';
import TextSection2 from './components/text-section-2'
import TextSection3 from './components/text-section-3';
import Text from './components/Text';
import DevicesAnimations from './components/devicesAnimations';

const HomePage = () => {

  return (
    <>
      <div className={HomePageStyle.body}>
        {/* < Navbar /> */}
        < Header />
        < DeviceDisplayVideo />
        < TextSection3 
          heading3="EVOKO LISO"
          heading4="THE LISO"
          pera4=" A self-hosted room manager that brings all the"
          pera5=" features you need in a room booking device."
          pera6=" Place it outside any meeting, conference or huddle room." />
        < DeviceGlowingVideo />
        < RoomManager />
        < TextSection2 heading1="See room"
          heading2="status at a glance"
          pera1=" A self-hosted room manager that brings all the"
          pera2=" features you need in a room booking device."
          pera3=" Place it outside any meeting, conference or huddle room."
        />
        < DeviceFeaturesVideo />
        < UserInterface />
        < FindRoom />
        < DevicesAnimations />
        < Text />
        {/* < BeInspiredArea />
        < FooterArea /> */}
      </div>
    </>
  )
}

export default HomePage;