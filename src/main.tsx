
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/frontend-ts-consultations'>
  <App />
  </BrowserRouter>
)
