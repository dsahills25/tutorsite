export const metadata = {
  title: 'How to Find a Good Home Tutor - Complete Guide | TutorMatch',
  description: 'Step-by-step guide to finding the perfect home tutor. What to ask, red flags to avoid, pricing guide for Delhi NCR and Prayagraj.',
  keywords: 'home tutor, finding tutor, tuition guide, home tuition',
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4">
            How to Find a Good Home Tutor - Complete Guide
          </h1>
          <div className="flex gap-4 text-slate-600 text-sm">
            <span>📅 Updated Jan 2024</span>
            <span>⏱️ 8 min read</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <h2>Why Home Tutoring Matters</h2>
          <p>
            Home tutoring provides personalized, one-on-one attention that classroom teaching can't match. Each child learns differently, and a good tutor adapts to your child's pace, strengths, and weaknesses.
          </p>

          <h2>Red Flags to Avoid</h2>
          <ul>
            <li><strong>No credentials</strong> - Always ask for degree/certification</li>
            <li><strong>No teaching experience</strong> - Prefer tutors with 3+ years experience</li>
            <li><strong>Fixed pricing only</strong> - Good tutors discuss rates based on your budget</li>
            <li><strong>Won't give references</strong> - Ask for 2-3 parent references</li>
            <li><strong>No trial class</strong> - Always request a free trial first class</li>
          </ul>

          <h2>Questions to Ask</h2>
          <ol>
            <li>How many years of teaching experience do you have?</li>
            <li>What's your teaching style and approach?</li>
            <li>Can you provide parent references?</li>
            <li>What's your cancellation policy?</li>
            <li>Do you use homework assignments? How much?</li>
            <li>Can we do a free 30-minute trial class first?</li>
          </ol>

          <h2>Pricing Guide</h2>
          <p>
            <strong>Delhi NCR Average Rates:</strong>
          </p>
          <ul>
            <li>Math/Science (High demand): ₹300-500/hour</li>
            <li>English: ₹250-400/hour</li>
            <li>Languages: ₹200-350/hour</li>
            <li>Competitive exam prep (JEE/NEET): ₹500-800/hour</li>
          </ul>

          <p>
            <strong>Prayagraj Average Rates:</strong>
          </p>
          <ul>
            <li>Math/Science: ₹200-300/hour</li>
            <li>English: ₹150-250/hour</li>
            <li>Languages: ₹100-200/hour</li>
          </ul>

          <h2>How to Evaluate a Match</h2>
          <p>After the trial class, ask yourself:</p>
          <ul>
            <li>Is the tutor patient and encouraging?</li>
            <li>Does my child feel comfortable with them?</li>
            <li>Are they punctual and professional?</li>
            <li>Do they explain concepts clearly?</li>
            <li>Are they flexible with schedule?</li>
          </ul>

          <h2>Getting Started</h2>
          <p>
            The best way to find a good tutor is through a verified platform. At TutorMatch, we screen every tutor personally - ID verified, degree checked, and interview conducted. You get the best without the hassle of searching.
          </p>
          <p>
            <a href="/delhi-ncr" className="text-indigo-600 font-semibold hover:underline">
              Find tutors in Delhi NCR →
            </a>
          </p>
          <p>
            <a href="/prayagraj" className="text-indigo-600 font-semibold hover:underline">
              Find tutors in Prayagraj →
            </a>
          </p>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 bg-slate-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to find a tutor?
          </h3>
          <a
            href="/delhi-ncr"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 mr-4"
          >
            Delhi NCR
          </a>
          <a
            href="/prayagraj"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            Prayagraj
          </a>
        </div>
      </article>
    </main>
  );
}
