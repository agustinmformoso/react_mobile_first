import React from 'react'
import Transactions from '../Transactions'
import { GLOBAL } from '../../Config/global'

const TransactionList = () => {
    return (
        <div className="pl-2 pr-2 mb-5">
            <p className="ml-3 font-weight-bold">25/4/2019</p>
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION1} transaction_description="para José Corsino Dias" transaction_amount="-R$ 470,00" transaction_date="25 abr" transaction_type="deposito" arrow="down" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION2} transaction_description="CONTAS" transaction_amount="R$ 469,82" transaction_date="25 abr" transaction_type="transferencia" arrow="up" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION1} transaction_description="para José Corsino Dias" transaction_amount="-R$ 470,00" transaction_date="25 abr" transaction_type="deposito" arrow="down" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION2} transaction_description="CONTAS" transaction_amount="R$ 469,82" transaction_date="25 abr" transaction_type="transferencia" arrow="up" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION1} transaction_description="para José Corsino Dias" transaction_amount="-R$ 470,00" transaction_date="25 abr" transaction_type="deposito" arrow="down" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION2} transaction_description="CONTAS" transaction_amount="R$ 469,82" transaction_date="25 abr" transaction_type="transferencia" arrow="up" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION1} transaction_description="para José Corsino Dias" transaction_amount="-R$ 470,00" transaction_date="25 abr" transaction_type="deposito" arrow="down" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION2} transaction_description="CONTAS" transaction_amount="R$ 469,82" transaction_date="25 abr" transaction_type="transferencia" arrow="up" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION1} transaction_description="para José Corsino Dias" transaction_amount="-R$ 470,00" transaction_date="25 abr" transaction_type="deposito" arrow="down" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION2} transaction_description="CONTAS" transaction_amount="R$ 469,82" transaction_date="25 abr" transaction_type="transferencia" arrow="up" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION1} transaction_description="para José Corsino Dias" transaction_amount="-R$ 470,00" transaction_date="25 abr" transaction_type="deposito" arrow="down" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION2} transaction_description="CONTAS" transaction_amount="R$ 469,82" transaction_date="25 abr" transaction_type="transferencia" arrow="up" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION1} transaction_description="para José Corsino Dias" transaction_amount="-R$ 470,00" transaction_date="25 abr" transaction_type="deposito" arrow="down" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION2} transaction_description="CONTAS" transaction_amount="R$ 469,82" transaction_date="25 abr" transaction_type="transferencia" arrow="up" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION1} transaction_description="para José Corsino Dias" transaction_amount="-R$ 470,00" transaction_date="25 abr" transaction_type="deposito" arrow="down" />
            <Transactions transaction_title={GLOBAL.TRANSACTIONS.OPTION2} transaction_description="CONTAS" transaction_amount="R$ 469,82" transaction_date="25 abr" transaction_type="transferencia" arrow="up" />
        </div>
    )
}

export default TransactionList
