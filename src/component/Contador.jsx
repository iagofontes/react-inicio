import React, { Component } from 'react'

export default class Contador extends Component {

    state = {
        numero : this.props.valor
    }

    maisUm = () => {
        // this.setState({numero: this.state.numero + 1})
        this.alterarDiferenca(1)
    }

    menosUm = () => {
        // this.setState({numero: this.state.numero + 1})
        this.alterarDiferenca(-1)
    }

    alterarDiferenca = diferenca => {
        this.setState({numero: this.state.numero + diferenca})
    }
    
    render() {
        return (
            <div>
                <h1>Contador: {this.state.numero}</h1>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarDiferenca(100)}>Inc 100</button>
                <button onClick={() => this.alterarDiferenca(-100)}>Dec 100</button>
            </div>
        )
    }

}