import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import nosotros from '../../asset/imgs/nosotros/group.png'
import map from '../../asset/imgs/nosotros/map.svg'
import Ratio from 'react-bootstrap/Ratio';



export default function SpecsIndus() {
    return (
        <>
            <Container fluid className="nosotros-section">
                <Container className="relative">
                    <Row>
                        <Col className="nosotros-section_maintitle">
                            <h3 className="text-center">
                                <b>  ¿Cómo llegamos </b>hasta aquí?
                            </h3>
                            <p>
                                En 2010, tres compañeros de universidad comenzaron a fabricar turneros LED y a venderlos online.
                            </p>
                            <p>
                                Al adquirir <b>clientes corporativos como Bancos, Aseguradoras y Empresas de Servicios</b> descubrieron sus puntos de dolor, dentro de ellos largas esperas y atención poco personalizada
                                e ineficiente. La experiencia del cliente en las sucursales tenía un largo camino por recorrer.

                            </p>
                            <p>
                                <b> Así nació Debmedia, una empresa de Software para gestionar la atención al cliente virtual
                                    y presencial.</b>
                            </p>
                        </Col>
                    </Row>

                </Container>
            </Container>
            <Container className="relative" fluid>
                <div className="nosotros-section_imggrupo">
                    <img src={nosotros.src} className="img-fluid" />
                </div>
                <Row>
                    <Col className="col-12 nosotros-section_blue" sm={{ span: 7, offset: 5 }}  >
                        <p>
                            Tiempo después y a raíz de que, para muchas empresas adaptarse a los nuevos hábitos de sus clientes con atención virtual y presencial era un reto,<b> Debmedia incorporó atención por videollamada y chatbot de WhatsApp</b> para que las empresas obtuvieran lo máximo de todos sus canales y ofrecieran una atención omnicanal.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="relative" fluid>
                <div className="nosotros-section_map">
                    <img src={map.src} className="img-fluid d-none d-sm-block" />
                </div>
                <Container>
                    <Row>

                        <Col className="col-sm-7 col-12 nosotros-section_act"  >
                            <h2>
                                En la <b>actualidad</b>
                            </h2>
                            <p>
                                Debmedia lleva más de 10 años mejorando la
                                atención al cliente de organizaciones de diversos sectores como bancos, aseguradoras, municipalidades, retailers y telecomunicadoras.

                            </p>
                            <p>
                                Tenemos presencia en <b>10 países de LATAM, más de 350 clientes y más de 50 partners</b> que trabajan para hacer llegar el software a nuevas compañías.
                            </p>
                            <p>
                                Además <b>contamos con diferentes soluciones</b> destinadas a mejorar la interacción entre las empresas y sus clientes.
                            </p>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    );
}