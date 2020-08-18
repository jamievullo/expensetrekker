import React from 'react'
import { Button } from 'react-bootstrap'

export class Table extends React.Component {

    state = {
        expenses: []
    }

    render() {
        return (
            <div id="table-row">
                <div id="table-column">{this.props.expense.date}</div>
                <div id="table-column">{this.props.expense.paymentType}</div>
                <div id="table-column">{this.props.expense.description}</div>
                <div id="table-column">{this.props.expense.storeName}</div>
                <div id="table-column">{this.props.expense.amount}</div>
                <Button onClick={e => this.props.deleteExpense(this.props.key)} variant="secondary" size="sm">X</Button>
            </div>
        )
    }
}

export default Table
