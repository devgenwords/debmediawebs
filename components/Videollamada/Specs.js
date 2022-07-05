import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import spec1 from '../../asset/imgs/videollamada/spec1.svg'
import spec2 from '../../asset/imgs/videollamada/spec2.svg'
import spec3 from '../../asset/imgs/videollamada/spec3.svg'
import spec4 from '../../asset/imgs/videollamada/spec4.svg'

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";



// import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Pagination } from 'swiper';


// install Swiper modules
SwiperCore.use([Autoplay, FreeMode, Pagination]);


export default function Modern() {
    return (
        <>
            <Container fluid className="specs-section_videocall">
                <Container className="d-none d-sm-block">
                    <Row className=" d-flex justify-content-center">
                        <Col xs={12} className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col xs={12} className="specs-section_videocall_text">
                                    <div>
                                        <h2><b>Ajusta la videollamada </b></h2>
                                        <p> al flujo de atención de tu empresa</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_videocall_div-img d-flex justify-content-center">
                                    <Image src={spec1.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_videocall_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_videocall_title">
                                            Múltiples viajes del cliente


                                        </h4>
                                        <p className="specs-section_videocall_parraf">
                                            Tus clientes pueden iniciar en<br />
                                            tu web, App o WhatsApp.

                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_videocall_div-img d-flex justify-content-center">
                                    <Image src={spec2.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_videocall_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_videocall_title">
                                            Métricas de performance
                                        </h4>
                                        <p className="specs-section_videocall_parraf">
                                            Mide tiempos y rendimiento <br />
                                            de tus equipos.


                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className=" d-flex justify-content-center">
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_videocall_div-img d-flex justify-content-center">
                                    <Image src={spec3.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_videocall_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_videocall_title">
                                            Integración sencilla
                                        </h4>
                                        <p className="specs-section_videocall_parraf">
                                            Integrable por API o Iframe.

                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_videocall_div-img d-flex justify-content-center">
                                    <Image src={spec4.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_videocall_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_videocall_title">
                                            Los clientes pueden conectarse
                                        </h4>
                                        <p className="specs-section_videocall_parraf">
                                            de forma espontánea o programada


                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container className="d-block d-sm-none">
                    <Row>
                        <Col xs={12} className="specs-section_videocall_text">
                            <div>
                                <h2>Diferentes <span>funcionalidades </span></h2>
                                <p> para optimizar tu<br />
                                    modelo de atención</p>
                            </div>
                        </Col>
                    </Row>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        freeMode={false}
                        navigation={false}
                        loop={true}
                        autoplay={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: false,
                        }}
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
                    >
                        <SwiperSlide >
                            <Col sm={4}>
                                <Row>
                                    <Col xs={12} className="specs-section_videocall_div-img d-flex justify-content-center">
                                        <Image src={spec1.src} width={200}
                                            height={250} />

                                    </Col>
                                    <Col xs={12} className="specs-section_videocall_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_videocall_title">
                                                Múltiples viajes del cliente


                                            </h4>
                                            <p className="specs-section_videocall_parraf">
                                                Tus clientes pueden iniciar en<br />
                                                tu web, App o WhatsApp.

                                            </p>
                                        </div>

                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Col sm={4}>
                                <Row>
                                    <Col xs={12} className="specs-section_videocall_div-img d-flex justify-content-center">
                                        <Image src={spec2.src} width={200}
                                            height={250} />

                                    </Col>
                                    <Col xs={12} className="specs-section_videocall_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_videocall_title">
                                                Métricas de performance
                                            </h4>
                                            <p className="specs-section_videocall_parraf">
                                                Mide tiempos y rendimiento <br />
                                                de tus equipos.


                                            </p>
                                        </div>

                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Col sm={4}>
                                <Row>
                                    <Col xs={12} className="specs-section_videocall_div-img d-flex justify-content-center">
                                        <Image src={spec3.src} width={200}
                                            height={250} />

                                    </Col>
                                    <Col xs={12} className="specs-section_videocall_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_videocall_title">
                                                Integración sencilla
                                            </h4>
                                            <p className="specs-section_videocall_parraf">
                                                Integrable por API o Iframe.

                                            </p>
                                        </div>

                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Col sm={4}>
                                <Row>
                                    <Col xs={12} className="specs-section_videocall_div-img d-flex justify-content-center">
                                        <Image src={spec4.src} width={200}
                                            height={250} />

                                    </Col>
                                    <Col xs={12} className="specs-section_videocall_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_videocall_title">
                                                Los clientes pueden conectarse
                                            </h4>
                                            <p className="specs-section_videocall_parraf">
                                                de forma espontánea o programada


                                            </p>
                                        </div>

                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </Container>
        </>
    );
}