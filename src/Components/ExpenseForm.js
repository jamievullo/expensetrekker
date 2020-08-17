import React from 'react'
import {Form, Button} from 'react-bootstrap'

export class ExpenseForm extends React.Component {

    state = {
        date: "",
        description: "",
        amount: "",
        storeName: "",
        paymentType: "Cash"
    }

    handleSubmit = (e) => {
        e.preventDefault()        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name="date" value={this.state.date} onChange={this.handleChange} placeholder="Enter Date" />                    
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Payment Method</Form.Label>
                        <Form.Control as="select" name="paymentType" value={this.state.paymentType} onChange={this.handleChange}>
                            <option>Cash</option>
                            <option>Credit</option>
                            <option>Debit</option>
                            <option>Crypto</option>
                            <option>Check</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="What did you buy?" />                    
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" name="amount" value={this.state.amount} onChange={this.handleChange} placeholder="Amount Spent?" />                    
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Store Name</Form.Label>
                        <Form.Control type="text" name="storeName" value={this.state.storeName} onChange={this.handleChange} placeholder="Store Name?" />                    
                    </Form.Group>
                    <Button type="submit" variant="secondary" size="lg">
                        Add Expense
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ExpenseForm
