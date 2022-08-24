import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import Services from '../../json/Services.json';
import Link from 'next/link'


export default function SpecsIndus() {
    const [services, setservices] = useState([]);

    useEffect(() => {
        setservices(Services);
    }, []);
    return (
        <>
            <Container fluid>
                <Container className="relative my-5">
                    <Row>
                        {services.map((item, index) => (
                            <Col className="col-6 col-sm-3 mb-4" key={index}>
                                <div className="services-section_service d-flex justify-content-center">

                                    <div className="services-section_service-img">
                                        <img src={`/services/${item.image.url}`} className="servicesImg" />
                                    </div>
                                    <h4 className="services-section_service-title">{item.name}</h4>
                                    <Link href={item.url} passHref>
                                        <a rel="noopener noreferrer" className="services-section_service-link">
                                            Conoce más
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Link href="/">
                                <button className="citas-home_demobutton">
                                    Conocenos
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}