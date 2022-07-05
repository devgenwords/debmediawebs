import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/preatendedor/main.png'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import { useMediaQuery } from 'react-responsive'


export default function Header() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })

    return (
        <>
            <header>
                <Container fluid className="preatendedor-home">
                    <div className={'image-container-preatendedor'}>
                        <Image src={mypic.src} layout="fill" className={'image'} />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="preatendedor-home_shape3" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="preatendedor-home_shape1" />
                        <img src={shape2.src} className="preatendedor-home_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="preatendedor-home_title">
                                Agiliza la atención desde <br className="d-none d-sm-block" /> WhatsApp  o
un portal web
                                </h1>
                                {/* <p className="preatendedor-home_parraf">
                                 <b>Software de citas </b>para empresas con <br/> múltiples trámites y tipos de atención
                                </p> */}
                                <button className="preatendedor-home_demobutton">
                                    Solicita una demo
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center preatendedor-home_text">
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