import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/Redux-toolkit/main_react-redux/AddTodo.jsx'
import Todos from './components/Redux-toolkit/main_react-redux/Todos.jsx'


function App() {



  return (
    <>
    

      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />

    
    </>
  )
}

export default App
