import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import { incrementar, decrementar, stepChanged } from './counterActions'

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input type="number" onChange={props.stepChanged} value={props.counter.step}/>
        <button onClick={props.incrementar}>Inc</button>
        <button onClick={props.decrementar}>Dec</button>
    </div>
)

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators({ incrementar, decrementar, stepChanged }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)