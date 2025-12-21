import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
import { tasklist,addTask } from './Service'
import { nanoid } from '@reduxjs/toolkit';
function AddTodo() {  // using usedispatch

  const [input, setInput] = React.useState('')
  // const [list, setLists] = useState()
  const selectedTodos = useSelector(state => state.todos) // it gives access of state as parameter
  const dispatch = useDispatch() // adds or changes value to the store using reducers
  // useDispatch and useSelector are use to connect react with redux store (wiring between react and redux)
  
  async function tasklistData() {
    const tasks = await tasklist();
    // setLists(tasks[0].content);
    tasks.forEach(task => {

      // dispatch(addTodo(task.content))
      dispatch(addTodo({id:task.id,text:task.content}))
    })
    
  }
  useEffect(() => {
    tasklistData();
    
    
  },[])

  const addTodoHandler = (e) => {
    e.preventDefault();
     if(input === '') return;
     const newId = nanoid();
    dispatch(addTodo({id:newId,text:input}))  // dispatching addTodo action to the reducer with payload as input
    setInput('') // to clear input field after adding a todo
    
    addTask({ id:newId,content: input }); // content is the property name expected by the backend
  }


  return (
     <form onSubmit={addTodoHandler} className="space-x-3 mt-16">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo