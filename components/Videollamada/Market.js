import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import valore from '../../asset/imgs/videollamada/valore.svg'
import aprovecha from '../../asset/imgs/videollamada/aprovecha.svg'
import dif from '../../asset/imgs/videollamada/dif.svg'
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
                                <b>Brinda a tus clientes</b><br />
                                la experiencia que se merecen
                            </h3>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="market-videocall-section_div1">
                                <div className="imageXs">
                                    <Image src={valore.src} width={120}
                                        height={120} className="d-block d-sm-none img-fluid" />
                                </div>

                                <h5>Valora su tiempo </h5>
                                <p>Ofrece una atención<br />
                                    ágil y eficiente.</p>
                            </div>
                            <div className="market-videocall-section_div2">
                                <div className="imageXs">
                                    <Image src={aprovecha.src} width={120}
                                        height={120} className="d-block d-sm-none img-fluid" />
                                </div>

                                <h5>Humaniza la atención </h5>
                                <p>A través de encuentros<br /> especializados y cercanos.</p>
                            </div>
                            <div className="market-videocall-section_div3">
                                <div className="imageXs">
                                    <Image src={dif.src} width={120}
                                        height={120} className="d-block d-sm-none img-fluid" />
                                </div>

                                <h5>Diferénciate de<br />
                                    la competencia</h5>
                                <p>Consigue una ventaja <br />
                                    tecnológica.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="mb-5 pb-5 d-none d-sm-block">
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