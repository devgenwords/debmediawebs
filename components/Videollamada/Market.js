import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import desco from '../../asset/imgs/citas/desco.svg'
import espera from '../../asset/imgs/citas/espera.svg'
import falta from '../../asset/imgs/citas/falta.svg'
import arrow from '../../asset/imgs/home/arrow.svg'
import market from '../../asset/imgs/videollamada/market.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-videocall-section relative">
                <Container>
                    <Row>
                        <Col className="market-videocall-section_maintitle text-center">
                            <h3>
                                <b>Brínda a tus clientes</b><br />
                                la experiencia que se merecen
                            </h3>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="market-videocall-section_div1">
                                <h5>Valora su tiempo </h5>
                                <p>Ofrece una atención<br />
                                    ágil y eficiente.</p>
                            </div>
                            <div className="market-videocall-section_div2">
                                <h5>Aprovecha tus <br />
                                    recursos al máximo </h5>
                                <p>Permite a tus equipos<br /> atender desde cualquier <br />lugar.</p>
                            </div>
                            <div className="market-videocall-section_div3">
                                <h5>Diferénciate de<br />
                                    la competencia</h5>
                                <p>Consigue una ventaja <br />
                                    tecnológica.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="mb-5 pb-5">
                    <img src={market.src} className="img-fluid" alt="arrow" />
                </div>
                <div className="market-videocall-section_arrow">
                    <div className="market-videocall-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>

            </Container>
        </>
    );
}