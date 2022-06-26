import React from 'react'

const Container = (props) => {
    return (
        <div style={{width:"82%",margin:"auto"}}>
            {props.children}
        </div>
    )
}

export default Container
