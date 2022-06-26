import React, { useState, useEffect } from "react";
import { Row, Container, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Image from 'next/image'

import flow from '../../asset/imgs/preatendedor/flow.png'
import { useMediaQuery } from 'react-responsive'


export default function Flow() {
    const isMobile = useMediaQuery({ query: '(max-width:899px)' })
    return (
        <>
            <Container fluid className="flow-preatendedor-section relative">
                <Container>
                    <Row>
                        <Col sm="12" className="wapp-preatendedor-section_maintitle">
                            <h3 className="text-center">
                                <b>o a través de Whatsapp direcciónalos</b> para que <br />
                                escojan canal de atención más adecuado
                            </h3>
                        </Col>
                        <Col sm={{ span: 10, offset: 1 }} className="text-center  mt-5">
                            {/* <img src={wapp.src} className="img-fluid mt-5" alt="" /> */}
                            <Image src={flow.src} width={980}
                                height={660} className={'img-fluid'} />
                        </Col>
                        
                    </Row>
                    
                </Container>
            </Container>

        </>
    );
}