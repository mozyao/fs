import React from 'react'



const Hello = (props) => {
  return (
    <div>      
      <p>This is the hello component, my name is {props.name}
      , I am {props.age} years old.</p>
    </div>
    )
}


// this App component is given the value of counter
//via the props
const App = (props) => {
  const now = new Date()
  const a = 10
  const b = 20
  const myFullName = "Wei Yao"
  const age = 28
  const {counter} = props // increase for each second

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Mozzie" age= {2021-1993}/>
      <Hello name = {myFullName} age= {age}/>
    
      
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <br>
      </br>
      <p> Here is page re-rendering</p>
      {counter} 
    </div>

  )
}
export default App