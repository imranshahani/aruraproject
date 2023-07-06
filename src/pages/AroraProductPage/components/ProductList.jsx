import React, { useState } from "react";
import img1 from "../../../assets/Mask Group 59.png";
import img2 from "../../../assets/Mask Group 60.png";
import img3 from "../../../assets/Mask Group 62.png";
import style from "../styles/ProductList.module.css";

export default function ProductList() {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className={style.MainSlider}>
      <div className={style.slider}>
        <img src={img2} alt="Image1" />
        <img src={img1} alt="Image2" />
        <img src={img3} alt="Image3" />
      </div>
      <div className={style.Text}>
        <h1>VLX-TC1-CF</h1>
        <h2>
          4K IP Audio/Video <br /> Distribution Transceiver
        </h2>
        <div className={style.card}>


          <p>
            The VLX-TW2 Series provides one of the most advanced IP Streaming
            solutions on the market utilizing Aurora’s IPBaseTTM technology,
            which synergizes various IP/AV standards to work together as one. It
            is the industry’s first 4K UHD transceiver with only 1.5 Frame
            (25ms) latency and visually losses compression. Using a transmitter
            (encoder) and receiver (decoder), respectively, used to be the
            standard – until now. The VLX-TCW2 Series can be set up as either
            one to make installation, inventory, and troubleshooting easier.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          {isShowMore && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              hendrerit leo nec purus iaculis, vel pellentesque augue venenatis.
              Ut lacinia egestas tellus et porttitor. Aenean lobortis enim
              massa, quis lacinia enim tempor et. Curabitur luctus id dolor vel
              rhoncus. Nulla auctor at tellus non blandit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Suspendisse non vestibulum est,
              ac dignissim elit. Cras convallis tortor nibh, vel scelerisque
              odio euismod rutrum. Maecenas sit amet mi eu neque ullamcorper
              viverra. Nam et nisi ac lacus egestas vulputate venenatis eu urna.
              Praesent venenatis lectus vestibulum sapien iaculis, a
              pellentesque dui venenatis. Nunc vitae nisl nisi. Phasellus ligula
              nibh, rhoncus in suscipit quis, pretium lobortis augue. Maecenas
              tristique quam ultrices, scelerisque dolor vitae, tristique
              ligula. Nam ultrices est nec laoreet cursus. Praesent arcu leo,
              faucibus nec lorem ut, finibus posuere mauris. Aliquam erat
              volutpat. In vel finibus nunc. Aliquam non nisi.
            </p>
          )}

          <button onClick={toggleReadMoreLess}>
            {isShowMore ? "Read Less" : "Read More"}
          </button>
        </div>
        <div className={style.textbtn}>
          <h3>How to order us</h3>
          <p>
            Well! That's easy just contact us by <br />
            Clicking the button below
          </p>
          <br />
          <button>Contact Us </button>
        </div>
      </div>
    </div>
  );
}
