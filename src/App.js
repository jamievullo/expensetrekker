import React from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import Table from './Components/Table'

export class App extends React.Component {

  state = {
    setUpdated: true
  }

  expenseLog = []

  addExpense = (expense) => {
    this.expenseLog.push(expense)
    this.setState({
      setUpdated: true
    })
    console.log(this.expenseLog)
  }

  render() {
    return (
      <div className="App">
        <ExpenseForm addExpense={this.addExpense}/>
        <Table expenseLog={this.expenseLog}/>
      </div>
    )
  }
}

export default App