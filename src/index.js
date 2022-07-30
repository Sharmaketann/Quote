import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const appHeight = () =>
  document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
window.addEventListener('resize', appHeight)
appHeight()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
