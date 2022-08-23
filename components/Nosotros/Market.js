import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import celda from '../../asset/imgs/nosotros/celda.svg'
import celdaxs from '../../asset/imgs/nosotros/celda-xs.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-nosotros-section">
                <Container>
                    <Row>
                        <Col className="col-12 market-nosotros-section_blue market-nosotros-section_maintitle">
                            <h3 className="text-center">
                                ¿Qué queremos hacer  <br className="d-none d-sm-block" />
                                por <b>las empresas?</b>

                            </h3>
                            <p>
                                No importa si hablamos de bancos, aseguradoras, hospitales o gobiernos.<b> Los clientes quieren elegir cuándo y a través de qué canal online y offline quieren interactuar.</b>
                            </p>
                            <p>
                                En Debmedia ayudamos a distintas organizaciones a integrar sus canales de atención, optimizar sus recursos y ofrecer una experiencia consistente a sus clientes en cada punto de contacto a través de diferentes soluciones.
                            </p>
                        </Col>
                        <Col className="col-12 text-center mt-4">
                            <img src={celda.src} className="img-fluid d-none d-sm-block"/>
                            <img src={celdaxs.src} className="img-fluid d-block d-sm-none"/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}