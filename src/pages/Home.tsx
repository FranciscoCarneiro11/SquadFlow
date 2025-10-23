import Hero from '../components/sections/Hero';
import Hyperspeed from '../components/animations/HyperSpeed';           
import { hyperspeedPresets } from '../components/animations/hyperspeedPresets';
import MagicBento from '../components/sections/MagicBento/MagicBento';
import FeaturedCompetitionsGrid from '../components/sections/FeaturedCompetitionsGrid'; 
import HighlightsStack from '../components/sections/HighlightsStack/HighlightsStack';
import CtaBand from "../components/sections/CTABand/CTABand";
import Footer from '../components/layout/Footer/Footer';

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
            <section className="hf-section is-highlights">
              <div className="hf-header">
                <h2>Analisa e Pesquisa pelo teu clube</h2>
                <p>Visão clara, dados em tempo real e uma experiência rápida — sem perder o foco.</p>
              </div>
            </section>
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

        {/* Secção CTA */}
       <section
>
          <CtaBand />
        </section>

        {/*Footer */}
       <section
        >
          <Footer />
        </section>
      </div>
    </div>
  );
}
