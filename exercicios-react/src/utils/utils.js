import React from 'react'

function cloneElementosFilhos(props) {
    return React.Children.map(props.children, 
                              filho => React.cloneElement(filho, {...props})
    )
}

export { cloneElementosFilhos }