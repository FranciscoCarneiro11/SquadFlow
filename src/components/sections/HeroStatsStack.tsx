import React from "react";

type Stat = { value: string | number; label: string; hint?: string };

type Props = {
  items: Stat[];
  className?: string;
};

const HeroStatsStack: React.FC<Props> = ({ items, className }) => {
  return (
    <div
      className={[
        "hero-stack-container",
        className ?? ""
      ].join(" ")}
      aria-label="Indicadores do teu clube"
      role="region"
    >
      <ul className="hero-stack-list">
        {items.map((it, i) => (
          <li key={i} className="hero-stack-card">
            <div className="hero-stack-value">{it.value}</div>
            <div className="hero-stack-label">
              {it.label}
              {it.hint ? <span className="hero-stack-hint"> — {it.hint}</span> : null}
            </div>
          </li>
        ))}
      </ul>

      {/* fades laterais */}
      <div className="hero-stack-fade hero-stack-fade-left" />
      <div className="hero-stack-fade hero-stack-fade-right" />
    </div>
  );
};

export default HeroStatsStack;
