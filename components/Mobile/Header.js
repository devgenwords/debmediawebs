import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/mobile/main.png'
import mypicxs from '../../asset/imgs/mobile/main-mobile.png'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import Link from 'next/link'

export default function Header() {

    return (
        <>
            <header>
                <Container fluid className="mobile-home">
                    <div className={'image-container-mobile'}>
                    <Image src={mypic.src} layout="fill" className={'image d-none d-sm-block'} />
                        <Image src={mypicxs.src} layout="fill" className={'image d-block d-sm-none'} />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="mobile-home_shape3" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="mobile-home_shape1" />
                        <img src={shape2.src} className="mobile-home_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="mobile-home_title">
                                    Permite a tus clientes<br  className="d-none d-sm-block" /> seguir su turno desde<br  className="d-none d-sm-block" /> el celular
                                </h1>
                                <p className="mobile-home_parraf">
                                    Sistema de <b>fila virtual</b>
                                </p>
                                <Link href="/contacto">
                                <button className="mobile-home_demobutton">
                                    Solicita una demo
                                </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center mobile-home_text">
                <Row>
                    <Col>
                        <h3><b>Organizaciones líderes</b> ya gestionan la <br className="d-none d-sm-block"/>
                            experiencia de sus clientes con <b> Debmedia</b></h3>
                    </Col>
                </Row>
            </Container>
        </>
    );
}