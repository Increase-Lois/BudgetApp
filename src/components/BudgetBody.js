import React, {useState} from 'react';
import BudgetEntry from "./BudgetEntry";
import BudgetDetails from "./BudgetDetails";
import "./budgetBody.css"
import BudgetTotal from "./BudgetTotal"
import {useParams} from 'react-router-dom';

const BudgetBody = (props) => {
    let {balance, setBalance, budget, setBudget, currency} = props
    let {identity} = useParams()
    const [total, setTotal] = useState(0)


    return (
        <div className="budget-body">
            <div className="text-intro">
                <h1>{new Date().getHours() < 12 ? "Good Morning" :
                    (new Date().getHours() > 11 && new Date().getHours() < 17 ? "Good Afternoon" :
                        "Good Evening")} {identity.charAt(0).toUpperCase() + identity.slice(1)},
                    <br/>
                    Welcome To Your Personal Budget</h1>
                <p>Enter the price, description and give a special name to your expenditure</p>
            </div>
            <div className="budget-body-sectioned">
                <BudgetEntry budget={budget} setBudget={setBudget} total={total} setTotal={setTotal} balance={balance}
                             setBalance={setBalance}/>
                <BudgetDetails currency={currency} budget={budget} setBudget={setBudget} total={total}
                               setTotal={setTotal} balance={balance} setBalance={setBalance}/>
                <BudgetTotal total={total}/>
            </div>
        </div>
    )
}

export default BudgetBody;