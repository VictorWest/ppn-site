import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StateContextProvider } from './store/ContextStore.jsx'

createRoot(document.getElementById('root')).render(
  <StateContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </StateContextProvider>

)
