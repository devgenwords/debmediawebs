import React, { useState, useEffect, useRef } from "react";
import Review from '../json/Review.json';
import { Row, Container, Col } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";

import quote1 from '../asset/imgs/quote1.png'
import quote2 from '../asset/imgs/quote2.png'


// import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Pagination } from 'swiper';
import { Navigation } from "swiper";


// install Swiper modules
SwiperCore.use([Autoplay, FreeMode, Pagination]);



export default function Brands() {
    const [review, setreview] = useState([]);

    useEffect(() => {
        setreview(Review);
    }, []);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <Container fluid className="review-section">
                <Container>
                    <Row>
                        <Col sm={5} xs={12} >
                            <Col>
                                <h3>
                                    Más de 300<br className="d-none d-sm-block" /> organizaciones<br className="d-none d-sm-block" /><span> ya confían en<br className="d-none d-sm-block" /> Debmedia</span>
                                </h3>
                            </Col>
                            <Col>
                                <div ref={prevRef} className="iconReview iconReview_prev"><i className="bi bi-chevron-left"></i></div>
                                <div ref={nextRef} className="iconReview iconReview_next"><i className="bi bi-chevron-right "></i></div>
                            </Col>
                        </Col>
                        <Col sm={7} xs={12} className="market-section_div">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                freeMode={false}
                                navigation={false}
                                modules={[Navigation]}
                                loop={true}
                                autoplay={true}
                                breakpoints={{
                                    500: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                }}
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                className="review-slider_swipper"
                            >
                                {review.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="item">
                                            <div className="review-section_slidersection">
                                                <div className="review-section_slidersection-person">
                                                    <img src={`/review/${item.image}`} className="img-fluid" />
                                                </div>
                                                <div className="review-section_slidersection-brand">
                                                    <img src={`/review/${item.company}`} className="img-fluid" />
                                                </div>
                                                <div className="review-section_slidersection-text">
                                                    <h4>{item.person}</h4>
                                                    <span>{item.job}</span>
                                                    <img src={quote1.src} className="quote1" />

                                                    <p>{item.comment}</p>
                                                    <img src={quote2.src} className="quote2" />
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                )
                                )}

                            </Swiper>

                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    );
}