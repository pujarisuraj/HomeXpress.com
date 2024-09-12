import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../CSS/DesktopAds.css';
// Asd Images Imort 
import ad1 from '../Assets/Img/ad1.png';
import ad2 from '../Assets/Img/ad2.png';
import ad3 from '../Assets/Img/ad3.png';
import ad6 from '../Assets/Img/ad6.png';
import ad4 from '../Assets/Img/ad4.png';
import ad5 from '../Assets/Img/ad5.png';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function Slideshow() {
    return (
        <>
            <div id='main-desktop'>
                
                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} navigation={true} modules={[EffectFade, Autoplay, Pagination, Navigation]} effect="fade" className=" mySwiper desktop-swiper">

                    <SwiperSlide><img src={ad1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={ad2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={ad3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={ad4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={ad5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={ad6} alt="" /></SwiperSlide>
                </Swiper>

            </div>
        </>
    )
}

export default Slideshow
