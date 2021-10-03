import React from 'react'
import { Container } from 'react-bootstrap';

export default function Error(props) {
    return (
        <div>
          <Container style={{marginTop:'20%'}} fluid className="d-flex justify-content-center">
             {props.message}
          </Container>
        </div>
    )
}
