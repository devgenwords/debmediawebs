import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'


export default function Modern() {
    return (
        <>
            <Container fluid className="contact-section my-5">
                <Container>
                    <Row>
                        <Col className="contact-section_mainTitle text-center mb-4">
                            <h2>¡Contáctate con nuestro equipo y mejora la experiencia de tus clientes!</h2>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    );
}