import React from 'react';
import { FEATURED_COMPETITIONS, type Competition } from '../data/competitions';
import { useFavorites } from '../hooks/useFavorites';
import TextType from '../components/animations/TextType';

type Props = {
  items?: Competition[];
  title?: string;
  subtitle?: string;
};

export const FeaturedCompetitionsGrid: React.FC<Props> = ({
  items = FEATURED_COMPETITIONS,
  title = 'Competições em destaque',
  subtitle = 'Melhores ligas e taças – adiciona aos favoritos para acesso rápido.'
}) => {
  const { ids: favIds, isFav, toggle } = useFavorites('competitions');

  const [showFavsOnly, setShowFavsOnly] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  // fecha o menu ao clicar fora
  const menuRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  // micro-parallax
  const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--mx', x.toString());
    el.style.setProperty('--my', y.toString());
  };
  const onCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.setProperty('--mx', '0');
    el.style.setProperty('--my', '0');
  };

  const handleCardKey = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.currentTarget.click();
      e.preventDefault();
    }
  };

  // filtra/ordena
  const viewItems = React.useMemo(() => {
    const base = showFavsOnly ? items.filter(i => isFav(i.id)) : items;
    const fav = base.filter(i => isFav(i.id));
    const rest = base.filter(i => !isFav(i.id));
    return [...fav, ...rest];
  }, [items, favIds, showFavsOnly]); // eslint-disable-line

  return (
    <section className="fc-section" aria-labelledby="fc-title">
      <div className="fc-header">
        <div>
          <div className="badge">Destaques</div>
          <h2 id="fc-title" className="hero-title fc-title">
            <TextType
              as="span"
              text={title}
              typingSpeed={36}
              variableSpeed={{ min: 24, max: 60 }}
              pauseDuration={1200}
              deletingSpeed={28}
              loop={false}
              startOnVisible={true}
              showCursor={true}
              cursorCharacter="|"
            />
          </h2>
          <div className="fc-subrow">
            <p className="hero-sub fc-sub">{subtitle}</p>

            {/* AÇÕES (menu filtro) */}
            <div className="fc-actions" ref={menuRef}>
              <button
                type="button"
                className="fc-dd-btn"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(v => !v)}
              >
                {showFavsOnly ? 'Só favoritos' : 'Todos'}
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className={`chev ${menuOpen ? 'up' : ''}`}>
                  <path d="M7 10l5 5 5-5z"></path>
                </svg>
              </button>

              {menuOpen && (
                <div role="menu" className="fc-dd-menu">
                  <button
                    role="menuitem"
                    className={`fc-dd-item ${!showFavsOnly ? 'is-active' : ''}`}
                    onClick={() => { setShowFavsOnly(false); setMenuOpen(false); }}
                  >
                    Todos
                  </button>
                  <button
                    role="menuitem"
                    className={`fc-dd-item ${showFavsOnly ? 'is-active' : ''}`}
                    onClick={() => { setShowFavsOnly(true); setMenuOpen(false); }}
                  >
                    Só favoritos
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="fc-grid">
        {viewItems.map((c) => (
          <div
            key={c.id}
            className="fc-card"
            onMouseMove={onCardMove}
            onMouseLeave={onCardLeave}
          >
            <a
              href={`/competitions/${c.slug}`}
              className="fc-card__link"
              onKeyDown={handleCardKey}
              aria-label={`Abrir ${c.name}`}
            >
              <div className="fc-card__logo" aria-hidden="true">
                {c.logo ? (
                  <div className="fc-avatar">
                    <img src={c.logo} alt="" loading="lazy" className={c.logoClass} />
                  </div>
                ) : (
                  <span className="fc-card__initials">{getInitials(c.name)}</span>
                )}
              </div>

              <div className="fc-card__meta">
                <span className="fc-card__name">{c.name}</span>
                <span className="fc-card__region">{c.region}</span>
              </div>
            </a>

            <button
              type="button"
              className={`fc-fav ${isFav(c.id) ? 'is-active' : ''}`}
              aria-pressed={isFav(c.id)}
              aria-label={isFav(c.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                toggle(c.id);
              }}
              title={isFav(c.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

function getInitials(name: string) {
  const words = name.split(' ').filter(Boolean);
  const first = words[0]?.[0] ?? '';
  const second = words[1]?.[0] ?? '';
  return (first + second).toUpperCase();
}

export default FeaturedCompetitionsGrid;
