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
                        <Col>
                            <h3>
                            Más de 300<br/> organizaciones<br/><span> ya confían en<br/> Debmedia</span>
                            </h3>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>

                {/* <Row>
                    <Col>
                        <OwlCarousel
                            className='owl-theme'
                            loop
                            nav={true}
                            autoplay={true}
                            items={5}
                            margin={20}
                        >
                            {images.map((item, index) => (
                                    <div key={index} className="item">
                                        <img src={"http://localhost:1337" + item.attributes.logo.data[0].attributes.url} />
                                    </div>
                            ))}
                        </OwlCarousel>
                    </Col>
                </Row> */}
            </Container>
        </>
    );
}