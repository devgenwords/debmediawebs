import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/citas/main.png'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import mainNoti from '../../asset/imgs/citas/main-noti.svg'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

export default function Header() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })

    return (
        <>
            <header>
                <Container fluid className="citas-home">
                    <div className={'image-container-citas'}>
                        <Image src={mypic.src} layout="fill" className={'image'} />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="citas-home_shape3" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={mainNoti.src} className="citas-home_mainNoti" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="citas-home_shape1" />
                        <img src={shape2.src} className="citas-home_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="citas-home_title">
                                Ordena el flujo<br className="d-none d-sm-block" /> de clientes<br className="d-none d-sm-block" /> que llegan a <br className="d-none d-sm-block d-xxl-none" />las sucursales
                                </h1>
                                <p className="citas-home_parraf">
                                 <b>Software de citas </b>para empresas con <br/> múltiples trámites y tipos de atención
                                </p>
                                <Link href="/contacto">
                                <button className="citas-home_demobutton">
                                    Solicita una demo
                                </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center citas-home_text">
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