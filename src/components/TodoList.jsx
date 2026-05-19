import React from 'react'

export default function TodoList({ todos, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="no-todos">No tasks found!</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <span>{todo.title}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))
      )}

    </div>
  )
}