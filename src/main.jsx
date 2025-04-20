import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { JobProvider } from './Context/JobContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobProvider>
    <App />
    </JobProvider>
  </StrictMode>,
)
