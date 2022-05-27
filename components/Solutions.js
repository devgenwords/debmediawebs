import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check_blue from '../asset/imgs/home/check_blue.svg'
import check_white from '../asset/imgs/home/check-m.svg'
import fila_virtual from '../asset/imgs/home/fila-virtual.png'
import { useMediaQuery } from 'react-responsive'


export default function Solutions() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })
    return (
        <>
            <Container className="solutions-top">
                <Row>
                    <Col className="solutions-section_maintitle">
                        <h3 className="text-center">
                            Obtén lo máximo de todos tus <b>canales de atención</b>
                        </h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="solutions-section">
                <Container>
                    <Row>
                        <Col sm={4} xs={4} className="solutions-section_div">
                            <div className="solutions-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="solutions-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>

                            <h4 className="solutions-section_title">
                                Mejora la atención y la experiencia
                            </h4>
                        </Col>
                        <Col sm={4} xs={4} className="solutions-section_div">
                            <div className="solutions-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="solutions-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="solutions-section_title">
                                Direcciona a tus
                                clientes hacia el
                                canal más eficiente
                            </h4>
                        </Col>
                        <Col sm={4} xs={4} className="solutions-section_div">
                            <div className="solutions-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="solutions-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="solutions-section_title">
                                Diferénciate de
                                la competencia
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="solutions-tabs">
                <Container>
                    <Row>
                        <Col className="solutions-tabs_title">
                            <h2>
                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                y optimiza su flujo con nuestras soluciones
                            </h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="solutions-tabs_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="citas">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="citas" className="solutions-tabs_content-nav">Citas Online</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="debq" className="solutions-tabs_content-nav">Gestión de filas</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="mobile" className="solutions-tabs_content-nav">Fila Virtual</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="sign" className="solutions-tabs_content-nav">Cartelería digital</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="videocall" className="solutions-tabs_content-nav">Atención virtual</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="encuesta" className="solutions-tabs_content-nav">Encuestas</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="pre" className="solutions-tabs_content-nav">Preatendedor</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="citas">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={fila_virtual.src} width={300}
                                                            height={580} className={'img-fluid'} />
                                                    </Col>
                                                    <Col className="solutions-tabs_content-title">
                                                        <h2>
                                                            <b> Deja que tus clientes hagan fila desde su móvil</b> <br /> y reduce el tiempo de espera que permanecen dentro de tu sucursal.
                                                        </h2>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="debq">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={fila_virtual.src} width={300}
                                                            height={580} className={'img-fluid'} />
                                                    </Col>
                                                    <Col className="solutions-tabs_content-title">
                                                        <h2>
                                                            <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                            y optimiza su flujo con nuestras soluciones
                                                        </h2>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="mobile">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={fila_virtual.src} width={300}
                                                            height={580} className={'img-fluid'} />
                                                    </Col>
                                                    <Col className="solutions-tabs_content-title">
                                                        <h2>
                                                            <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                            y optimiza su flujo con nuestras soluciones
                                                        </h2>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="sign">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={fila_virtual.src} width={300}
                                                            height={580} className={'img-fluid'} />
                                                    </Col>
                                                    <Col className="solutions-tabs_content-title">
                                                        <h2>
                                                            <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                            y optimiza su flujo con nuestras soluciones
                                                        </h2>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="videocall">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={fila_virtual.src} width={300}
                                                            height={580} className={'img-fluid'} />
                                                    </Col>
                                                    <Col className="solutions-tabs_content-title">
                                                        <h2>
                                                            <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                            y optimiza su flujo con nuestras soluciones
                                                        </h2>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="encuesta">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={fila_virtual.src} width={300}
                                                            height={580} className={'img-fluid'} />
                                                    </Col>
                                                    <Col className="solutions-tabs_content-title">
                                                        <h2>
                                                            <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                            y optimiza su flujo con nuestras soluciones
                                                        </h2>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="pre">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={fila_virtual.src} width={300}
                                                            height={580} className={'img-fluid'} />
                                                    </Col>
                                                    <Col className="solutions-tabs_content-title">
                                                        <h2>
                                                            <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                            y optimiza su flujo con nuestras soluciones
                                                        </h2>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                    <Row className="solutions-accordion_content d-block d-sm-none">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className="solutions-accordion_content-nav">
                                <Accordion.Header >Citas Online</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="solutions-accordion_content-nav">Gestión de filas</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className="solutions-accordion_content-nav">Fila Vitual</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className="solutions-accordion_content-nav">Cartelería digital</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className="solutions-accordion_content-nav">Atención Virtual</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className="solutions-accordion_content-nav">Enuestas</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header className="solutions-accordion_content-nav">Preatendedor</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>

                </Container>
            </Container>

        </>
    );
}