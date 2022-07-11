import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import intera from '../../asset/imgs/utilities/inter.svg'
import toleran from '../../asset/imgs/utilities/toleran.svg'
import mayoria from '../../asset/imgs/utilities/mayoria.svg'
import arrow from '../../asset/imgs/home/arrow.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-utilities-section">
                <Container>
                    <Row>
                        <Col className="market-utilities-section_maintitle">
                            <h3 className="text-center">
                                Los clientes hoy <b>no se <br />
                                    conforman con cualquier cosa </b>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-utilities-section_div">
                            <div className="imageXs">
                                <Image src={intera.src} width={120}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-utilities-section_title">
                                Quieren interactuar
                            </h4>
                            <p className="market-utilities-section_parraf">
                                cuándo, dónde y cómo quieran.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-utilities-section_div">
                            <div className="imageXs">
                                <Image src={toleran.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-utilities-section_title">
                                No toleran
                            </h4>
                            <p className="market-utilities-section_parraf">
                                procesos ineficientes
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-utilities-section_div">
                            <div className="imageXs">
                                <Image src={mayoria.src} width={60}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-utilities-section_title">
                                Evitan en su mayoría
                            </h4>
                            <p className="market-utilities-section_parraf">
                                todos los procesos manuales
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-utilities-section_arrow">
                    <div className="market-utilities-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}