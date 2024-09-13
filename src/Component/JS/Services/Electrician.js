import React from 'react';
import '../../CSS/Services/Ac.css';
import AcAdImag1 from '../../Assets/Img/Electricain/1.png'
import AcAdImag2 from '../../Assets/Img/Electricain/2.png'
import AcAdImag3 from '../../Assets/Img/Electricain/3.png'
import AcAdImag4 from '../../Assets/Img/Electricain/4.png'
import AcAdImag5 from '../../Assets/Img/Electricain/5.png'
import AcAdImag6 from '../../Assets/Img/Electricain/6.png'

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
                                <img src={AcAdImag1} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 5</i></p>
                                <p className='service-name'>WiFi & CCTV Installation </p>

                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>1199</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee </span>
                                    <span className='span4'><strike>2,999</strike></span>
                                    <span className='span5'>-60% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={AcAdImag2} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.4</i></p>
                                <p className='service-name'>Switch & Socket </p>

                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>200</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>299</strike></span>
                                    <span className='span5'>-33% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={AcAdImag3} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.8</i></p>
                                <p className='service-name'>Computer & Television </p>
                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>599</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>999</strike></span>
                                    <span className='span5'>-40% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={AcAdImag4} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.1</i></p>
                                <p className='service-name'>MCB & Fuse</p>
                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>249</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>499</strike></span>
                                    <span className='span5'>-50% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={AcAdImag5} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.7</i></p>
                                <p className='service-name'>Fan Service</p>
                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>989</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>1,499</strike></span>
                                    <span className='span5'>-34% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={AcAdImag6} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.9</i></p>
                                <p className='service-name'>Looking for Something else?</p>

                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>91</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>457</strike></span>
                                    <span className='span5'>-80% off</span>
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

export default Electrician

