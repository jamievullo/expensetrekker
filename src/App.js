import React from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import Table from './Components/Table'

export class App extends React.Component {
  
  state = {
    stateUpdated: true
  }

  expenseLog = []

  addExpense = (expense) => {
    this.expenseLog.push(expense)
    this.setState({
      stateUpdated: true
    })
  }

  deleteExpense = (key) => {
    this.expenseLog.splice(key, 1)
    this.setState({
      stateUpdated: true
    })
    console.log(this.expenseLog)
  }

  render() {
    return (
      <div className="App">
        <ExpenseForm addExpense={this.addExpense}/>
        <div id="table-container">
          <div id="table-row">
            <div id="table-column">Date</div>
            <div id="table-column">Payment Method</div>
            <div id="table-column">Description</div>
            <div id="table-column">Store Name</div>
            <div id="table-column" style={{marginRight:"45px"}}>Amount</div>
          </div>
            { this.expenseLog.map((expense, i) => (
              <Table deleteExpense={this.deleteExpense} expense={expense} key={i} />
            ))}     
        </div>
      </div>
    )
  }
}

export default App