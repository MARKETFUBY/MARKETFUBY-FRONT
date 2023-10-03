import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import img1 from '../../assets/icon/img1.png';
import img2 from '../../assets/icon/img2.jpg';
import img3 from '../../assets/icon/img3.jpg';
import img4 from '../../assets/icon/img4.jpg';

// 슬라이드 대표배너
const Slide = () => {
    return (
        <div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className='mySwiper'
            >
                {Image.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={img1} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slide;
