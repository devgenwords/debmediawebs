import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import alto from '../../asset/imgs/salud/alto.svg'
import exp from '../../asset/imgs/salud/exp.svg'
import des from '../../asset/imgs/salud/des.svg'
import arrow from '../../asset/imgs/home/arrow.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-banca-section">
                <Container>
                    <Row>
                        <Col className="market-banca-section_maintitle">
                            <h3 className="text-center">
                            Los pacientes actuales
                                <br /><b>ya no toleran 
un proceso de atención ineficiente</b>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-banca-section_div">
                            <div className="imageXs">
                                <Image src={alto.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-banca-section_title">
                            Altos costos en 
                            </h4>
                            <p className="market-banca-section_parraf">
                            procesos manuales.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-banca-section_div">
                            <div className="imageXs">
                                <Image src={exp.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-banca-section_title">
                            Experiencias frustrantes 
                            </h4>
                            <p className="market-banca-section_parraf">
                            para los pacientes.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-banca-section_div">
                            <div className="imageXs">
                                <Image src={des.src} width={65}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-banca-section_title">
                                Desconocimiento de
                            </h4>
                            <p className="market-banca-section_parraf">
                                la performance de los profesionales.
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