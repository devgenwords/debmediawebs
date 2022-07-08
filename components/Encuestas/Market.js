import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import falsas from '../../asset/imgs/encuestas/falsas.svg'
import equivo from '../../asset/imgs/encuestas/equivo.svg'
import rendimiento from '../../asset/imgs/encuestas/rendimiento.svg'
import arrow from '../../asset/imgs/home/arrow.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-encuestas-section">
                <Container>
                    <Row>
                        <Col className="market-encuestas-section_maintitle text-center">
                            <h3>
                                Puede que estés perdiendo clientes por un mal servicio
                            </h3>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-encuestas-section_div">
                            <div className="imageXs">
                                <Image src={falsas.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-encuestas-section_title">
                                Falsas métricas
                            </h4>
                            <p className="market-encuestas-section_parraf">
                                sobre la satisfacción <br />
                                de tus clientes
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-encuestas-section_div">
                            <div className="imageXs">
                                <Image src={equivo.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-encuestas-section_title">
                                Decisiones equivocadas
                            </h4>
                            <p className="market-encuestas-section_parraf">
                                a falta
                                de datos
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-encuestas-section_div">
                            <div className="imageXs">
                                <Image src={rendimiento.src} width={70}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-encuestas-section_title">
                                Desconocimiento del<br /> rendimiento
                            </h4>
                            <p className="market-encuestas-section_parraf">
                                de los colaboradores
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-encuestas-section_arrow">
                    <div className="market-encuestas-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}