import React, { useState, useEffect } from "react";
import { Row, Container, Col, Modal, Button } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/home/newVideoShape.svg'
import mypicxs from '../../asset/imgs/home/videoShape-xs.png'
import video from '../../asset/imgs/home/debq.svg'
import videoSm from '../../asset/imgs/home/debqSm.svg'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import Link from 'next/link'

export default function Header() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <header>
                <Container fluid className="header-home">
                    <div className={'image-container'} onClick={() => setModalShow(true)}>
                        <Image src={mypic.src} layout="fill" className={'image d-none d-sm-block'} />
                        <Image src={mypicxs.src} layout="fill" className={'image d-block d-sm-none'} />
                    </div>
                    {/* <div className="d-none d-sm-block">
                        <img src={shape3.src} className="header-home_shape3" />
                    </div> */}
                    <div className="d-block d-sm-none" onClick={() => setModalShow(true)}>
                        <img src={video.src} className="header-home_mainNoti" />
                    </div>
                     <div className="d-none d-sm-block header-home_viewVideo"  onClick={() => setModalShow(true)}>
                        <Image src={videoSm.src} layout="fill" className="header-home_mainNoti" />
                    </div>
                    <div className="d-none d-sm-block">
                        <img src={shape1.src} className="header-home_shape1" />
                        <img src={shape2.src} className="header-home_shape2" />
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <Container>
                        <Row>
                            <Col className="mainTitles">
                                <span className="header-home_product">Customer Journey Manager</span>
                                <h1 className="header-home_title">
                                    Haz más eficientes tus<br className="d-none d-sm-block" /> canales de atención
                                </h1>
                                <p className="header-home_parraf">
                                    Software para <b>gestionar la atención<br className="d-none d-sm-block" /> al cliente virtual</b> y presencial.
                                </p>
                                <Link href="/contacto">
                                    <button className="header-home_demobutton">
                                        Solicita un demo
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
            <Container className="d-flex justify-content-center header-home_text">
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

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/Kqr77nXvcXY?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </Modal.Body>
        </Modal>
    );
}