import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/videollamada/main.png'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import { useMediaQuery } from 'react-responsive'


export default function Header() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })

    return (
        <>
            <header>
                <Container fluid className="videocall-home">
                    <div className={'image-container-videocall'}>
                        <Image src={mypic.src} layout="fill" className={'image'} />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape3.src} className="videocall-home_shape3" />
                    </div>

                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="videocall-home_shape1" />
                        <img src={shape2.src} className="videocall-home_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="videocall-home_title">
                                Digitaliza la atención 
 <br className="d-none d-sm-block" />de tus clientes
                                </h1>
                                <p className="videocall-home_parraf">
                                Software para brindar <b>atención <br/>
por videollamada </b>
                                </p>
                                <button className="videocall-home_demobutton">
                                    Solicita una demo
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center videocall-home_text">
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