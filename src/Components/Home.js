import React from 'react';
import Datatable from './Datatable';
import { Container, Row, Col } from 'react-bootstrap'

export class Home extends React.Component {
    render() {
        return (           
            <Container fluid>
                <Datatable />
            </Container>
        );
    }
}

