import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex justify-center bg-slate-950'>
      <div className='flex w-full max-w-xl'>
        <App />
      </div>
    </div>
  </StrictMode>,
)
