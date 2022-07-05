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
            <Container fluid className="market-section">
                <Container>
                    <Row>
                        <Col className="market-section_maintitle">
                            <h3 className="text-center">
                                El mercado cambió y es necesario adaptarse.
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} xs={4} className="market-section_div">
                            <Image src={pepole.src} width={90}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-section_title">
                                Clientes insatisfechos
                            </h4>
                            <p className="market-section_parraf">
                                por una atención ineficiente.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-section_div">
                            <Image src={connect.src} width={90}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-section_title">
                            Procesos
                            </h4>
                            <p className="market-section_parraf">
                            de atención costos

                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="market-section_div">
                            <Image src={stats.src} width={65}
                                height={135} className={'img-fluid'} />
                            <h4 className="market-section_title">
                            Desconexión entre canales 
                            </h4>
                            <p className="market-section_parraf">
                            digitales y presenciales.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className="market-section_arrow">
                    <div className="market-section_arrow-circle">
                        <img src={arrow.src} alt="arrow" />
                    </div>
                </div>
            </Container>
        </>
    );
}