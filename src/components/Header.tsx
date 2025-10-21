import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import MenuPanel from './MenuPanel'
import TrueFocus from './TrueFocus'
import logoUrl from '../assets/SquadFlowLogo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* NAVBAR fixa topo */}
      <header
        className="container"
        style={{
          position: 'relative',
          top: 0,
          zIndex: 30,
          backdropFilter: 'blur(6px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 0.9fr 1fr', // 1) Slogan (esq)  2) Logo (meio)  3) Links (dir)
            alignItems: 'center',
            padding: '14px 0',
            columnGap: 16,
          }}
        >
          {/* ESQUERDA: SLOGAN (TrueFocus) */}
          <div style={{ justifySelf: 'start' }}>
            <TrueFocus 
            sentence="SDSD Talento"
            manualMode={false}
            blurAmount={5}
            borderColor="rgba(124,77,255,.6)"
            animationDuration={2}
            pauseBetweenAnimations={1}
            />
          </div>

          {/* MEIO: LOGO/NOME */}
          <Link to="/" className="flex items-center">
            <img src={logoUrl} alt="SquadFlow logo" className="logo-img" />
          </Link>

          {/* DIREITA: LINKS */}
          <nav
            style={{
              justifySelf: 'end',
              display: 'flex',
              gap: 18,
              alignItems: 'center',
              fontSize: 16,       
            }}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/teams">Equipas</NavLink>
            <NavLink to="/competitions">Competições</NavLink>
            <NavLink to="/players">Jogadores</NavLink>
            <NavLink to="/about">Sobre</NavLink>
            <NavLink to="/login" className="btn" style={{ fontSize: 15, padding: '10px 16px' }}>
              Login
            </NavLink>
          </nav>
        </div>
      </header>

      {/* BOTÃO MENU flutuante */}
      <button
        className="menu-fab"
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menu"
      >
        ✕ MENU
      </button>

      {/* Painel lateral */}
      <MenuPanel open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
