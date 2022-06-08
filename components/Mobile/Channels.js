import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../../asset/imgs/mobile/mainbanner.png'
import aglo from '../../asset/imgs/mobile/aglo.svg'
import incerti from '../../asset/imgs/mobile/incerti.svg'
import cliente from '../../asset/imgs/mobile/cliente.svg'
import arrow from '../../asset/imgs/home/arrow.svg'
import shape2 from '../../asset/imgs/mobile/shapebanner.svg'


export default function Market() {
    return (
        <>
            <Container fluid className="channel-mobile-section relative">
            <div className={'channel-mobile-section_shape2'}>
                    <Image src={shape2.src} layout="fill" className={'right'} />
                </div>
                <Container>
                    <Row>
                        <Col sm="4" className="channel-mobile-section_maintitle">
                            <h3>
                            <b>Permite a tus clientes</b><br/> tomar su turno desde <br/>
                            <b>diferentes canales.</b>
                            </h3>
                        </Col>
                        <Col  sm="8">
                        <Image src={mypic.src} width={800} height={500}  />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}