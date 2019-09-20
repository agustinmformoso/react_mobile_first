import React, { useState, createContext } from 'react';

export const TransactionsContext = createContext();

export const TransactionsProvider = (props) => {

    const [transactions, setTransactions] = useState([
        {
            type: 'transferencia',
            title: 'TRANSFERENCIA ENTRE',
            description: 'CONTAS',
            amount: 'R$ 469,82',
            date: '25 abr',
            arrow: 'up',
            id: 1
        },
        {
            type: 'deposito',
            title: 'DOC/TED enviado',
            description: 'para José Corsino Dias',
            amount: '-R$ 470,00',
            date: '25 abr',
            arrow: 'down',
            id: 2
        },
        {
            type: 'transferencia',
            title: 'TRANSFERENCIA ENTRE',
            description: 'CONTAS',
            amount: 'R$ 469,82',
            date: '25 abr',
            arrow: 'up',
            id: 3
        },
        {
            type: 'deposito',
            title: 'DOC/TED enviado',
            description: 'para José Corsino Dias',
            amount: '-R$ 470,00',
            date: '25 abr',
            arrow: 'down',
            id: 4
        },
        {
            type: 'transferencia',
            title: 'TRANSFERENCIA ENTRE',
            description: 'CONTAS',
            amount: 'R$ 469,82',
            date: '25 abr',
            arrow: 'up',
            id: 5
        },
        {
            type: 'deposito',
            title: 'DOC/TED enviado',
            description: 'para José Corsino Dias',
            amount: '-R$ 470,00',
            date: '25 abr',
            arrow: 'down',
            id: 6
        },
        {
            type: 'transferencia',
            title: 'TRANSFERENCIA ENTRE',
            description: 'CONTAS',
            amount: 'R$ 469,82',
            date: '25 abr',
            arrow: 'up',
            id: 7
        },
        {
            type: 'deposito',
            title: 'DOC/TED enviado',
            description: 'para José Corsino Dias',
            amount: '-R$ 470,00',
            date: '25 abr',
            arrow: 'down',
            id: 8
        },
        {
            type: 'transferencia',
            title: 'TRANSFERENCIA ENTRE',
            description: 'CONTAS',
            amount: 'R$ 469,82',
            date: '25 abr',
            arrow: 'up',
            id: 9
        },
    ]);
    return (
        <TransactionsContext.Provider value={[transactions, setTransactions]}>
            {props.children}
        </TransactionsContext.Provider>
    );
}