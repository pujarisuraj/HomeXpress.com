import React from 'react';
import '../../CSS/Services/Services.css';
import Img1 from '../../Assets/Img/AcAdImg/1.png'
import Img2 from '../../Assets/Img/AcAdImg/2.png'
import Img3 from '../../Assets/Img/AcAdImg/3.png'
import Img4 from '../../Assets/Img/AcAdImg/4.png'
import Img5 from '../../Assets/Img/AcAdImg/5.png'
import Img6 from '../../Assets/Img/AcAdImg/6.png'

function Ac() {
    return (
        <>
            <div id="services-main">

                <div id='service-type'>
                    <h3>Air Condition Services</h3>
                </div>

                <div className="service-container">
                    <div className="service-main-box">
                        <div className="service-box">
                            <div className="service-img ">
                                <img src={Img1} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.8</i></p>
                                <p className='service-name'>Servicing & Repairing  </p>

                                <div className='price'>
                                    <span className='main-price'>₹1,499 </span>
                                    <span className='discount-price'><strike> ₹5,599</strike></span>
                                    <span className='discount'>-75% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img2} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.5</i></p>
                                <p className='service-name'>Service Lite</p>

                                <div className='price'>
                                    <span className='main-price'>₹699</span>
                                    <span className='discount-price'><strike>₹1,999</strike></span>
                                    <span className='discount'>-65% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img3} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.1</i></p>
                                <p className='service-name'>Power Saver</p>
                                <div className='price'>
                                    <span className='main-price'>₹1,375</span>
                                    <span className='discount-price'><strike>₹2,500</strike></span>
                                    <span className='discount'>-45% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img4} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.9</i></p>
                                <p className='service-name'>Cleaning </p>
                                <div className='price'>
                                    <span className='main-price'>₹499</span>
                                    <span className='discount-price'><strike>₹999</strike></span>
                                    <span className='discount'>-50% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img6} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.3</i></p>
                                <p className='service-name'>Repair & Gas Refill </p>
                                <div className='price'>
                                    <span className='main-price'>₹942</span>
                                    <span className='discount-price'><strike>₹1,450</strike></span>
                                    <span className='discount'>-35% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img5} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.2</i></p>
                                <p className='service-name'>Install & Uninstall</p>

                                <div className='price'>
                                    <span className='main-price'>₹361</span>
                                    <span className='discount-price'><strike>₹669</strike></span>
                                    <span className='discount'>-46% off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Ac

