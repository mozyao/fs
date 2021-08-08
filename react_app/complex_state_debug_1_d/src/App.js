
import './App.css';
import React,{useState} from 'react'


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
      <button onClick={handleLeftArray}>
        Left
      </button>

      
      <button onClick={handleRightArray}>
        
        Right
      </button>
      {right}


      <p>{allClicks.join(' ')}</p>

    </div>





  )
}

export default App;
