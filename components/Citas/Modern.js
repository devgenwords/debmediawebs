import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import spec1 from '../../asset/imgs/citas/spec1.svg'
import spec2 from '../../asset/imgs/citas/spec2.svg'
import spec3 from '../../asset/imgs/citas/spec3.svg'
import spec4 from '../../asset/imgs/citas/spec4.svg'
import spec5 from '../../asset/imgs/citas/spec5.svg'
import spec6 from '../../asset/imgs/citas/spec6.svg'

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
            <Container fluid className="specs-section_citas">
                <Container className="d-none d-sm-block">
                    <Row>
                        <Col xs={12} className="specs-section_citas_text">
                            <div>
                                <h2>Múltiples funcionalidades</h2>
                                <p> para optimizar modelos de atención
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className=" d-flex justify-content-center">
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                    <Image src={spec1.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_citas_title">
                                            Integración con el sistema<br /> de gestión de filas.


                                        </h4>
                                        <p className="specs-section_citas_parraf">
                                            Pata gestionar todo el flujo <br />
                                            conalgoritmos de llamado <br />
                                            y priorización.

                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                    <Image src={spec2.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_citas_title">
                                            Check in <br />
                                            autogestionado.
                                        </h4>
                                        <p className="specs-section_citas_parraf">
                                            Los clientes pueden registrarse desde su móvil o en el kiosko.


                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                    <Image src={spec3.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_citas_title">
                                            Recordatodios<br /> personalizables enviados <br />
                                            por mail o SMS.<br />
                                        </h4>
                                        <p className="specs-section_citas_parraf">
                                            Diseñados como campos dinámicos en función del
                                            támitey el cliente.


                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>

                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                    <Image src={spec4.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_citas_title">
                                            Conectado con múltiples <br />trámites o agendas.
                                        </h4>
                                        <p className="specs-section_citas_parraf">
                                            Que permiten definir <br />
                                            tiempos de tolerancia por <br />
                                            cada tipo de trámite.


                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                    <Image src={spec5.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_citas_title">
                                            Integrable por API, iframe<br />  o embebido en tu web

                                        </h4>
                                        <p className="specs-section_citas_parraf">
                                            Con el look &amp; feel <br />
                                            de tu compañía.

                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                    <Image src={spec6.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_citas_title">
                                            Un sistema integrado a


                                        </h4>
                                        <p className="specs-section_citas_parraf">
                                            Outlook y Google Calendar.

                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>



                    </Row>
                </Container>
                <Container className="d-block d-sm-none">
                    <Row>
                    <Col xs={12} className="specs-section_citas_text">
                            <div>
                                <h2>Múltiples funcionalidades</h2>
                                <p> para optimizar modelos de atención
                                </p>
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
                                    <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                        <Image src={spec6.src} width={200}
                                            height={250} />

                                    </Col>
                                    <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_citas_title">
                                                Integración con el sistema<br /> de gestión de filas.


                                            </h4>
                                            <p className="specs-section_citas_parraf">
                                                Pata gestionar todo el flujo <br />
                                                conalgoritmos de llamado <br />
                                                y priorización.

                                            </p>
                                        </div>

                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Col sm={4}>
                                <Row>
                                    <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                        <Image src={spec2.src} width={200}
                                            height={250} />

                                    </Col>
                                    <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_citas_title">
                                                Check in <br />
                                                autogestionado.
                                            </h4>
                                            <p className="specs-section_citas_parraf">
                                                Los clientes pueden registrarse desde su móvil o en el kiosko.


                                            </p>
                                        </div>

                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Col sm={4}>
                                <Row>
                                    <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                        <Image src={spec3.src} width={200}
                                            height={250} />

                                    </Col>
                                    <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_citas_title">
                                                Recordatodios<br /> personalizables enviados <br />
                                                por mail o SMS.<br />
                                            </h4>
                                            <p className="specs-section_citas_parraf">
                                                Diseñados como campos dinámicos en función del
                                                támitey el cliente.


                                            </p>
                                        </div>

                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Col sm={4}>
                                <Row>
                                    <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                        <Image src={spec4.src} width={200}
                                            height={250} />

                                    </Col>
                                    <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_citas_title">
                                                Conectado con múltiples <br />trámites o agendas.
                                            </h4>
                                            <p className="specs-section_citas_parraf">
                                                Que permiten definir <br />
                                                tiempos de tolerancia por <br />
                                                cada tipo de trámite.


                                            </p>
                                        </div>

                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Col sm={4}>
                                <Row>
                                    <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                        <Image src={spec5.src} width={200}
                                            height={250} />

                                    </Col>
                                    <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_citas_title">
                                                Integrable por API,<br /> iframe o embebido <br />en tu web

                                            </h4>
                                            <p className="specs-section_citas_parraf">
                                                Con el look &amp; feel <br />
                                                de tu compañía.

                                            </p>
                                        </div>

                                    </Col>
                                </Row>
                            </Col>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Col sm={4}>
                                <Row>
                                    <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                        <Image src={spec6.src} width={200}
                                            height={250} />

                                    </Col>
                                    <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                        <div>
                                            <h4 className="specs-section_citas_title">
                                                Integración con el sistema<br /> de gestión de filas.


                                            </h4>
                                            <p className="specs-section_citas_parraf">
                                                Pata gestionar todo el flujo <br />
                                                conalgoritmos de llamado <br />
                                                y priorización.

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