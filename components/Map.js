import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import map from '../asset/imgs/map/map.svg'
import left from '../asset/imgs/map/left-map.svg'
import right from '../asset/imgs/map/right-map.svg'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { useMediaQuery } from 'react-responsive'

export default function Map() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })
    return (
        <>
        
                <Container fluid className="map-section">
                    <img src={left.src} className="img-fluid map-section_leftshape  d-none d-sm-block" alt="Shape" />
                    <img src={right.src} className="img-fluid map-section_rightshape  d-none d-sm-block" alt="Shape" />
                    <Container>
                        <Row>
                            <Col className="map-section_mapcontent text-center">
                                <h3 className="map-section_mapcontent-text">
                                    Debmedia lleva más de 15 años desarrollando software para gestionar la experiencia del cliente en distintas compañías <b>en todo Latinoamérica.</b>
                                </h3>
                                <img src={map.src} className="img-fluid map-section-maxMap" alt="Mapa" />
                                <div className="numbers number1 text-center">
                                    <span className="quntity">+ <CountUp end={300} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp></span>
                                    <span className="type">clientes</span>
                                </div>
                                <div className="numbers number2 text-center">
                                    <span className="quntity">+ <CountUp end={50} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>M</span>
                                    <span className="type">interacciones</span>
                                </div>
                                <div className="numbers number3 text-center">
                                    <span className="quntity">+ <CountUp end={50} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp></span>
                                    <span className="type">Partners</span>
                                </div>
                                <div className="numbers number4 text-center">
                                    <span className="quntity">+ <CountUp end={2000} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp></span>
                                    <span className="type">sucursales implementadas</span>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </Container>
            

        </>
    );
}