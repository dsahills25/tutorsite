export const metadata = {
  title: 'Home Tutors in Delhi NCR | Verified Teachers - TutorMatch',
  description: 'Find top-rated home tutors in Delhi, Noida, Gurgaon, Ghaziabad for CBSE, ICSE, State Boards',
}

export default function DelhiTutors() {
  return (
    <main>
      <script type="application/ld-json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "TutorMatch Delhi NCR",
          "description": "Premium 1-on-1 home tutor matching service",
          "url": "https://tutorsite.vercel.app/delhi-ncr",
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "Delhi" },
            { "@type": "AdministrativeArea", "name": "Noida" },
            { "@type": "AdministrativeArea", "name": "Gurgaon" },
            { "@type": "AdministrativeArea", "name": "Ghaziabad" }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Delhi",
            "addressCountry": "IN"
          }
        })}
      </script>

      <header style={{ textAlign: 'center', padding: '4rem 2rem', borderBottom: '1px solid #e2e8f0' }}>
        <h1>Verified Home Tutors in <span className="highlight">Delhi NCR</span></h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto' }}>
          Connect with top-rated 1-on-1 teachers for CBSE, ICSE, and State Boards across Delhi, Noida, Gurgaon, Ghaziabad.
        </p>
      </header>

      <section className="container" style={{ padding: '3rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Areas Covered</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div className="card" style={{ textAlign: 'center' }}>✓ Delhi</div>
          <div className="card" style={{ textAlign: 'center' }}>✓ Noida</div>
          <div className="card" style={{ textAlign: 'center' }}>✓ Gurgaon</div>
          <div className="card" style={{ textAlign: 'center' }}>✓ Ghaziabad</div>
        </div>
      </section>

      <section className="container" style={{ padding: '3rem 0', background: '#f1f5f9', borderRadius: '12px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Subjects & Boards</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>✓ Mathematics (All Classes)</li>
            <li style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>✓ English</li>
            <li style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>✓ Science (Physics, Chemistry, Biology)</li>
            <li style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>✓ Social Studies</li>
            <li style={{ padding: '0.75rem' }}>✓ JEE/NEET Preparation</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
