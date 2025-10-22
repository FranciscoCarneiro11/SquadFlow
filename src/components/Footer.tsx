import "./Footer.css";
import logoUrl from '../assets/SquadFlowLogo.png';
import { Link } from 'react-router-dom'

const links = {
  produto: [
    { label: "Home", href: "/" },
    { label: "Equipas", href: "/equipas" },
    { label: "Competições", href: "/competicoes" },
    { label: "Jogadores", href: "/jogadores" },
  ],
  recursos: [
    { label: "Documentação", href: "/docs" },
    { label: "FAQ", href: "/faq" },
    { label: "Suporte", href: "/suporte" },
  ],
  legal: [
    { label: "Termos", href: "/termos" },
    { label: "Privacidade", href: "/privacidade" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sf-footer" aria-labelledby="footer-title">
      <div className="sf-footer__glow" aria-hidden="true" />

      <div className="sf-footer__inner">
        {/* Brand + pitch curto */}
        <div className="sf-brand">
          <Link to="/" className="flex items-center">
            <img src={logoUrl} alt="SquadFlow logo" className="logo-img" />
          </Link>
          <p id="footer-title" className="sf-brand__text">
            Gestão de equipas, jogos e estatísticas — rápida, clara e no mesmo sítio.
          </p>
        </div>

        {/* Colunas de links */}
        <nav className="sf-links" aria-label="Links de navegação">
          <div className="sf-col">
            <h6>Produto</h6>
            <ul>
              {links.produto.map((i) => (
                <li key={i.label}><a href={i.href}>{i.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="sf-col">
            <h6>Recursos</h6>
            <ul>
              {links.recursos.map((i) => (
                <li key={i.label}><a href={i.href}>{i.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="sf-col">
            <h6>Legal</h6>
            <ul>
              {links.legal.map((i) => (
                <li key={i.label}><a href={i.href}>{i.label}</a></li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Newsletter compacta */}
        <div className="sf-news">
          <h6>Novidades</h6>
          <p className="sf-news__hint">Recebe atualizações ocasionais — sem spam.</p>
          <form className="sf-news__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              name="email"
              placeholder="O teu email"
              aria-label="Email para novidades"
              required
            />
            <button className="btn-primary" type="submit">Subscrever</button>
          </form>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="sf-footer__bar">
        <p>© {year} SquadFlow. Todos os direitos reservados.</p>

        <ul className="sf-social" role="list" aria-label="Redes sociais">
          <li>
            <a href="https://github.com" aria-label="GitHub" rel="noopener" target="_blank">
              {/* ícone simples inline para evitar dependências */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.79.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.91 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.31 1.23a11.52 11.52 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.64.24 2.85.12 3.15.77.84 1.24 1.91 1.24 3.22 0 4.59-2.81 5.61-5.49 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://x.com" aria-label="X" rel="noopener" target="_blank">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.2 2H21l-6.5 7.4L22 22h-6.8l-4.4-5.7L4.9 22H2l7.1-8.1L2 2h6.9l4 5.3L18.2 2Zm-1.2 18h1.9L7.1 4H5.1l11.9 16Z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" aria-label="Instagram" rel="noopener" target="_blank">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      {/* Botão back-to-top */}
      <button
        className="sf-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    </footer>
  );
}
