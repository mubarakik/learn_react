
import { useState } from 'react';
import './App.css'
// import Button from './components/Button'
// import ResultPreview from './components/ResultPreview'

function App() {
  const [count, setCount] = useState(0);
  
  function onBtnClick(action: string){
    if (action == "add"){
      setCount(count + 1);
    }else if (action == "minus"){
      setCount(count - 1);
    }else {
      alert("Invalid action");
    }
  }
  return (
    <>
      {/* <ResultPreview res = "Answer"/>
      <Button /> */}      
      <h1>Clicks are: {count}</h1>
      <button onClick={()=>{
        onBtnClick("minus");        
      }}>Subtract</button> 
      <button onClick={()=>{
        onBtnClick("add");
      }}>Add</button> 
    </>
  )
}

export default App
