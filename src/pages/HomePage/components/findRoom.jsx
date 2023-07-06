import React from 'react'
import '../styles/findRoom.css'
import backgroundImg from '../../../assets/SofaBackground.jpg'
import findRoomVideo from '../../../assets/findRoom.mp4';

const FindRoom = () => {
    return (
        <div className='findRoomWrapper'>
            <div className='findRoomMaterial'>
                <div className='materialHeading'>
                    <h1>
                        quickly find your room
                    </h1>
                    <p>
                        Bright and vivid colors indicates if a room is available or occupied
                    </p>
                </div>
                <div className='findRoomVideoContainer'>
                    {/* <video src={findRoomVideo} autoPlay loop width={'300px'}> </video> */}
                    <video autoPlay loop muted width={'300px'}>
                        <source src={findRoomVideo} type="video/mp4" />
                    </video>
                </div>
                <div className='backgroundImgContainer'>
                    <img src={backgroundImg} alt="" height={'100%'} width={'100%'} />
                </div>
            </div>
        </div>
    )
}

export default FindRoom;