import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check_blue from '../../asset/imgs/home/check_blue.svg'
import check_white from '../../asset/imgs/home/check-m.svg'
import wapp from '../../asset/imgs/preatendedor/wapp.png'
import { useMediaQuery } from 'react-responsive'
import shape1 from '../../asset/imgs/mobile/shapeTabs.svg'


export default function Solutions() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })
    return (
        <>
            <Container className="setps-top">
                <Row>
                    <Col className="setps-section_preatendedor_maintitle">
                        <h3 className="text-center">
                            <b>Direcciona a tus clientes 
                            </b> más rápido <br />al canal de atención indicado
                        </h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="setps-section_preatendedor">
                <Container>
                    <Row>
                        <Col sm={4} xs={4} className="setps-section_preatendedor_div">
                            <div className="setps-section_preatendedor_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_preatendedor_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>

                            <h4 className="setps-section_preatendedor_title">
                                Automatiza los procesos

                            </h4>
                            <p className="setps-section_preatendedor_parraf">
                                y reduce costos.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_preatendedor_div">
                            <div className="setps-section_preatendedor_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_preatendedor_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_preatendedor_title">
                                Simplifica el viaje

                            </h4>
                            <p className="setps-section_preatendedor_parraf">
                                de tus clientes.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_preatendedor_div">
                            <div className="setps-section_preatendedor_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_preatendedor_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={50} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_preatendedor_title">
                                Mejora los tiempos
                            </h4>
                            <p className="setps-section_preatendedor_parraf">
                                de respuesta y agiliza <br />
                                la atención.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="wapp-preatendedor-section relative">
                <Container>
                    <Row>
                        <Col sm="12" className="wapp-preatendedor-section_maintitle">
                            <h3 className="text-center">
                                <b>A través de WhatsApp direcciona a tus clientes </b><br />
                                para que escojan el canal de atención más adecuado
                            </h3>
                        </Col>
                        <Col sm={{ span: 10, offset: 1 }} className="text-center  mt-5">
                            {/* <img src={wapp.src} className="img-fluid mt-5" alt="" /> */}
                            <Image src={wapp.src} width={980}
                                height={660} className={'img-fluid'} />
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    );
}