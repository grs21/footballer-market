import React from "react";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../css/Slider.css";
import Card from "./Card";
import { Navigation } from 'swiper';
import { SwiperLeftButton, SwiperRightButton } from "../assets/icons/assets";
import card1 from "../assets/images/card1.svg";
import card2 from "../assets/images/card2.svg";
import card3 from "../assets/images/card3.svg";

function Slider() {
    return (
        <div className="slider-container">
            <div className="custom-wrapper">
                <div className="title-wrapper">
                    <div className="title-container">
                        <div className="main-title">
                            NEW
                        </div>
                        <div className="slider-sub-title">
                            BRONZE CARDS
                        </div>
                    </div>
                    <div className="tranding-slider-control">
                        <div className="swiper-button-prev slider-arrow">
                            <SwiperLeftButton />
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-next slider-arrow">
                            <SwiperRightButton />
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <Swiper
                        effect={"coverflow"}
                        slidesPerView={"1"}
                        loopFillGroupWithBlank={false}
                        loop={true}
                        initialSlide={2}
                        centeredSlides={true}
                        preventClicks={false}
                        preventClicksPropagation={false}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 250,
                            depth: 300,
                            modifier: 1,
                            slideShadows: false
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                        }}
                        navigation={
                            {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }
                        }
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{ backgroundColor: "transparent" }}><Card imgUrl={card1}></Card></SwiperSlide>
                        <SwiperSlide style={{ backgroundColor: "transparent" }}><Card imgUrl={card2}></Card></SwiperSlide>
                        <SwiperSlide style={{ backgroundColor: "transparent" }}><Card imgUrl={card3}></Card></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Slider;
