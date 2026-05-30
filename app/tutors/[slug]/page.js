export const metadata = {
  title: 'Tutor Profile | TutorMatch',
  description: 'Professional home tutor for personalized learning',
};

export async function generateStaticParams() {
  return [
    { slug: 'amit-sharma-delhi-math' },
    { slug: 'priya-singh-delhi-english' },
    { slug: 'raj-kumar-delhi-science' },
    { slug: 'neha-gupta-prayagraj-math' },
    { slug: 'vikram-singh-prayagraj-english' },
  ];
}

export default function TutorProfile({ params }) {
  const { slug } = params;

  const tutors = {
    'amit-sharma-delhi-math': {
      name: 'Amit Sharma',
      subject: 'Mathematics',
      city: 'Delhi',
      experience: 5,
      rating: 4.8,
      rate: 300,
      bio: 'Specialized in CBSE Mathematics with proven track record of student improvement',
      qualifications: ['B.Sc Mathematics from Delhi University', '5 years teaching experience', '100+ students taught'],
      reviews: [
        { rating: 5, text: 'Excellent tutor, very patient and explains well', author: 'Parent A' },
        { rating: 5, text: 'My son improved from 60% to 85% in 3 months', author: 'Parent B' },
      ],
    },
    'priya-singh-delhi-english': {
      name: 'Priya Singh',
      subject: 'English',
      city: 'Delhi',
      experience: 3,
      rating: 4.6,
      rate: 250,
      bio: 'English tutor focusing on grammar, comprehension, and creative writing',
      qualifications: ['M.A. English Literature', '3 years teaching experience', '50+ students'],
      reviews: [{ rating: 5, text: 'Great at explaining grammar in simple ways', author: 'Parent C' }],
    },
    'raj-kumar-delhi-science': {
      name: 'Raj Kumar',
      subject: 'Science',
      city: 'Delhi',
      experience: 4,
      rating: 4.7,
      rate: 320,
      bio: 'Science tutor with focus on practical understanding and NCERT curriculum',
      qualifications: ['B.Sc Physics, Chemistry, Biology', '4 years teaching experience'],
      reviews: [{ rating: 5, text: 'Makes science fun and easy to understand', author: 'Parent D' }],
    },
    'neha-gupta-prayagraj-math': {
      name: 'Neha Gupta',
      subject: 'Mathematics',
      city: 'Prayagraj',
      experience: 6,
      rating: 4.9,
      rate: 280,
      bio: 'Specialized in problem-solving and concept clarity for competitive exams',
      qualifications: ['B.Tech Computer Science', '6 years teaching experience'],
      reviews: [{ rating: 5, text: 'Best math tutor in Prayagraj!', author: 'Parent E' }],
    },
    'vikram-singh-prayagraj-english': {
      name: 'Vikram Singh',
      subject: 'English',
      city: 'Prayagraj',
      experience: 2,
      rating: 4.5,
      rate: 200,
      bio: 'English tutor helping students build confidence in communication',
      qualifications: ['M.A. English', '2 years teaching experience'],
      reviews: [{ rating: 5, text: 'Very friendly and approachable', author: 'Parent F' }],
    },
  };

  const tutor = tutors[slug];

  if (!tutor) {
    return (
      <main className="min-h-screen bg-slate-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900">Tutor Not Found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="bg-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-slate-900">{tutor.name}</h1>
          <p className="text-xl text-indigo-600 font-semibold mt-2">
            {tutor.subject} Tutor in {tutor.city}
          </p>

          <div className="flex gap-4 mt-4 flex-wrap">
            <span className="bg-slate-100 px-4 py-2 rounded">⭐ {tutor.rating}/5</span>
            <span className="bg-slate-100 px-4 py-2 rounded">💼 {tutor.experience} yrs</span>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded font-bold">₹{tutor.rate}/hr</span>
          </div>
        </header>

        <section className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">About</h2>
          <p className="text-lg text-slate-700">{tutor.bio}</p>
        </section>

        <section className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Qualifications</h2>
          <ul className="space-y-2">
            {tutor.qualifications.map((qual, i) => (
              <li key={i} className="text-slate-700 flex items-start">
                <span className="text-green-600 mr-3">✓</span> {qual}
              </li>
            ))}
          </ul>
        </section>

        {tutor.reviews.length > 0 && (
          <section className="bg-white rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Reviews ({tutor.reviews.length})</h2>
            <div className="space-y-4">
              {tutor.reviews.map((review, i) => (
                <div key={i} className="border-l-4 border-indigo-600 pl-4">
                  <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>
                  <p className="text-slate-700 italic mt-1">"{review.text}"</p>
                  <p className="text-slate-500 text-sm mt-1">— {review.author}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="bg-indigo-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Book Your First Class</h2>
          <p className="text-lg mb-6">100% FREE • No commitment</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100">
            Request This Tutor
          </button>
        </section>
      </div>
    </main>
  );
}
