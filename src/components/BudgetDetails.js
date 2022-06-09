import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteBudgetAction} from '../redux/actions/budget';
import {toDatetimeLocal} from '../util';
import './budgetBody.css'


const BudgetDetails = (props) => {
    let {budget, setBudget, balance, setBalance, total, setTotal, currency} = props
    const [input, setInput] = useState("")

    const {budgetState} = useSelector((state) => state.budgetReducer)
    const dispatch = useDispatch()

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const filterTable = () => {
        let newObject = [...budget]
        setBudget(newObject.filter((data) => input === data["budgetDescription"] || input === data["budgetName"]))
    }


    const deleteEntry = (objectId, amount) => {
        // let newObject = [...budget]
        // setBudget(newObject.filter((data,index)=> index !== objectId))
        // let returnedBalance = balance + budgetAmount
        // let newTotal = total - budgetAmount
        // setTotal(newTotal)
        // setBalance(returnedBalance)
        dispatch(deleteBudgetAction({id: objectId, amount}))

    }


    return (
        <div className='budget-details-container'>
            <div>
                <h1>Details</h1>
                <div>
                    <label>Search For:</label>
                    <input onChange={handleInput}/>
                    <button onClick = {filterTable}> Search </button>
                </div>
            </div>
            <h1>Details</h1>
            {budgetState.length > 0 
            ? 
            <table>
                <tr className='table-header'>
                    <th>Date</th>
                    <th>Budget Name</th>
                    <th>Amount</th>
                    <th>Description</th>
                </tr>
    
                {budgetState.map((data, index) =>
                <tr key = {index} className = "data-row">
                    <td>{toDatetimeLocal(data.date)}</td>
                    <td>{data.budgetName}</td>
                    <td>{ currency }{data.budgetAmount}</td>
                    <td>{data.budgetDescription}</td>
                    <td>
                      <button onClick = {() => deleteEntry(index, +data.budgetAmount)} style = {{backgroundColor: "red", color: "white", padding: "2px 10px", border: "unset"}}> 
                         Delete
                      </button>
                    </td>
                </tr> 
                )}
            </table>
            : "Empty"}
        </div>
      )
    }
    
    export default BudgetDetails