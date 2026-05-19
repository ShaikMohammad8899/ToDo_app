// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


// import React, { useState, useEffect } from 'react'
// import Navbar from './components/Navbar'
// import TodoForm from './components/TodoForm'
// import TodoList from './components/TodoList'
// import './App.css'

// export default function App() {

//   const [todos, setTodos] = useState([])
//   const [search, setSearch] = useState('')


//   // Question 2 - Add Todo
//   function addTodo(task) {
//     const newTodo = {
//       id: Date.now(),
//       title: task,
//       completed: false
//     }
//     setTodos([newTodo, ...todos])
//   }

//   // Question 5 - Delete Todo
//   function deleteTodo(id) {
//     setTodos(todos.filter((todo) => todo.id !== id))
//   }

//   // Question 4 - Filter Todos
//   const filteredTodos = todos.filter((todo) =>
//     todo.title.toLowerCase().includes(search.toLowerCase())
//   )

//   return (
//     <div>
//       <Navbar />
//       <div className="main">
//         <TodoForm addTodo={addTodo} search={search} setSearch={setSearch} />
//         <TodoList todos={filteredTodos} deleteTodo={deleteTodo} />
//       </div>
//     </div>
//   )
// }



import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

export default function App() {

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  const [search, setSearch] = useState('')

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Add Todo
  function addTodo(task) {
    const newTodo = {
      id: Date.now(),
      title: task,
      completed: false
    }
    setTodos([newTodo, ...todos])
  }

  // Delete Todo
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Filter Todos
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <Navbar />
      <div className="main">
        <TodoForm addTodo={addTodo} search={search} setSearch={setSearch} />
        <TodoList todos={filteredTodos} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}