import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import humanos from '../../asset/imgs/preatendedor/humanos.svg'
import atencion from '../../asset/imgs/preatendedor/atencion.svg'
import tardia from '../../asset/imgs/preatendedor/tardia.svg'
import arrow from '../../asset/imgs/home/arrow.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-preatendedor-section">
                <Container>
                    <Row>
                        <Col className="market-preatendedor-section_maintitle text-center">
                            <h3>
                                La dificultad para dirigir a tus clientes <br />
                                al canal adecuado se traduce en
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-preatendedor-section_div">
                            <div className="imageXs">
                                <Image src={humanos.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-preatendedor-section_title">
                                Procesos humanos
                            </h4>
                            <p className="market-preatendedor-section_parraf">
                                más costosos para tu organización
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-preatendedor-section_div">
                            <div className="imageXs">
                                <Image src={atencion.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-preatendedor-section_title">
                                Procesos de atención
                            </h4>
                            <p className="market-preatendedor-section_parraf">
                                complejos para tus clientes
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-preatendedor-section_div">
                            <div className="imageXs">
                                <Image src={tardia.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-preatendedor-section_title">
                                Respuestas tardías
                            </h4>
                            <p className="market-preatendedor-section_parraf">
                                a tus clientes
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-preatendedor-section_arrow">
                    <div className="market-preatendedor-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}