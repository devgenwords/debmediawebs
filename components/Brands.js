import React, { useState, useEffect } from "react";
import BrandsData from '../json/brandsSlide.json';
import { Row, Container, Col } from "react-bootstrap";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, FreeMode, Pagination]);

const basePath = '/asset/imgs/brands'


export default function Brands() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(BrandsData);
    }, []);

    return (
        <>
            <Container className="brands-slider">
                <Row>
                    <Col>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            freeMode={true}
                            loop={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            autoplay={true}
                            breakpoints={{
                                500: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            {images.map((item, index) => (
                                <SwiperSlide key={index}>
                                     <Image src={`/brands/${item.image.url}`} width={item.image.width} className="img-fluid" height={item.image.height}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

