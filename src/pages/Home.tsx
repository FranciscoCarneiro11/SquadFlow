import Hero from '../components/Hero';
import Hyperspeed from '../components/HyperSpeed';           
import { hyperspeedPresets } from '../components/hyperspeedPresets';
import MagicBento from '../components/MagicBento';
import FeaturedCompetitionsGrid from '../components/FeaturedCompetitionsGrid'; 
import HighlightsStack from '../components/HighlightsStack';

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* === Fundo global Hyperspeed === */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <Hyperspeed effectOptions={hyperspeedPresets.one} />
        {/* overlay escuro para legibilidade */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(100% 80% at 50% 50%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.9) 100%)',
            zIndex: 1
          }}
        />
      </div>

      {/* === Conteúdo da página (Hero + Bento) === */}
      <div style={{ position: 'relative', zIndex: 2 }}>
         <section
          className="container"
          style={{ paddingTop: 6, paddingBottom: 1 }}
        >
          <Hero />
        </section>

        {/* 🏆 Secção Competições em destaque */}
        <section
          className="container"
          style={{ paddingTop: 6, paddingBottom: 120, marginTop: -120 }}
        >
          <FeaturedCompetitionsGrid />
        </section>

        {/* Secção Funcionalidades (Magic Bento) */}
        <section
          className="container"
          style={{ paddingTop: 6, paddingBottom: 24 }}
        >
          <div style={{ marginBottom: 16 }}>
            <div className="badge">Funcionalidades</div>
            <h2
              className="hero-title"
              style={{ fontSize: 'clamp(22px,3.4vw,36px)', marginTop: 6 }}
            >
              Tudo o que precisas para gerir o teu clube
            </h2>
            <p className="hero-sub" style={{ opacity: 0.8 }}>
              Visão clara, dados em tempo real e uma experiência rápida — sem perder o foco.
            </p>
          </div>

          <MagicBento
            textAutoHide
            enableStars
            enableSpotlight
            enableBorderGlow
            enableTilt
            enableMagnetism
            clickEffect
            spotlightRadius={300}
            particleCount={12}
            glowColor="124, 77, 255"
          />
        </section>
        {/* Secção Destaques */}
       <section
        >
          <HighlightsStack />
          
        </section>
      </div>
    </div>
  );
}
