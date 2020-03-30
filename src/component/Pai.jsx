import React from 'react'
import Filho from './Filho'

export default props => {
    const notificacao = (lugar) => {
        return alert(`Saida liberada para ${lugar}`)
    }

    return (
        <div>
            <Filho notificarSaida={notificacao}/>
        </div>) 
}