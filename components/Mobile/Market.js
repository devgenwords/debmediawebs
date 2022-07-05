import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/home/videoShape.svg'
import aglo from '../../asset/imgs/mobile/aglo.svg'
import incerti from '../../asset/imgs/mobile/incerti.svg'
import cliente from '../../asset/imgs/mobile/cliente.svg'
import arrow from '../../asset/imgs/home/arrow.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-mobile-section">
                <Container>
                    <Row>
                        <Col className="market-mobile-section_maintitle text-center">
                            <h3>
                                Esperas innecesarias dentro de las sucursales
                            </h3>
                            <p>generan una mala experiencia </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-mobile-section_div">
                            <div className="imageXs">
                                <Image src={aglo.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-mobile-section_title">
                                Aglomeraciones
                            </h4>
                            <p className="market-mobile-section_parraf">
                                dentro de las instalaciones.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-mobile-section_div">
                            <div className="imageXs">
                                <Image src={incerti.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-mobile-section_title">
                                Clientes con<br /> incertidumbre
                            </h4>
                            <p className="market-mobile-section_parraf">
                                e sobre el tiempo de espera para ser atendidos.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-mobile-section_div">
                            <div className="imageXs">
                                <Image src={cliente.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-mobile-section_title">
                                Altas tasas de abandono
                            </h4>
                            <p className="market-mobile-section_parraf">
                                de clientes insatisfechos sin ser atendidos.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-mobile-section_arrow">
                    <div className="market-mobile-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}