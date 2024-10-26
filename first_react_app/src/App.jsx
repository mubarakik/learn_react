import { act, useState } from 'react'
import './App.css'
import { Button } from './components/Button';
import 'remixicon/fonts/remixicon.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(_,{action}){
    if(action == "add"){
      setCount(count + 1);
    }else if(action == "minus"){
      setCount(count - 1);
    }else{
      alert("invalid action");
    }
  }

  return (
    <>
    <div className="counter">
      <h1>Count is: {count}</h1>
      {/* <button onClick={()=>handleClick("minus")}>Subtract</button>
      <button onClick={()=>handleClick("add")}>Add</button> */}
      <div className="controls">
        <Button 
          type="secondary" 
          icon="ri-subtract-line" 
          // label="Minus" 
          action="minus" 
          handler={handleClick}/>

        <Button 
          type = "secondary" 
          icon="ri-add-line" 
          // label="Add" 
          action="add" 
          handler={handleClick}/>
      </div>
    </div>
      

    </>
  )
}

export default App
