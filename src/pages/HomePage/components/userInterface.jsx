import React from "react";
import style from '../styles/userInterface.module.css';
// import "../styles/animation.css"
import firstCardVideo from '../../../assets/cardMobileVideo.mp4'
import secondCardVideo from '../../../assets/fingerTouch.mp4'
import thirdCardImg from '../../../assets/thirdCardImg.jpg'
import fourthCardVideo from '../../../assets/cardRotation.mp4'
import fifthCardVideo from '../../../assets/faceSensor.mp4'
import sixthCardImg from '../../../assets/sixthCardImg.jpeg'
import seventhCardImg from '../../../assets/seventhCardImg.png'
import AOS from 'aos'
// import ReactPlayer from "react-player";

AOS.init()

const UserInterface = () => {
    return (
        <>

            <div className={style.wrapper}>

                <div className={style.material}>


                    <div className={style.heading}>
                        <h1 className={style.firstLine} >
                            intuitive user interface
                        </h1>
                        <p className={style.secondLine}>
                            intuitive and user friendly interface
                        </p>
                    </div>




                    <div className={style.CardsWrapper}>



                        <div className={style.firstCard} data-aos="fade-up" data-aos-duration="2000">
                            <div>
                                <h3>
                                    Control through your phone
                                </h3>
                                <p>
                                    Ituitive and user friendly interface
                                </p>
                            </div>
                            <div className={style.firstCardVideoContainer}>
                                <video className={style.firstCardVideo} autoPlay muted loop >
                                    <source src={firstCardVideo} type="video/mp4" />
                                </video>
                            </div>
                        </div>




                        <div className={style.secondCard} data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="2000">
                            <h3>
                                <span>Book</span> with the touch of your fingertip.
                            </h3>
                            {/* <div className={style.secondCardVideoContainer}> */}
                                {/* <video className={style.secondCardVideo} src={secondCardVideo} playing={true} controls={true} loop={true} /> */}
                                <video autoPlay className={style.secondCardVideo} muted loop >
                                    <source src={secondCardVideo} type="video/mp4" />
                                </video>
                            {/* </div> */}
                        </div>





                        <div className={style.thirdCard} data-aos="fade-up" data-aos-duration="2000">
                            <div className={style.thirdCardImgContainer}>
                                <img className={style.thirdCardImg} src={thirdCardImg} alt="" />
                            </div>
                            <h3>
                                See meeting subject and the organizer.
                            </h3>
                        </div>





                        <div className={style.fourthCard} data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="2000">
                            <h3>
                                User Interface languages
                            </h3>
                            <div className={style.fourthCardVideoContainer}>
                                {/* <video className={style.fourthCardVideo} src={fourthCardVideo} playing={true} controls={true} loop={true} /> */}
                                <video autoPlay muted loop className={style.fourthCardVideo}  >
                                    <source src={fourthCardVideo} type="video/mp4" />
                                </video>
                            </div>
                        </div>





                        <div className={style.fifthCard} data-aos="fade-up" data-aos-duration="2000">
                            <h3>
                                Built in proximity sensor
                            </h3>
                            <p>
                                as you aproach the screen
                            </p>

                            <div className={style.fifthCardVideoContainer}>
                                {/* <video className={style.fifthCardVideo} src={fifthCardVideo} playing={true} controls={true} loop={true} /> */}
                                <video autoPlay className={style.fifthCardVideo} muted loop >
                                    <source src={fifthCardVideo} type="video/mp4" />
                                </video>
                            </div>
                        </div>





                        <div className={style.sixthCard} data-aos="fade-up" data-aos-duration="2000">
                            <h3>
                                Digital Calendar
                            </h3>
                            <div className={style.sixthCardImgContainer}>
                                <img className={style.sixthCardImg} src={sixthCardImg} alt="" />
                            </div>
                        </div>




                        <div className={style.seventhCard} data-aos="fade-up" data-aos-duration="2000">
                            <h3>
                                Meeting Room Statistics
                            </h3>
                            <img src={seventhCardImg} alt="" width={'100%'} />
                        </div>




                    </div>
                </div>

            </div>
        </>
    )
};

export default UserInterface;