import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import './HighlightsStack.css';

type Highlight =
  | { kind: 'match'; title: string; meta: string; href: string }
  | { kind: 'team'; title: string; meta: string; href: string }
  | { kind: 'player'; title: string; meta: string; href: string }
  | { kind: 'league'; title: string; meta: string; href: string }
  | { kind: 'fact'; title: string; meta: string; href: string };

const highlights: Highlight[] = [
  { kind: 'match',  title: 'Jogo Imperdível',   meta: 'Porto vs Benfica — Dom 20:30', href: '/jogos/123' },
  { kind: 'player', title: 'Craque do Momento', meta: 'João M. — 6 golos em 3 jogos', href: '/jogadores/77' },
  { kind: 'team',   title: 'Equipa em Forma',   meta: 'Girona — 5 vitórias seguidas', href: '/equipas/45' },
  { kind: 'league', title: 'Trending',          meta: 'Premier League é a mais vista', href: '/competicoes/premier-league' },
];

export default function HighlightsStack() {
  return (
    <section className="hf-section is-highlights">
      <div className="hf-header">
        <h2>Destaques da semana</h2>
        <p>O melhor do futebol — pronto para explorar.</p>
      </div>

      <ScrollStack
        useWindowScroll
        className="hf-scroller"
        itemDistance={1}
        itemScale={0.045}
        itemStackDistance={10}
        stackPosition="22%"
        scaleEndPosition="8%"
        baseScale={0.84}
        rotationAmount={0.6}
        blurAmount={1.2}
      >
        {highlights.map((h, idx) => (
          <ScrollStackItem key={idx} itemClassName="hf-card">
            <div className="hf-card__inner">
              <span className={`hf-kicker hf-kicker--${h.kind}`}>{label(h.kind)}</span>
              <h3 className="hf-title">{h.title}</h3>
              <p className="hf-meta">{h.meta}</p>

              <div className="hf-actions">
                <a href={h.href} className="hf-btn">Ver detalhes</a>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}

function label(kind: Highlight['kind']) {
  return { match: 'Jogo', team: 'Equipa', player: 'Jogador', league: 'Competição', fact: 'Sabias?' }[kind];
}
