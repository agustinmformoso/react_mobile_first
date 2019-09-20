import React from 'react'
import './styles.css'
import { Col, Row, Form } from 'react-bootstrap/'

const SearchBar = ({ placeholder, text }) => {
    return (
        <Col xs={12} className="mb-5 mt-2">
            <Row className="ml-1 mr-1">
                <Col md={11} xs={10} className="search shadow-sm d-flex justify-content-between align-items-center p-2">
                    <i className="fas fa-search ml-2 mr-2 fa-flip-horizontal"></i>
                    <Form.Control type="text" placeholder={placeholder} className="search-bar" />
                </Col>
                <Col md={1} xs={2} className="text-center d-flex align-items-center">
                    <div>                        
                        <i className="fas fa-filter"></i>
                        <p className="p-0 m-0">{text}</p>                       
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

export default SearchBar