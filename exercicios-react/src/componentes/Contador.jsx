import React, { Component } from 'react'

export default class Contador extends Component {

  state = {
    numero: 0
  }

  incrementar = () => { 
    // eslint-disable-next-line
    this.setState({numero: ++this.state.numero})
  }

  decrementar = () => {
    // eslint-disable-next-line
    this.setState({numero: --this.state.numero})
  }

  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.decrementar}>Decrementar</button>
      </div>
    )
  }
} 