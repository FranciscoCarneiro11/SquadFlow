import "./CtaBand.css";

type Props = {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export default function CtaBand({
  title = "Pronto para analisares a tua equipa com o SquadFlow?",
  subtitle = "O SquadFlow junta plantéis, jogos e estatísticas — tudo no mesmo sítio.",
  primaryHref = "/signup",
  secondaryHref = "/Teams",
  primaryLabel = "Criar conta",
  secondaryLabel = "Explorar equipas",
}: Props) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-bg" aria-hidden="true" />
      <div className="cta-content">
        <p className="badge">Começa hoje</p>
        <h3 id="cta-title">{title}</h3>
        <p className="subtitle">{subtitle}</p>

        <div className="cta-actions">
          <a className="btn btn-primary" href={primaryHref}>{primaryLabel}</a>
          <a className="btn btn-ghost" href={secondaryHref}>{secondaryLabel}</a>
        </div>

        <ul className="trust" role="list">
          <li>Sem custos iniciais</li>
          <li>Interface leve</li>
          <li>Favoritos e alertas</li>
        </ul>
      </div>
    </section>
  );
}
