import React from 'react';
import '../../CSS/Services/Ac.css';
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
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.5</i></p>
                                <p className='service-name'>Home Furniture</p>

                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>31,999</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee </span>
                                    <span className='span4'><strike>39,999</strike></span>
                                    <span className='span5'>-20% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img5} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.7</i></p>
                                <p className='service-name'>Furniture Polish </p>

                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>1151</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>1,799</strike></span>
                                    <span className='span5'>-36% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img3} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.1</i></p>
                                <p className='service-name'>Furniture Assemble</p>
                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>2,999</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>4,999</strike></span>
                                    <span className='span5'>-40% off</span>
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
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>1,104</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>1,699</strike></span>
                                    <span className='span5'>-35% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img2} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.2</i></p>
                                <p className='service-name'>TV Unit</p>
                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>10,499</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>15,000</strike></span>
                                    <span className='span5'>-30% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img6} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.2</i></p>
                                <p className='service-name'>Dining Table</p>

                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>1039</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>2,499</strike></span>
                                    <span className='span5'>-60% off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="test">

            </div>


        </>
    )
}

export default Carpenter

