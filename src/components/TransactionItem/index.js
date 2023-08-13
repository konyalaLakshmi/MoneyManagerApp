// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deleteTransaction} = props
  const {id, title, amount, type} = details

  const onClickdel = () => {
    deleteTransaction(id)
  }

  return (
    <li className="l2">
      <p className="item">{title}</p>
      <p className="item">{amount}</p>
      <p className="item">{type}</p>
      <div className="dContainer">
        <button
          className="d"
          type="button"
          data-testid="delete"
          onClick={onClickdel}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="i"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
