import React, { useState } from 'react'

export default function TodoForm({ addTodo, search, setSearch }) {

  const [task, setTask] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (task.trim() === '') return    // don't add empty task
    addTodo(task)
    setTask('')                       // clear input after adding
  }

  return (
    <div className="form-section">

      {/* Add Todo */}
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Search Todo */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

    </div>
  )
}