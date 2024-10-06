import './index.css'

const MoneyDetails = props => {
  const {Balance, Income, Expenses} = props

  return (
    <div className="component-2">
      <div className="sub-container2">
        <img
          alt="balance"
          className="imgBalance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="sub-part">
          <p className="sub-part-para">Your Balance</p>
          <p
            data-testid="balanceAmount"
            className="sub-part-head"
          >{`Rs ${Balance}`}</p>
        </div>
      </div>

      <div className="sub-container3">
        <img
          alt="income"
          className="imgBalance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="sub-part">
          <p className="sub-part-para">Your Income</p>
          <p
            data-testid="incomeAmount"
            className="sub-part-head"
          >{`Rs ${Income}`}</p>
        </div>
      </div>

      <div className="sub-container4">
        <img
          alt="expenses"
          className="imgBalance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="sub-part">
          <p className="sub-part-para">Your Expenses</p>
          <p
            data-testid="expensesAmount"
            className="sub-part-head"
          >{`Rs ${Expenses}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
