export const metadata = {
  title: 'FAQ - Frequently Asked Questions | TutorMatch',
  description: 'Get answers to common questions about finding home tutors in Delhi NCR and Prayagraj',
};

export default function FAQ() {
  const faqs = [
    {
      question: "How much should I pay a home tutor?",
      answer: "In Delhi NCR, rates range from ₹250-500/hour depending on the subject and tutor experience. In Prayagraj, rates are typically ₹200-350/hour. Experienced tutors with 5+ years charge more."
    },
    {
      question: "How long does it take to find a tutor?",
      answer: "Once you submit your request, we match you with 3-5 tutors within 24 hours. You can contact them immediately to arrange the first class."
    },
    {
      question: "Can I meet the tutor before the first class?",
      answer: "Yes! We recommend scheduling a brief call with the tutor to discuss your child's needs and learning style. Many tutors offer a free 15-minute consultation."
    },
    {
      question: "What if my child doesn't like the tutor?",
      answer: "We offer a 100% free first trial class. If unsatisfied, you can request a different tutor at no additional cost."
    },
    {
      question: "Do you provide online tutoring?",
      answer: "Our primary focus is in-home tutoring. However, many tutors also offer online sessions. You can discuss this directly with the tutor."
    },
    {
      question: "How are tutors verified?",
      answer: "Every tutor goes through a 3-step verification process: ID verification, degree authentication, and a skills interview. Only 25% of applicants pass."
    },
    {
      question: "What if I need to cancel?",
      answer: "You can pause or cancel anytime. There are no long-term contracts required."
    },
    {
      question: "Do you guarantee improved grades?",
      answer: "While we can't guarantee grades, 92% of our students show improvement within 3 months. Results depend on student commitment and consistency."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          Get answers to common questions about TutorMatch
        </p>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                {idx + 1}. {faq.question}
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Didn't find your answer?
          </h2>
          <p className="text-slate-700 mb-4">
            Contact us directly - we're here to help!
          </p>
          <a
            href="mailto:support@tutormatch.com"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            Send us a message
          </a>
        </div>
      </div>
    </main>
  );
}
