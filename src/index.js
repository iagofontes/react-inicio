import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponent from './component/PrimeiroComponent'
// import { CompA, CompB } from './component/DoisComponentes'
// import MultiElementos from './component/MultiElementos'
// import FamiliaSilva from './component/FamiliaSilva'
// import Familia from './component/Familia'
// import Membro from './component/Membro'
// import ComponenteComFuncao from './component/ComponenteComFuncao'
// import Pai from './component/Pai'
// import ComponenteClasse from './component/ComponenteClasse'
import Contador from './component/Contador'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>

        <Contador valor={10}/>
        {/* <ComponenteClasse valor="Um olá com props!"/> */}
        {/* <Pai/> */}

        {/* <ComponenteComFuncao/> */}

        {/* <PrimeiroComponent valor="Bom dia Iago"></PrimeiroComponent> */}
        {/* <CompA valor="Olá, sou o primeiro componente"/>
        <CompB valor="Olá, eu sou o segundo componente"/> */}
        {/* <MultiElementos/> */}
        {/* <FamiliaSilva sobrenome="Leão"/> */}
        {/* <Familia sobrenome="Leão">
            <Membro nome="Jośe"/>
            <Membro nome="Mariana"/> */}
        {/* </Familia> */}
    </div>    
, elemento)