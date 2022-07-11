import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Tabs, Nav, Accordion } from "react-bootstrap";
import Data from '../../json/brandsSlide.json';
import Link from 'next/link'
import Image from 'next/image'


export default function Solutions(props) {
    const [dataJson, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, []);

    return (
        <>
            <Container fluid className="clients-header">
                <Container>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="clients-page mb-5">
                <Row>
                    <Col className="p-0">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={12}>
                                    <Nav variant="pills" className="flex-column">
                                        <Row>
                                            <Col>
                                                <Nav.Item >
                                                    <Nav.Link eventKey="first" href="#">
                                                        Tab 1
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                            <Col>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second" href="#">
                                                        Tab 2
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                        </Row>
                                    </Nav>
                                </Col>
                                <Col sm={12}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            1
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            2
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>

            </Container>

        </>
    );
}