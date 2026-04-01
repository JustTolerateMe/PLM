import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PLMProvider } from './context/PLMContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PLMProvider>
      <App />
    </PLMProvider>
  </React.StrictMode>,
)
