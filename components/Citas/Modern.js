import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import spec1 from '../../asset/imgs/citas/spec1.svg'
import spec2 from '../../asset/imgs/citas/spec2.svg'
import spec3 from '../../asset/imgs/citas/spec3.svg'
import spec4 from '../../asset/imgs/citas/spec4.svg'
import spec5 from '../../asset/imgs/citas/spec5.svg'


export default function Modern() {
    return (
        <>
            <Container fluid className="specs-section_citas">
                <Container>
                    <Row className=" d-flex justify-content-center">
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                    Múltiples funcionalidades para optimizar
                                    modelos de atención
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                    <Image src={spec1.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_citas_title">
                                            Algoritmos de <br />
                                            llamado y priorización
                                        </h4>
                                        <p className="specs-section_citas_parraf">
                                            Por orden de llegada, prioridad <br /> por trámite, cliente o la <br /> combinación de ambos

                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                    <Image src={spec2.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_citas_title">
                                            Inteligencia Artificial
                                        </h4>
                                        <p className="specs-section_citas_parraf">
                                            para que de forma automática
                                            se establezcan modelos de atención dinámicos

                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                    <Image src={spec3.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_citas_title">
                                            Visualización de métricas y <br />exportación de reportes
                                        </h4>
                                        <p className="specs-section_citas_parraf">
                                            Para medir eficiencia y comparar estadísticas entre usuarios, sucursales, trámites, etc.

                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                    <Image src={spec4.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_citas_title">
                                            Integraciones con <br />
                                            otros sistemas
                                        </h4>
                                        <p className="specs-section_citas_parraf">
                                            Cuenta con API documentada
                                            o integraciones de sistemas preexistentes.

                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4}>
                            <Row>
                                <Col xs={12} className="specs-section_citas_div-img d-flex justify-content-center">
                                    <Image src={spec5.src} width={200}
                                        height={250} />

                                </Col>
                                <Col xs={12} className="specs-section_citas_div-text text-center d-flex justify-content-center my-3">
                                    <div>
                                        <h4 className="specs-section_citas_title">
                                            Herramientas BI <br />
                                            para visualizar datos
                                        </h4>
                                        <p className="specs-section_citas_parraf">
                                            Para desarrollar estrategias y herramientas que mejoren el
                                            proceso de toma de decisiones.

                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    );
}