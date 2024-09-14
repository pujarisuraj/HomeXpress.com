import React from 'react';
import '../../CSS/Services/Services.css';
import img1 from '../../Assets/Img/Furniture/1.png';
import img2 from '../../Assets/Img/Furniture/2.png';
import img3 from '../../Assets/Img/Furniture/3.png';
import img4 from '../../Assets/Img/Furniture/4.png';
import img5 from '../../Assets/Img/Furniture/5.png';
import img6 from '../../Assets/Img/Furniture/6.png';



function Carpenter() {
    return (
        <>
            <div id="services-main">

                <div id='service-type'>
                    <h3>Carpenter</h3>
                </div>

                <div className="service-container">

                    <div className="service-main-box">

                        <div className="service-box">

                            <div className="service-img ">
                                <img src={img1} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.8</i></p>
                                <p className='service-name'>Home Furniture</p>

                                <div className='price'>
                                    <span className='main-price'>₹9,999</span>
                                    <span className='discount-price'><strike>₹24,999</strike></span>
                                    <span className='discount'>-60% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img5} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.4</i></p>
                                <p className='service-name'>Furniture Polish </p>

                                <div className='price'>
                                    <span className='main-price'>₹1,151</span>
                                    <span className='discount-price'><strike>₹1,799</strike></span>
                                    <span className='discount'>-36% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img3} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.6</i></p>
                                <p className='service-name'>Furniture Assemble</p>
                                <div className='price'>
                                    <span className='main-price'>₹2,999</span>
                                    <span className='discount-price'><strike>₹4,999</strike></span>
                                    <span className='discount'>-40% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img4} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.2</i></p>
                                <p className='service-name'>Bed Assemble</p>
                                <div className='price'>
                                    <span className='main-price'>₹1,104</span>
                                    <span className='discount-price'><strike>₹1,699</strike></span>
                                    <span className='discount'>-35% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img2} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.9</i></p>
                                <p className='service-name'>TV Unit</p>
                                <div className='price'>
                                    <span className='main-price'>₹8,999</span>
                                    <span className='discount-price'><strike>₹14,999</strike></span>
                                    <span className='discount'>-40% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img6} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.3</i></p>
                                <p className='service-name'>Dining Table</p>
                                <div className='price'>
                                    <span className='main-price'>₹1,039</span>
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

export default Carpenter

