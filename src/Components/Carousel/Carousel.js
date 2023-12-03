import React from "react";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
import {BACKDROP_URL} from "../../config/config";

const Carousel = ({movies}) => {
    return (
        <div className={'hero'}>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    movies.map(el => (
                        <SwiperSlide key={el.id}>
                            <img src={BACKDROP_URL + el.backdrop_path} alt={el.title}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
export default Carousel