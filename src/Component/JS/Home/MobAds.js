import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../CSS/Home/MobAds.css';
//  Ads Images import
import Img1 from '../../Assets/Img/MobMainAds/1.png';
import Img2 from '../../Assets/Img/MobMainAds/2.png';
import Img3 from '../../Assets/Img/MobMainAds/3.png';
import Img4 from '../../Assets/Img/MobMainAds/4.png';
import Img5 from '../../Assets/Img/MobMainAds/5.png';
import Img6 from '../../Assets/Img/MobMainAds/6.png';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function MobAds() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Autoplay, Pagination]} id="mob-swiper">
        <SwiperSlide><img className='mob-ads-img' src={Img1} alt="Ads Img" /></SwiperSlide>
        <SwiperSlide><img className='mob-ads-img' src={Img2} alt="Ads Img" /></SwiperSlide>
        <SwiperSlide><img className='mob-ads-img' src={Img3} alt="Ads Img" /></SwiperSlide>
        <SwiperSlide><img className='mob-ads-img' src={Img4} alt="Ads Img" /></SwiperSlide>
        <SwiperSlide><img className='mob-ads-img' src={Img5} alt="Ads Img" /></SwiperSlide>
        <SwiperSlide><img className='mob-ads-img' src={Img6} alt="Ads Img" /></SwiperSlide>
      </Swiper>

    </>
  );
}
