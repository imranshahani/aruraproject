import React from "react";
import "../styles/header.css";

const Header = () => {
    return (
        <>
            <div className="header-wrapper">
                <div className="header-container">
                    <div className="header-material">
                        <div className="first-text">
                            <h1> Ready for the next </h1>
                        </div>
                        <div className="second-text" >
                            <h1 className="text" data-content="Big"> Big  <span data-content-2 ="Thing ?"> Thing ?</span>  </h1> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;