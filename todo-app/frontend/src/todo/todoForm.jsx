import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from '../template/Grid'
import ButtonIcon from '../template/ButtonIcon'
import { changeDescription, searchTodo } from "./todoActions";

class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler (e) {
        if (e.key === 'Enter')
            e.shiftKey ? this.props.handleSearch() : props.handleAdd()
        else if (e.key === 'Escape')
                props.handleClear()
    }

    componentWillMount() {
        this.props.searchTodo()
    }

    render() {
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input type="text" id="description" className="form-control"
                            value={this.props.description}
                            placeholder="Adicione uma tarefa" 
                            onChange={this.props.changeDescription}  
                            onKeyUp={this.keyHandler}/> 
                </Grid>
                <Grid cols="12 3 2">
                    <ButtonIcon onClick={this.props.handleAdd} style="primary" icon="plus"></ButtonIcon>
                    <ButtonIcon onClick={this.props.searchTodo} style="info" icon="search"></ButtonIcon>
                    <ButtonIcon onClick={this.props.handleClear} style="default" icon="close"></ButtonIcon>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, searchTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)