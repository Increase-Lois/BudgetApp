import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './Converter.css'


function Converter(props) {

    const [exchangeRate, setExchangeRate] = useState([])
    const {balance, setBalance} = props
    const [option, setOption] = useState("")
    const [rate, setRate] = useState({})

    const handleOptionChange = (e) => {
        setOption(e.target.value)
    }


    useEffect(() => {
        axios.get('https://v6.exchangerate-api.com/v6/9177ccc3a4d4e7d11c3c3feb/latest/NGN')
            .then((response) => {
                console.log(response.data.conversion_rates);
                setExchangeRate(Object.keys(response.data.conversion_rates))
                setRate(response.data.conversion_rates)
                setBalance(balance)
            })
    }, [])

    useEffect(() => {
        setBalance(balance * rate[option])
    }, [option])

    return (
        <div>
            <select className='dropdown' onChange={handleOptionChange}>
                {exchangeRate.map((value, index) =>
                    <option key={index}> {value} </option>
                )}
            </select>
        </div>
    )
}

export default Converter