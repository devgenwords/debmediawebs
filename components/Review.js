import React, { useState, useEffect } from "react";

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});
import { Row, Container, Col } from "react-bootstrap";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import brand from '../asset/imgs/review/itau.png'
import person from '../asset/imgs/review/person.png'

import Image from 'next/image'

import axios from "axios";


export default function Brands() {
    const [images, setImages] = useState([]);

    // useEffect(() => {
    //     async function searchItems() {
    //         await axios
    //             .get(`http://localhost:1337/api/tests?populate=*`)
    //             .then((res) => {
    //                 setImages(res.data.data);
    //             })
    //             .catch((err) => {
    //                 console.error(err);
    //             });
    //     }
    //     searchItems();
    // }, []);

    return (
        <>
            <Container fluid className="review-section">
                <Container>
                    <Row>
                        <Col sm={5} xs={12} >
                            <Col>
                                <h3>
                                    Más de 300<br className="d-none d-sm-block" /> organizaciones<br className="d-none d-sm-block"/><span> ya confían en<br className="d-none d-sm-block" /> Debmedia</span>
                                </h3>
                            </Col>
                        </Col>
                        <Col sm={7} xs={12} className="market-section_div">
                            <OwlCarousel
                                className='owl-theme'
                                loop
                                nav={false}
                                autoplay={false}
                                items={1}
                                margin={20}
                            >
                                {/* {images.map((item, index) => (
                                    <div key={index} className="item">
                                        <img src={"http://localhost:1337" + item.attributes.logo.data[0].attributes.url} />
                                    </div>
                            ))} */}
                                <div className="item">
                                    <div className="review-section_slidersection">
                                        <div className="review-section_slidersection-person">
                                            <img src={person.src} />
                                        </div>
                                        <div className="review-section_slidersection-brand">
                                            <img src={brand.src} />
                                        </div>
                                        <div className="review-section_slidersection-text">
                                            <h4>Lionel Baragaño</h4>
                                            <span>Gerente de Banco Digital &amp; Transformación</span>
                                            <p>Con Debmedia logramos optimizar la atención de nuestros clientes para poder brindarles una atención más eficiente y personalizada y así aumentar su satisfacción</p>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </>
    );
}