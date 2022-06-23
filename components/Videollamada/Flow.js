import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import flow from '../../asset/imgs/videollamada/flow.png'


export default function Market() {
    return (
        <>
            <Container fluid className="flow-videocall-section relative p-0">
                <div className="flow-videocall-section_floatdiv">
                    <div className="flow-videocall-section_floatdiv-title">
                        <h2><b>Un flujo sencillo </b><br />
                            pensado para tus clientes</h2>
                    </div>
                    <div className="flow-videocall-section_floatdiv-div">
                        <h4><b>Mejora la satisfacción</b></h4>
                        <p>
                            Dependiendo del modelo de atención de tu organización los clientes pueden ser atendidos en tiempo real a través de una cita para el futuro, una fila virtual o un tótem ubicado dentro de tus sucursales y solicitar su videollamada desde tu web o APP.
                        </p>
                    </div>
                </div>
                <Container className="py-5">
                    <Row className="d-flex justify-content-center">
                        <Col xs={10}>
                            <img src={flow.src} className="img-fluid mt-5" alt="" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}