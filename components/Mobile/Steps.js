import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check_blue from '../../asset/imgs/home/check_blue.svg'
import check_white from '../../asset/imgs/home/check-m.svg'
import mobile1 from '../../asset/imgs/mobile/mobile1.png'
import mobile2 from '../../asset/imgs/mobile/mobile2.png'
import mobile3 from '../../asset/imgs/mobile/mobile3.png'
import mobile4 from '../../asset/imgs/mobile/mobile4.png'

import { useMediaQuery } from 'react-responsive'
import shape1 from '../../asset/imgs/mobile/shapeTabs.svg'

import Data from '../../json/setps-mobile.json';



export default function Solutions() {
    const [dataJson, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, []);
    return (
        <>
            <Container className="setps-top">
                <Row>
                    <Col className="setps-section_maintitle">
                        <h3 className="text-center">
                            <b>Permite a tus clientes aprovechar <br />
                                el tiempo</b> como mejor prefieran.
                        </h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="setps-section">
                <Container>
                    <Row>
                        <Col sm={4} xs={4} className="setps-section_div">
                            <div className="setps-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>

                            <h4 className="setps-section_title">
                                Controla la afluencia
                                <br className="d-none d-sm-block" />  en salas de espera
                            </h4>
                            <p className="setps-section_parraf">
                                Y reduce el flujo innecesario de clientes.

                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_div">
                            <div className="setps-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_title">
                                Permite a los clientes<br className="d-none d-sm-block" />
                                seguir el turno
                            </h4>
                            <p className="setps-section_parraf">
                                y ser llamados a través de SMS o WhatsApp.
                            </p>
                        </Col>
                        <Col sm={4} xs={4} className="setps-section_div">
                            <div className="setps-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={120}
                                    height={100} className={'img-fluid'} />
                            </div>
                            <div className="setps-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={50} className={'img-fluid'} />
                            </div>
                            <h4 className="setps-section_title">
                                Deja que aprovechen <br className="d-none d-sm-block" />
                                su  tiempo
                            </h4>
                            <p className="setps-section_parraf">
                                Y regresen justo a tiempo para ser atendidos.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="setps-tabs relative">
                <div className={'setps-tabs_shape1'}>
                    <Image src={shape1.src} layout="fill" className={'left'} />
                </div>
                <Container>
                    <Row>
                        <Col className="setps-tabs_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                                <Row>
                                    <Col sm={{ span: 5 }} >
                                        <Tab.Content>
                                            {dataJson.map((item, index) => (
                                                <Tab.Pane key={index} eventKey={item.key}>
                                                    <Row>
                                                        <Col className="text-center">
                                                            <Image src={`/mobiletabs/${item.image.url}`} width={item.image.width}
                                                                height={item.image.height} className={'img-fluid'} />

                                                        </Col>

                                                    </Row>
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={7} className="relative">

                                        <span className="lineSteps-mobile"></span>
                                        <Nav variant="pills" className="flex-column">
                                            {dataJson.map((item, index) => (
                                                <Nav.Item key={index}>
                                                    <Nav.Link eventKey={item.key} className="setps-tabs_content-nav"><div className="numberStep">{index + 1}</div> <div className="textStep">{item.text}</div></Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                        <button className="citas-home_demobutton">
                                            Solicita una demo
                                        </button>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>


                        {/* <Col className="setps-tabs_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                                <Row>
                                    <Col sm={{ span: 4, offset: 1 }}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="1">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={mobile1.src} width={220}
                                                            height={400} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={mobile2.src} width={210}
                                                            height={400} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={mobile3.src} width={245}
                                                            height={400} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="4">
                                                <Row>
                                                    <Col className="text-center">
                                                        <Image src={mobile4.src} width={600}
                                                            height={600} className={'img-fluid'} />
                                                    </Col>

                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={7} className="relative">
                                        <span className="lineSteps"></span>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="1" className="setps-tabs_content-nav"><div className="numberStep">1</div> <div className="textStep">El cliente elige el trámite</div> </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="2" className="setps-tabs_content-nav"><div className="numberStep">2</div> <div className="textStep">Selecciona la sucursal <br />y toma un turno desde tu web.
                                                </div></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="3" className="setps-tabs_content-nav"><div className="numberStep">3</div> <div className="textStep">Monitorea el avance de la fila<br /> desde su móvil.</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="4" className="setps-tabs_content-nav"><div className="numberStep">4</div> <div className="textStep">Se acerca a la sucursal<br /> en el momento en que le corresponde ser atendido.</div></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col> */}
                    </Row>

                    <Row className="setps-accordion_content d-block d-sm-none">
                        <Accordion defaultActiveKey="0">
                            {dataJson.map((item, index) => (
                                <Accordion.Item key={index} eventKey={item.key} className="setps-accordion_content-nav">
                                    <Accordion.Header >{index + 1} {item.text}</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col xs={12} className="text-center">
                                                <Image src={mobile1.src} width={300}
                                                    height={580} className={'img-fluid'} />
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
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
                                        <Col xs={6} className="setps-tabs_content-title">
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
                                        <Col xs={6} className="setps-tabs_content-title">
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
                                        <Col xs={6} className="setps-tabs_content-title">
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
                                        <Col xs={6} className="setps-tabs_content-title">
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
                                        <Col xs={6} className="setps-tabs_content-title">
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
                                        <Col xs={6} className="setps-tabs_content-title">
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
                                        <Col xs={6} className="setps-tabs_content-title">
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