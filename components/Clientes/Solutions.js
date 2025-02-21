import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Tabs, Nav, Accordion } from "react-bootstrap";
import Data from '../../json/brandsSlide.json';
import banca from '../../asset/imgs/clients/banca.svg'
import salud from '../../asset/imgs/clients/salud.svg'
import gob from '../../asset/imgs/clients/gob.svg'
import retail from '../../asset/imgs/clients/retail.svg'
import telcos from '../../asset/imgs/clients/telcos.svg'
import utilities from '../../asset/imgs/clients/utilities.svg'
import bancaxs from '../../asset/imgs/banca.svg'
import saludxs from '../../asset/imgs/salud.svg'
import servixs from '../../asset/imgs/servicios.svg'
import gobxs from '../../asset/imgs/gob.svg'
import telcosxs from '../../asset/imgs/telcos.svg'
import utixs from '../../asset/imgs/uti.svg'

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
                                Más de 350 empresas en diferentes industrias eligen Debmedia <br className="d-none d-sm-block" />
                                para gestionar la experiencia de sus clientes
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="clients-page mb-5 d-none d-sm-block">
                <Row>
                    <Col className="p-0">
                        <Row>
                            <Col sm={12} className="min230">
                                <Nav variant="pills" className="flex-column">
                                    <Row>
                                        <Col className="p-0">
                                            <Link href="/bancosyfinanzas">
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
                                                                    Banca y Seguros
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col className="p-0">
                                            <Link href="/salud">
                                                <div className="clients-page_section salud">
                                                    <div className="clients">
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
                                            </Link>
                                        </Col>
                                        <Col className="p-0">
                                            <Link href="/gobierno">
                                                <div className="clients-page_section gobierno">
                                                    <div className="clients">
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
                                            </Link>
                                        </Col>
                                        <Col className="p-0">
                                            <Link href="/retail">
                                                <div className="clients-page_section retail">
                                                    <div className="clients">
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
                                            </Link>
                                        </Col>
                                        <Col className="p-0">
                                            <Link href="/telcos">
                                                <div className="clients-page_section telcos">
                                                    <div className="clients">
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
                                            </Link>
                                        </Col>
                                        <Col className="p-0">
                                            <Link href="/utilities">
                                                <div className="clients-page_section utilities">
                                                    <div className="clients">
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
                                            </Link>
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
            <Container className="d-block d-sm-none mb-5">
                <Row>
                    <Col sm={12} className="mt-5 text-center">
                        {dataJson.map((item, index) => (
                            <div className="contentLogo" key={index}>
                                <img src={`/brandsNew/${item.image.url}`} alt={item.image.url} className={'img-fluid'} />
                            </div>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Link href="/bancosyfinanzas">
                        <Col sm={4} offset={1} xs={12} className="industries-section_divs-indu industries-section_divs-banca h130">
                            <div>
                                <Image src={bancaxs.src} width={50}
                                    height={50} className={'img-fluid'} />
                            </div>

                            <h4>
                                Banca y Seguros
                            </h4>

                        </Col>
                    </Link>
                    <Link href="/salud">
                        <Col sm={4} xs={12} className="industries-section_divs-indu industries-section_divs-salud h130">
                            <Image src={saludxs.src} width={50}
                                height={50} className={'img-fluid'} />
                            <h4>
                                Salud
                            </h4>

                        </Col>
                    </Link>
                    <Link href="/gobierno">
                        <Col sm={4} xs={12} className="industries-section_divs-indu industries-section_divs-gob h130">
                            <Image src={gobxs.src} width={50}
                                height={50} className={'img-fluid'} />
                            <h4>
                                Gobierno
                            </h4>

                        </Col>
                    </Link>
                    <Link href="/retail">
                        <Col sm={4} xs={12} className="industries-section_divs-indu industries-section_divs-servi h130">
                            <Image src={servixs.src} width={50}
                                height={50} className={'img-fluid'} />
                            <h4>
                                Retail y servicios
                            </h4>

                        </Col>
                    </Link>
                    <Link href="/telcos">
                        <Col sm={4} xs={12} className="industries-section_divs-indu industries-section_divs-teleco h130">
                            <Image src={telcosxs.src} width={50}
                                height={50} className={'img-fluid'} />
                            <h4>
                                Telecomunicaciones
                            </h4>

                        </Col>
                    </Link>
                    <Link href="/utilities">
                        <Col sm={4} xs={12} className="industries-section_divs-indu industries-section_divs-uti h130">
                            <Image src={utixs.src} width={50}
                                height={50} className={'img-fluid'} />
                            <h4>
                                Utilities
                            </h4>

                        </Col>
                    </Link>
                </Row>
            </Container>

        </>
    );
}