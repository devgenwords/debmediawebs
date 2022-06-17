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
                        <Col xs={12} className="market-videocall-section_div">
                        
                        </Col>
                    </Row>
                </Container>
                <div>
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