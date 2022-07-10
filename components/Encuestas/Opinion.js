import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/encuestas/img.png'
import imgxs from '../../asset/imgs/encuestas/img-xs.png'



export default function Market() {
    return (
        <>
            <Container fluid className="opinion-encuestas-section relative d-none d-sm-none d-xl-block">
                <div className="opinion-encuestas-section_img">
                    <img src={mypic.src} className="img-fluid" />
                </div>

                <Container>
                    <Row className="d-flex ">
                        <Col sm="5" xs="12" className="opinion-encuestas-section_maintitle">
                            <h3>
                                Un sistema desarrollado <br />
                                <b> para conocer la opinión </b><br />
                                a través de
                            </h3>
                        </Col>
                    </Row>
                </Container>
                <div className="opinion-encuestas-section_div">
                    <h3>
                        Que <b>permite asociar el resultado</b> de cada encuesta<br /> <b>al usuario y proceso <br />
                            de atención.</b>
                    </h3>
                </div>
            </Container>
            <Container className="opinion-encuestas-section relative d-block d-sm-block d-md-none d-xl-none">
                <Row>
                    <Col className="p-0">
                        <img src={imgxs.src} className="w-100" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}