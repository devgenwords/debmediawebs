import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/debq/main.png'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import mainNoti from '../../asset/imgs/debq/main-noti.png'
import { useMediaQuery } from 'react-responsive'


export default function Header() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })

    return (
        <>
            <header>
                <Container fluid className="debq-home">
                    <div className={'image-container-mobile'}>
                        <Image src={mypic.src} layout="fill" className={'image'} />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="debq-home_shape3" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={mainNoti.src} className="debq-home_mainNoti" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="debq-home_shape1" />
                        <img src={shape2.src} className="debq-home_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="debq-home_title">
                                Mejora la eficiencia<br  className="d-none d-sm-block" />  y experiencia en tus<br  className="d-none d-sm-block" /> 
sucursales
                                </h1>
                                <p className="debq-home_parraf">
                                    Sistema de <b>gestión de turnos</b>
                                </p>
                                <button className="debq-home_demobutton">
                                    Solicita una demo
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center debq-home_text">
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