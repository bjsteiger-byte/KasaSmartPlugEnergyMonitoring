import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class Navmenu extends React.Component {
    render() {
        return (
            <Navbar variant='dark' bg='dark'>
                <Navbar.Brand href='#Home'>Pump Monitor</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                </Navbar.Collapse>
            </Navbar>
        );
    }
}