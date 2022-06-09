import React, {useState} from 'react'

const LoginButton = ({changeState}) => {
    const [login, setLogin] = useState({username: "", password: ""})

    const handleInput = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const submitHandle = () => {
        if (login.username === "Increase" && login.password === "5647") {
            changeState(true)
        }
    }

    return (
        <>

            <div className='login container'>
                <h3>LOGIN PAGE</h3>
                <div className='username'>
                    <h4>username</h4>
                    <input name="username" onChange={handleInput}/>
                </div>

                <div className='password'>
                    <h4>password</h4>
                    <input name="password" onChange={handleInput}/>
                </div>

                <button onClick={submitHandle}>Submit</button>


            </div>

        </>
    )
}


// function App(){
//   const userName = "Increase"
//   return (
//     <>
//       {/* <Counter>
//         <p>Hello</p>
//       </Counter> */}
//       <Counter userName={userName}/>
//     </>
//   )
// }


// function Counter({userName}) {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     // const newCounterValue = counter + 1
//     // setCounter(newCounterValue)

//     // setCounter((currentState) => {
//     //   return currentState + 1
//     // })
//   }

//   return (<div>
//     {userName}
//     {counter}
//     <button onClick={increment}>Click</button>
//   </div>)
// }


export default LoginButton