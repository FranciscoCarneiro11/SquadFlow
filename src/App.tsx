import { Outlet } from 'react-router-dom'
import Header from './components/Header'     // ← trocado de '@/...' para './...'

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
