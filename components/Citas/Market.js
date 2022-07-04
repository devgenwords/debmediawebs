import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import desco from '../../asset/imgs/citas/desco.svg'
import espera from '../../asset/imgs/citas/espera.svg'
import falta from '../../asset/imgs/citas/falta.svg'
import arrow from '../../asset/imgs/home/arrow.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-citas-section">
                <Container>
                    <Row>
                        <Col className="market-citas-section_maintitle text-center">
                            <h3>
                                Muchas organizaciones gestionan sus <br />
                                procesos de atención de forma desordenada.
                            </h3>
                            {/* <p>Que no saben cómo personalizar la atención
                            </p> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-citas-section_div">
                            <Image src={desco.src} width={70}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-citas-section_title">
                                Desconocimiento
                            </h4>
                            <p className="market-citas-section_parraf">
                                de los clientes y sus necesidades.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-citas-section_div">
                            <Image src={espera.src} width={70}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-citas-section_title">
                                Falta de información
                            </h4>
                            <p className="market-citas-section_parraf">
                                para asignar la cantidad correcta de ejecutivos.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-citas-section_div">
                            <Image src={falta.src} width={70}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-citas-section_title">
                                Largas esperas
                            </h4>
                            <p className="market-citas-section_parraf">
                                y mala experiencia para los clientes.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-citas-section_arrow">
                    <div className="market-citas-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}