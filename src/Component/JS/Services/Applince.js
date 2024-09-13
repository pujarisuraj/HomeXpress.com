import React from 'react';
import '../../CSS/Services/Ac.css';
import AcAdImag1 from '../../Assets/Img/ApplianceRepair/1.png'
import AcAdImag2 from '../../Assets/Img/ApplianceRepair/2.png'
import AcAdImag3 from '../../Assets/Img/ApplianceRepair/3.png'
import AcAdImag4 from '../../Assets/Img/ApplianceRepair/4.png'
import AcAdImag5 from '../../Assets/Img/ApplianceRepair/5.png'
import AcAdImag6 from '../../Assets/Img/ApplianceRepair/6.png'

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
                                <img src={AcAdImag1} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.5</i></p>
                                <p className='service-name'>Water Purifier Repair </p>

                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>263</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee </span>
                                    <span className='span4'><strike>599</strike></span>
                                    <span className='span5'>-56% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={AcAdImag2} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.7</i></p>
                                <p className='service-name'>Oven Repair</p>

                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>1515</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>5999</strike></span>
                                    <span className='span5'>-20% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={AcAdImag3} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.1</i></p>
                                <p className='service-name'>Gas Repair</p>
                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>449</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>899</strike></span>
                                    <span className='span5'>-50% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={AcAdImag4} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.2</i></p>
                                <p className='service-name'>Refrigerator Repair</p>
                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>1,007</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>1,799</strike></span>
                                    <span className='span5'>-44% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={AcAdImag5} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.2</i></p>
                                <p className='service-name'>Washing Machine Repair</p>
                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>1,039</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>1299</strike></span>
                                    <span className='span5'>-20% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={AcAdImag6} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.2</i></p>
                                <p className='service-name'>Chimney Repair </p>

                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>999</span>
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

export default Applince

