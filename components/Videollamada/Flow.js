import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import flow from '../../asset/imgs/videollamada/flow.png'


export default function Market() {
    return (
        <>
            <Container fluid className="flow-videocall-section relative">
            <Container>
                    <Row>
                    <img src={flow.src} className="img-fluid" alt="" />

                        </Row>
                        </Container>
            </Container>
        </>
    );
}