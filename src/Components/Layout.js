import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Navmenu from './Navmenu.js'

export default class Layout extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <Navmenu />
                    {this.props.children}
                </Col>
            </Row>
        );
    }
}