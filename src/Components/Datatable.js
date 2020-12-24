import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import React from 'react';


export default class Datatable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <BootstrapTable data={this.state.data} striped hover pagination>
                <TableHeaderColumn isKey dataField="date">Date</TableHeaderColumn>
                <TableHeaderColumn dataField="power">Power(Watts)</TableHeaderColumn>
                <TableHeaderColumn dataField="current">Current(Amps)</TableHeaderColumn>
                <TableHeaderColumn dataField="voltage">Voltage(Volts)</TableHeaderColumn>
            </BootstrapTable>
        );
    }


    async componentDidMount() {
        await this.getData();
    }

    async getData() {
        const result = await fetch('http://192.168.0.106:8000', { method: 'POST' })
        const json = await result.json();
        const data = new TableData(json.array).getTableEntries();
        this.setState({ data: data });
    }

}

class PumpEvent {
    constructor(date, power, current, voltage, state) {
        this.date = date;
        this.power = power;
        this.current = current;
        this.voltage = voltage;
        this.state = state;
    }
}

class TableData {
    constructor(array) {
        this.data = [];
        array.forEach(element => {
            this.data.push(new PumpEvent(element.date, element.power, element.current, element.voltage, element.state));
        });
    }

    getTableEntries() {
        return this.data;
    }
}