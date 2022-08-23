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
                <Container fluid className="header-nosotros">
                    {/* <div className="d-none d-sm-block">
                        <img src={shape2.src} className="header-nosotros_shape2" />
                    </div> */}
                    <Container>
                        <Row>
                            <Col className="mainTitles text-center">
                                <h1 className="header-nosotros_title">
                               Sobre <b> nosotros</b>
                                </h1>
                                <br/>
                                <p  className="header-nosotros_parraf">
                                Desde el 2010  <b>mejorando la <br className="d-none d-sm-block"/>
experiencia</b> de tus clientes.


                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
        </>
    );
}