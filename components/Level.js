import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import demo from '../asset/imgs/demo.svg'
import moduleimg from '../asset/imgs/module.svg'
import config from '../asset/imgs/config.svg'
import client from '../asset/imgs/clients.svg'
import demoG from '../asset/imgs/demoG.svg'
import moduleimgG from '../asset/imgs/moduleG.svg'
import configG from '../asset/imgs/configG.svg'
import clientG from '../asset/imgs/clientsG.svg'
import top from '../asset/imgs/border.svg'
import topG from '../asset/imgs/borderG.svg'
import Link from 'next/link'


export default function Level(props) {
    return (
        <>
            <Col className={props.color === "industriasColor" ? "d-none" : "d-block"}>
                <img src={top.src} className="img-fluid" alt="" />
            </Col>
            <Col className={props.color === "industriasColor" ? "d-block" : "d-none"}>
                <img src={topG.src} className="img-fluid" alt="" />
            </Col>
            <Container fluid className={props.color === "industriasColor" ? "level-section greyBk" : "level-section"}>

                <Container>
                    <Row>
                        <Col className={props.color === "industriasColor" ? "level-section_mainTitle mb-4 greyColor" : "level-section_mainTitle mb-4"}>
                            <h2>Lleva la experiencia de tus <br className="d-none d-sm-block" /> clientes al <b>siguiente nivel</b></h2>
                        </Col>
                    </Row>

                    <Row className="mt-4 level-section_relative">
                        <span className={props.color === "industriasColor" ? "level-section_line d-none d-sm-block greyColor" : "level-section_line d-none d-sm-block"}></span>

                        <Col xs={6} sm={3}>
                            <div className={props.color === "industriasColor" ? "text-center mb-3 d-none" : "text-center mb-3 d-block"}>
                                <Image src={moduleimg.src} width={130}
                                    height={90} />
                            </div>
                            <div className={props.color === "industriasColor" ? "d-block text-center mb-3" : "d-none text-center mb-3"}>
                                <Image src={moduleimgG.src} width={130}
                                    height={90} />
                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_step greyColor" : "level-section_step"}>
                                <div>
                                    1
                                </div>
                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_text greyColor" : "level-section_text"}>
                                <p>Solicita <br className="d-none d-sm-block" /> una <b>demo</b></p>

                            </div>
                        </Col>
                        <Col xs={6} sm={3}>
                            <div className={props.color === "industriasColor" ? "text-center mb-3 d-none" : "text-center mb-3 d-block"}>
                                <Image src={demo.src} width={130}
                                    height={90} />
                            </div>
                            <div className={props.color === "industriasColor" ? "d-block text-center mb-3" : "d-none text-center mb-3"}>
                                <Image src={demoG.src} width={130}
                                    height={90} />
                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_step greyColor" : "level-section_step"}>
                                <div>
                                    2
                                </div>

                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_text greyColor" : "level-section_text"}>
                                <p> <b> Selecciona</b>  <br className="d-none d-sm-block" /> los módulos
                                </p>
                            </div>
                        </Col>
                        <Col xs={6} sm={3}>
                            <div className={props.color === "industriasColor" ? "text-center mb-3 d-none" : "text-center mb-3 d-block"}>
                                <Image src={config.src} width={130}
                                    height={90} />
                            </div>
                            <div className={props.color === "industriasColor" ? "d-block text-center mb-3" : "d-none text-center mb-3"}>
                                <Image src={configG.src} width={130}
                                    height={90} />
                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_step greyColor" : "level-section_step"}>
                                <div>
                                    3
                                </div>

                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_text greyColor" : "level-section_text"}>
                                <p> <b> Configura</b>  <br className="d-none d-sm-block" /> el sistema
                                </p>

                            </div>
                        </Col>
                        <Col xs={6} sm={3}>
                            <div className={props.color === "industriasColor" ? "text-center mb-3 d-none" : "text-center mb-3 d-block"}>
                                <Image src={client.src} width={130}
                                    height={90} />
                            </div>
                            <div className={props.color === "industriasColor" ? "d-block text-center mb-3" : "d-none text-center mb-3"}>
                                <Image src={clientG.src} width={130}
                                    height={90} />
                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_step greyColor" : "level-section_step"}>
                                <div>
                                    4
                                </div>

                            </div>
                            <div className={props.color === "industriasColor" ? "level-section_text greyColor" : "level-section_text"}>
                                <p> Atiende  de   <br className="d-none d-sm-block" />
                                    <b>forma eficiente</b></p>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mt-4">
                            <Link href="/contacto">
                                <button className={props.color === "industriasColor" ? "level-section_demobutton greyColor" : "level-section_demobutton"}>
                                    Solicita una demo
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    );
}