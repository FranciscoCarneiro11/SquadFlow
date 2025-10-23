import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import MenuPanel from '../MenuPanel/MenuPanel'
import TrueFocus from '../../animations/TrueFocus'
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
            gridTemplateColumns: '1.6fr 0.9fr 1fr', // 1) Slogan   2) Logo   3) Links 
            alignItems: 'center',
            padding: '14px 0',
            columnGap: 16,
          }}
        >
          {/* ESQUERDA: SLOGAN */}
          <div style={{ justifySelf: 'start' }}>
            <TrueFocus 
            sentence="Sport Mind"
            manualMode={false}
            blurAmount={5}
            borderColor="rgba(124,77,255,.6)"
            animationDuration={2}
            pauseBetweenAnimations={1}
            />
          </div>

          {/* MEIO: LOGO */}
          <Link to="/" className="flex items-center">
            <img src={logoUrl} alt="SquadFlow logo" className="logo-img" />
          </Link>

          {/* DIREITA: LINKS */}
          <nav
            className="navbar"                    
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

            <li className="nav-item has-dd">      
              <a href="/competicoes" className="nav-link">Competições</a>
              <div className="dd" role="menu" aria-label="Competições">
                <a className="dd-item" href="/competicoes/liga-portugal">Liga Portugal Betclic</a>
                <a className="dd-item" href="/competicoes/taca-de-portugal">Taça de Portugal</a>
                <a className="dd-item" href="/competicoes/champions-league">UEFA Champions League</a>
                <a className="dd-item" href="/competicoes/europa-league">UEFA Europa League</a>
                <a className="dd-item" href="/competicoes/premier-league">Premier League</a>
                <a className="dd-item" href="/competicoes/la-liga">La Liga</a>

                <div className="dd-divider" aria-hidden="true"></div>
                <a className="dd-item dd-all" href="/competicoes">Ver todas as competições</a>
              </div>
            </li>

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
