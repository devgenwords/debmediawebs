import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import how1 from '../../asset/imgs/encuestas/how1.png'
import how2 from '../../asset/imgs/encuestas/how2.png'
import how3 from '../../asset/imgs/encuestas/how3.png'
import Link from 'next/link'


export default function Market() {
    return (
        <>
            <Container fluid className="flow-encuestas-section relative">
                <Container>
                    <Row >
                        <Col sm="12" className="flow-encuestas-section_maintitle text-center">
                            <h3>
                                <b>Crea encuestas en pocos pasos
                                </b><br />
                                en pocos pasos

                            </h3>
                        </Col>
                        <Col sm="4" xs="12" className="text-center flow-encuestas-section_how">
                            <img src={how1.src} className="img-fluid" />
                            <figure>
                                <h5>
                                    Crea
                                </h5>
                                <p>
                                    la encuesta
                                </p>
                            </figure>
                        </Col>
                        <Col sm="4" xs="12" className="text-center flow-encuestas-section_how">
                            <img src={how2.src} className="img-fluid" />
                            <figure>
                                <h5>
                                    Asocia
                                </h5>
                                <p>
                                    el trámite
                                </p>
                            </figure>
                        </Col>
                        <Col sm="4" xs="12" className="text-center flow-encuestas-section_how">
                            <img src={how3.src} className="img-fluid" />
                            <figure>
                                <h5>
                                    Escoge la acción
                                </h5>
                                <p>que dispara el envío.
                                </p>
                            </figure>
                        </Col>
                        <Col className="text-center mt-4">
                        <Link href="/contacto">
                            <button className="citas-home_demobutton">
                                Solicita una demo
                            </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}