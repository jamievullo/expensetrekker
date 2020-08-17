import React from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';

export class App extends React.Component {

  state = {
    setUpdated: true
  }

expenseLog = []

  addExpense = (expense) => {
    this.setState({
      setUpdated: true
    })
  }

  render() {
    return (
      <div className="App">
        <ExpenseForm />
      </div>
    )
  }
}

export default App