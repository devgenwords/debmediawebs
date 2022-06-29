import React, { useState, useEffect } from "react";
import { Row, Container, Col, ListGroup } from "react-bootstrap";
import Link from 'next/link';
import Image from 'next/image'
import partners from '../asset/imgs/partners.svg'
import face from '../asset/imgs/facebook.svg'
import insta from '../asset/imgs/insta.svg'
import lkedin from '../asset/imgs/lkedin.svg'


export default function Footer() {
    return (
        <>
            <footer>
                <Container fluid className="footer-section">
                    <Container>
                        <Row>
                            <Col sm="3" xs="6">
                                <h6 className="footer-section_title">Soluciones</h6>
                                <hr />
                                <ListGroup className="footer-section_list">
                                    <ListGroup.Item>
                                        <Link href="/debq">
                                            Gestión de filas

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/citasonline">
                                            Citas online

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/fila-virtual">
                                            Fila virtual
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/debsign">
                                            Cartelería digital

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/atencion-virtual">
                                            Atención virtual

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/encuestas">
                                            Encuestas
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/preatendedor">
                                            Preatendedor
                                        </Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm="3" xs="6">
                                <h6 className="footer-section_title">Empresa</h6>
                                <hr />
                                <ListGroup className="footer-section_list">
                                    <ListGroup.Item>
                                        <Link href="/debq">
                                            Clientes

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/citasonline">
                                            Nosotros

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/fila-virtual">
                                            Partners
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/debsign">
                                            Blog

                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/atencion-virtual">
                                            Política de calidad
                                            y seguridad
                                        </Link>
                                    </ListGroup.Item>


                                </ListGroup>
                            </Col>
                            <Col sm="3" xs="6">
                                <h6 className="footer-section_title">Industrias</h6>
                                <hr />
                                <ListGroup className="footer-section_list">
                                    <ListGroup.Item>
                                        <Link href="/bancosyfinanzas">
                                            Banca y aseguradoras
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/salud">
                                            Salud 
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/gobierno">
                                             Gobierno
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/">
                                            Utilities y corporaciones
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/retail">
                                            Servicios y retail
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link href="/">
                                            Telecomunicaciones
                                        </Link>
                                    </ListGroup.Item>


                                </ListGroup>
                            </Col>
                            <Col sm="3" xs="6">
                                <h6 className="footer-section_title">Avalados por</h6>
                                <hr />
                                <Image src={partners.src} width={100}
                                    height={130} />
                            </Col>
                        </Row>
                        <Row >
                            <Col xs="12" className="d-flex justify-content-center mt-4">
                                <img src={face.src} width={50} className="social"
                                    height={50} alt="facebook" />
                                <img src={insta.src} width={50}
                                    height={50} alt="facebook"  className="social"/>
                                <img src={lkedin.src} width={50}
                                    height={50} alt="facebook"  className="social"/>
                            </Col>
                        </Row>
                    </Container>

                </Container>
            </footer>

        </>
    );
}