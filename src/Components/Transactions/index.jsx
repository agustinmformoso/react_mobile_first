import React from 'react'
import './styles.css'
import { Col } from 'react-bootstrap/'

const Transactions = ({ transaction_title, transaction_description, transaction_amount, transaction_date, transaction_type, arrow }) => {

    return (
        <Col xs={12} className="transaction d-flex justify-content-between align-items-center mb-2 p-0 shadow-sm">
            <div className="d-flex justify-content-left mt-2">
                <div className="icono d-flex align-items-center justify-content-center">
                    {transaction_type === "transferencia" ? <i className="fas fa-money-bill transaction-bill fa-2x ml-2 mb-3"></i> : <i className="fas fa-dollar-sign transaction-dollar fa-2x ml-2 mb-3"></i>}
                </div>
                <div className="text-left ml-3">
                    <h4 className="text-uppercase transaction-title">{transaction_title}</h4>
                    <p className="transaction-description">{transaction_description}</p>
                </div>
            </div>
            <div className="d-flex justify-content-right mt-2">
                <div className="text-right mr-3">
                    <h4 className="text-uppercase font-weight-bold transaction-amount">{transaction_amount}</h4>
                    <p className="transaction-day">{transaction_date}</p>
                </div>
                <div className="d-flex justify-content-left mt-2">
                    {arrow === "up" ? <i className="fas fa-arrow-up transaction-arrow-up fa-2x mr-3 mb-3"></i> : <i className="fas fa-arrow-down transaction-arrow-down fa-2x mr-3 mb-3"></i> }
                </div>
            </div>
        </Col>
    )
}

export default Transactions
