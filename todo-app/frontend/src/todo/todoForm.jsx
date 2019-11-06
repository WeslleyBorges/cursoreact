import React from 'react'

import Grid from '../template/Grid'
import ButtonIcon from '../template/ButtonIcon'

export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter')
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        else if (e.key === 'Escape')
                props.handleClear()
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input type="text" id="description" className="form-control"
                        value={props.description}
                        placeholder="Adicione uma tarefa" 
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}/> 
            </Grid>
            <Grid cols="12 3 2">
                <ButtonIcon onClick={props.handleAdd} style="primary" icon="plus"></ButtonIcon>
                <ButtonIcon onClick={props.handleSearch} style="info" icon="search"></ButtonIcon>
                <ButtonIcon onClick={props.handleClear} style="default" icon="close"></ButtonIcon>
            </Grid>
        </div>
    )
}