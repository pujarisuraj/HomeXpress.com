import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../CSS/MobAds.css';
//  Ads Images import
import mobads1 from '../Assets/Img/mob-ads1.png';
import mobads2 from '../Assets/Img/mob-ads2.png';
import mobads3 from '../Assets/Img/mob-ads3.png';
import mobads4 from '../Assets/Img/mob-ads4.png';
import mobads5 from '../Assets/Img/mob-ads5.png';
import mobads6 from '../Assets/Img/mob-ads6.png';
// effect 
import { EffectFade } from 'swiper/modules';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function MobAds() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{delay: 2500, disableOnInteraction: false, }} pagination={{clickable: true, }}  modules={[EffectFade,Autoplay, Pagination]} effect="fade" id="mob-swiper">
        <SwiperSlide><img src={mobads1} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={mobads2} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={mobads3} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={mobads4} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={mobads5} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={mobads6} alt="img" /></SwiperSlide>
      </Swiper>
    </>
  );
}
