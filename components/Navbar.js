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

    const [expanded, setExpanded] = useState(false);

    return (
        <>


            <Navbar expanded={expanded} fixed="top" expand="lg" className={scroll ? "navScroll" : ""}>
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
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Soluciones" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link className="fulllink" onClick={() => setExpanded(false)} href="/atencion-virtual">
                                        Atención virtual
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href="/preatendedor">
                                        Chatbot de WhatsApp
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href="/fila-virtual">
                                        Fila Virtual
                                    </Link>

                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <Link href="/citasonline">
                                        Citas
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href="/debq">
                                        Gestion de filas
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href="/debsign">
                                        Cartelería digital

                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href="/preatendedor">
                                        Pre atendedor
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href="/encuestas">
                                        Encuestas
                                    </Link>
                                </NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link href="#link">Clientes</Nav.Link>
                            <Nav.Link href="#link">Partners</Nav.Link>
                            <NavDropdown title="Recursos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://debmedia.com/blog/">
                                    <Link href="https://debmedia.com/blog/">
                                        Blog
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href="/">
                                        Casos de éxito
                                    </Link>

                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href="/">
                                        Recursos descargables
                                    </Link>

                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link href="/">
                                        Centro de ayuda
                                    </Link>

                                </NavDropdown.Item>

                            </NavDropdown>
                            <Link href="/contacto">
                                <Nav.Link href="#link" className="demo">Solicita una demo</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}