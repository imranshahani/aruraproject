import React from "react";
import styles from "../styles/footer.module.css";
import { ImLinkedin } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";

const FooterArea = () => {
  return (
    <>

      <div className={styles.footerContainer}>

        <div className={styles.flex_child}>
          <div className={styles.links}>
            <div className={styles.footer_col1}>
              <ul>
                <li>
                  <a href="#">Homepage</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Terms and Privacy</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer_col2} >
              <ul>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog & Case Studies</a>
                </li>
                <li>
                  <a href="#">News & Events</a>
                </li>
                <li>
                  <a href="#">Training</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer_col3}>
              <ul>
                <li>
                  <a href="#">Brands</a>
                </li>
                <li>
                  <a href="#">Solutions</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Client Reviews</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer_col4}>
              <ul>
                <li>
                  <a href="#">Awards</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
                <li>
                  <a href="#">Cookies Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footer_col5}>
            <h3>The Start of a New Journey</h3>
          </div>
        </div>

        <div className={styles.subFooter}>

          <div className={styles.footer_col6}>
            <p>
              Evig copyright @ 2023, All rights reserved.
            </p>
          </div>

          <div className={styles.footer_col7}>
            <div className={styles.connectHeading}>
              <h1> Connect with us </h1>
            </div>
            <div>
              <ImLinkedin className={styles.connectLinks}
                onMouseOver={({ target }) => (target.style.color = "#0072b1")}
                onMouseOut={({ target }) => (target.style.color = "white")} />

              <ImYoutube className={styles.connectLinks}
                onMouseOver={({ target }) => (target.style.color = "red")}
                onMouseOut={({ target }) => (target.style.color = "white")} />

              <ImFacebook className={styles.connectLinks}
                onMouseOver={({ target }) => (target.style.color = "#3b5998")}
                onMouseOut={({ target }) => (target.style.color = "white")} />

              <ImWhatsapp className={styles.connectLinks}
                onMouseOver={({ target }) => (target.style.color = "green")}
                onMouseOut={({ target }) => (target.style.color = "white")} />

              <ImTwitter className={styles.connectLinks}
                onMouseOver={({ target }) => (target.style.color = "#00acee")}
                onMouseOut={({ target }) => (target.style.color = "white")} />
                
              <ImInstagram className={styles.connectLinks}
                onMouseOver={({ target }) => (target.style.color = "#d6229f")}
                onMouseOut={({ target }) => (target.style.color = "white")} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FooterArea;
