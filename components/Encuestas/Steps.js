import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check_blue from '../../asset/imgs/home/check_blue.svg'
import check_white from '../../asset/imgs/home/check-m.svg'
import step1 from '../../asset/imgs/encuestas/step1.png'
import step2 from '../../asset/imgs/encuestas/step2.png'
import step3 from '../../asset/imgs/encuestas/step3.png'
import step4 from '../../asset/imgs/encuestas/step4.png'
import { useMediaQuery } from 'react-responsive'
import shape1 from '../../asset/imgs/mobile/shapeTabs.svg'


export default function Solutions() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })
    return (
        <>
            <Container className="setps-top">
                <Row>
                    <Col className="setps-section_encuestas_maintitle">
                        <h3 className="text-center">
                            <b>Recibe feedback de tus clientes</b><br/>
                            y aumenta su satisfacción<br/><br/> Aumenta la satisfacción de tus <br/>clientes al conocer su opinión
                        </h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="setps-section_encuestas">
                <Container>
                    <Row>
                        <Col sm={4} xs={4} className="setps-section_encuestas_div">
                            <div className="setps-section_encuestas_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_encuestas_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>

                            <h4 className="setps-section_encuestas_title">
                            Conoce la opinión real 

                            </h4>
                            <p className="setps-section_encuestas_parraf">
                            de lo que perciben tus clientes
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_encuestas_div">
                            <div className="setps-section_encuestas_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_encuestas_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_encuestas_title">
                            Decide mejor

                            </h4>
                            <p className="setps-section_encuestas_parraf">
                            con base en los datos
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_encuestas_div">
                            <div className="setps-section_encuestas_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_encuestas_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={50} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_encuestas_title">
                            Conoce el rendimiento
                            </h4>
                            <p className="setps-section_encuestas_parraf">
                            de tus equipos de trabajo
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="setps-tabs_encuestas relative">
                <div className={'setps-tabs_encuestas_shape1'}>
                    <Image src={shape1.src} layout="fill" className={'left'} />
                </div>
                <Container>
                    <Row>
                        <Col className="setps-tabs_encuestas_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                                <Row>
                                    <Col sm={{ span: 5, offset:1}}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="1">
                                                <Row>
                                                    <Col className="text-center mt-5">
                                                        <Image src={step1.src} width={600}
                                                            height={380} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={step2.src} width={620}
                                                            height={500} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3">
                                                <Row>
                                                    <Col className="text-center mt-5">
                                                        <Image src={step3.src} width={800}
                                                            height={660} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="4">
                                                <Row>
                                                    <Col className="text-center mt-5">
                                                        <Image src={step4.src} width={400}
                                                            height={260} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={6} className="relative">
                                        <span className="lineSteps-citas"></span>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="1" className="setps-tabs_encuestas_content-nav"><div className="numberStep">1</div> <div className="textStep">Puntuación</div> </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="2" className="setps-tabs_encuestas_content-nav"><div className="numberStep">2</div> <div className="textStep">Selección múltiple
                                                </div></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="3" className="setps-tabs_encuestas_content-nav"><div className="numberStep">3</div> <div className="textStep">Texto líbre
                                                    ser atendido.</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="4" className="setps-tabs_encuestas_content-nav mb-0"><div className="numberStep">4</div> <div className="textStep">Emoticones
                                                    ser atendido.</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                    {/* <Row className="setps-accordion_content d-block d-sm-none">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className="setps-accordion_content-nav">
                                <Accordion.Header >Citas Online</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_encuestas_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="setps-accordion_content-nav">Gestión de filas</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_encuestas_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className="setps-accordion_content-nav">Fila Vitual</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_encuestas_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className="setps-accordion_content-nav">Cartelería digital</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_encuestas_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className="setps-accordion_content-nav">Atención Virtual</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_encuestas_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className="setps-accordion_content-nav">Enuestas</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_encuestas_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header className="setps-accordion_content-nav">Preatendedor</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="setps-tabs_encuestas_content-title">
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