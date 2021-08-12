import React, { useState } from 'react'



const Statistics = (props)=>{

  if (props.all ===0) {
    return (
      <div>

        No Feedback Given
      </div>
    )
  }


  return (
    <div>





      

      <p>good {props.good}</p>
      
      <p>neutral {props.neutral}</p>

      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
      
      


    </div>






    )




}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const average = (good-bad)/all
  const positive = good/all

  return ( 
    <div>
      <h1>Give Feedback</h1>

      <button onClick={()=>setGood(good+1)}> good </button>

      <button onClick={()=>setNeutral(neutral+1)}> neutral </button>

      <button onClick={()=>setBad(bad+1)}> bad </button>
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral}
        all={all} average={average} positive={positive} />

      
      
    </div>
  )
}

export default App