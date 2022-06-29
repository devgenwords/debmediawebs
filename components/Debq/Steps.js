import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check_blue from '../../asset/imgs/home/check_blue.svg'
import check_white from '../../asset/imgs/home/check-m.svg'
import fila_virtual from '../../asset/imgs/home/fila-virtual.png'
import step1 from '../../asset/imgs/debq/step1.png'
import step2 from '../../asset/imgs/debq/step2.png'

import Data from '../../json/setps-debq.json';


import { useMediaQuery } from 'react-responsive'
import shape1 from '../../asset/imgs/debq/bk_steps.jpg'


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
                            <b>Mejora la atención</b> <br />y obtén el máximo de tus equipos de trabajo
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
                                Aprovecha tus recursos
                                <br className="d-none d-sm-block" /> de forma eficiente
                            </h4>
                            <p className="setps-section_parraf">
                                Para ofrecer un servicio ágil
                                y personalizado
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
                                Entrega una experiencia  <br className="d-none d-sm-block" />
                                sin roces a tus clientes
                            </h4>
                            <p className="setps-section_parraf">
                                Con menos espera y más simple.
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
                                Mide indicadores clave  <br className="d-none d-sm-block" />
                                de la atención al cliente
                            </h4>
                            <p className="setps-section_parraf">
                                Adopta mejores prácticas y

                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="setps-tabs_debq relative">
                <div className={'setps-tabs_debq_shape1-debq'}>
                    <Image src={shape1.src} layout="fill" className={'left'} />
                </div>
                <Container>
                    <Row>
                        <Col className="setps-tabs_debq_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                                <Row>
                                    <Col sm={{ span: 5 }} className="mt-5">
                                        <Tab.Content>
                                            {dataJson.map((item, index) => (
                                                <Tab.Pane key={index} eventKey={item.key}>
                                                    <Row>
                                                        <Col className="text-center">
                                                            <Image src={`/debqtabs/${item.image.url}`} width={item.image.width}
                                                                height={item.image.height} className={'img-fluid'} />
                                                                
                                                        </Col>

                                                    </Row>
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </Col>
                                    <Col sm={7} className="relative">
                                        <h3 className="text-left mb-4">
                                            <b>Define el Customer journey </b> <br />y mejora el proceso.
                                        </h3>
                                        <span className="lineSteps-debq"></span>
                                        <Nav variant="pills" className="flex-column">
                                            {dataJson.map((item, index) => (
                                                <Nav.Item key={index}>
                                                    <Nav.Link eventKey={item.key} className="setps-tabs_debq_content-nav"><div className="numberStep">{index + 1}</div> <div className="textStep">{item.text}</div></Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                        <button className="citas-home_demobutton">
                                            Solicitá una demo
                                        </button>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                    <Row className="setps-accordion_content d-block d-sm-none">
                        <Accordion defaultActiveKey="0">
                            {dataJson.map((item, index) => (
                                <Accordion.Item key={index} eventKey={item.key} className="setps-accordion_content-nav">
                                    <Accordion.Header >{index + 1} {item.text}</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col xs={12} className="text-center">
                                                <Image src={fila_virtual.src} width={300}
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

        </>
    );
}