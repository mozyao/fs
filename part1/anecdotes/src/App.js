import React, { useState } from 'react'


const Button =({onClick,text})=>
  <button onClick={onClick}> {text}</button>
  
const Topvote = ({anecdotes,votes}) =>{
  const currTop= Math.max(...votes)
  const topIndex= votes.indexOf(currTop)
  if (currTop===0){
    return(
      <p>Please vote some anecdotes first</p>
    )
  }
  return (
    <div>
      <p>{anecdotes[topIndex]}</p>
      <p>has {currTop} votes</p>
    </div>
  )

}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [votes,setVotes] =useState(Array(7).fill(0))


  const [selected, setSelected] = useState(0)
  // const randomIndex = Math.floor(Math.random() * anecdotes.length ) 
  // Bug if put the var here, making it const forever 

  // need to be initialized inside the handler , each time it handles, it creates a new variable
  const handleAnecdoteClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length )
    setSelected(randomIndex)
    // console.log(randomIndex)
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected]+=1 
    setVotes(copy) // set the new copy as our new state
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleAnecdoteClick} text="next anexdote" />
      <Button onClick={handleVoteClick} text="vote"/>
      <Topvote anecdotes={anecdotes}  votes={votes} />
    </div>
  )
}

export default App