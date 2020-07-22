import React, { useState } from "react";
import './App.css';

function Todo({ item, editTodo, deleteTodo }) {
  const [edit, setEdit] = useState(false);
  const [toEdit, setToEdit] = useState({});

  return (
    <div>
       { item.text !=="" && 
        <div>
         
          {!edit ? (
            <div className="element">
              <p className="itemText">{item.text}</p>
              <button className="el myButton" onClick={() => {
                setEdit(true)
                setToEdit(item)
                }}>Edit</button>
              <button className="el myButton" onClick={() => {
                deleteTodo(item)
                }}>Delete</button>
            
            </div>
          ) : (
            <div>
              <input className="input" type="text" value={toEdit.text}  onChange={e => setToEdit({...toEdit, text: e.target.value})} />
              <button className="el myButton" onClick={() => {
                editTodo(toEdit)
                setEdit(false)
                }}>Confirm</button>
            </div>
          )}  {" "}  
        </div>
        }
    </div>
  );
}

export default Todo;
