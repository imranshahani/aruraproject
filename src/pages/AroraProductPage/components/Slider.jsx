import React from 'react';
import image1 from "../../../assets/DSC02822-copy.png";
import style from "../styles/slider.module.css";

export default function Slider() {
  return (
    <div className={style.image}>
      <img src={image1} alt='slider'/>
    </div>
  )
}
