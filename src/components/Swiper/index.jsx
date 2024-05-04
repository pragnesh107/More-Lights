import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './swiper.scss';

// import required modules
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { swiperImages } from '../../assets/swiperImages/swiperImages';

export default function CustomSwiper() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        // spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        // spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        // spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, EffectCoverflow, Navigation]}
                className="mySwiper"
            >
                {swiperImages.map(item => {
                    return <SwiperSlide>
                        <img src={item} />
                    </SwiperSlide>
                })}
            </Swiper>
        </>
    );
}
