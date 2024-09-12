import React from 'react';
import '../CSS/Page2AcAds.css';
import AcAdImag1 from '../Assets/Img/AcAdImg/1.png'
import AcAdImag2 from '../Assets/Img/AcAdImg/2.png'
import AcAdImag3 from '../Assets/Img/AcAdImg/3.png'
import AcAdImag4 from '../Assets/Img/AcAdImg/4.png'
import AcRepairVideo from '../Assets/Img/AcAdImg/AcRepairVideo.mp4'


function Page2AcAds() {
    return (
        <>
            <div id="AcAds-main">
                <h4>Air Condition Services</h4>
                <div className="AcAd-box1">
                    <div className="AcAd-box">
                        <div className="AcAd-item">
                            <img src={AcAdImag1} alt="" />
                        </div>
                        <div className='Ac-info'>
                            <p className='rating'><i className="ri-star-fill rating-star"> 4.5</i></p>
                            <p>Ac Repairing  </p>
                            <p>Min.20% off</p>
                        </div>

                    </div>

                    <div className="AcAd-box">
                        <div className="AcAd-item">
                            <img src={AcAdImag2} alt="" />
                        </div>
                        <div className='Ac-info'>
                            <p className='rating'><i className="ri-star-fill rating-star"> 4.7</i></p>
                            <p>Ac Servicing & Repairing </p>
                            <p>Min.30% off</p>
                        </div>

                    </div>

                    <div className="AcAd-box">
                        <div className="AcAd-item">
                            <img src={AcAdImag3} alt="" />
                        </div>
                        <div className='Ac-info'>
                            <p className='rating'><i className="ri-star-fill rating-star"> 4.1</i></p>
                            <p>Ac Electrical Problems</p>
                            <p>Min.50% off</p>
                        </div>

                    </div>

                    <div className="AcAd-box">
                        <div className="AcAd-item">
                            <img src={AcAdImag4} alt="" />
                        </div>
                        <div className='Ac-info'>
                            <p className='rating'><i className="ri-star-fill rating-star"> 4.2</i></p>
                            <p>Ac Cleaning </p>
                            <p>Min.10% off</p>
                        </div>

                    </div>

                </div>




                <div className="AcAd-box2">

                    <div id="Ac-repair-video">
                        <video autoPlay loop muted src={AcRepairVideo}></video>
                    </div>

                </div>

            </div>
            <div className="test"></div>

        </>
    )
}

export default Page2AcAds

