import React, { useState, useEffect } from "react";
import BlogData from '../json/blog.json';
import { Row, Container, Col } from "react-bootstrap";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'


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

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(BlogData);
    }, []);

    return (
        <>
            <Container fluid className="posts-slider">
                <Container>
                    <Row>
                        <Col>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                freeMode={true}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
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
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                }}
                                className="mySwiper"
                            >
                                {posts.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div style={{
                                            backgroundImage: `url(${item.image})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                            className="posts-slider_content"
                                        >
                                            <div className="posts-slider_content-post">
                                                <div>
                                                    <h1>
                                                        {item.title}
                                                    </h1>
                                                    <Link href={item.url} passHref className="posts-slider_content-post_link">
                                                        <a target="_blank" rel="noopener noreferrer">
                                                            Ver más
                                                        </a>
                                                    </Link>
                                                </div>

                                            </div>


                                        </div>

                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

