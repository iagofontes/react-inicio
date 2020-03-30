import React from 'react'

const aprovados = ['Paula', 'Magno', 'Julia', 'Fernanda', 'Francisco']

export default props => {
    const gerarItens = (itens) => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <div>
            <ul>
                {gerarItens(aprovados)}
            </ul>
        </div>
    )
}