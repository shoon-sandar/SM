import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './Services.jsx'
import Products from './Products.jsx'
import NewPage from './NewPage.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/services' element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
