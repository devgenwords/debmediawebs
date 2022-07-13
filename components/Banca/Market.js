import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import inter from '../../asset/imgs/banca/inter.svg'
import resp from '../../asset/imgs/banca/resp.svg'
import banco from '../../asset/imgs/banca/banco.svg'
import arrow from '../../asset/imgs/home/arrow.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-banca-section">
                <Container>
                    <Row>
                        <Col className="market-banca-section_maintitle">
                            <h3 className="text-center">
                                Los clientes de la banca de hoy <br />
                                <b>no se  <br className="d-block d-sm-none" /> conforman con cualquier cosa</b>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-banca-section_div">
                            <div className="imageXs">
                                <Image src={inter.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-banca-section_title">
                                Quieren interactuar
                            </h4>
                            <p className="market-banca-section_parraf">
                                cuándo, dónde y <br />
                                cómo quieran.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-banca-section_div">
                            <div className="imageXs">
                                <Image src={resp.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-banca-section_title">
                                Necesitan respuestas
                            </h4>
                            <p className="market-banca-section_parraf">
                                rápidas y efectivas.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-banca-section_div">
                            <div className="imageXs">
                                <Image src={banco.src} width={65}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-banca-section_title">
                                Se cambiarían de banco
                            </h4>
                            <p className="market-banca-section_parraf">
                                si consiguen una experiencia<br /> más consistente.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-banca-section_arrow">
                    <div className="market-banca-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}