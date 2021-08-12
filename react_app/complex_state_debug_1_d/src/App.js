
import './App.css';
import React,{useState} from 'react'

// we can use the History Component to take care of all clicks records
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  //Combine left and right into a single object 
  //const[clicks, setClicks] = useState({left: 0, right: 0})

  // a piece of state contains an array of every clicks occurred in the app
  const [allClicks,setAll] = useState([])
  // then we can do the below event handler

  const handleLeftArray = () => {
    setAll(allClicks.concat('L'))
    setLeft(left+1)

  }
  const handleRightArray = () => {
    setAll(allClicks.concat('R'))
    setRight(right+1)

  }
  const [v,setValue] = useState()
  
  const setToValue = (newValue) => {
    setValue(newValue)

  }

  const [greetingMessage,toWhom] = useState('Here is the greeting message')

  const greeting = (who) =>{
    return () =>{
      console.log("hello",who)
    }
    

  }

  // const handleLeftClick =() => {
  //   const newClicks = {
  //     left: clicks.left +1,
  //     right: clicks.right
       
  //   }
  //   setClicks(newClicks)
  // }


  // after 2018 we can do the following object spread syntax
  // const handlell =() => {
  //   const newClicks = {
  //     ...clicks,
  //     left:clicks.left+1
  //   }
  //   setClicks(newClicks)
    
  
  // 


  // also, we don't need to create a new variable inside the event handlers
  // const handleRR =() =>{ 

  //   setClicks({...clicks, right:clicks.right+1})
  
  
  // }
  // const handleRightClick =() =>{ 
  //   const newClicks = {
  //     left: clicks.left ,
  //     right: clicks.right + 1
    
  //   }
  //     setClicks(newClicks)
  // }

//return(
    // <div>
    //   {left}
    //   <button onClick={() => setLeft(left + 1)}>
    //     left
    //   </button>
    //   <button onClick={() => setRight(right + 1)}>
    //     right
    //   </button>
    //   {right}
    // </div>

    // <div>
    //   {clicks.left}
    //   <button onClick={() => handlell()}>
    //     Left
    //   </button>

      
    //   <button onClick={() => handleRR()}>
    //     Right
    //   </button>
    //   {clicks.right}

    // </div>

  //)







  return (

    <div>
      {left}
      <Button handleClick={handleLeftArray} text = 'LEFT'/>
      

      
      <Button handleClick={handleRightArray} text = "RIGHT" />    
      {right}

{/* we can also build a History component to handle it*/}
      <p>{allClicks.join(' ')}</p>
      <History allClicks={allClicks}/>
      <button onClick={()=> setToValue(999)}>
        build999
      </button>
      {v}
      <button onClick={()=> setToValue(0)}>
        Reset
      </button>

      <button onClick={()=> setToValue(v+1)}>
        plusOne
      </button>

      <br></br>
      {greetingMessage}
      <button onClick={greeting('world')}> 全世界</button>
      <button onClick={greeting('react')}> React</button>
      <button onClick={greeting('NASA')}> NASA</button>
      

    </div>





  )
}

export default App;
