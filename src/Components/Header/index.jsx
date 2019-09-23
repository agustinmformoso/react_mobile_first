import React, { useState, useReducer } from 'react'
import './styles.css'
import { Col, Image, Carousel } from 'react-bootstrap/'
import { GLOBAL } from '../../Config/global'

const initialState = {
    monedaInicial: 'R$',
    saldoInicial: 14,
}

const reducer = (state, action) => {
    switch (action.type) {
        case '$':
            switch (state.monedaInicial) {
                case '$':
                    return { ...state, monedaInicial: '$', saldoInicial: Math.round(state.saldoInicial) }
                case 'U$S':
                    return { ...state, monedaInicial: '$', saldoInicial: Math.round(state.saldoInicial / 56.77) }
                case '€':
                    return { ...state, monedaInicial: '$', saldoInicial: Math.round(state.saldoInicial / 62.43) }
                case 'R$':
                    return { ...state, monedaInicial: '$', saldoInicial: Math.round(state.saldoInicial / 13.62) }
                default:
                    return initialState
            }
        case 'U$S':
            switch (state.monedaInicial) {
                case 'U$S':
                    return { ...state, monedaInicial: 'U$S', saldoInicial: Math.round(state.saldoInicial) }
                case '$':
                    return { ...state, monedaInicial: 'U$S', saldoInicial: Math.round(state.saldoInicial * 56.77) }
                case '€':
                    return { ...state, monedaInicial: 'U$S', saldoInicial: Math.round(state.saldoInicial * 0.91) }
                case 'R$':
                    return { ...state, monedaInicial: 'U$S', saldoInicial: Math.round(state.saldoInicial * 4.17) }
                default:
                    return initialState
            }
        case '€':
            switch (state.monedaInicial) {
                case '€':
                    return { ...state, monedaInicial: '€', saldoInicial: Math.round(state.saldoInicial) }
                case '$':
                    return { ...state, monedaInicial: '€', saldoInicial: Math.round(state.saldoInicial * 62.43) }
                case 'U$S':
                    return { ...state, monedaInicial: '€', saldoInicial: Math.round(state.saldoInicial * 1.10) }
                case 'R$':
                    return { ...state, monedaInicial: '€', saldoInicial: Math.round(state.saldoInicial * 4.58) }
                default:
                    return initialState
            }
        case 'R$':
            switch (state.monedaInicial) {
                case 'R$':
                    return { ...state, monedaInicial: 'R$', saldoInicial: Math.round(state.saldoInicial) }
                case '$':
                    return { ...state, monedaInicial: 'R$', saldoInicial: Math.round(state.saldoInicial * 13.62) }
                case '€':
                    return { ...state, monedaInicial: 'R$', saldoInicial: Math.round(state.saldoInicial * 0.22) }
                case 'U$S':
                    return { ...state, monedaInicial: 'R$', saldoInicial: Math.round(state.saldoInicial * 0.24) }
                default:
                    return initialState
            }
        default:
            return initialState
    }
}

const Header = ({ amount, interval, roundedCircle, width, profile_picture }) => {
    const [saldo, dispatch] = useReducer(reducer, initialState)
    const [index, setIndex] = useState()
    const [hideElement, setHideElement] = useState(false)
    const [customClass, setCustomClass] = useState('')
    const [show, setShow] = useState('')

    const handleIndex = (selectedIndex) => {
        switch (selectedIndex) {
            case 0:
                dispatch({ type: 'R$' })
                break
            case 1:
                dispatch({ type: 'U$S' })
                break
            case 2:
                dispatch({ type: '€' })
                break
            case 3:
                dispatch({ type: '$' })
                break
            default:
                return initialState
        }
    }

    const handleHideElement = (hideElement) => {
        if (hideElement === true) {
            setCustomClass('hideElement')
            setShow('d-none')
        } else {
            setCustomClass('showElement')
            setShow(' ')
        }

        setHideElement(!hideElement)
        console.log(hideElement)
    }


    return (
        <Col xs={12} className={`carousel header text-center pt-4 pb-4 ` + customClass} interval={interval} >
            <Image src={profile_picture} roundedCircle={roundedCircle} width={width} />
            <div className={`p-0 m-0 carousel ` + show}>
                <h2 className="mt-4 mb-2">{saldo.monedaInicial} {saldo.saldoInicial}</h2>
            </div>
            <a href="#pepe" className="d-block my-4 hide-balance" onClick={() => handleHideElement(hideElement)}>{GLOBAL.HEADER.HIDE_BALANCE}</a>
            <div className={`p-0 m-0 carousel ` + show}>
                <Carousel className="pb-4" controls={false} activeIndex={index} onSelect={handleIndex}>
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
            </div>
        </Col>
    )
}

export default Header
