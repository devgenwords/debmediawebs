import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import banca from '../asset/imgs/banca.svg'
import salud from '../asset/imgs/salud.svg'
import servi from '../asset/imgs/servicios.svg'
import gob from '../asset/imgs/gob.svg'



export default function Modern() {
    return (
        <>
            <Container fluid className="industries-section my-5">
                <Container>
                    <Row>
                        <Col sm={7} className="industries-section_divs">
                            <Row>
                                <Col sm={6} offset={1} xs={12} className="industries-section_divs-indu industries-section_divs-banca">
                                    <Image src={banca.src} width={70}
                                        height={70} className={'img-fluid'} />
                                    <h4>
                                        Banca y Seguros
                                    </h4>
                                    <p>
                                        Instituciones financieras,
                                        cooperativas y aseguradoras.
                                    </p>
                                </Col>
                                <Col sm={6} xs={12} className="industries-section_divs-indu industries-section_divs-salud">
                                    <Image src={salud.src} width={70}
                                        height={70} className={'img-fluid'} />
                                    <h4>
                                        Salud
                                    </h4>
                                    <p>
                                        Prepagas, laboratorios, clínicas y hospitales.
                                    </p>
                                </Col>
                                <Col sm={6} xs={12} className="industries-section_divs-indu industries-section_divs-servi">
                                    <Image src={servi.src} width={70}
                                        height={70} className={'img-fluid'} />
                                    <h4>
                                        Servicios y retail
                                    </h4>
                                    <p>
                                        Utilities, telcos, retail, y compañías de atención
                                        al cliente.
                                    </p>
                                </Col>
                                <Col sm={6} xs={12} className="industries-section_divs-indu industries-section_divs-gob">
                                    <Image src={gob.src} width={70}
                                        height={70} className={'img-fluid'} />
                                    <h4>
                                        Gobierno
                                    </h4>
                                    <p>
                                        Instituciones públicas, municipios y entidades, estatales
                                    </p>
                                </Col>
                            </Row>

                        </Col>
                        <Col sm={5} className="industries-section_mainTitle d-flex align-items-center">
                            <h2>Organizaciones de múltiples industrias <b>gestionan su atención con Debmedia </b></h2>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>

            </Container>
        </>
    );
}