import React from 'react';
import '../../CSS/Services/Services.css';
import Img1 from '../../Assets/Img/ApplianceRepair/1.png'
import Img2 from '../../Assets/Img/ApplianceRepair/2.png'
import Img3 from '../../Assets/Img/ApplianceRepair/3.png'
import Img4 from '../../Assets/Img/ApplianceRepair/4.png'
import Img5 from '../../Assets/Img/ApplianceRepair/5.png'
import Img6 from '../../Assets/Img/ApplianceRepair/6.png'

function Applince() {
    return (
        <>
            <div id="services-main">
                <div id='service-type'>
                    <h3>Appliance Repair & Service</h3>
                </div>

                <div className="service-container">

                    <div className="service-main-box">

                        <div className="service-box">
                            <div className="service-img ">
                                <img src={Img1} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.2</i></p>
                                <p className='service-name'>Water Purifier Repair </p>

                                <div className='price'>
                                    <span className='main-price'>₹263</span>
                                    <span className='discount-price'><strike>₹599</strike></span>
                                    <span className='discount'>-56% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img2} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.7</i></p>
                                <p className='service-name'>Oven Repair</p>
                                <div className='price'>
                                    <span className='main-price'>₹1,515</span>
                                    <span className='discount-price'><strike>₹5,999</strike></span>
                                    <span className='discount'>-20% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img3} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.1</i></p>
                                <p className='service-name'>Gas Repair</p>
                                <div className='price'>
                                    <span className='main-price'>₹449</span>
                                    <span className='discount-price'><strike>₹899</strike></span>
                                    <span className='discount'>-50% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img4} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.8</i></p>
                                <p className='service-name'>Refrigerator Repair</p>
                                <div className='price'>
                                    <span className='main-price'>₹1,007</span>
                                    <span className='discount-price'><strike>₹1,799</strike></span>
                                    <span className='discount'>-44% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img5} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 5</i></p>
                                <p className='service-name'>Washing Machine Repair</p>
                                <div className='price'>
                                    <span className='main-price'>₹1,039</span>
                                    <span className='discount-price'><strike>₹1,299</strike></span>
                                    <span className='discount'>-20% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={Img6} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.3</i></p>
                                <p className='service-name'>Chimney Repair </p>
                                <div className='price'>
                                    <span className='main-price'>₹999</span>
                                    <span className='discount-price'><strike>₹2,499</strike></span>
                                    <span className='discount'>-60% off</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Applince

