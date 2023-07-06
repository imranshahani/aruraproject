

import React, { useEffect } from "react";
import "../styles/text-section-3.css";

function TextSection3(props) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const heading = document.querySelector(".see_room_heading1 h2");
      const description = document.querySelector(".see_room_desc1 p");

      const sectionOffsetTop = document.querySelector("#parallax-section1").offsetTop;
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
const heading3 = props.heading3
const heading4 = props.heading4
// it's paragraph
const pera4 = props.pera4
const pera5 = props.pera5
const pera6 = props.pera6



  return (
    <div>
      <div id="parallax-section1" className="see_room_main1">
        <div className="see_room_heading1">
          <h2>{heading3} <br className="sm-none" />{heading4} </h2>
        </div>
        <div className="see_room_desc1">
          <p>
            {pera4}<br className="sm-none" />{pera5} <br className="sm-none" /> {pera6}
          </p>
        </div>
      </div>
      <div className="tmp1"></div>
    </div>
  );
}

export default TextSection3;









































// import React from 'react'
// import TextSection2 from "./text-section-2"
// import "../styles/text-section-2.module.css"

// function textsection3() {
//   return (
//     <div>
//       <TextSection2 
//               heading1="See room aaaa"
//               heading2="status at a glance"
//               pera1=" A self-hosted room manager that brings all the"
//               pera2=" features you need in a room booking device."
//               pera3=" Place it outside any meeting, conference or huddle room."/>
//     </div>
//   )
// }


// export default textsection3













































// import React, { useEffect, useRef } from "react";
// import "../styles/text-section-3.module.css";

// function TextSection3(props) {
//   const headingRef = useRef();
//   const descriptionRef = useRef();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       const sectionOffsetTop = document.querySelector("#parallax-section").offsetTop;
//       const windowHeight = window.innerHeight;

//       if (scrollTop >= sectionOffsetTop - windowHeight) {
//         const scrollPosition = scrollTop - (sectionOffsetTop - windowHeight);
//         const parallax = scrollPosition * 0.5; // Adjust this value to control the parallax effect

//         headingRef.current.style.transform = `translateY(${parallax}px)`;
//         descriptionRef.current.style.transform = `translateY(${parallax}px)`;
//       } else {
//         headingRef.current.style.transform = "";
//         descriptionRef.current.style.transform = "";
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

  

//   return (
//     <div>
//       <div id="parallax-section" className="see_room_main">
//         <div className="see_room_heading">
//           <h2 ref={headingRef}>
//             {props.heading3} <br className="sm-none" />
//             {props.heading4}
//           </h2>
//         </div>
//         <div className="see_room_desc">
//           <p ref={descriptionRef}>
//             {props.pera4}
//             <br className="sm-none" /> {props.pera5} <br className="sm-none" /> {props.pera6}
//           </p>
//         </div>
//       </div>
//       <div className="tmp"></div>
//     </div>
//   );
// }

// export default TextSection3;
