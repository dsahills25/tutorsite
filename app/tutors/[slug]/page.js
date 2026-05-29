export const metadata = {
  title: 'Tutor Profile | TutorMatch',
  description: 'Professional home tutor for personalized learning',
};

// THIS IS THE FIX - Generate static pages at build time
export async function generateStaticParams() {
  // For MVP, we generate 5 sample tutor pages
  // Later, you'll fetch this from Google Sheets
  
  const tutors = [
    { slug: 'amit-sharma-delhi-math' },
    { slug: 'priya-singh-delhi-english' },
    { slug: 'raj-kumar-delhi-science' },
    { slug: 'neha-gupta-prayagraj-math' },
    { slug: 'vikram-singh-prayagraj-english' },
  ];

  return tutors;
}

// THIS IS THE PAGE TEMPLATE
export default function TutorProfile({ params }) {
  const { slug } = params;

  // Sample tutor data (later this comes from Google Sheets)
  const tutorDatabase = {
    'amit-sharma-delhi-math': {
      name: "Amit Sharma",
      subject: "Mathematics",
      city: "Delhi",
      experience: 5,
      rating: 4.8,
      rate: 300,
      bio: "Specialized in CBSE Mathematics with proven track record of student improvement",
      qualifications: [
        "B.Sc Mathematics from Delhi University",
        "5 years teaching experience",
        "100+ students taught successfully"
      ],
      reviews: [
        {
          rating: 5,
          text: "Excellent tutor, very patient and explains well",
          author: "Parent A"
        },
        {
          rating: 5,
          text: "My son improved from 60% to 85% in 3 months",
          author: "Parent B"
        }
      ]
    },
    'priya-singh-delhi-english': {
      name: "Priya Singh",
      subject: "English",
      city: "Delhi",
      experience: 3,
      rating: 4.6,
      rate: 250,
      bio: "English tutor focusing on grammar, comprehension, and creative writing",
      qualifications: [
        "M.A. English Literature",
        "3 years teaching experience",
        "50+ students taught"
      ],
      reviews: [
        {
          rating: 5,
          text: "Great at explaining grammar in simple ways",
          author: "Parent C"
        }
      ]
    },
    'raj-kumar-delhi-science': {
      name: "Raj Kumar",
      subject: "Science",
      city: "Delhi",
      experience: 4,
      rating: 4.7,
      rate: 320,
      bio: "Science tutor with focus on practical understanding and NCERT curriculum",
      qualifications: [
        "B.Sc Physics, Chemistry, Biology",
        "4 years teaching experience"
      ],
      reviews: [
        {
          rating: 5,
          text: "Makes science fun and easy to understand",
          author: "Parent D"
        }
      ]
    },
    'neha-gupta-prayagraj-math': {
      name: "Neha Gupta",
      subject: "Mathematics",
      city: "Prayagraj",
      experience: 6,
      rating: 4.9,
      rate: 280,
      bio: "Specialized in problem-solving and concept clarity for competitive exams",
      qualifications: [
        "B.Tech Computer Science",
        "6 years teaching experience"
      ],
      reviews: [
        {
          rating: 5,
          text: "Best math tutor in Prayagraj!",
          author: "Parent E"
        }
      ]
    },
    'vikram-singh-prayagraj-english': {
      name: "Vikram Singh",
      subject: "English",
      city: "Prayagraj",
      experience: 2,
      rating: 4.5,
      rate: 200,
      bio: "English tutor helping students build confidence in communication",
      qualifications: [
        "M.A. English",
        "2 years teaching experience"
      ],
      reviews: [
        {
          rating: 5,
          text: "Very friendly and approachable",
          author: "Parent F"
        }
      ]
    }
  };

  // Get tutor data from database
  const tutor = tutorDatabase[slug] || {
    name: "Tutor Not Found",
    subject: "Unknown",
    city: "Unknown",
    experience: 0,
    rating: 0,
    rate: 0,
    bio: "This tutor profile doesn't exist yet",
    qualifications: [],
    reviews: []
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="bg-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-black text-slate-900">
            {tutor.name}
          </h1>
          <p className="text-xl text-indigo-600 font-semibold mt-2">
            {tutor.subject} Tutor in {tutor.city}
          </p>

          <div className="flex gap-4 mt-4 flex-wrap">
            <span className="bg-slate-100 px-4 py-2 rounded">
              ⭐ {tutor.rating}/5 Rating
            </span>
            <span className="bg-slate-100 px-4 py-2 rounded">
              💼 {tutor.experience} years experience
            </span>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded font-bold">
              ₹{tutor.rate}/hour
            </span>
          </div>
        </header>

        {/* About */}
        <section className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">About</h2>
          <p className="text-lg text-slate-700">
            {tutor.bio}
          </p>
        </section>

        {/* Qualifications */}
        <section className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Qualifications</h2>
          <ul className="space-y-3">
            {tutor.qualifications.map((qual, idx) => (
              <li key={idx} className="text-slate-700 flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span>{qual}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Reviews */}
        {tutor.reviews && tutor.reviews.length > 0 && (
          <section className="bg-white rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Student Reviews ({tutor.reviews.length})
            </h2>
            <div className="space-y-4">
              {tutor.reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-indigo-600 pl-4 py-2"
                >
                  <p className="text-yellow-500 mb-2">
                    {"⭐".repeat(review.rating)}
                  </p>
                  <p className="text-slate-700 italic mb-2">
                    "{review.text}"
                  </p>
                  <p className="text-slate-500 text-sm">
                    — {review.author}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-indigo-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Book Your First Class
          </h2>
          <p className="text-lg mb-6">
            100% FREE first class • No commitment
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100">
            Request This Tutor
          </button>
        </section>
      </div>
    </main>
  );
}
