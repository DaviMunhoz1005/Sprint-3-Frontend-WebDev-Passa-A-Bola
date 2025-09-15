import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SubscribeCopa from './pages/SubscripeCopa'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SubscribeCopa />
  </StrictMode>,
)
