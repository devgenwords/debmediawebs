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
                                Empresas con modelos de atención <br />
                                obsoletos y desconectados
                            </h3>
                            <p>Que no saben cómo personalizar la atención
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={12} className="market-citas-section_div">
                            <Image src={desco.src} width={70}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-citas-section_title">
                                Desconocimiento
                            </h4>
                            <p className="market-citas-section_parraf">
                                de los clientes y sus necesidades.
                            </p>
                        </Col>
                        <Col sm={4} xs={12} className="market-citas-section_div">
                            <Image src={espera.src} width={70}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-citas-section_title">
                                Falta de datos para tener
                            </h4>
                            <p className="market-citas-section_parraf">
                                la cantidad correcta de operadores
                            </p>
                        </Col>
                        <Col sm={4} xs={12} className="market-citas-section_div">
                            <Image src={falta.src} width={70}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-citas-section_title">
                                Esperas y mala
                                experiencia
                            </h4>
                            <p className="market-citas-section_parraf">
                                para los clientes.
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