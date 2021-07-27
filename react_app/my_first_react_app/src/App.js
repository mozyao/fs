import React from 'react'



const Hello = (props) => {
  return (
    <div>      
      <p>This is the hello component, my name is {props.name}
      , I am {props.age} years old.</p>
    </div>
    )
}
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const myFullName = "Wei Yao"
  const age = 28


  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Mozzie" age= {2021-1993}/>
      <Hello name = {myFullName} age= {age}/>
    
      
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
export default App