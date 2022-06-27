import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import api from '../../asset/imgs/banca/api.svg'
import performance from '../../asset/imgs/home/performance.svg'
import channel from '../../asset/imgs/home/channels.svg'


export default function Modern() {
    return (
        <>
            <Container fluid className="modern-banca-section">
                <Container>
                    <Row>
                        <Col className="modern-banca-section_maintitle">
                            <h3 className="text-center">
                                <b>  Una solución moderna y escalable</b>
                                <br />
                                para organizaciones del gobierno
                            </h3>
                        </Col>
                    </Row>
                    <Row className=" d-flex justify-content-center">
                        <Col sm="4" xs="12" className="modern-banca-section_feature">
                            <Row>
                                <Col xs="12" className="modern-banca-section_feature-img d-flex justify-content-center">
                                <Image src={api.src} width={100}
                                height={100} className={'img-fluid'} />   
                                </Col>
                                <Col xs="12" className="modern-banca-section_feature-text text-center">
                                    <h5>
                                    Integración <br/>
Sencilla
                                    </h5>
                                    <p>
                                    Integrable por API <br/>
o iframe.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4" xs="12" className="modern-banca-section_feature">
                            <Row>
                                <Col xs="12" className="modern-banca-section_feature-img d-flex justify-content-center">
                                <Image src={api.src} width={100}
                                height={100} className={'img-fluid'} />   
                                </Col>
                                <Col xs="12" className="modern-banca-section_feature-text text-center">
                                    <h5>
                                    Integración <br/>
Sencilla
                                    </h5>
                                    <p>
                                    Integrable por API <br/>
o iframe.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="4" xs="12" className="modern-banca-section_feature">
                            <Row>
                                <Col xs="12" className="modern-banca-section_feature-img d-flex justify-content-center">
                                <Image src={api.src} width={100}
                                height={100} className={'img-fluid'} />   
                                </Col>
                                <Col xs="12" className="modern-banca-section_feature-text text-center">
                                    <h5>
                                    Integración <br/>
Sencilla
                                    </h5>
                                    <p>
                                    Integrable por API <br/>
o iframe.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        
                    </Row>
                </Container>
            </Container>
        </>
    );
}