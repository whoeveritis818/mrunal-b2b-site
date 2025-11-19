export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, system-ui, Arial, sans-serif', padding: '48px', color: '#111827' }}>
      <section style={{ maxWidth: 900, margin: '0 auto' }}>
        <p style={{ textTransform: 'uppercase', color: '#6b7280', fontSize: 12 }}>B2B Growth & Demand Gen</p>
        <h1 style={{ marginTop: 12, fontSize: 36, lineHeight: 1.05 }}>I help B2B companies scale predictable pipeline with modern marketing systems.</h1>
        <p style={{ marginTop: 16, color: '#6b7280', fontSize: 16 }}>
          Strategy-first marketing: ABM, Demand Gen, and LinkedIn-led thought leadership that moves deals and builds reputation.
        </p>

        <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
          <a href="/book" style={{ background: '#0f172a', color: '#fff', padding: '10px 16px', borderRadius: 8, textDecoration: 'none' }}>Book a Consultation</a>
          <a href="/services" style={{ border: '1px solid #e5e7eb', padding: '10px 16px', borderRadius: 8, textDecoration: 'none' }}>Services & Pricing</a>
        </div>

        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Featured Blogs</h2>
          <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
            <li style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8, marginBottom: 8 }}>
              <strong>Demand Gen Playbook for 2025</strong>
              <div style={{ color: '#6b7280' }}>A practical 6-step framework to scale pipeline faster.</div>
            </li>
            <li style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8 }}>
              <strong>LinkedIn Content That Converts</strong>
              <div style={{ color: '#6b7280' }}>How to structure posts that generate leads and conversations.</div>
            </li>
          </ul>
        </section>

        <section style={{ marginTop: 40 }}>
          <h3 style={{ fontSize: 18 }}>What clients say</h3>
          <blockquote style={{ marginTop: 12, padding: 12, border: '1px solid #e5e7eb', borderRadius: 8 }}>
            “Mrunal transformed our pipeline — 3x MQL velocity in 90 days.” — Aisha Khan, CMO - FinGrowth
          </blockquote>
        </section>
      </section>
    </main>
  );
}
