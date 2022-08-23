import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import map from '../asset/imgs/map/map.svg'
import iso from '../asset/imgs/isonew.svg'
import left from '../asset/imgs/map/left-map.svg'
import right from '../asset/imgs/map/right-map.svg'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { useMediaQuery } from 'react-responsive'

export default function Map() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })
    return (
        <>

            <Container fluid className="map-section relative">
                <img src={left.src} className="img-fluid map-section_leftshape  d-none d-sm-block" alt="Shape" />
                <img src={right.src} className="img-fluid map-section_rightshape  d-none d-sm-block" alt="Shape" />
                <Container>
                    <Row>
                        <Col className="map-section_mapcontent text-center">
                            <h3 className="map-section_mapcontent-text">
                                Debemedia lleva más de 15 años desarrollando software para gestionar la experiencia del cliente.
                            </h3>
                             <img src={iso.src} className="img-fluid isoImg" alt="Iso" />

                            <img src={map.src} className="img-fluid map-section-maxMap" alt="Mapa" />
                            <div className="numbers number1 text-center">
                                <span className="quntity">+ <CountUp end={350} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp></span>
                                <span className="type">Clientes</span>
                            </div>
                            <div className="numbers number2 text-center">
                                <span className="quntity">+ <CountUp end={100} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>M</span>
                                <span className="type">Interacciones</span>
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
                                <span className="quntity">+ <CountUp end={3000} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp></span>
                                <span className="type">Sucursales implementadas</span>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container>


        </>
    );
}