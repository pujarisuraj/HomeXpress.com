import React from 'react';
import '../../CSS/Services/Services.css';
import Img1 from '../../Assets/Img/Electricain/1.png'
import Img2 from '../../Assets/Img/Electricain/2.png'
import Img3 from '../../Assets/Img/Electricain/3.png'
import Img4 from '../../Assets/Img/Electricain/4.png'
import Img5 from '../../Assets/Img/Electricain/5.png'
import Img6 from '../../Assets/Img/Electricain/6.png'

function Electrician() {
    return (
        <>
            <div id="services-main">

                <div id='service-type'>
                    <h3>Electrician </h3>
                </div>

                <div className="service-container">

                    <div className="service-main-box">

                        <div className="service-box">
                            <div className="service-img ">
                                <img src={Img1} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 5</i></p>
                                <p className='service-name'>Wi-Fi & CCTV Installation </p>

                                <div className='price'>
                                    <span className='main-price'>₹1,199</span>
                                    <span className='discount-price'><strike>₹2,999</strike></span>
                                    <span className='discount'>-60% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img2} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.4</i></p>
                                <p className='service-name'>Switch & Socket </p>

                                <div className='price'>
                                    <span className='main-price'>₹200</span>
                                    <span className='discount-price'><strike>₹299</strike></span>
                                    <span className='discount'>-33% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img3} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.8</i></p>
                                <p className='service-name'>Computer & Television </p>
                                <div className='price'>
                                    <span className='main-price'>₹599</span>
                                    <span className='discount-price'><strike>₹999</strike></span>
                                    <span className='discount'>-40% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img4} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.1</i></p>
                                <p className='service-name'>MCB & Fuse</p>
                                <div className='price'>
                                    <span className='main-price'>₹249</span>
                                    <span className='discount-price'><strike>₹499</strike></span>
                                    <span className='discount'>-50% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img5} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.7</i></p>
                                <p className='service-name'>Fan Service</p>
                                <div className='price'>
                                    <span className='main-price'>₹989</span>
                                    <span className='discount-price'><strike>₹1,499</strike></span>
                                    <span className='discount'>-34% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img6} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.9</i></p>
                                <p className='service-name'>Looking for Something else?</p>

                                <div className='price'>
                                    <span className='main-price'>₹191</span>
                                    <span className='discount-price'><strike>₹457</strike></span>
                                    <span className='discount'>-65% off</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Electrician

