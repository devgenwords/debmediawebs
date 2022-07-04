import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import modern1 from '../../asset/imgs/mobile/modern1.png'
import modern2 from '../../asset/imgs/mobile/modern2.png'
import modern3 from '../../asset/imgs/mobile/modern3.png'
import modern4 from '../../asset/imgs/mobile/modern4.png'



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
                                    <Image src={modern1.src} width={400}
                                        height={450} />

                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-text">
                                    <div>
                                        <h4 className="modern-section_title">
                                            Integrable con chatbot
                                        </h4>
                                        <p className="modern-section_parraf">
                                            El cliente puede ingresar y<br /> seguir la fila desde WhatsApp.


                                        </p>
                                    </div>

                                </Col>
                            </Row>
                            <Row className="d-sm-flex reverseXs">
                                <Col sm={5} xs={12} className="modern-section_div-text modern-section_div-text-center">
                                    <div>
                                        <h4 className="modern-section_title">
                                            Integrable por API o Iframe
                                        </h4>
                                        <p className="modern-section_parraf">
                                            A una aplicación o web pre existente.

                                        </p>
                                    </div>

                                </Col>
                                <Col sm={7} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={modern2.src} width={300}
                                        height={300} />
                                </Col>

                            </Row>
                            <Row>
                                <Col sm={6} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={modern3.src} width={380}
                                        height={300} />
                                </Col>
                                <Col sm={6} xs={12} className="modern-section_div-text">
                                    <div>
                                        <h4 className="modern-section_title">
                                            Configuración de trámites

                                        </h4>
                                        <p className="modern-section_parraf">
                                            Para seleccionar a cuáles los clientes se pueden encolar a través de fila virtual.
                                        </p>
                                    </div>

                                </Col>
                            </Row>
                            <Row className="d-sm-flex reverseXs">
                                <Col sm={5} xs={12} className="modern-section_div-text modern-section_div-text-center">
                                    <div>
                                        <h4 className="modern-section_title">
                                            Look and feel personalizado.

                                        </h4>
                                        <p className="modern-section_parraf">
                                            Para mantener la identidad de la organización

                                        </p>
                                    </div>

                                </Col>
                                <Col sm={7} xs={12} className="modern-section_div-img d-flex justify-content-center">
                                    <Image src={modern4.src} width={400}
                                        height={450} />
                                </Col>

                            </Row>
                        </Col>


                    </Row>
                </Container>
            </Container>
        </>
    );
}