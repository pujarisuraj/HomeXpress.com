import React from 'react';
import '../../CSS/Services/Ac.css';
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
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.5</i></p>
                                <p className='service-name'>Wall Painting </p>

                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>3,499</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee </span>
                                    <span className='span4'><strike>6999</strike></span>
                                    <span className='span5'>-50% off</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img6} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.7</i></p>
                                <p className='service-name'>Furniture Painting</p>

                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>1099</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>1,999</strike></span>
                                    <span className='span5'>-45% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img4} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.1</i></p>
                                <p className='service-name'>Full Home Painting</p>
                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>9,999</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>19,999</strike></span>
                                    <span className='span5'>-50% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img3} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.2</i></p>
                                <p className='service-name'>Paint Remove </p>
                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>1749</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>4,999</strike></span>
                                    <span className='span5'>-65% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img5} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.2</i></p>
                                <p className='service-name'>Hall Painting</p>
                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>2799</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>4,999</strike></span>
                                    <span className='span5'>-44% off</span>
                                </div>
                            </div>

                        </div>

                        <div className="service-box">
                            <div className="service-img">
                                <img src={img2} alt="" />
                            </div>
                            <div className='serv-info'>
                                <p className='rating'><i className="ri-star-fill rating-star"> 4.2</i></p>
                                <p className='service-name'>Waterproofing </p>

                                <div className='price'>
                                    <span class="material-symbols-outlined main-price">currency_rupee</span>
                                    <span className='main-price'>4199</span>
                                    <span class="material-symbols-outlined span3 ">currency_rupee</span>
                                    <span className='span4'><strike>5,999</strike></span>
                                    <span className='span5'>-30% off</span>
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

export default Painting

