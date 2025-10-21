type Props = { title: string; desc: string }
export default function FeatureCard({ title, desc }: Props) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ opacity: .8, marginBottom: 0 }}>{desc}</p>
    </div>
  )
}
