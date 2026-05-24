'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header>
        <h1>Find <span className="highlight">Verified Home Tutors</span> Near You</h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', marginTop: '1rem' }}>
          Connect with top-rated 1-on-1 teachers for CBSE, ICSE, and State Boards
        </p>
      </header>

      <section className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Select Your City</h2>
        <div className="grid">
          
          <Link href="/delhi-ncr" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ cursor: 'pointer', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Delhi NCR</h3>
              <p style={{ color: '#64748b' }}>Delhi, Noida, Gurgaon, Ghaziabad</p>
              <p style={{ color: '#4f46e5', fontWeight: 'bold', marginTop: '1rem' }}>View Tutors →</p>
            </div>
          </Link>

          <Link href="/prayagraj" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ cursor: 'pointer', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Prayagraj</h3>
              <p style={{ color: '#64748b' }}>Civil Lines, Katra, and surrounding areas</p>
              <p style={{ color: '#4f46e5', fontWeight: 'bold', marginTop: '1rem' }}>View Tutors →</p>
            </div>
          </Link>

        </div>
      </section>
    </main>
  )
}
