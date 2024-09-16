import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../CSS/Home/DesktopAds.css';
// Asd Images Imort 
import Img1 from '../../Assets/Img/DesktopMainAds/1.png';
import Img2 from '../../Assets/Img/DesktopMainAds/2.png';
import Img3 from '../../Assets/Img/DesktopMainAds/3.png';
import Img6 from '../../Assets/Img/DesktopMainAds/6.png';
import Img4 from '../../Assets/Img/DesktopMainAds/4.png';
import Img5 from '../../Assets/Img/DesktopMainAds/5.png';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function Slideshow() {
    return (
        <>
            <div id='main-desktop'>
                
                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className=" mySwiper desktop-swiper">

                    <SwiperSlide><img src={Img1} alt="Ads Img" /></SwiperSlide>
                    <SwiperSlide><img src={Img2} alt="Ads Img" /></SwiperSlide>
                    <SwiperSlide><img src={Img3} alt="Ads Img" /></SwiperSlide>
                    <SwiperSlide><img src={Img4} alt="Ads Img" /></SwiperSlide>
                    <SwiperSlide><img src={Img5} alt="Ads Img" /></SwiperSlide>
                    <SwiperSlide><img src={Img6} alt="" /></SwiperSlide>
                </Swiper>

            </div>
        </>
    )
}

export default Slideshow
