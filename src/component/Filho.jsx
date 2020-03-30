import React from 'react'

export default props => 
    <div>
        <button onClick={() => props.notificarSaida('Lanchonete')}>
            Vou sair
        </button>
    </div>