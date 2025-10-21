import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  open: boolean
  onClose: () => void
}

export default function MenuPanel({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* backdrop */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, background: '#000',
              zIndex: 40, cursor: 'pointer'
            }}
          />
          {/* painel */}
          <motion.aside
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            style={{
              position: 'fixed', top: 20, left: 20, bottom: 20,
              width: 360, maxWidth: '90vw',
              background: '#0b0f1a', border: '1px solid #1f2633',
              borderRadius: 18, padding: 24, zIndex: 50, overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ letterSpacing: 1 }}>MENU</strong>
              <button className="btn" onClick={onClose}style={{color: '#fff'}}>Fechar</button>
            </div>

            <nav style={{ display: 'grid', gap: 16, marginTop: 24, fontSize: 20 }}>
              <NavLink to="/" onClick={onClose}>Home</NavLink>
              <NavLink to="/teams" onClick={onClose}>Equipas</NavLink>
              <NavLink to="/competitions" onClick={onClose}>Competições</NavLink>
              <NavLink to="/players" onClick={onClose}>Jogadores</NavLink>
              <NavLink to="/about" onClick={onClose}>Sobre</NavLink>
              <NavLink to="/login" onClick={onClose}>Login</NavLink>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
