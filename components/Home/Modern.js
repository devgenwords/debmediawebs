import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import api from '../../asset/imgs/home/api.svg'
import performance from '../../asset/imgs/home/performance.svg'
import graficos from '../../asset/imgs/home/graficos.svg'
import channel from '../../asset/imgs/home/channels.svg'


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
                                    <img src={api.src} className="img-fluid" />
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
                            <Row className="d-sm-flex reverseXs">
                                <Col sm={6} xs={12} className="modern-section_div-text modern-section_div-text-center">
                                    <div>
                                        <h4 className="modern-section_title">
                                        Métricas de performance
                                        </h4>
                                        <p className="modern-section_parraf">
                                        Conoce el rendimiento de tus canales <br /> de atención.
                                        </p>
                                    </div>

                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <img src={graficos.src} className="img-fluid" />
                                </Col>

                            </Row>
                            <Row>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-end">
                                    <img src={channel.src} className="img-fluid" />
                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-text">
                                    <div>
                                        <h4 className="modern-section_title">
                                        Comunicación centralizada con tus clientes

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