import { useState } from 'react'
import './App.css'
import { TodoItem } from './components/TodoItem';
import 'remixicon/fonts/remixicon.css'

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([]);
  const [editIndex, setEditIndex] = useState(null);


  const toggleDone = ({target},{index}) => {
    if(target.checked){
      setDone((prev) => {
        const updatedDone = [...prev];
        updatedDone[index] = true; 
        return updatedDone;
      });
    }else{
      setDone((prev) => {
        const updatedDone = [...prev];
        updatedDone[index] = false;
        return updatedDone;
      });
    }
    
    console.log(`Item at index ${index} (${todos[index]}) has been completed`);
  };

  const onSubmit = (e)=>{
    e.preventDefault();
    
    if(editIndex !== null){
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = value;
      setTodos(updatedTodos);
      setEditIndex(null)
    }else{
      setTodos([...todos,value]);
    }
    
    setValue("");
  }

  const onEdit = (_,{parent_props}) => {
    setEditIndex(parent_props.index);
    setValue(parent_props.todo);   
  }

  const onDelete = (_,{parent_props}) => {
    setTodos(todos.filter((_,index)=>{
      return index != parent_props.index;
    }))
  }



  return (
    <div className="container">      
      <h1>To-Do App</h1>
      <form action="#" onSubmit={onSubmit}>
        <input type="text" value={value} onChange={(e)=>{
            setValue(e.target.value);
          }}/>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {
          todos.map((todo,index)=>(    
            <TodoItem 
              isDone={done[index]} 
              todo={todo} 
              index={index} 
              handler={toggleDone}
              onDelete = {onDelete}
              onEdit = {onEdit} /> 
          ))
        }
        
        
        
      </ul>
      
    </div>
  )
}

export default App
