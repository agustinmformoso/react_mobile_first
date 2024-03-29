import React from 'react'
import { Button } from 'react-bootstrap/'
import { GLOBAL } from '../../Config/global'

const ButtonCustom = ({ block, variant, size, btn_msg, className }) => {
    return (
        <Button block={block} variant={variant} size={size} className={className}>{btn_msg === "depositar" ? <div className="d-flex align-items-center justify-content-center"><i className="fas fa-money-bill fa-2x mr-2"></i><p>{GLOBAL.BUTTON.OPTION1}</p></div> : btn_msg}</Button>
    )
}

export default ButtonCustom