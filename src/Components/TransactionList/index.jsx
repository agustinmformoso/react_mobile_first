import React, { useContext } from 'react'
import Transactions from '../Transactions'
import { TransactionsContext } from '../../Store/TransactionsContext';


const TransactionList = () => {
    const [transactions, setTransactions] = useContext(TransactionsContext);

    return (
        <div className="pl-2 pr-2 mb-5">
            <p className="ml-3 font-weight-bold">25/4/2019</p>
            {transactions.map(t => (
                <Transactions
                    transaction_title={t.title}
                    transaction_description={t.description}
                    transaction_amount={t.amount}
                    ransaction_date={t.date}
                    transaction_type={t.type}
                    arrow={t.arrow}
                    key={t.id}
                />
            ))}
        </div>
    )
}

export default TransactionList
