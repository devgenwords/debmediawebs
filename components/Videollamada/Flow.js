import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'
import flow from '../../asset/imgs/videollamada/flow.png'
import totem from '../../asset/imgs/videollamada/totem.png'
import sistema from '../../asset/imgs/videollamada/sistema.png'
import sistematotemmobie from '../../asset/imgs/videollamada/totemmobile.jpg'

import Data from '../../json/flow-videocall.json';



export default function Market() {

    const [dataJson, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, []);

    return (
        <>
            <Container fluid className="flow-videocall-section relative p-0">
                <Container>
                    <Col>
                        <div className="flow-videocall-section_floatdiv-title text-center">
                            <h2><b>Un flujo sencillo pensado para distintos<br /> modelos de atención en tu organización. </b>
                            </h2>
                        </div>
                    </Col>
                </Container>
                <div className="flow-videocall-section_floatdiv">
                    <div className="flow-videocall-section_floatdiv-div">
                        <h4>Tus clientes pueden tomar una cita
                            o un turno desde tu web para <b>conectarse con un representante
                                por videollamada.</b></h4>

                    </div>
                </div>
                <Container className="py-5 d-none d-sm-block">
                    <Row className="d-flex justify-content-center">
                        <Col xl={11} sm={10} xs={10}>
                            <img src={flow.src} className="img-fluid mt-2" alt="" />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container>
                <Row className="setps-accordion_content intern1 d-block d-sm-none">
                    <Accordion defaultActiveKey="0">
                        {dataJson.map((item, index) => (
                            <Accordion.Item key={index} eventKey={item.key} className="setps-accordion_content-nav">
                                <Accordion.Header className="inter1_button" > <div className="inter1_button-step">{index + 1}</div> {item.text}</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={12} className="text-center">as
                                            <Image src={`/videocalltabs/${item.image.url}`} width={300}
                                                height={760} className={'img-fluid'} />
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Row>
            </Container>
            <Container fluid className="relative d-none d-sm-block">
                <Row className="d-flex justify-content-end">
                    <div className="totem p-0">
                        <img src={totem.src} className="img-fluid" alt="" />
                    </div>
                    <div className="greyBlock">
                        <div className="greyBlock_text">
                            <h3>También puedes utilizar el sistema dentro de tus sucursales</h3>
                            <p><b> Permite a tus clientes conectarse a la videollamada con un representante desde un kiosko</b> para disminuir el tiempo dentro de tus sucursales.

                            </p>
                        </div>
                    </div>

                </Row>
            </Container>
            <Container fluid className="relative d-none d-sm-block mb-5">
                <div className="floatDiv text-center">
                    <h4>Aprovecha tus <br />
                        recursos al máximo.
                    </h4>
                    <p>
                        Permite a tus colaboradores atender a los clientes desde cualquier lugar.
                    </p>

                </div>
                <Row>
                    <Col xs={6} className="p-0 mb-5">
                        <img src={sistema.src} className="img-fluid mt-5" alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className=" d-block d-sm-none">
                <Row>
                    <Col className="p-0">
                        <img src={sistematotemmobie.src} className="img-fluid w-100 mt-5" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}