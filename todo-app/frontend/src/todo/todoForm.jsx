import React from 'react'

import Grid from '../template/Grid'
import ButtonIcon from '../template/ButtonIcon'

export default props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
           <input type="text" id="description" className="form-control"
                placeholder="Adicione uma tarefa" onChange={props.handleChange}/> 
        </Grid>
        <Grid cols="12 3 2">
            <ButtonIcon onClick={props.handleAdd} style="primary" icon="plus"></ButtonIcon>
        </Grid>
    </div>
)