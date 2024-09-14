import React from 'react';
import '../../CSS/Services/Services.css';
import Img1 from '../../Assets/Img/Cleaning/1.png'
import Img2 from '../../Assets/Img/Cleaning/2.png'
import Img3 from '../../Assets/Img/Cleaning/3.png'
import Img4 from '../../Assets/Img/Cleaning/4.png'
import Img5 from '../../Assets/Img/Cleaning/5.png'
import Img6 from '../../Assets/Img/Cleaning/6.png'

function Cleaning() {
    return (
        <>
            <div id="services-main">

                <div id='service-type'>
                    <h3>Cleaning </h3>
                </div>

                <div className="service-container">

                    <div className="service-main-box">

                        <div className="service-box">
                            <div className="service-img ">
                                <img src={Img1} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.7</i></p>
                                <p className='service-name'>Office Cleaning  </p>
                                <div className='price'>
                                    <span className='main-price'>₹1,699</span>
                                    <span className='discount-price'><strike>₹1,999</strike></span>
                                    <span className='discount'>-15% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img2} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.1</i></p>
                                <p className='service-name'>Kitchen Cleaning </p>
                                <div className='price'>
                                    <span className='main-price'>₹674</span>
                                    <span className='discount-price'><strike>₹1,499</strike></span>
                                    <span className='discount'>-55% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img3} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.4</i></p>
                                <p className='service-name'>Washroom Cleaning</p>
                                <div className='price'>
                                    <span className='main-price'>₹707</span>
                                    <span className='discount-price'><strike>₹1,199</strike></span>
                                    <span className='discount'>-41% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img4} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.2</i></p>
                                <p className='service-name'>Hall Cleaning</p>
                                <div className='price'>
                                    <span className='main-price'>₹599</span>
                                    <span className='discount-price'><strike>₹1,248</strike></span>
                                    <span className='discount'>-52% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img5} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.6</i></p>
                                <p className='service-name'>Glass Cleanign</p>
                                <div className='price'>
                                    <span className='main-price'>₹349</span>
                                    <span className='discount-price'><strike>₹999</strike></span>
                                    <span className='discount'>-65% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img6} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.5</i></p>
                                <p className='service-name'>Dish Cleaning </p>
                                <div className='price'>
                                    <span className='main-price'>₹299</span>
                                    <span className='discount-price'><strike>₹499</strike></span>
                                    <span className='discount'>-40% off</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cleaning

