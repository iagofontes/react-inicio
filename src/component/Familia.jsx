import React from 'react'

export default props => 
    <div>
        <h1>Família</h1>

        {React.Children.map(props.children, children => {
            return React.cloneElement(children, {...props})
        })}
        {/* {React.cloneElement(props.children, props)} */}
        {/* {React.cloneElement(props.children, {sobrenome: props.sobrenome})} */}

        {/* {props.children} */}
    </div>