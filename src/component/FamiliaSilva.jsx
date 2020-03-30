import React from 'react'
import Membro from './Membro'

export default props => 
    <div>
        <Membro nome="Rafael" sobrenome={props.sobrenome}/>
        <Membro nome="Mariana" sobrenome="Silva"/>
        <Membro nome="Silvana" sobrenome="Silva"/>
    </div>