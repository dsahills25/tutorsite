export const metadata = {
  title: 'Home Tutors in Delhi NCR | Verified Teachers - TutorMatch',
  description: 'Find top-rated home tutors in Delhi, Noida, Gurgaon, Ghaziabad for CBSE, ICSE, State Boards. 150+ tutors vetted. 4.7/5 ⭐. Free first class.',
};

export default function DelhiTutors() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO SECTION */}
      <header className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">
          Verified Home Tutors in <span className="text-indigo-600">Delhi NCR</span>
        </h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
          Connect with top-rated 1-on-1 teachers for CBSE, ICSE, and State Boards across Delhi, Noida, Gurgaon, Ghaziabad.
        </p>
      </header>

      {/* AREAS COVERED */}
      <section className="bg-white border-y border-slate-200 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Areas Covered in Delhi NCR
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-slate-600 font-medium">Delhi</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-slate-600 font-medium">Noida</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-slate-600 font-medium">Gurgaon</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-slate-600 font-medium">Ghaziabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="bg-slate-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-black text-indigo-600">150+</p>
              <p className="text-slate-600 mt-2">Tutors Screened</p>
            </div>
            <div>
              <p className="text-4xl font-black text-indigo-600">4.7★</p>
              <p className="text-slate-600 mt-2">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-black text-indigo-600">92%</p>
              <p className="text-slate-600 mt-2">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* PARENT FORM SECTION */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-2">
            Find Your Perfect Tutor
          </h2>
          <p className="text-center text-slate-600 mb-8">
            Tell us what you need. We'll match you within 24 hours.
          </p>
          
          {/* EMBEDDED TALLY FORM */}
          <iframe
            data-tally-src="https://tally.so/r/D4M17X"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Parent Registration Form"
          ></iframe>
          <script async src="https://cdn.tally.so/tally.js"></script>
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Subjects & Boards We Cover
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="font-semibold text-slate-900">CBSE</p>
              <p className="text-slate-600 text-sm mt-2">Classes 1-12 • All subjects</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="font-semibold text-slate-900">ICSE</p>
              <p className="text-slate-600 text-sm mt-2">Classes 1-12 • All subjects</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="font-semibold text-slate-900">State Board</p>
              <p className="text-slate-600 text-sm mt-2">All classes • Hindi medium</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="font-semibold text-slate-900">Competitive Exams</p>
              <p className="text-slate-600 text-sm mt-2">JEE • NEET • Foundation</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-12 px-4 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold">1</div>
              <p className="mt-4 font-semibold">Submit Request</p>
              <p className="text-slate-600 text-sm mt-2">Tell us your requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold">2</div>
              <p className="mt-4 font-semibold">Get Matches</p>
              <p className="text-slate-600 text-sm mt-2">Within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold">3</div>
              <p className="mt-4 font-semibold">Trial Class</p>
              <p className="text-slate-600 text-sm mt-2">100% FREE</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold">4</div>
              <p className="mt-4 font-semibold">Confirm Match</p>
              <p className="text-slate-600 text-sm mt-2">Start learning!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Tutor?</h2>
        <p className="text-lg mb-6 opacity-90">Fill the form above. We'll connect you with verified tutors in 24 hours.</p>
        <a href="/faq" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100">
          View FAQs
        </a>
      </section>
    </main>
  );
}
