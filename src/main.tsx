import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import "@fontsource/quicksand"; 

import '@fontsource/source-sans-3';
import '@fontsource/source-sans-3/700.css';
import '@fontsource/source-sans-3/400-italic.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
