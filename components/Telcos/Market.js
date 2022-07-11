import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import modelos from '../../asset/imgs/telcos/modelos.svg'
import difi from '../../asset/imgs/telcos/difi.svg'
import cambian from '../../asset/imgs/telcos/cambian.svg'
import arrow from '../../asset/imgs/home/arrow.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-retail-section">
                <Container>
                    <Row>
                        <Col className="market-retail-section_maintitle">
                            <h3 className="text-center">
                                Los clientes hoy <b>no se <br />
                                    conforman con cualquier cosa </b>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-retail-section_div">
                            <div className="imageXs">
                                <Image src={modelos.src} width={120}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-retail-section_title">
                                Modelos de <br />
                                atención
                            </h4>
                            <p className="market-retail-section_parraf">
                                obsoletos
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-retail-section_div">
                            <div className="imageXs">
                                <Image src={difi.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-retail-section_title">
                                Dificultad para dirigir
                            </h4>
                            <p className="market-retail-section_parraf">
                                un canal de interacción a <br />cada cliente
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-retail-section_div">
                            <div className="imageXs">
                                <Image src={cambian.src} width={60}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-retail-section_title">
                                Cambiarían de marca
                            </h4>
                            <p className="market-retail-section_parraf">
                                si consiguen una experiencia<br /> más consistente.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-retail-section_arrow">
                    <div className="market-retail-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}