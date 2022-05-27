import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import api from '../asset/imgs/home/api.svg'
import performance from '../asset/imgs/home/performance.svg'
import channel from '../asset/imgs/home/channels.svg'


export default function Modern() {
    return (
        <>
            <Container fluid className="modern-section">
                <Container>
                    <Row>
                        <Col className="modern-section_maintitle">
                            <h3 className="text-center">
                                Una solución <br />
                                <b>moderna y escalable</b>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="modern-section_div">
                            <Row>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-end">
                                    <Image src={api.src} width={600}
                                        height={500} />
                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-text">
                                    <div>
                                        <h4 className="modern-section_title">
                                            Integración Sencilla
                                        </h4>
                                        <p className="modern-section_parraf">
                                            Integrable por API o iframe.
                                        </p>
                                    </div>

                                </Col>
                            </Row>
                            <Row className="d-none d-sm-block">
                                <Col sm={5} xs={12} className="modern-section_div-text modern-section_div-text-left">
                                    <div>
                                        <h4 className="modern-section_title">
                                            Métricas de performance
                                        </h4>
                                        <p className="modern-section_parraf">
                                            Conoce el rendimiento de tus canales <br /> de atención.
                                        </p>
                                    </div>

                                </Col>
                                <Col sm={7} xs={12} className="modern-section_div-img d-flex justify-content-start">
                                    <Image src={performance.src} width={600}
                                        height={500} />
                                </Col>

                            </Row>
                            <Row className="d-block d-sm-none">
                               
                                <Col sm={7} xs={12} className="modern-section_div-img d-flex justify-content-start">
                                    <Image src={performance.src} width={600}
                                        height={500} />
                                </Col>
                                <Col sm={5} xs={12} className="modern-section_div-text modern-section_div-text-left">
                                    <div>
                                        <h4 className="modern-section_title">
                                            Métricas de performance
                                        </h4>
                                        <p className="modern-section_parraf">
                                            Conoce el rendimiento de tus canales <br /> de atención.
                                        </p>
                                    </div>

                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-end">
                                    <Image src={channel.src} width={600}
                                        height={500} />
                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-text">
                                    <div>
                                        <h4 className="modern-section_title">
                                            Comunicación centralizada
                                        </h4>
                                        <p className="modern-section_parraf">
                                            Envía el mensaje correcto a través de SMS, email, WhatsApp o pantallas.
                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>


                    </Row>
                </Container>
            </Container>
        </>
    );
}