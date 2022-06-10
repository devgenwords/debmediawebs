import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import performance from '../../asset/imgs/home/performance.svg'
import channel from '../../asset/imgs/home/channels.svg'
import chatbot from '../../asset/imgs/mobile/modern1.png'
import api from '../../asset/imgs/mobile/modern2.png'


export default function Modern() {
    return (
        <>
            <Container fluid className="modern-section">
                <Container>
                    <Row>
                        <Col className="modern-section_maintitle">
                            <h3 className="text-center">
                                <b>Agiliza los tiempos de espera </b><br />
                                dentro de tus sucursales

                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="modern-section_div">
                            <Row>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={chatbot.src} width={400}
                                        height={450} />

                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-text">
                                    <div>
                                        <h4 className="modern-section_title">
                                            El sistema de fila virtual es<br />
                                            integrable con un Chatbot
                                        </h4>
                                        <p className="modern-section_parraf">
                                            Para que el cliente pueda hacer <br />
                                            fila desde WhatsApp.

                                        </p>
                                    </div>

                                </Col>
                            </Row>
                            <Row className="d-sm-flex reverseXs">
                                <Col sm={5} xs={12} className="modern-section_div-text modern-section_div-text-center">
                                    <div>
                                        <h4 className="modern-section_title">
                                        Integrable por API 
                                        </h4>
                                        <p className="modern-section_parraf">
                                        De esta forma se automatiza 
el viaje del cliente.
                                        </p>
                                    </div>

                                </Col>
                                <Col sm={7} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={api.src} width={300}
                                        height={300} />
                                </Col>

                            </Row>
                            {/* <Row className="d-block d-sm-none">

                                <Col sm={7} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={api.src} width={600}
                                        height={500} />
                                </Col>
                                <Col sm={5} xs={12} className="modern-section_div-text modern-section_div-text-center">
                                    <div>
                                        <h4 className="modern-section_title">
                                        Integrable por API 
                                        </h4>
                                        <p className="modern-section_parraf">
                                        De esta forma se automatiza 
el viaje del cliente.
                                        </p>
                                    </div>

                                </Col>
                            </Row> */}
                            <Row>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-center">
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