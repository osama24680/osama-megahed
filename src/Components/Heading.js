import React from 'react'
import {Col } from "reactstrap"
const Heading = (props) => {
    return (
        <Col lg="12" className='mb-5'>
            <h2>{props.title}</h2>
        </Col>
    )
}

export default Heading
