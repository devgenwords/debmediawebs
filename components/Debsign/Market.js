import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mensaje from '../../asset/imgs/debsign/mensaje.svg'
import perju from '../../asset/imgs/debsign/perju.svg'
import imagen from '../../asset/imgs/debsign/imagen.svg'
import arrow from '../../asset/imgs/home/arrow.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-mobile-section">
                <Container>
                    <Row>
                        <Col className="market-mobile-section_maintitle text-center">
                            <h3>
                            Sin las herramientas adecuadas<br />
                            </h3>
                            <p>puede que no estés comunicando mensajes correctos
</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-mobile-section_div">
                        <div className="imageXs">
                                 <Image src={mensaje.src} width={70}
                                height={135} className={'img-fluid'} />
                                </div>
                           
                                <h4 className="market-mobile-section_title">
                                    Mensajes <br />desactualizados
                                </h4>
                                <p className="market-mobile-section_parraf">
                                    en sucursales.
                                </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-mobile-section_div">
                        <div className="imageXs">
                                 <Image src={perju.src} width={70}
                                height={135} className={'img-fluid'} />
                                </div>
                           
                            <h4 className="market-mobile-section_title">
                                Uso de componentes<br /> perjudiciales
                            </h4>
                            <p className="market-mobile-section_parraf">
                                para el medioambiente.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-mobile-section_div">
                        <div className="imageXs">
                                 <Image src={imagen.src} width={70}
                                height={135} className={'img-fluid'} />
                                </div>
                           
                            <h4 className="market-mobile-section_title">
                                Imagen de marca <br />anticuada
                            </h4>
                            <p className="market-mobile-section_parraf">
                                que no atrae
                                la atención.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-mobile-section_arrow">
                    <div className="market-mobile-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}