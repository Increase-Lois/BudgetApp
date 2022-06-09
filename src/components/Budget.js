import React, {useState} from 'react'
import './Budget.css'
import BudgetBalance from './BudgetBalance'
import BudgetBody from './BudgetBody'

const Budget = (props) => {
    const [balance, setBalance] = useState()
    const [budget, setBudget] = useState([])
    const [currency, setCurrency] = useState("NGN")


    return (
        <div className='budget-container'>
            <BudgetBalance  setCurrency = {setCurrency} budget= {budget} setBudget = {setBudget} balance = {balance} setBalance = {setBalance}/>
            <BudgetBody currency = {currency} budget= {budget} setBudget = {setBudget} customerName = {props.customerName} balance={balance} setBalance={setBalance}/>
        </div>
      )
    }
    
export default Budget