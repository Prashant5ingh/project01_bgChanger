import { createSlice, nanoid } from '@reduxjs/toolkit';  // nanoid generates unique ids

const initialState = {   // could be array or object
    // todos: [{ id: 1, text: "Hello World" }]  // This text todo would be shown in the begining when app loads.
    todos: [],  // This text todo would be shown in the begining when app loads.
    nextId: 1
}  // initial state --> how store will look in starting like empty, with values or put values by fetching from db.



// Slice is a collection of reducer logic and actions for a feature of the app. Can be said like it's a almost a reducer's bigger version.
export const todoSlice = createSlice({
    name: 'todo', // name of slice
    initialState,
    reducers: {
        // Here we not only write declaration but also definition where as in ContextAPI we only use to declare.

        // state is the current state of the store, action is what we are passing to the reducer to update the state.
        // Always have access of state and action (syntax)
        addTodo: (state, action) => {
            const todo = {
                id: action.payload.id,  // generating unique id using nanoid if id is not provided in payload
                // id: state.nextId, // Use the counter as the ID
                // id: nanoid(),  // generating unique id using nanoid if id is not provided in payload
                text: action.payload.text // payload itself is a object. So, we can further access its properties like  via ".". payload is the data we are passing to the reducer to update the state.
                
            }
            state.todos.push(todo)  // array to push and object to add property
            // state.nextId += 1; // Increment the counter
        },   // function reference but not calling it  --> sayHello

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    } // contains property and functions
})

// exporting the reducers functionallity to use in the components.
export const { addTodo, removeTodo } = todoSlice.actions

// Store will update the state or values given by registered reducer inside the store 
export default todoSlice.reducer