import React from 'react';
import '../../CSS/Services/Services.css';
import img1 from '../../Assets/Img/Painting/1.png'
import img2 from '../../Assets/Img/Painting/2.png'
import img3 from '../../Assets/Img/Painting/3.png'
import img4 from '../../Assets/Img/Painting/4.png'
import img5 from '../../Assets/Img/Painting/5.png'
import img6 from '../../Assets/Img/Painting/6.png'



function Painting() {
    return (
        <>
            <div id="services-main">

                <div id='service-type'>
                    <h3>Painting & Waterproofing</h3>
                </div>

                <div className="service-container">

                    <div className="service-main-box">

                        <div className="service-box">
                            <div className="service-img ">
                                <img src={img1} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.7</i></p>
                                <p className='service-name'>Wall Painting </p>
                                <div className='price'>
                                    <span className='main-price'>₹3,499</span>
                                    <span className='discount-price'><strike>₹6,999</strike></span>
                                    <span className='discount'>-50% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img6} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.1</i></p>
                                <p className='service-name'>Furniture Painting</p>

                                <div className='price'>
                                    <span className='main-price'>₹1,099</span>
                                    <span className='discount-price'><strike>₹1,999</strike></span>
                                    <span className='discount'>-45% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img4} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.9</i></p>
                                <p className='service-name'>Full Home Painting</p>
                                <div className='price'>
                                    <span className='main-price'>₹9,999</span>
                                    <span className='discount-price'><strike>₹19,999</strike></span>
                                    <span className='discount'>-50% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img3} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.3</i></p>
                                <p className='service-name'>Paint Remove </p>
                                <div className='price'>
                                    <span className='main-price'>₹1,749</span>
                                    <span className='discount-price'><strike>₹4,999</strike></span>
                                    <span className='discount'>-65% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img5} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.8</i></p>
                                <p className='service-name'>Hall Painting</p>
                                <div className='price'>
                                    <span className='main-price'>₹2,799</span>
                                    <span className='discount-price'><strike>₹4,999</strike></span>
                                    <span className='discount'>-44% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img2} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.6</i></p>
                                <p className='service-name'>Waterproofing </p>
                                <div className='price'>
                                    <span className='main-price'>₹4,199</span>
                                    <span className='discount-price'><strike>₹5,999</strike></span>
                                    <span className='discount'>-30% off</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Painting

