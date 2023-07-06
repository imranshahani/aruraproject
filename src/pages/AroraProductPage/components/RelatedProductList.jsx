import React from "react";
import img4 from "../../../assets/Mask Group 72.png";
import img6 from "../../../assets/Mask Group 87.png";

import style from "../styles/RelatedProductList.module.css";

export default function RelatedProductList() {
  function next(){
    console.log("object")
  }
  return (
    <div className={style.Productdiv}>
      <div className={style.paragraph}>
        <h1>Others You Might Like</h1>
        <h3>We have topnotch products according to your taste.</h3>
        <p>So it will help you according to your desire.</p>
      </div>

      <div className={style.Productimage}>
        <div className={style.image4}>
          <img src={img4} alt="Image4" />
        </div>
        <div className={style.image6}>
          <img src={img6} alt="Image6" />
        </div>
        <div className={style.image6}>
          <img src={img6} alt="Image6" />
        </div>
        <div className={style.image6}>
          <img src={img4} alt="Image4" />
        </div>
      </div>
      <div className={style.previousnext}>
        <p onClick={next}>PREVIOUS -------</p>
        <p>-------- NEXT</p>
      </div>
      {/* <div className="btn">
        <h1>Be inspired, sign up now</h1>
        <p>
          Never miss the latest offers from Evig, tips and demos, <br />
          news and invites to local events.
        </p>
        <button>SUBSCRIBE NOW</button>
      </div> */}
    </div>
  );
}


