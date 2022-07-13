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
    const [selectedCat, setCat] = useState("all");

    useEffect(() => {
        if (selectedCat !== "all") {
            const result = Data.filter(logo => logo.category === selectedCat);
            setData(result);
        } else {
            const result = Data.filter(logo => logo.home === true);
            setData(result);
        }
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
                            <Row>
                                <Col sm={12}>
                                    <Nav variant="pills" className="flex-column">
                                        <Row>
                                            <Col className="p-0">
                                                <div className="clients-page_section banca">
                                                    <div className="clients">
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
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className="p-0">
                                                <div className="clients-page_section salud">
                                                    <div  className="clients">
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
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className="p-0">
                                                <div className="clients-page_section gobierno">
                                                    <div  className="clients">
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
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className="p-0">
                                                <div className="clients-page_section retail">
                                                    <div  className="clients">
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
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className="p-0">
                                                <div className="clients-page_section telcos">
                                                    <div  className="clients">
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
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className="p-0">
                                                <div className="clients-page_section utilities">
                                                    <div  className="clients">
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
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Nav>
                                </Col>
                                <Container>
                                    <Row>
                                            <>
                                                <Col sm={12} className="mt-5 text-center">
                                                    {dataJson.map((item, index) => (
                                                        <div className="contentLogo" key={index}>
                                                            <img src={`/brandsNew/${item.image.url}`} alt={item.image.url} className={'img-fluid'} />
                                                        </div>
                                                    ))}
                                                </Col>
                                            </>
                                    </Row>
                                </Container>

                            </Row>
                    </Col>
                </Row>

            </Container>

        </>
    );
}