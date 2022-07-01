import React, { useState, useEffect } from "react";
import { Row, Container, Col, Modal, Button } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/home/videoShape.svg'
import shape1 from '../../asset/imgs/home/headershape1.svg'
import shape2 from '../../asset/imgs/home/headershape2.svg'
import shape3 from '../../asset/imgs/home/headershape3.svg'


export default function Header() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <header>
                <Container fluid className="header-home">
                    <div className={'image-container'}>
                        <Image src={mypic.src} layout="fill" className={'image'} onClick={() => setModalShow(true)} />
                    </div>
                    {/* <div className="d-none d-sm-block">
                        <img src={shape3.src} className="header-home_shape3" />
                    </div> */}
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
                            <Col>
                                <h1 className="header-home_title">
                                    Haz más eficientes tus<br className="d-none d-sm-block" /> canales de atención
                                </h1>
                                <p className="header-home_parraf">
                                    Software para <b>gestionar la atención<br className="d-none d-sm-block" /> al cliente virtual</b> y presencial.
                                </p>
                                <button className="header-home_demobutton">
                                    Solicitá una demo
                                </button>
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
                <iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/Kqr77nXvcXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Modal.Body>
        </Modal>
    );
}