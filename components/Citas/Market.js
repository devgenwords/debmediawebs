import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import gestion from '../../asset/imgs/debq/gestion.svg'
import clientes from '../../asset/imgs/debq/cliente.svg'
import falta from '../../asset/imgs/debq/falta.svg'
import arrow from '../../asset/imgs/home/arrow.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-mobile-section">
                <Container>
                    <Row>
                        <Col className="market-mobile-section_maintitle text-center">
                            <h3>
                            Empresas que desconocen cómo optimizar proceos.
                            </h3>
                            <p>Como consecuencia tienen
</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={12} className="market-mobile-section_div">
                            <Image src={gestion.src} width={70}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-mobile-section_title">
                            Gestión ineficiente
                            </h4>
                            <p className="market-mobile-section_parraf">
                            y recursos desaprovechados
                            </p>
                        </Col>
                        <Col sm={4} xs={12} className="market-mobile-section_div">
                            <Image src={clientes.src} width={70}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-mobile-section_title">
                            Clientes descontentos
                            </h4>
                            <p className="market-mobile-section_parraf">
                            que exigen una mejor <br/>atención.
                            </p>
                        </Col>
                        <Col sm={4} xs={12} className="market-mobile-section_div">
                            <Image src={falta.src} width={70}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-mobile-section_title">
                            Falta de métricas
                            </h4>
                            <p className="market-mobile-section_parraf">
                            para tomar mejores<br/> decisiones.
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