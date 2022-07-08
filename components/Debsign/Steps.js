import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check_blue from '../../asset/imgs/home/check_blue.svg'
import check_white from '../../asset/imgs/home/check-m.svg'
import step1 from '../../asset/imgs/debsign/step1.png'
import step2 from '../../asset/imgs/debsign/step2.png'
import step3 from '../../asset/imgs/debsign/step3.png'
import step4 from '../../asset/imgs/debsign/step4.png'
import step5 from '../../asset/imgs/debsign/step5.png'
import step6 from '../../asset/imgs/debsign/step6.png'
import shape1 from '../../asset/imgs/mobile/shapeTabs.svg'

import Data from '../../json/setps-debsign.json';



export default function Solutions() {

    const [dataJson, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, []);


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
            <Container fluid className="setps-debsign-section mb-2 mb-sm-5">
                <Container className="mb-5">
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
            <Container fluid className="setps-debsign-tabs relative mb-2 mb-sm-5">
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
                                            {dataJson.map((item, index) => (
                                                <Tab.Pane key={index} eventKey={item.key}>
                                                    <Row>
                                                        <Col className="text-center mt-5">
                                                            <Image src={`/debsigntabs/${item.image.url}`} width={item.image.width}
                                                                height={item.image.height} className={'img-fluid'} />

                                                        </Col>

                                                    </Row>
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={7} className="relative">
                                        <h3 className="text-left mb-4">
                                            <b>Define el Customer Journey y  </b> <br />mejora la atención.
                                        </h3>
                                        <span className="lineSteps-debsign"></span>
                                        <Nav variant="pills" className="flex-column">
                                            {dataJson.map((item, index) => (
                                                <Nav.Item key={index}>
                                                    <Nav.Link eventKey={item.key} className="setps-debsign-tabs_content-nav"><div className="numberStep">{index + 1}</div> <div className="textStep">{item.text}</div></Nav.Link>
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
                    </Row>
                    <Row className="setps-accordion_content intern2 d-block d-sm-none">
                        <Accordion defaultActiveKey="0">
                            {dataJson.map((item, index) => (
                                <Accordion.Item key={index} eventKey={item.key} className="setps-accordion_content-nav">
                                    <Accordion.Header className="inter2_button"><div className="inter2_button-step">{index + 1}</div> <div className="inter2_button-text">{item.text}</div></Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col xs={12} className="text-center">
                                                <Image src={step1.src} width={300}
                                                    height={580} className={'img-fluid'} />
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Row>

                </Container>
            </Container>
            <Container className="mb-4">
                <Row>

                </Row>
            </Container>
        </>
    );
}