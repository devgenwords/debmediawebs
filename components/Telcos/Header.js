import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import shape2 from '../../asset/imgs/home/headershape2.svg'


export default function Header() {

    return (
        <>
            <header>
                <Container fluid className="header-telcos">
                    <div className="d-none d-sm-block">
                        <img src={shape2.src} className="header-telcos_shape2" />
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="header-telcos_title">
                               <b>Mejora la experiencia<br/> de los clientes</b> dentro y <br/>fuera de las sucursales
                                </h1>

                                <button className="header-telcos_demobutton">
                                    Solicita una demo
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </header>
        </>
    );
}