// This is where React is initialized
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// takes two arguments 1. the component to insert 2. where to insert
// we want to insert the main App component within the root div
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>, 
    document.getElementById('root')
)