export const metadata = {
  title: 'Home Tutors in Prayagraj | Verified Teachers - TutorMatch',
  description: 'Find top-rated home tutors in Prayagraj, Civil Lines, Katra for CBSE, ICSE, State Boards',
}

export default function PrayagrajTutors() {
  return (
    <main>
      <script type="application/ld-json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "TutorMatch Prayagraj",
          "description": "Premium 1-on-1 home tutor matching service",
          "url": "https://tutorsite.vercel.app/prayagraj",
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "Prayagraj" }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Prayagraj",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
          }
        })}
      </script>

      <header style={{ textAlign: 'center', padding: '4rem 2rem', borderBottom: '1px solid #e2e8f0' }}>
        <h1>Verified Home Tutors in <span className="highlight">Prayagraj</span></h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto' }}>
          Connect with top-rated 1-on-1 teachers for CBSE, ICSE, and State Boards across Civil Lines, Katra, and major areas in Prayagraj.
        </p>
      </header>

      <section className="container" style={{ padding: '3rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Neighborhoods Covered</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div className="card" style={{ textAlign: 'center' }}>Civil Lines</div>
          <div className="card" style={{ textAlign: 'center' }}>Katra</div>
          <div className="card" style={{ textAlign: 'center' }}>Allahapur</div>
          <div className="card" style={{ textAlign: 'center' }}>Jhalwa</div>
        </div>
      </section>

      <section className="container" style={{ padding: '3rem 0', background: '#f1f5f9', borderRadius: '12px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Classes & Boards</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>✓ CBSE (Class 1-12)</li>
            <li style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>✓ ICSE (Class 1-12)</li>
            <li style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>✓ State Board</li>
            <li style={{ padding: '0.75rem' }}>✓ JEE / NEET Preparation</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
