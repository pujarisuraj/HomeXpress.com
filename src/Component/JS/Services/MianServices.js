import React from 'react';
import '../../CSS/Services/MianServices.css';
// images import 
import repair from '../../Assets/Img/MainServicesImg/ApplianceRepair.png';
import Electrician from '../../Assets/Img/MainServicesImg/electrician.png';
import carpenter from '../../Assets/Img/MainServicesImg/carpenter.png';
import clean from '../../Assets/Img/MainServicesImg/cleaning.png';
import painting from '../../Assets/Img/MainServicesImg/painting.png';
import plumber from '../../Assets/Img/MainServicesImg/plumber.png';

function MianServices() {
    return (
        <>
            {/* service catagiories     */}

            <div className="service-div">
                <div className='sub-menu-top'>
                    <h3>What are you looking for ?</h3>
                    <span>
                        <i className="ri-arrow-right-line" id='sub-menu-right-arrow'></i>
                    </span>
                </div>


                <div className="sub-menu">

                    <div className="box">
                        <div className="item">
                            <img src={repair} alt="repair-img" />
                        </div>
                        <div className='service-info'>
                            <p>Appliance Repair & Service </p>
                            <p>Upto 35% off</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="item">
                            <img src={clean} alt="Electrician" />
                        </div>
                        <div className="service-info">
                            <p>Cleaning</p>
                            <p>Upto 60% off</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="item">
                            <img src={painting} alt="carpenter" />
                        </div>
                        <div className="service-info">
                            <p>Painting & Waterproofing</p>
                            <p>Upto 85% off</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="item">
                            <img src={Electrician} alt="clean" />
                        </div>
                        <div className="service-info">
                            <p>Electrician</p>
                            <p>Upto 75% off</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="item">
                            <img src={plumber} alt="painting" />
                        </div>
                        <div className="service-info">
                            <p>Plumber</p>
                            <p>Upto 25% off</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="item">
                            <img src={carpenter} alt="plumber" />
                        </div>
                        <div className="service-info">
                            <p>Carpenters</p>
                            <p>Upto 65% off</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default MianServices
