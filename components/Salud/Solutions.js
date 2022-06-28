import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check from '../../asset/imgs/banca/check.svg'
import logosbanca from '../../asset/imgs/banca/logos-banca.png'
import check_white from '../../asset/imgs/home/check-m.svg'
import fila_virtual from '../../asset/imgs/home/fila-virtual.png'
import virtual from '../../asset/imgs/banca/videollamada.png'
import { useMediaQuery } from 'react-responsive'


export default function Solutions() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })
    return (
        <>
            <Container className="solutions-banca-top">
                <Row>
                    <Col className="solutions-banca-section_maintitle">
                        <h3 className="text-center">
                            <b> Entrega a tus clientes la</b> <br />
                            atención que se merecen
                        </h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="solutions-banca-section">
                <Container>
                    <Row>
                        <Col sm={4} xs={4} className="solutions-banca-section_div">
                            <div className="solutions-banca-section_div-img  d-none d-sm-block">
                                <Image src={check.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="solutions-banca-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>

                            <h4 className="solutions-banca-section_title">
                                Integra los canales  <br className="d-none d-sm-block" /> de atención
                            </h4>
                            <p> y ofrece una atención omnicanal</p>
                        </Col>
                        <Col sm={4} xs={4} className="solutions-banca-section_div">
                            <div className="solutions-banca-section_div-img  d-none d-sm-block">
                                <Image src={check.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="solutions-banca-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="solutions-banca-section_title">
                                Optimiza los procesos
                            </h4>
                            <p>con datos y agiliza la atención</p>
                        </Col>
                        <Col sm={4} xs={4} className="solutions-banca-section_div">
                            <div className="solutions-banca-section_div-img  d-none d-sm-block">
                                <Image src={check.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="solutions-banca-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="solutions-banca-section_title">
                                Mejora los tiempos
                            </h4>
                            <p> de respuesta y agiliza <br />
                                la atención.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="solutions-banca-clients">
                <Row>
                    <Col xs="12" className="solutions-banca-section_maintitle">
                        <h3 className="text-center">
                            <b> Organizaciones líderes</b> confían <br />
                            en las soluciones de<b> Debmedia</b> <br />
                        </h3>
                    </Col>
                    <Col xs="12" className="d-flex justify-content-center">
                        <Image src={logosbanca.src} width={1200}
                            height={300} className={'img-fluid'} />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="solutions-banca-tabs">
                <Container>
                    <Row>
                        <Col className="solutions-banca-tabs_title">
                            <h2>
                                <b> Personaliza</b> cada punto de interacción <br />
                                y <b>ofrece una atención omnicanal</b>
                            </h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="solutions-banca-tabs_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="virtual">
                                <Row>
                                    <Col sm={4}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="virtual" className="solutions-banca-tabs_content-nav">Atención Virtual</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="chatbot" className="solutions-banca-tabs_content-nav">Chatbot de WhatsApp</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="preaten" className="solutions-banca-tabs_content-nav">Pre atendedor</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="citas" className="solutions-banca-tabs_content-nav">Citas</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="mobile" className="solutions-banca-tabs_content-nav">Fila virtual</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="carteleria" className="solutions-banca-tabs_content-nav">Cartelería</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="encu" className="solutions-banca-tabs_content-nav">Encuestas </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={8} className="solutions-banca-tabs_content-banca">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="virtual">
                                                <Row>
                                                    <Col xs="12" className="d-flex justify-content-center solutions-banca-tabs_content-img">
                                                        <Image src={virtual.src} width={520}
                                                            height={340} className={'img-fluid'} />
                                                    </Col>
                                                    <Col xs={{ span: 10, offset: 1 }} className="solutions-banca-tabs_content-text">
                                                        <p>
                                                            <b>Conecta a tus clientes con los ejecutivos por videollamada</b> para que no deban acercarse a una sucursal. Mantén el contacto humano y mejora los tiempos de atención sin descargar una APP adicional.
                                                        </p>
                                                        <button>
                                                            Conóce más
                                                        </button>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="chatbot">
                                                <Row>
                                                    <Col xs="12" className="d-flex justify-content-center solutions-banca-tabs_content-img">
                                                        <Image src={virtual.src} width={520}
                                                            height={340} className={'img-fluid'} />
                                                    </Col>
                                                    <Col xs={{ span: 10, offset: 1 }} className="solutions-banca-tabs_content-text">
                                                        <p>
                                                            <b>Conecta a tus clientes con los ejecutivos por videollamada</b> para que no deban acercarse a una sucursal. Mantén el contacto humano y mejora los tiempos de atención sin descargar una APP adicional.
                                                        </p>
                                                        <button>
                                                            Conóce más
                                                        </button>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="preaten">
                                                <Row>
                                                    <Col xs="12" className="d-flex justify-content-center solutions-banca-tabs_content-img">
                                                        <Image src={virtual.src} width={520}
                                                            height={340} className={'img-fluid'} />
                                                    </Col>
                                                    <Col xs={{ span: 10, offset: 1 }} className="solutions-banca-tabs_content-text">
                                                        <p>
                                                            <b>Conecta a tus clientes con los ejecutivos por videollamada</b> para que no deban acercarse a una sucursal. Mantén el contacto humano y mejora los tiempos de atención sin descargar una APP adicional.
                                                        </p>
                                                        <button>
                                                            Conóce más
                                                        </button>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="citas">
                                                <Row>
                                                    <Col xs="12" className="d-flex justify-content-center solutions-banca-tabs_content-img">
                                                        <Image src={virtual.src} width={520}
                                                            height={340} className={'img-fluid'} />
                                                    </Col>
                                                    <Col xs={{ span: 10, offset: 1 }} className="solutions-banca-tabs_content-text">
                                                        <p>
                                                            <b>Conecta a tus clientes con los ejecutivos por videollamada</b> para que no deban acercarse a una sucursal. Mantén el contacto humano y mejora los tiempos de atención sin descargar una APP adicional.
                                                        </p>
                                                        <button>
                                                            Conóce más
                                                        </button>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="mobile">
                                                <Row>
                                                    <Col xs="12" className="d-flex justify-content-center solutions-banca-tabs_content-img">
                                                        <Image src={virtual.src} width={520}
                                                            height={340} className={'img-fluid'} />
                                                    </Col>
                                                    <Col xs={{ span: 10, offset: 1 }} className="solutions-banca-tabs_content-text">
                                                        <p>
                                                            <b>Conecta a tus clientes con los ejecutivos por videollamada</b> para que no deban acercarse a una sucursal. Mantén el contacto humano y mejora los tiempos de atención sin descargar una APP adicional.
                                                        </p>
                                                        <button>
                                                            Conóce más
                                                        </button>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="carteleria">
                                                <Row>
                                                    <Col xs="12" className="d-flex justify-content-center solutions-banca-tabs_content-img">
                                                        <Image src={virtual.src} width={520}
                                                            height={340} className={'img-fluid'} />
                                                    </Col>
                                                    <Col xs={{ span: 10, offset: 1 }} className="solutions-banca-tabs_content-text">
                                                        <p>
                                                            <b>Conecta a tus clientes con los ejecutivos por videollamada</b> para que no deban acercarse a una sucursal. Mantén el contacto humano y mejora los tiempos de atención sin descargar una APP adicional.
                                                        </p>
                                                        <button>
                                                            Conóce más
                                                        </button>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="encu">
                                                <Row>
                                                    <Col xs="12" className="d-flex justify-content-center solutions-banca-tabs_content-img">
                                                        <Image src={virtual.src} width={520}
                                                            height={340} className={'img-fluid'} />
                                                    </Col>
                                                    <Col xs={{ span: 10, offset: 1 }} className="solutions-banca-tabs_content-text">
                                                        <p>
                                                            <b>Conecta a tus clientes con los ejecutivos por videollamada</b> para que no deban acercarse a una sucursal. Mantén el contacto humano y mejora los tiempos de atención sin descargar una APP adicional.
                                                        </p>
                                                        <button>
                                                            Conóce más
                                                        </button>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                    {/* <Row className="solutions-banca-accordion_content d-block d-sm-none">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className="solutions-banca-accordion_content-nav">
                                <Accordion.Header >Citas Online</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-banca-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="solutions-banca-accordion_content-nav">Gestión de filas</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-banca-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className="solutions-banca-accordion_content-nav">Fila Vitual</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-banca-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className="solutions-banca-accordion_content-nav">Cartelería digital</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-banca-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className="solutions-banca-accordion_content-nav">Atención Virtual</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-banca-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className="solutions-banca-accordion_content-nav">Enuestas</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-banca-tabs_content-title">
                                            <h2>
                                                <b>Anticípate a las necesidades</b> de tus clientes <br />
                                                y optimiza su flujo con nuestras soluciones
                                            </h2>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header className="solutions-banca-accordion_content-nav">Preatendedor</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} className="text-center">
                                            <Image src={fila_virtual.src} width={300}
                                                height={580} className={'img-fluid'} />
                                        </Col>
                                        <Col xs={6} className="solutions-banca-tabs_content-title">
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