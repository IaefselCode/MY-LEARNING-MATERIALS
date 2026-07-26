import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react"; //importing material tailwins


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>{/* setting up Material Tailwind */}
      <App />
    </ThemeProvider>
  </StrictMode>,
  // <App />
)


