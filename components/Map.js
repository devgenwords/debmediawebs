import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import map from '../asset/imgs/map.svg'


export default function Map() {
    return (
        <>
            <Container fluid className="map-section">
                <Container>
                    <Row>
                        <Col className="map-section_maintitle text-center">
                           <img src={map.src} className="img-fluid map-section-maxMap" alt="Mapa"/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}