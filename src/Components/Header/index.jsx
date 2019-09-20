import React from 'react'
import './styles.css'
import { Col, Image, Carousel } from 'react-bootstrap/'
import { GLOBAL } from '../../Config/global'

const Header = ({ amount, interval, roundedCircle, width, profile_picture }) => {
    return (
        <Col xs={12} className="header text-center pt-4 pb-4" interval={interval} >
            <Image src={profile_picture} roundedCircle={roundedCircle} width={width} />
            <h2 className="mt-4 mb-2">{amount}</h2>
            <p>{GLOBAL.HEADER.HIDE_BALANCE}</p>
            <Carousel className="pb-4 pt-3" controls={false}>
                <Carousel.Item>
                    <h3 className="mb-5 mt-3">{GLOBAL.HEADER.CURRENCY1}</h3>
                </Carousel.Item>
                <Carousel.Item>
                    <h3 className="mb-5 mt-3">{GLOBAL.HEADER.CURRENCY2}</h3>
                </Carousel.Item>
                <Carousel.Item>
                    <h3 className="mb-5 mt-3">{GLOBAL.HEADER.CURRENCY3}</h3>
                </Carousel.Item>
                <Carousel.Item>
                    <h3 className="mb-5 mt-3">{GLOBAL.HEADER.CURRENCY4}</h3>
                </Carousel.Item>
            </Carousel>
        </Col>
    )
}

export default Header
