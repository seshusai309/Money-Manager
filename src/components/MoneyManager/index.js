import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    typed: transactionTypeOptions[0].optionId,
    historyList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  titleName = event => {
    this.setState({title: event.target.value})
  }

  amountName = event => {
    this.setState({amount: event.target.value})
  }

  typeName = event => {
    this.setState({typed: event.target.value})
  }

  submited = event => {
    event.preventDefault()
    this.setState(each => {
      if (each.typed === 'INCOME') {
        return {
          title: '',
          amount: '',
          balance: each.balance + parseInt(each.amount),
          income: each.income + parseInt(each.amount),
          historyList: [
            ...each.historyList,
            {
              id: uuid(),
              title: each.title,
              amount: each.amount,
              type: each.typed,
            },
          ],
        }
      }
      return {
        title: '',
        amount: '',
        balance: each.balance - parseInt(each.amount),
        expenses: each.expenses + parseInt(each.amount),
        historyList: [
          ...each.historyList,
          {
            id: uuid(),
            title: each.title,
            amount: each.amount,
            type: each.typed,
          },
        ],
      }
    })
  }

  deleteHistory = id => {
    console.log(id)
    const {historyList} = this.state
    console.log(
      historyList.filter(val => {
        if (val.id === id) {
          return true
        }
        return false
      })[0].type,
    )

    this.setState(each => {
      if (
        historyList.filter(val => {
          if (val.id === id) {
            return true
          }
          return false
        })[0].type === 'INCOME'
      ) {
        return {
          balance:
            each.balance -
            parseInt(
              each.historyList.filter(val => {
                if (val.id === id) {
                  return true
                }
                return false
              })[0].amount,
            ),
          income:
            each.income -
            parseInt(
              each.historyList.filter(val => {
                if (val.id === id) {
                  return true
                }
                return false
              })[0].amount,
            ),
          historyList: each.historyList.filter(
            eached => !eached.id.includes(id),
          ),
        }
      }
      return {
        balance:
          each.balance +
          parseInt(
            each.historyList.filter(val => {
              if (val.id === id) {
                return true
              }
              return false
            })[0].amount,
          ),
        expenses:
          each.expenses -
          parseInt(
            each.historyList.filter(val => {
              if (val.id === id) {
                return true
              }
              return false
            })[0].amount,
          ),
        historyList: each.historyList.filter(eached => !eached.id.includes(id)),
      }
    })
  }

  render() {
    const {title, amount, historyList, balance, income, expenses} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="head">Hi, Richard</h1>
          <p className="para-head">
            Welcome back to your{' '}
            <span className="MoneySpan">Money Manager</span>
          </p>
        </div>

        <MoneyDetails Balance={balance} Income={income} Expenses={expenses} />

        <div className="sub2-container">
          <div className="sub2-part">
            <form onSubmit={this.submited}>
              <h1>Add Transaction</h1>
              <label htmlFor="hello">TITLE</label> <br />
              <input
                id="hello"
                value={title}
                onChange={this.titleName}
                placeholder="TITLE"
                className="input1"
                type="text"
              />
              <label htmlFor="hello2">AMOUNT</label> <br />
              <input
                id="hello2"
                value={amount}
                onChange={this.amountName}
                placeholder="AMOUNT"
                className="input2"
                type="text"
              />
              <br />
              <label htmlFor="hello2">Type</label> <br />
              <select
                onChange={this.typeName}
                className="input3"
                name="cars"
                id="cars"
                default={transactionTypeOptions[0].optionId}
              >
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId}>{each.displayText}</option>
                ))}
              </select>
              <br />
              <button type="submit" className="btn">
                Add
              </button>
            </form>
          </div>

          <div className="sub3-container">
            <h1>History</h1>
            <ul>
              <div className="sub3-part hd">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p>{}</p>
              </div>

              {historyList.map(each => (
                <TransactionItem
                  key={each.id}
                  fun={this.deleteHistory}
                  id={each.id}
                  title={each.title}
                  amount={each.amount}
                  type={each.type}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
