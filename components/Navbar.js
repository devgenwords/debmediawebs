import React, { useState, useEffect } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../asset/imgs/logo.png'
export default function Home() {
    const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);
    return (
        <>
            <Navbar fixed="top" expand="lg" className={scroll ? "navScroll" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <Image
                            src={mypic}
                            alt="Picture of the author"
                            className="img-fluid"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Soluciones" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">
                                    Solucion 1
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Solucion 2
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Clientes</Nav.Link>
                            <Nav.Link href="#link">Partnets</Nav.Link>
                            <Nav.Link href="#link">Recursos</Nav.Link>
                            <Nav.Link href="#link" className="demo">Solicita una demo</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}