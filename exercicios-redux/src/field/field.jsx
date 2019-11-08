import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeValue } from './fieldActions'

class Field extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.value}</h3>
        <input value={this.props.value} onChange={this.props.changeValue}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.field.value
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeValue }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)