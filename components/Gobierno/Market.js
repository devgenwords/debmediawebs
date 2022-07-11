import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import largas from '../../asset/imgs/gobierno/largas.svg'
import pro from '../../asset/imgs/gobierno/pro.svg'
import quejas from '../../asset/imgs/gobierno/quejas.svg'
import arrow from '../../asset/imgs/home/arrow.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-gobierno-section">
                <Container>
                    <Row>
                        <Col className="market-gobierno-section_maintitle">
                            <h3 className="text-center">
                                Los ciudadanos de hoy  <br />
                                <b>no toleran procesos ineficientes</b>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-gobierno-section_div">
                            <div className="imageXs">
                                <Image src={largas.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-gobierno-section_title">
                                Largas filas
                            </h4>
                            <p className="market-gobierno-section_parraf">
                                y esperas
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-gobierno-section_div">
                            <div className="imageXs">
                                <Image src={pro.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-gobierno-section_title">
                                Procesos manuales
                            </h4>
                            <p className="market-gobierno-section_parraf">
                                ineficientes
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-gobierno-section_div">
                            <div className="imageXs">
                                <Image src={quejas.src} width={90}
                                    height={135} className={'img-fluid'} />
                            </div>

                            <h4 className="market-gobierno-section_title">
                                Quejas que
                            </h4>
                            <p className="market-gobierno-section_parraf">
                                dañan la imagen
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-gobierno-section_arrow">
                    <div className="market-gobierno-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}