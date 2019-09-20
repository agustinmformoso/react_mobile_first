import React from 'react'
import './styles.css'
import { Col, Navbar, Nav } from 'react-bootstrap/'

const NavBar = () => {
    return (
        <Col xs={12}>
            <Navbar>
            <Nav className="justify-content-between pr-4 pl-4 fixed-bottom bg-white">
                <Nav.Item>
                    <Nav.Link className="nav-link text-center" href="#home"><i className="fas fa-home"></i><p>Inicio</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link text-center" href="#features"><i className="fas fa-dollar-sign"></i><p>Transferir</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link text-center" href="#pricing"><i className="fas fa-money-check"></i><p>Pagar</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link text-center" href="#pricing"><i className="fas fa-credit-card"></i><p>Cartoes</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link text-center" href="#pricing"><i className="fas fa-bars"></i><p>Mais</p></Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar>
        </Col>
    )
}

export default NavBar
