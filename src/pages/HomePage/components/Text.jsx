import React from "react";
import mianboardroom from "../../../assets/deviceWatch.jpg";
import "../styles/text.css";
import {BiRectangle } from"react-icons/bi";
import {ImConnection } from"react-icons/im";
import {BsEthernet } from"react-icons/bs";
import {RiComputerFill } from"react-icons/ri";
// let logo = requir
const Text = () => {
  return (
    <div>
        <div className="white-gradient"></div>
      <div className="text-section-first">
        <p>Specs!</p>
        <div className="mainPic">
         <img src={mianboardroom} alt="jhg" className="broadroom" />
        </div>
      </div>

      <div className="text-section-second">
        <h3>Liso</h3>
        <p>Intuitive user interface</p>
      
        <hr />
      
      {/* //display */}
        <p className="icon1"> <BiRectangle /></p>

        <div className="squier">
          <div className="heading">Display</div>
          <p>8 inch</p>
          <p>capacitive touch with</p>
          <p>anti fingerprint treatment</p>
        </div>



         {/* connection */}
         <p className="icon1"> <ImConnection /></p>

          <div className="squier">
            <div className="heading">Connectivity</div>
            <p>Wi-Fi</p>
            <p>802.11 a/b/g/n</p>
            <p>Ethernet</p>
            <p> RJ-45, 10/100/1000 Mbit</p>
            <p>PoE & PoE +</p>
            <p>RFID</p>
            <p>13.56 MHz reader</p>
            <p>ISO/IEC 14443A/B</p>
            <p>Supports MIFARE 4K/1K card ( does not </p>
            <p>support ISO/IEC 15693 or MIFARE Ultralight C)</p>
            <p>-</p>
          </div>




         {/* power */}
         <p className="icon1"> <BsEthernet /></p>

          <div className="squier">
            <div className="heading">Power</div>
            <p>Power over Ethernet (PoE), or</p>
            <p>12V AC/DC power adapter (accessory)</p>
          </div>


         {/* Sensors */}
         <p className="icon1"> <BsEthernet /></p>

          <div className="squier">
            <div className="heading">Sensors</div>
            <p>Proximity sensor</p>
            <p>Ambient light sensor</p>
          </div>
{/* this is gradient */}
<div className="red-gradient"></div>

         {/* Mounting */}
         <p className="icon1"> <BsEthernet /></p>

          <div className="squier">
            <div className="heading">Mounting</div>
            <p>5-way cable exit option for easy and neat installation</p>
            <p>Standard wall mount included in package</p>
            <p>Glass wall mount included in package</p>
          </div>



         {/*User interface languages*/}
         <p className="icon1"> <BsEthernet /></p>

          <div className="squier">
            <div className="heading">User interface languages</div>
            <p> Arabic</p>
            <p>Catalan</p>
            <p>Chinese, Simplified</p>
            <p>Chinese, Traditional</p>
            <p>Czech</p>
            <p>Danish</p>
            <p>Dutch</p>
            <p>English</p>
            <p>Estonian</p>
            <p>Finnish</p>
            <p>French</p>
            <p>Galician</p>
            <p>German</p>
            <p>Icelandic</p>
            <p>Italian</p>
<div className="green-gradient"></div>
            <p>Japanese</p>
            <p>Korean</p>
            <p>Latvian</p>
            <p>Lithuanian</p>
            <p>Norwegian</p>
            <p>Polish</p>
            <p>Portuguese</p>
            <p>Russian</p>
            <p>Spanish</p>
            <p>Swedish</p>
            <p>Thai</p>
          </div>

          {/* Compatible platforms */}
         <p className="icon1"> <RiComputerFill /></p>

          <div className="squier">
            <div className="heading">Compatible platforms</div>
            <p>Microsoft Office 365</p>
            <p>Microsoft Exchange 2019</p>
            <p>Microsoft Exchange 2016</p>
            <p>Microsoft Exchange 2013</p>
            <p>Google G Suite</p>
            <p>IBM/Lotus Domino Smart cloud</p>
            <p>IBM/Lotus Domino 8.5.3 or later</p>
            <p>Evoko Booking (stand-alone version)</p>
          </div>





          {/* Measurements and weight */}
         <p className="icon1"> <BsEthernet /></p>

        <div className="squier">
          <div className="heading">Measurements and weight</div>
          <p>200 x 200 x 25 mm</p>
          <p>(7.9 x 7.9 x 1.0 inch)</p>
          <p>Weight: 1.3 kg (2.9 lbs)</p>
        </div>

          {/* other */}
         <p className="icon1"> <BsEthernet /></p>

        <div className="squier">
          <div className="heading">Other</div>
          <p>3-way indirect light aura to make room</p>
          <p>status visible already from a distance</p>
          <p>Open API for third party integration</p>
          <p>Communication via real-time two-way connection</p>
          <p>Remote management with multi-site support</p>
          <p>Real-time monitoring & statistics</p>
          <p>Recommended Specifications: Dual Core CPU-4GB-30GB</p>
        </div>
 

      </div>
    </div>
  );
};

export default Text;
