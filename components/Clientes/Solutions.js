import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Tabs, Nav, Accordion } from "react-bootstrap";
import Data from '../../json/brandsSlide.json';
import banca from '../../asset/imgs/clients/banca.svg'
import salud from '../../asset/imgs/clients/salud.svg'
import gob from '../../asset/imgs/clients/gob.svg'
import retail from '../../asset/imgs/clients/retail.svg'
import telcos from '../../asset/imgs/clients/telcos.svg'
import utilities from '../../asset/imgs/clients/utilities.svg'


import Link from 'next/link'
import Image from 'next/image'


export default function Solutions(props) {
    const [dataJson, setData] = useState([]);
    const [selectedCat, setCat] = useState("banca");

    useEffect(() => {
        const result = Data.filter(logo => logo.category === selectedCat);
        setData(result);
    }, [selectedCat]);

    return (
        <>
            <Container fluid className="clients-header">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>
                                Lo hemos hecho con empresas líderes,
                                podemos hacerlo con la tuya también
                            </h1>
                            <p>
                                Más de 350 empresas en diferentes industrias eligen Debmedia
                                para gestionar la experiencia de sus clientes
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="clients-page mb-5">
                <Row>
                    <Col className="p-0">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="banca">
                            <Row>
                                <Col sm={12}>
                                    <Nav variant="pills" className="flex-column">
                                        <Row>
                                            <Col className="p-0">
                                                <Nav.Item className="clients-page_section banca">
                                                    <Nav.Link eventKey="banca" className="clients" onClick={() => setCat("banca")}>
                                                        <Row className="d-flex justify-content-center">
                                                            <Col xs={12}>
                                                                <div className="text-center">
                                                                    <Image src={banca.src} width={70}
                                                                        height={70} />
                                                                </div>
                                                            </Col>
                                                            <Col xs={12}>
                                                                <div className="clients-page_section-name text-center mt-2 white">
                                                                    Banca y Salud
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                            <Col className="p-0">
                                                <Nav.Item className="clients-page_section">
                                                    <Nav.Link eventKey="salud" className="clients"telcos onClick={() => setCat("salud")}>
                                                        <Row className="d-flex justify-content-center">
                                                            <Col xs={12}>
                                                                <div className="text-center">
                                                                    <Image src={salud.src} width={70}
                                                                        height={70} />
                                                                </div>
                                                            </Col>
                                                            <Col xs={12}>
                                                                <div className="clients-page_section-name text-center mt-2 white">
                                                                    Salud
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                            <Col className="p-0">
                                                <Nav.Item className="clients-page_section">
                                                    <Nav.Link eventKey="gobierno" className="clients"telcos onClick={() => setCat("gobierno")}>
                                                        <Row className="d-flex justify-content-center">
                                                            <Col xs={12}>
                                                                <div className="text-center">
                                                                    <Image src={gob.src} width={70}
                                                                        height={70} />
                                                                </div>
                                                            </Col>
                                                            <Col xs={12}>
                                                                <div className="clients-page_section-name text-center mt-2 white">
                                                                    Gobierno
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                            <Col className="p-0">
                                                <Nav.Item className="clients-page_section">
                                                    <Nav.Link eventKey="retail" className="clients"telcos onClick={() => setCat("retail")}>
                                                        <Row className="d-flex justify-content-center">
                                                            <Col xs={12}>
                                                                <div className="text-center">
                                                                    <Image src={retail.src} width={70}
                                                                        height={70} />
                                                                </div>
                                                            </Col>
                                                            <Col xs={12}>
                                                                <div className="clients-page_section-name text-center mt-2 white">
                                                                    Servicios
                                                                    y retail
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                            <Col className="p-0">
                                                <Nav.Item className="clients-page_section">
                                                    <Nav.Link eventKey="telcos" className="clients"telcos onClick={() => setCat("telcos")}>
                                                        <Row className="d-flex justify-content-center">
                                                            <Col xs={12}>
                                                                <div className="text-center">
                                                                    <Image src={telcos.src} width={70}
                                                                        height={70} />
                                                                </div>
                                                            </Col>
                                                            <Col xs={12}>
                                                                <div className="clients-page_section-name text-center mt-2 white">
                                                                    Telcos
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                            <Col className="p-0">
                                                <Nav.Item className="clients-page_section">
                                                    <Nav.Link eventKey="utilities" className="clients"telcos onClick={() => setCat("utilities")}>
                                                        <Row className="d-flex justify-content-center">
                                                            <Col xs={12}>
                                                                <div className="text-center">
                                                                    <Image src={utilities.src} width={70}
                                                                        height={70} />
                                                                </div>
                                                            </Col>
                                                            <Col xs={12}>
                                                                <div className="clients-page_section-name text-center mt-2 white">
                                                                    Utilities
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                        </Row>
                                    </Nav>
                                </Col>
                                <Container>
                                    <Row>
                                        <Col sm={12} className="mt-5">
                                            <Tab.Content className="d-flex">
                                                <div className="w-100">
                                                    <Tab.Pane eventKey={selectedCat} className="text-center ">



                                                        {dataJson.map((item, index) => (
                                                            <div className="contentLogo" key={index}>
                                                                <img src={`/brandsNew/${item.image.url}`} alt={item.image.url} className={'img-fluid'} />
                                                            </div>
                                                        ))}
                                                    </Tab.Pane>
                                                </div>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Container>

                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>

            </Container>

        </>
    );
}