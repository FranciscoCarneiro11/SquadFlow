import { Link } from 'react-router-dom'
import Stack from './Stack'
import ShinyText from './ShinyText'



export default function Hero() {
  return (
    <section
      className="container"
      style={{
        position: 'relative',     // necessário para o bg absoluto
        overflow: 'hidden',
        paddingTop: 24,
        paddingBottom: 32,
        minHeight: 520            // dá espaço para o efeito aparecer
      }}
    >
    
      {/* === CONTEÚDO (à frente do bg) === */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, .9fr)',
            gap: 28,
            alignItems: 'center'
          }}
        >
          {/* ESQUERDA: título e CTAs */}
          <div>

            <h1 className="hero-title">
              <ShinyText
                text="Where Teams Unite and Legends Shine"
                speed={7}   /* mais rápido que o default */
              />
            </h1>

            <p style={{ opacity: 0.85, maxWidth: '70ch', marginBottom: 18 }}>
              O SquadFlow ajuda-te a gerir equipas, jogadores e jogos com uma interface
              minimalista e interativa — perfeita para focar no que interessa.
            </p>

            <div style={{ display: 'flex', gap: 12 }}>
              <Link to="/login" className="btn btn-primary">Começar agora</Link>
              <Link to="/teams" className="btn">Explorar equipas</Link>
            </div>
          </div>

          {/* DIREITA: stack de stats */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={true}
              cardDimensions={{ width: 260, height: 160 }}
              cardsData={[
                { id: 1, content: (<div><div className="stat-value">12</div><div className="stat-label">Equipas</div></div>) },
                { id: 2, content: (<div><div className="stat-value">245</div><div className="stat-label">Jogadores</div></div>) },
                { id: 3, content: (<div><div className="stat-value">38</div><div className="stat-label">Jogos</div></div>) },
                { id: 4, content: (<div><div className="stat-value">24</div><div className="stat-label">Vitórias</div></div>) }
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
