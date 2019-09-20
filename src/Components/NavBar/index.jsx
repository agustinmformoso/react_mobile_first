import React from 'react'
import './styles.css'
import { Col, Navbar, Nav } from 'react-bootstrap/'
import { GLOBAL } from '../../Config/global'

const NavBar = () => {
    return (
        <Col xs={12}>
            <Navbar>
            <Nav className="justify-content-between pr-4 pl-4 fixed-bottom bg-white">
                <Nav.Item>
                    <Nav.Link className="nav-link text-center" href="#home"><i className="fas fa-home"></i><p>{GLOBAL.NAVBAR.OPTION1}</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link text-center" href="#features"><i className="fas fa-dollar-sign"></i><p>{GLOBAL.NAVBAR.OPTION2}</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link text-center" href="#pricing"><i className="fas fa-money-check"></i><p>{GLOBAL.NAVBAR.OPTION3}</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link text-center" href="#pricing"><i className="fas fa-credit-card"></i><p>{GLOBAL.NAVBAR.OPTION4}</p></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav-link text-center" href="#pricing"><i className="fas fa-bars"></i><p>{GLOBAL.NAVBAR.OPTION5}</p></Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar>
        </Col>
    )
}

export default NavBar
