export const metadata = {
  title: 'How to Find a Good Home Tutor - Complete Guide | TutorMatch',
  description: 'Step-by-step guide to finding the perfect home tutor. What to ask, red flags to avoid, pricing guide for Delhi NCR and Prayagraj.',
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4">
            How to Find a Good Home Tutor - Complete Guide
          </h1>
          <div className="flex gap-4 text-slate-600 text-sm">
            <span>📅 Updated Jan 2024</span>
            <span>⏱️ 8 min read</span>
          </div>
        </header>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Home Tutoring Matters</h2>
            <p>
              Home tutoring provides personalized, one-on-one attention that classroom teaching can't match. Each child learns differently, and a good tutor adapts to your child's pace, strengths, and weaknesses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags to Avoid</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>No credentials</strong> - Always ask for degree/certification</li>
              <li><strong>No teaching experience</strong> - Prefer tutors with 3+ years experience</li>
              <li><strong>Fixed pricing only</strong> - Good tutors discuss rates based on your budget</li>
              <li><strong>Won't give references</strong> - Ask for 2-3 parent references</li>
              <li><strong>No trial class</strong> - Always request a free trial first class</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions to Ask</h2>
            <ol className="space-y-2 list-decimal list-inside">
              <li>How many years of teaching experience do you have?</li>
              <li>What's your teaching style and approach?</li>
              <li>Can you provide parent references?</li>
              <li>What's your cancellation policy?</li>
              <li>Do you use homework assignments? How much?</li>
              <li>Can we do a free 30-minute trial class first?</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Pricing Guide</h2>
            <p className="font-semibold mb-3">Delhi NCR Average Rates:</p>
            <ul className="space-y-1 list-disc list-inside mb-4">
              <li>Math/Science (High demand): ₹300-500/hour</li>
              <li>English: ₹250-400/hour</li>
              <li>Languages: ₹200-350/hour</li>
              <li>Competitive exam prep (JEE/NEET): ₹500-800/hour</li>
            </ul>
            
            <p className="font-semibold mb-3">Prayagraj Average Rates:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Math/Science: ₹200-300/hour</li>
              <li>English: ₹150-250/hour</li>
              <li>Languages: ₹100-200/hour</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Evaluate a Match</h2>
            <p className="mb-3">After the trial class, ask yourself:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Is the tutor patient and encouraging?</li>
              <li>Does my child feel comfortable with them?</li>
              <li>Are they punctual and professional?</li>
              <li>Do they explain concepts clearly?</li>
              <li>Are they flexible with schedule?</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Getting Started</h2>
            <p>
              The best way to find a good tutor is through a verified platform. At TutorMatch, we screen every tutor personally - ID verified, degree checked, and interview conducted. You get the best without the hassle of searching.
            </p>
          </section>
        </div>

        <div className="mt-12 bg-slate-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to find a tutor?
          </h3>
          <div className="flex gap-4 justify-center flex-wrap">
            
              href="/delhi-ncr"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700"
            >
              Delhi NCR
            </a>
            
              href="/prayagraj"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700"
            >
              Prayagraj
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
