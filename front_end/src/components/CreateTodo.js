import React, { useState } from 'react';
import axios from 'axios';

const CreateTodo = props => {
  const [todo, setTodo] = useState({
    todo_description: '',
    todo_responsible: '',
    todo_priority: '',
    todo_completed: false
  })

  const onChangeTodoDescription = (e) => {
    setTodo({
      ...todo, todo_description: e.target.value
    })
  }
  const onChangeTodoResponsible = (e) => {
    setTodo({
      ...todo, todo_responsible: e.target.value
    })
  }
  const onChangeTodoPriority = (e) => {
    setTodo({
      ...todo, todo_priority: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    let newTodo = {
      todo_description: todo.todo_description,
      todo_responsible: todo.todo_responsible,
      todo_priority: todo.todo_priority,
      todo_completed: todo.todo_completed
    }
    axios.post('http://localhost:4000/todos/add', newTodo)
      .then(res => console.log(res.data));
    setTodo({
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    })
    window.location.href = '/'
  }
  return (
    <div style={{ marginTop: 10 }}>
      <h3>Create New Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Description: </label>
          <input type="text"
            className="form-control"
            value={todo.todo_description}
            onChange={onChangeTodoDescription}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            value={todo.todo_responsible}
            onChange={onChangeTodoResponsible}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={todo.todo_priority === 'Low'}
              onChange={onChangeTodoPriority}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={todo.todo_priority === 'Medium'}
              onChange={onChangeTodoPriority}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={todo.todo_priority === 'High'}
              onChange={onChangeTodoPriority}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Create Todo" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default CreateTodo