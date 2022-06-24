import React, { useState, useEffect } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import Image from 'next/image'
import mypic from '../asset/imgs/logo.png'
import Link from 'next/link'
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
                        <Link href="/">
                            <Image
                                src={mypic}
                                alt="Picture of the author"
                                className="img-fluid"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Soluciones" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link href="/mobile">
                                        Fila Virtual
                                    </Link>

                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                <Link href="/debq">
                                       Gestion de filas
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                <Link href="/citas">
                                       Citas
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                <Link href="/atencion-virtual">
                                       Atención virtual
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                <Link href="/debsign">
                                      Debsign
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                <Link href="/encuestas">
                                      Encuestas
                                    </Link>
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