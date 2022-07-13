import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/home/videoShape.svg'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

export default function Header() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })

    return (
        <>
            <header>
                <Container fluid className="header-banca">
                    <div className="d-none d-sm-block">
                        <img src={shape2.src} className="header-banca_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <h1 className="header-banca_title">
                               <b> Mejora la experiencia<br/> de los clientes</b> dentro y  <br className="d-none d-sm-block" /> fuera de las sucursales
                                </h1>
                                <Link href="/contacto">
                                <button className="header-banca_demobutton">
                                    Solicita una demo
                                </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
        </>
    );
}