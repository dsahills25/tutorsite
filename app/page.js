import Link from 'next/link'

export const metadata = {
  title: 'Find Verified Home Tutors in Delhi NCR & Prayagraj | TutorMatch',
  description: 'TutorMatch connects parents with verified, background-checked home tutors for CBSE, ICSE and State Boards in Delhi NCR and Prayagraj. Free first trial class.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <header className="bg-white border-b border-slate-200 py-16 px-4 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4">
          Find <span className="text-indigo-600">Verified Home Tutors</span> Near You
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-2">
          Top-rated 1-on-1 teachers for CBSE, ICSE, and State Boards.
          Every tutor is ID-verified, degree-checked, and interview-tested.
        </p>
        <p className="text-sm text-indigo-600 font-semibold">
          ✓ Free first trial class &nbsp;·&nbsp; ✓ Only 25% of applicants pass our vetting &nbsp;·&nbsp; ✓ 4.5★ minimum rating
        </p>
      </header>

      {/* City selector */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
          Select Your City
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Link href="/delhi-ncr" className="no-underline">
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition cursor-pointer text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Delhi NCR</h3>
              <p className="text-slate-500 mb-4">Delhi · Noida · Gurgaon · Ghaziabad</p>
              <p className="text-indigo-600 font-semibold">View Tutors →</p>
            </div>
          </Link>

          <Link href="/prayagraj" className="no-underline">
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition cursor-pointer text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Prayagraj</h3>
              <p className="text-slate-500 mb-4">Civil Lines · Katra · surrounding areas</p>
              <p className="text-indigo-600 font-semibold">View Tutors →</p>
            </div>
          </Link>

        </div>
      </section>

      {/* Why TutorMatch — SEO body copy */}
      <section className="bg-white border-t border-slate-200 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Why Parents Trust TutorMatch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-bold text-slate-900 mb-2">Rigorous Vetting</h3>
              <p className="text-slate-600 text-sm">Aadhaar/PAN verification, degree audit, and a skills interview. Only 1 in 4 tutors makes it through.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold text-slate-900 mb-2">Free Trial Class</h3>
              <p className="text-slate-600 text-sm">Every match comes with a 100% free first class. No payment until you're satisfied with the tutor.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-slate-900 mb-2">Fast Matching</h3>
              <p className="text-slate-600 text-sm">Submit your requirement and get matched with 3–5 verified tutors within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
