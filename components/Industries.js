import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import banca from '../asset/imgs/banca.svg'
import salud from '../asset/imgs/salud.svg'
import servi from '../asset/imgs/servicios.svg'
import gob from '../asset/imgs/gob.svg'
import telcos from '../asset/imgs/telcos.svg'
import uti from '../asset/imgs/uti.svg'
import Link from 'next/link'



export default function Modern() {
    return (
        <>
            <Container fluid className="industries-section my-5">
                <Container>
                    <Row>
                        <Col sm={12} className="industries-section_mainTitle d-flex align-items-center text-center mb-5">
                            <h2>Organizaciones de múltiples industrias <br /><b>gestionan la experiencia de los clientes con Debmedia.</b></h2>
                        </Col>
                        <Col sm={12} className="industries-section_divs">
                            <Row>
                                <Link href="/bancosyfinanzas">
                                    <Col sm={4} offset={1} xs={12} className="industries-section_divs-indu industries-section_divs-banca">
                                        <div>
                                            <Image src={banca.src} width={50}
                                                height={50} className={'img-fluid'} />
                                        </div>

                                        <h4>
                                            Banca y Seguros
                                        </h4>
                                        <p>
                                            Instituciones financieras, aseguradoras, cooperativas.
                                        </p>
                                    </Col>
                                </Link>
                                <Link href="/salud">
                                    <Col sm={4} xs={12} className="industries-section_divs-indu industries-section_divs-salud">
                                        <Image src={salud.src} width={50}
                                            height={50} className={'img-fluid'} />
                                        <h4>
                                            Salud
                                        </h4>
                                        <p>
                                            Clínicas, hospitales, laboratorios, farmacias, prepagadas.
                                        </p>
                                    </Col>
                                </Link>
                                <Link href="/gobierno">
                                    <Col sm={4} xs={12} className="industries-section_divs-indu industries-section_divs-gob">
                                        <Image src={gob.src} width={50}
                                            height={50} className={'img-fluid'} />
                                        <h4>
                                            Gobierno
                                        </h4>
                                        <p>
                                            Instituciones públicas, municipios, ONGs
                                        </p>
                                    </Col>
                                </Link>
                                <Link href="/retail">
                                    <Col sm={4} xs={12} className="industries-section_divs-indu industries-section_divs-servi">
                                        <Image src={servi.src} width={50}
                                            height={50} className={'img-fluid'} />
                                        <h4>
                                            Retail y servicios
                                        </h4>
                                        <p>
                                            Tiendas retail, cajas de compensación, logística.
                                        </p>
                                    </Col>
                                </Link>
                                <Link href="/telcos">
                                    <Col sm={4} xs={12} className="industries-section_divs-indu industries-section_divs-teleco">
                                        <Image src={telcos.src} width={50}
                                            height={50} className={'img-fluid'} />
                                        <h4>
                                            Telecomunicaciones
                                        </h4>
                                        <p>
                                            Telefonía móvil, operadores de cable.
                                        </p>
                                    </Col>
                                </Link>
                                <Link href="/utilities">
                                    <Col sm={4} xs={12} className="industries-section_divs-indu industries-section_divs-uti">
                                        <Image src={uti.src} width={50}
                                            height={50} className={'img-fluid'} />
                                        <h4>
                                            Utilities
                                        </h4>
                                        <p>
                                            Asociaciones, servicios públicos.
                                        </p>
                                    </Col>
                                </Link>
                            </Row>

                        </Col>

                    </Row>
                </Container>

            </Container>
        </>
    );
}