import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { MainLayout } from './layouts/MainLayout.jsx'
import { Home } from './pages/Home.jsx'
import { Aboutme } from './pages/Aboutme.jsx'
import { Nuevoagente } from './pages/Nuevoagente.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='aboutme' element={<Aboutme/>}/>
          <Route path='nuevoagente' element={<Nuevoagente/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
