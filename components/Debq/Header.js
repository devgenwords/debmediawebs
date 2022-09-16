import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/debq/main.png'
import mypicxs from '../../asset/imgs/debq/main-debq.png'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import mainNoti from '../../asset/imgs/debq/main-noti.png'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

export default function Header() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })

    return (
        <>
            <header>
        
        <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T4XJ42L');</script>
<!-- End Google Tag Manager -->
        
                <Container fluid className="debq-home">
                    <div className={'image-container-debq'}>
                    <Image src={mypic.src} layout="fill" className={'image d-none d-sm-block'} />
                        <Image src={mypicxs.src} layout="fill" className={'image d-block d-sm-none'} />
                    </div>
                    {/* <div className="d-none d-sm-block">
                        <img src={shape3.src} className="debq-home_shape3" />
                    </div> */}
                    <div className="d-none d-sm-block">
                        <img src={mainNoti.src} className="debq-home_mainNoti" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="debq-home_shape1" />
                        <img src={shape2.src} className="debq-home_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col className="mainTitles">

                                <h1 className="debq-home_title">
                                Haz más eficiente y  <br  className="d-none d-sm-block" />  ordenado el flujo de <br  className="d-none d-sm-block" /> 
                                atención en <br  className="d-none d-sm-block" /> tus sucursales
                                </h1>
                                <p className="debq-home_parraf">
                                    Sistema de <b>gestión de colas</b>
                                </p>
                                <Link href="/contacto">
                                <button className="debq-home_demobutton">
                                    Solicita una demo
                                </button>
                                </Link>
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
