import './globals.css'

export const metadata = {
  title: 'TutorMatch - Verified Home Tutors in Delhi NCR & Prayagraj',
  description: 'Connect with top-rated 1-on-1 home tutors for CBSE, ICSE, State Boards in Delhi, Noida, Gurgaon, Prayagraj',
  keywords: 'home tutors, private tutors, CBSE tutors, ICSE tutors, Delhi tutors, Prayagraj tutors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld-json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TutorMatch",
            "description": "Verified home tutor matching service",
            "url": "https://tutorsite.vercel.app"
          })}
        </script>
      </head>
      <body>{children}</body>
    </html>
  )
}
