import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import check_blue from '../../asset/imgs/home/check_blue.svg'
import check_white from '../../asset/imgs/home/check-m.svg'
import fila_virtual from '../../asset/imgs/home/fila-virtual.png'
import Data from '../../json/solutions-home.json';
import Link from 'next/link'


export default function Solutions() {

    const [dataJson, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, []);

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
                                <Image src={check_blue.src} width={110}
                                    height={90} className={'img-fluid'} />
                            </div>
                            <div className="solutions-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>

                            <h4 className="solutions-section_title">
                                Mejora la atención <br className="d-none d-sm-block" /> y la experiencia
                            </h4>
                        </Col>
                        <Col sm={4} xs={4} className="solutions-section_div">
                            <div className="solutions-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={110}
                                    height={90} className={'img-fluid'} />
                            </div>
                            <div className="solutions-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="solutions-section_title">
                            Aumenta la productividad<br/> de tus equipos
                            </h4>
                        </Col>
                        <Col sm={4} xs={4} className="solutions-section_div">
                            <div className="solutions-section_div-img  d-none d-sm-block">
                                <Image src={check_blue.src} width={110}
                                    height={90} className={'img-fluid'} />
                            </div>
                            <div className="solutions-section_div-img  d-block d-sm-none">
                                <Image src={check_white.src} width={60}
                                    height={60} className={'img-fluid'} />
                            </div>
                            <h4 className="solutions-section_title">
                                Diferénciate de  <br className="d-none d-sm-block" />
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
                                <b>Anticípate a las necesidades</b> y optimiza el <br />flujo de atención de tus clientes
                            </h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="solutions-tabs_content d-none d-sm-block">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="citas">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            {dataJson.map((item, index) => (
                                                <Nav.Item key={index}>
                                                    <Nav.Link eventKey={item.key} className="solutions-tabs_content-nav">{item.title}</Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            {dataJson.map((item, index) => (
                                                <Tab.Pane key={index} eventKey={item.key}>
                                                    <Row>
                                                        <Col className="text-center">
                                                            <Image src={`/hometabs/${item.image.url}`} width={item.image.width}
                                                                height={item.image.height} className={'img-fluid'} />
                                                        </Col>
                                                        <Col className="solutions-tabs_content-title">
                                                            <h2>
                                                                <b>{item.main}</b>{item.secu}
                                                            </h2>
                                                            <Link href={item.url}>
                                                                <button className="header-home_demobutton">
                                                                    Ver más
                                                                </button>
                                                            </Link>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                    <Row className="solutions-accordion_content d-block d-sm-none">
                        <Accordion defaultActiveKey="0">
                            {dataJson.map((item, index) => (
                                <Accordion.Item key={index} eventKey={item.key} className="solutions-accordion_content-nav">
                                    <Accordion.Header >{item.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col sm={item.sm} xs={item.xs} className="text-center">
                                                <Image src={`/hometabs/${item.image.url}`} width={item.image.width}
                                                    height={item.image.height} className={'img-fluid'} />
                                            </Col>
                                            <Col  sm={item.sm} xs={item.xs} className="solutions-tabs_content-title">
                                                <h2>
                                                    <b>{item.main}</b>{item.secu}
                                                </h2>
                                                <Link href={item.url}>
                                                    <button className="header-home_demobutton">
                                                        Ver más
                                                    </button>
                                                </Link>
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