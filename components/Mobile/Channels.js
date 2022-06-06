import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/home/videoShape.svg'
import aglo from '../../asset/imgs/mobile/aglo.svg'
import incerti from '../../asset/imgs/mobile/incerti.svg'
import cliente from '../../asset/imgs/mobile/cliente.svg'
import arrow from '../../asset/imgs/home/arrow.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="channel-mobile-section">
                <Container>
                    <Row>
                        <Col className="channel-mobile-section_maintitle text-center">
                            <h3>
                                Esperas innecesarias dentro de las sucursales
                            </h3>
                            <p>que generan una mala experiencia </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}