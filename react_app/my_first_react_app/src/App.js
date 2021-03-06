import React,{useState} from 'react'




const Hello = ({name,age}) => {

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Halo =(props) =>{

  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
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
  const myAge = 27
  const {count} = props // increase for each second
  const [counter,setCounter]=useState(0)
  const [counter2,setCounter2]=useState(0)
  const [counter3,setCounter3]=useState(0)
  const p = {
    name: 'Wei Yao',
    age: 27,
  }
  const {name,age} = p


  //lift uo the state in App Componnet

  const increaseByOne = () => { setCounter2(counter2+1)}
  const setToZero = () => { setCounter2(0)}
  const decreaseByOne = () => { setCounter2(counter2-1)}

  

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
  // we need to pass the event handler and the text title
  // down to Button from APP through props

  const Button = (props) => {
    return (
      <button onClick={props.onClick}>
        {props.text}
       </button>

    )

  }

  //console.log('rendering...',counter1)
  return (
    <div>
      <h1>Greetings</h1>
    
      <Hello name = {name} age= {age}/>
      <Halo name = {myFullName} age= {myAge}/>
      
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
        {/* <button onClick={increaseByOne}>
          Increase
        </button>

        <button onClick={setToZero}>
          zero
        </button>
         */}
         <Button onClick={increaseByOne} 
           text='Increase'>

         </Button>

        <Button onClick={decreaseByOne} 
          text='Decrease'>

        </Button>

        <Button onClick={setToZero}
        text='Zero'>

        </Button>
        
        
         

        

        

      </div>

    </div>

  )
}
export default App