import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo'

const TodoList = props => {
  const [todoList, setTodoList] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:4000/todos')
      .then(res => {
        setTodoList(res.data)
      })
      .catch(function (error){
        console.log(error);
    })
  },[])

  const todoRow = () => {
    return todoList.length > 0 && todoList.map((todo, index)=> {
      return <Todo key={index} todo={todo}/>
    })
  }
  return (
    <div>
      <h3>Todos List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todoRow()}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList