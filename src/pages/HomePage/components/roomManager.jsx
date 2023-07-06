import React from "react";
import '../styles/roomManager.css';
// import Image from "next/image";
import mypic from '../../../assets/roomManager.png'

const RoomManager = () => {


    return (
        <>

            <div className="wrapper">

                <div className="material">
                    {/* <div class="bg">
                        <div class="bg bg2"></div>
                        <div class="bg bg3"></div>

                    </div> */}
                    <div className="text-area">
                        <div className="text">
                            <p className="inner-text">
                                A self hosted
                            </p>
                            <h1 className="inner-text">
                                Room Manager
                            </h1>
                            <button className="bookedButton">
                                Book A Demo
                            </button>
                        </div>
                        <div className="image">
                            <img
                                src={mypic}
                                alt="Room Manager Pic"
                                height='450px' />
                        </div>

                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </>
    )

}

export default RoomManager;