import React from "react";
import img7 from "../../../assets/Group 619.png"
import style from "../styles/keyFeatures.module.css"

export default function keyFeature() {
  return (
    <div className= {style.mainfeaturetext}>
        <h1>KEY FEATURES</h1>
      <div className={style.textkey}>
        <div className={style.mainPera}>
          <span>Configure as Transmitter (Encoder) or Receiver (Decoder)
         </span>
         <p>4K UHD over 1G CAT 5e/6/6a</p>
         <p>HDMI 2.0, HDCP 2.2</p>
         <p> Visually Lossless with
          only 1.5 Frame Latency</p>
         <p>128 per Source with HDCP, Larger for
          Non-Encrypted Sources</p>
         <p>Video Wall with Image Rotation</p>
         <p>1G LAN PoE</p>
         <p>1 SFP
          for Single/Multimode Fiber or Second RJ-45</p>
         <p>2 HDMI Inputs, 1 HDMI
          Output</p>
         <p>Line In/Out Stereo</p>
         <p>RS-232 Serial Port and IR (In/Out)</p>
         <p>On Screen
          Display (OSD)</p>
         <p>Integrated Web Server for Configuration</p>
         <p>USB 2.0
          Host/Device Port </p>
         <p>2 USB 1.1 for HID Devices</p>
         <p> Dante® IP Option</p>
         <p>Front
          Keypad and IR Remote<br/> Rack and Under Table Mounting</p>
         
         
        </div>
        </div>

        <div className={style.file}>
          <h1>Guide File(s)</h1>
          <img src={img7} alt="image7" />
          <p>Datasheet</p>
          <p>103kb</p>
        </div>
    
    </div>
  );
}
