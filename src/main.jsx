import React,{ StrictMode } from 'react'
import ReactDOM,{ createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from './components/Redux-toolkit/app/store'

// Provider makes the redux store available to any nested components that need to access the Redux store.
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  // </StrictMode>,
)
