
import React, { useEffect } from "react";
import "../styles/text-section-2.css";

function TextSection2(props) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const heading = document.querySelector(".see_room_heading h2");
      const description = document.querySelector(".see_room_desc p");

      const sectionOffsetTop = document.querySelector("#parallax_section").offsetTop;
      sectionOffsetTop.offsetTop; 
      const windowHeight = window.innerHeight;

      if (scrollTop >= sectionOffsetTop - windowHeight) {
        const scrollPosition = scrollTop - (sectionOffsetTop - windowHeight);
        const maxScroll = Math.max(windowHeight, document.documentElement.scrollHeight - window.innerHeight);
        const normalizedScroll = scrollPosition / maxScroll;
        const parallax = normalizedScroll * 2200; // Adjust this value to control the parallax effect
      
        heading.style.transform = `translateY(calc(-250px + ${parallax}px))`;
        description.style.transform = `translateY(calc(200px + ${-parallax}px))`;
      } else {
        heading.style.transform = "";
        description.style.transform = "";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




//it's heading
const heading1 = props.heading1
const heading2 = props.heading2
// it's paragraph
const pera1 = props.pera1
const pera2 = props.pera2
const pera3 = props.pera3





  return (
    // <div>
      <div id="parallax_section" className="see_room_main">
        <div className="see_room_heading">
          <h2>{heading1} <br className="sm_none" />{heading2} </h2>
        </div>
        <div className="see_room_desc">
          <p>
            {pera1}<br className="sm_none" /> {pera2} <br className="sm_none" /> {pera3}
          </p>
        </div>
      </div>
      
    // </div>
  );
}

export default TextSection2;
