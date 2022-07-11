import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/encuestas/main.png'
import mypicxs from '../../asset/imgs/encuestas/main-encuestas.png'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import mainNoti from '../../asset/imgs/citas/main-noti.svg'
import Link from 'next/link'

export default function Header() {

    return (
        <>
            <header>
                <Container fluid className="encuestas-home">
                    <div className={'image-container-encuestas'}>
                    <Image src={mypic.src} layout="fill" className={'image d-none d-sm-block'} />
                        <Image src={mypicxs.src} layout="fill" className={'image d-block d-sm-none'} />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="encuestas-home_shape3" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="encuestas-home_shape1" />
                        <img src={shape2.src} className="encuestas-home_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="encuestas-home_title">
                                    Conoce la opinión  <br className="d-none d-sm-block" />
                                    de tus clientes y  <br className="d-none d-sm-block" />
                                    el rendimiento  <br className="d-none d-sm-block" />
                                    del equipo
                                </h1>
                                <p className="encuestas-home_parraf">
                                    Sistema de  <b>encuestas automatizas</b>  <br />  dentro del flujo de atención 
                                </p>
                                <Link href="/contacto">
                                <button className="encuestas-home_demobutton">
                                    Solicita una demo
                                </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center encuestas-home_text">
                <Row>
                    <Col>
                        <h3><b>Organizaciones líderes</b> ya gestionan la <br className="d-none d-sm-block" />
                            experiencia de sus clientes con <b> Debmedia</b></h3>
                    </Col>
                </Row>
            </Container>
        </>
    );
}