import React,{useState} from 'react'




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
  const {count} = props // increase for each second
  const [counter,setCounter]=useState(0)
  const [counter2,setCounter2]=useState(0)
  const [counter3,setCounter3]=useState(0)



  //lift uo the state in App Componnet

  const increaseByOne = () => { setCounter2(counter2+1)}
  const setToZero = () => { setCounter2(0)}


  // auto count
  setTimeout(
    ()=>setCounter(counter+1),
    1000

  )
  // count only clicked
  const plusClick = () => {
    console.log('You have clicked the plus button '+counter2+' times.')
    setCounter3(counter3+1)

  }

  // pass states down to DIsplay Component through props
  const Display =(props) =>{
    return (
      <div>{props.counter}</div>
    )
  }


  //console.log('rendering...',counter1)
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
      {count} 


      <p>Here is the intro of stateful </p>
      {counter}

      <p> Here is counter by click button</p>
      {counter3}
      <div>
        <button onClick={plusClick}>
          Plus
        </button>


        <button onClick={() => setCounter3(0)}> 
         Reset
        </button>
        <br>
        </br>
        <p>If we lift up the states - same effect:</p>
        



        <Display counter={counter2}/>
        <button onClick={increaseByOne}>
          Increase
        </button>

        <button onClick={setToZero}>
          zero
        </button>
        
        

        

      </div>

    </div>

  )
}
export default App