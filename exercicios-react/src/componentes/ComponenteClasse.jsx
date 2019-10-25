import React, { Component } from 'react'

export default class ComponenteClasse extends Component {
  render() {
    return <h1>Sou um componente de classe! {this.props.value}</h1>
  }
}