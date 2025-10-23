import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Teams from './pages/Teams.tsx'
import Players from './pages/Players.tsx'
import About from './pages/About.tsx'
import Login from './pages/Login.tsx'
import './index.css'
import './components/sections/MagicBento/MagicBento.css';
import Competitions from './pages/Competitions.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path="competitions" element={<Competitions />} />
          <Route path="players" element={<Players />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

