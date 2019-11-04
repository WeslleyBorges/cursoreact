import React from 'react'

import ButtonIcon from '../template/ButtonIcon'

export default props => {

    const renderRows = () => {
        const bagulhoList = props.list || []
        
        return bagulhoList.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <ButtonIcon style="success" icon="check" hide={props.done}
                        onClick={() => props.handleMarkAsDone(todo)}>

                    </ButtonIcon>                                        
                    <ButtonIcon style="warning" icon="undo" hide={!props.done}
                        onClick={() => props.handleMarkAsPending(todo)}>

                    </ButtonIcon>
                    <ButtonIcon style="danger" icon="trash-o"
                        onClick={() => props.handleRemove(todo)}>
                    </ButtonIcon>
                </td>
            </tr>
        ))        
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>    
        </div>
    )    
}