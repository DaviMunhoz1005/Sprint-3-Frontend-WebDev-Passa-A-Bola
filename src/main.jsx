import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RegisterTeam from './pages/RegisterTeams'
import Login from './pages/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegisterTeam />
  </StrictMode>,
)
