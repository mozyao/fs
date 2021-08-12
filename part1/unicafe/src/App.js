import React, { useState } from 'react'


const StatisticLine = ({ value, text }) => {
  if (text ==="positive") {
    return(<tr><td>{text} {value}%</td></tr>)
  }
  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = ({clicks})=>{ // we can also use props 
  const all = clicks.good+clicks.neutral+clicks.bad
  const average = (clicks.good-clicks.bad)/all
  const positive = clicks.good/all


  if (all ===0) {
    return (
      <div>

        No Feedback Given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>

          <StatisticLine text="good" value={clicks.good} />
          <StatisticLine text="neutral" value={clicks.neutral} />
          <StatisticLine text="bad" value={clicks.bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />


        </tbody>

      </table>


    </div>
    )



}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  // save clicks of each button to its own state


  const [clicks,setClicks] = useState({good:0,bad:0,neutral:0})


  const handleGoodClick = () =>
    setClicks({...clicks, good: clicks.good + 1})

  const handleNeutralClick = () =>
    setClicks({...clicks, neutral: clicks.neutral + 1})

  const handleBadClick = () =>
    setClicks({...clicks, bad: clicks.bad + 1})


  return ( 
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={handleGoodClick} text="good"/>

      <Button handleClick={handleNeutralClick} text="neutral" />

      <Button handleClick={handleBadClick} text="bad" />
      <h2>statistics</h2>

      <Statistics clicks ={clicks}/>

      
      
    </div>
  )
}

export default App