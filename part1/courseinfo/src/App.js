import React from 'react'

const Header = (props) => {
  return[ <h1> {props.title}</h1>]

}

const Content = (props) =>{
  return (
    <>
      <p>
        {props.part1} {props.e1}
      </p>
      <p>
        {props.part2} {props.e2}
      </p>
      <p>
        {props.part3} {props.e3}
      </p>
    </>
  )
}

const Total = (props) =>{
  return (
    <div>
      <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
    </div>
  )
}
















const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title = {course}/>
      <Content part1={part1} part2={part2} part3={part3}
      e1={exercises1} e2={exercises2} e3={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
      

      
    </div>
  )
}

export default App