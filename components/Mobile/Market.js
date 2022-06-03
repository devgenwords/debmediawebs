import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/home/videoShape.svg'
import pepole from '../../asset/imgs/home/pepole.svg'
import connect from '../../asset/imgs/home/connect.svg'
import stats from '../../asset/imgs/home/stats.svg'
import arrow from '../../asset/imgs/home/arrow.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="market-mobile-section">
                <Container>
                    <Row>
                        <Col className="market-mobile-section_maintitle text-center">
                            <h3>
                            Esperas innecesarias dentro de las sucursales
                            </h3>
                            <p>que generan una mala experiencia </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={12} className="market-mobile-section_div">
                            <Image src={pepole.src} width={90}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-mobile-section_title">
                                Clientes insatisfechos
                            </h4>
                            <p className="market-mobile-section_parraf">
                                por una atención ineficiente.
                            </p>
                        </Col>
                        <Col sm={4} xs={12} className="market-mobile-section_div">
                            <Image src={connect.src} width={90}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-mobile-section_title">
                                Desconexión entre canales
                            </h4>
                            <p className="market-mobile-section_parraf">
                                presenciales y virtuales.
                            </p>
                        </Col>
                        <Col sm={4} xs={12} className="market-mobile-section_div">
                            <Image src={stats.src} width={65}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-mobile-section_title">
                                Nuevos competidores
                            </h4>
                            <p className="market-mobile-section_parraf">
                                con ventajas tecnológicas.
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