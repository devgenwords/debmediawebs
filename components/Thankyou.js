import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from 'next/image'
import woman from '../asset/imgs/gracias-woman.svg'
import womanxs from '../asset/imgs/gracias-womanxs.svg'
import shape2 from '../asset/imgs/contact/right.svg'
import HubspotForm from 'react-hubspot-form'
import Link from 'next/link'


export default function Thankyou() {
    return (
        <>
            <Container fluid className="gracias-section py-5">
                <div className={'gracias-section-woman'}>
                    <Image src={woman.src} layout="fill" className={'d-none d-sm-block'} />
                    <Image src={womanxs.src} layout="fill" className={'d-block d-sm-none'} />
                </div>
                <div className="gracias-section_blue">
                    <h1>
                        Mientras tanto, <br /><b> te invitamos</b> <br />
                        a explorar nuestra <br />
                        sección de recursos. <br /><b>¡Disfrútalos!</b>
                    </h1>
                    <Link href="/">
                        <button className="citas-home_demobutton">
                            Ver recursos
                        </button>
                    </Link>
                </div>
            </Container>
        </>
    );
}