import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import map from '../asset/imgs/map.svg'


export default function Map() {
    return (
        <>
            <Container fluid className="map-section">
                <Container>
                    <Row>
                        <Col className="map-section_mapcontent text-center">
                            <img src={map.src} className="img-fluid map-section-maxMap" alt="Mapa" />
                            <div className="numbers number1 text-center">
                                <span className="quntity">+ 300</span>
                                <span className="type">clientes</span>
                            </div>
                            <div className="numbers number2 text-center">
                                300
                            </div>
                            <div className="numbers number3 text-center">
                                300 
                            </div>
                            <div className="numbers number4 text-center">
                                300
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    );
}