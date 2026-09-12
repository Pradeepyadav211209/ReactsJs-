import './App.css'
import {useState} from 'react'

function App() {
  
  const [counter, setCounter] =useState(5)


  

  const addValue = () => {
    console.log("Clicked",counter);
    setCounter(counter + 1);
    if(counter >=20){
      setCounter(20)
    }
  }

  const removeValue = () =>{
    console.log("Clicked",counter);
    setCounter(counter - 1);
    if(counter <=0){
      setCounter(0)
    }
  }

  return (
    <>
       
       <h2>Dev With Pradeep</h2>
       <h2>Counter value: {counter} </h2>

       <button 
       onClick={addValue}>Add Value {counter}</button>
       <br/>
       <button
       onClick={removeValue}>Remove Value {counter}</button>
       <p>footer {counter}</p>

    </>
      
    
  )
}

export default App
