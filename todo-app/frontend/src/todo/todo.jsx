import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        console.log(this)
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm handleAdd={this.handleAdd}></TodoForm>
                <TodoList></TodoList>
            </div>
        )
    }
}