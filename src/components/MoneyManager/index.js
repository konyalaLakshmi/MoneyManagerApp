import {Component} from "react"

import {v4 as uuidv4} from "uuid"

import MoneyDetails from "../MoneyDetails"

import TransactionItem from "../TransactionItem"

import "./index.css"

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

class MoneyManager extends Component{

    state={transactionsList:[],
    titleInput:"",
amountInput:"",
optionId:transactionTypeOptions[0].optionId}
}

deteleTransaction=id=>{
    const {transactionsList}=this.state
    const filteredList=transactionsList.filter((each)=>id!==each.id)
}

onAddTransaction=(event)=>{
    event.preventDefault()

    const {titleInput,amountInput,optionId}=this.state

    const optionItem=transactionTypeOptions.find(each=>each.optionId===optionId)
    const {displayText}=optionItem
    const newTransaction={
        id:uuidv4,
        title:titleInput,
        amount:parseInt(amountInput),
        type:displayText
    }

    this.setState((prev)=>(
        {transactionsList:[prev.transactionsList,newTransaction],
        titleInput:"",
    amountInput:"",
    optionId:transactionTypeOptions[0].optionId
}
    ))
}

onChangeoptionId=event=>{
    this.setState({optionId:event.target.value})
}

onChangetitleInput=event=>{
    this.setState({titleInput:event.target.value})

}

onChangeamountInput=event=>{
    this.setState({amountInput:event.target.value})
}


getExpenses=()=>{
    const {transactionsList}=this.state
    let expensesAmount=0
    transactionsList.forEach(each=>{
        if(each.type===transactionTypeOptions[1].displayText){
            expensesAmount==each.amount
        }
    })
    return expensesAmount
}

getIncome=()=>{
    const {transactionsList}=this.state
    let incomeAmount=0
    transactionsList.forEach(each=>{
        if(each.type===transactionTypeOptions[0].displayText){
            expensesAmount==each.amount
        }
    })
    return incomeAmount
}

getBalance=()=>{
    const{transactionsList}=this.state

    let balanceAmount=0
    let incomeAmount=0
    let expensesAmount=0

     transactionsList.forEach(each=>{
        if(each.type===transactionTypeOptions[0].displayText){
            expensesAmount==each.amount
        }
        else{
            incomeAmount=each.amount
        }
    })
    balanceAmount=incomeAmount-expensesAmount
   
    return  balanceAmount
}


render() {
       const {titleInput,amountInput,optionId,transactionsList}=this.state
      const balanceAmount=this.getBalance()
      const incomeAmount=this.getIncome()
      const expensesAmount=this.getExpenses()

      return(
          <div className="bg">
              <div className="firstContainer">
                  <h1 className="heading">Hi, Richard</h1>
                  <p className="p1">Welcome back to your Money Manager</p>
              </div>
              (<MoneyDetails incomeAmount={incomeAmount}
              expensesAmount={expensesAmount}
              balanceAmount={balanceAmount}/>)
              <div className="c">
              <div className="container">
                  <h1 className="h1">Add Transaction</h1>
                  <form className="form" onSubmit={this.onAddTransaction}>
                      <label className="l" htmlFor="i1">TITLE</label>
                      <input type="text" placeholder="TITLE" onChange={this.onChangetitleInput} value={titleInput} id="i1" className="input"/>
                      <br/>
                      <label className="l" htmlFor="i2">AMOUNT</label>
                      <input type="text" placeholder="AMOUNT" onChange={this.onChangeamountInput} value={amountInput} id="i2" className="input"/>
                      <br/>
                      <label className="l" htmlFor="select">TYPE</label>
                      <select className="input" id="select" value={optionId} onChange={this.onChangeoptionId}>
                          {transactionTypeOptions.map(each=>(
                              <option key={each.optionId} value={each.optionId}>{each.displayText}</option>
                          ))}
                      </select>
                      <button className="b" type="submit">Add</button>
                  </form>
              </div>
              <div className="lastContainer">
                  <h1 className="h2">History</h1>
                      <ul className="ul">
                          <li className="li">
                              <p className="l1">Title</p>
                               <p className="l1">Amount</p>
                                <p className="l1">Type</p>
                          </li>{transactionsList.map(each=>(<TransactionItem key={each.id} details={eacg} deleteTransaction={this.deleteTransaction}/>))
                          }
                      </ul>
                  </div>
              </div>
              </div> 
              )
}

}

export default MoneyManager