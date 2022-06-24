import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check_blue from '../../asset/imgs/home/check_blue.svg'
import check_white from '../../asset/imgs/home/check-m.svg'
import fila_virtual from '../../asset/imgs/home/fila-virtual.png'
import step1 from '../../asset/imgs/debsign/step1.png'
import step2 from '../../asset/imgs/debsign/step2.png'
import step3 from '../../asset/imgs/debsign/step3.png'
import step4 from '../../asset/imgs/debsign/step4.png'
import step5 from '../../asset/imgs/debsign/step5.png'
import step6 from '../../asset/imgs/debsign/step6.png'

import { useMediaQuery } from 'react-responsive'
import shape1 from '../../asset/imgs/mobile/shapeTabs.svg'


export default function Solutions() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })
    return (
        <>
            <Container className="setps-debsign-top">
                <Row>
                    <Col className="setps-debsign-section_maintitle">
                        <h3 className="text-center">
                            <b>Moderniza la forma de comunicación en tus sucursales</b>
                        </h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="setps-debsign-section">
                <Container>
                    <Row>
                        <Col sm={4} xs={4} className="setps-debsign-section_div">
                            <div className="setps-debsign-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-debsign-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>

                            <h4 className="setps-debsign-section_title">
                                Ajusta tu contenido

                                <br className="d-none d-sm-block" /> en tiempo real.
                            </h4>
                            <p className="setps-debsign-section_parraf">
                                Con mensajes adaptados al<br /> momento que vive tu organización.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-debsign-section_div">
                            <div className="setps-debsign-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-debsign-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-debsign-section_title">
                                Transforma la forma <br className="d-none d-sm-block" />
                                en la que comunicas <br className="d-none d-sm-block" />
                                los mensajes

                            </h4>
                            <p className="setps-debsign-section_parraf">
                                Utiliza componentes amigables
                                para el planeta
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-debsign-section_div">
                            <div className="setps-debsign-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-debsign-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={50} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-debsign-section_title">
                                Genera contenido dinámico  <br className="d-none d-sm-block" /> y atractivo para los clientes.
                            </h4>
                            <p className="setps-debsign-section_parraf">
                                Gana visibilidad en influye en decisiones de compra
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="setps-debsign-tabs relative">
                <div className={'setps-debsign-tabs_shape1'}>
                    <Image src={shape1.src} layout="fill" className={'left'} />
                </div>
                <Container>
                    <Row>
                        <Col className="setps-debsign-tabs_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                                <Row>
                                    <Col sm={{ span: 5 }} className="mt-5">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="1">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={step1.src} width={700}
                                                            height={500} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={step2.src} width={400}
                                                            height={450} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={step3.src} width={400}
                                                            height={550} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="4">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={step4.src} width={700}
                                                            height={800} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="5">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={step5.src} width={400}
                                                            height={600} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="6">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={step6.src} width={480}
                                                            height={400} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={7} className="relative">
                                        <span className="lineSteps-debsign"></span>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="1" className="setps-debsign-tabs_content-nav"><div className="numberStep">1</div> <div className="textStep">Planifica el contenido <br />
                                                    Programa las publicidades con hora  <br />
                                                    y fecha para su publicación.</div> </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="2" className="setps-debsign-tabs_content-nav"><div className="numberStep">2</div> <div className="textStep">Usa diferentes tipos de formatos <br />
                                                    Videos, imágenes, widgets, webs o redes sociales.
                                                </div></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="3" className="setps-debsign-tabs_content-nav"><div className="numberStep">3</div> <div className="textStep">Segmenta por locación<br />
                                                    Envía contenido por grupos de pantallas
                                                    y sucursales.</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="4" className="setps-debsign-tabs_content-nav"><div className="numberStep">4</div> <div className="textStep">Actualiza contenido en tiempo real<br />
                                                    Aplica cambios instantáneos de
                                                    forma simple.</div></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="5" className="setps-debsign-tabs_content-nav"><div className="numberStep">5</div> <div className="textStep">Monitoriza el rendimiento<br />
                                                    Obtén informes intuitivos en tiempo real. </div></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="6" className="setps-debsign-tabs_content-nav"><div className="numberStep" >6</div> <div className="textStep">Usa tantos templates como necesites<br />
                                                    Personaliza las publicidades con diferentes
                                                    elementos como necesites.</div></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                    {/* <Row className="setps-debsign-accordion_content d-block d-sm-none">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className="setps-debsign-accordion_content-nav">
                                <Accordion.Header >Citas Online</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-debsign-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="setps-debsign-accordion_content-nav">Gestión de filas</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-debsign-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className="setps-debsign-accordion_content-nav">Fila Vitual</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-debsign-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className="setps-debsign-accordion_content-nav">Cartelería digital</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-debsign-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className="setps-debsign-accordion_content-nav">Atención Virtual</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-debsign-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className="setps-debsign-accordion_content-nav">Enuestas</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-debsign-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header className="setps-debsign-accordion_content-nav">Preatendedor</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-debsign-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row> */}

                </Container>
            </Container>

        </>
    );
}