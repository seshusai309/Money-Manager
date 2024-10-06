import './index.css'

const TransactionItem = props => {
  const {fun, id, title, amount, type} = props
  const clicked = () => {
    fun(id)
  }
  return (
    <li className="sub3-part">
      <p>{title}</p>
      <p>{`Rs ${amount}`}</p>
      <p>{type}</p>
      {/* eslint-disable-next-line */}
      <button data-testid="delete" onClick={clicked} className="btn-delete">
        <img
          alt="delete"
          className="img-delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
        />
      </button>
    </li>
  )
}

export default TransactionItem
