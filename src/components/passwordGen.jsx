import React, { use } from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'

function PasswordGen() {
    const [length, setlength] = useState(8)
    const [number, setnumber] = useState(false)
    const [chars, setchars] = useState(false)
    const [passwordField, setpasswordField] = useState("")// It will filled when page is loaded using API OR data provided by us.

    const passwordRef = useRef(null) // useRef is used to create a mutable object that persists for the full lifetime of the component. It is used to store a reference to a DOM element or a value that does not trigger re-renders when changed.
    // useRef is used to access the DOM element directly without causing re-renders, it can be used to store any mutable value that does not need to trigger a re-render when changed. 
    
    
    const passwordGenerates = useCallback(() => { // cache memory
        let pass = ""
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        if (number) str += "0123456789"
        if (chars) str += "@#₹%&[]÷×"


        for (let i = 0; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1) // +1 to avoid Oth value - > this line generate random index value of array. 
            pass += str.charAt(char) // feching the char from string

        }
        setpasswordField(pass)

    }, [length, number, chars, setpasswordField]) // fn -> normal func or arrow. setpasswordField is used to update the passwordField state with the generated password. 
    // setpasswordField is used for optimization here. even if we doesn't use it, we can still use the function without any issues.
    // useCallback is not responsible for the function to be called or run, it is just used to memoize the function and stores in cache so that it does not get recreated on every render.
    // It's a concept of memoization, it is standard practice to provide a function as a dependency to useCallback to ensure that the function is only recreated when necessary.

    // useCallback is used to memoize the function so that it does not get recreated on every render, which can be useful for performance optimization.
    // useCallback is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed.
    // It will only changes to store in cache when length, number, chars or setpasswordField changes.
    // This is useful when passing the function as a prop to child components, preventing unnecessary re-renders.

    //useEffect is used to call the passwordGenerates function or re-render or run again when the component is mounted or when any of the dependencies change.
    // It is used to perform side effects in functional components, such as fetching data, updating the DOM, or subscribing to events.

    const copyPassword = useCallback(() => {
        passwordRef.current.select() // highlights selected text in the input field.
        passwordRef.current?.setSelectionRange(0,100) // sets the selection range of the input field to the entire text, so that it can be copied.
        
        window.navigator.clipboard.writeText(passwordField) // copy the password to clipboard
        alert("Password copied to clipboard") // alert the user that password is copied to clipboard
    
    },[passwordField]) // dependencies could be empty or passwordfield.

    useEffect(() => {  // (1st preferenece given to useEffect) Executes just after the page is loaded 
        passwordGenerates() // calling the function to generate password when page is loaded.   

    }, [length,number,chars,passwordGenerates]) // useEffect will run when page is loaded or any of the dependencies changes.
    return (
        <div >
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-5 p-4 bg-gray-700'>
                <h1 className='text-center text-gray-200 my-5 mb-8'>Password Generator</h1>
                <div className='flex shadow-md rounded-lg overflow-hidden '>
                    <input type="text" 
                    value={passwordField} 
                    className="outline-none text-orange-500 w-full py-1 px-5 bg-white" 
                    placeholder='Password'
                    ref={passwordRef} 
                    readOnly />
                    <button 
                    className="outline-none bg-blue-700
                     text-orange-300 px-3 py-0.5 shrink-0"
                     onClick={copyPassword}
                     >
                        COPY
                    </button>
                </div>
                <div className='flex text-sm gap-x-3 '>
                    <div className='flex items-center mt-2 gap-x-1'>
                        <input
                            type="range"
                            min={6}
                            max={50}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => setlength(e.target.value)}
                        />
                        <label className='text-gray-200'>Length: {length}</label>

                    </div>

                    <div className='flex items-center mt-2 gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={number}
                            id="number"
                            onChange={() => setnumber((prev) => !prev) }
                        />
                        <label className='text-gray-200'>Number</label>
                    </div>

                    <div className='flex items-center mt-2 gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={chars}
                            id="char"
                            onChange={() => setchars((prev) => !prev) }
                        />
                        <label className='text-gray-200'>Special Character</label>
                    </div>



                </div>

            </div>
        </div>
    )
}



export default PasswordGen








