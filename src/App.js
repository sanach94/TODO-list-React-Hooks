import React from 'react';
import './App.css';
import {useState} from 'react';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

// import ListItems from './ListItems'

function App() {
  const [text,setText]= useState("")
  
  const [list,setList]= useState([])
  
  const handleInput= (e)=>{
    setText(e.target.value)
  }
  const addToDo=()=> {
    if(text !==""){
    const items = [...list, {text: text, id: uuidv4()}];
    setList(items)
    setText("")}
  } 
  const deleteTodo = todo => {

    setList(list.filter(el => el.id !== todo.id))
  }
  const editTodo = todo => {
    setList(list.map(el => el.id === todo.id ? todo : el))
  }
 
  return (
    <div className="App">
      <h2>My To Do List</h2>
   <input className="input" type="text" value={text} onChange={handleInput} />
    <button className="form myButton" onClick={addToDo}>add</button>
 
    {  list.map(el => < Todo item={el} editTodo={a => editTodo(a)} deleteTodo={a => deleteTodo(a)}/>)} 


    </div>
  );
}

export default App;
