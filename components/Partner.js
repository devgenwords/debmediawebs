import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import shape from '../asset/imgs/partner-shape.svg'
import performance from '../asset/imgs/home/performance.svg'
import channel from '../asset/imgs/home/channels.svg'
import Link from 'next/link'


export default function Modern() {
    return (
        <>
            <Container className="partner-section">
                <img src={shape.src} className="partner-section_shape-left" />
                <Row>
                    <Col className="partner-section_div">
                        <Row>
                            <Col sm={9} xs={12}>
                                <h4 className="partner-section_title">
                                    ¿Quieres ser partner de Debmedia?
                                </h4>
                                <p className="partner-section_parraf">
                                    Conoce cómo generar nuevos negocios a través de nuestro programa.
                                </p>
                            </Col>
                            <Col sm={3} xs={12} className="d-flex justify-content-start justify-content-sm-center align-items-center">
                                <Link href="/partners">
                                    <button className="partner-section_btn">Quiero ser partner</button> 
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}