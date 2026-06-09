import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata = {
  title: 'TutorMatch - Verified Home Tutors in Delhi NCR & Prayagraj',
  description: 'Connect with top-rated 1-on-1 home tutors for CBSE, ICSE, State Boards in Delhi, Noida, Gurgaon, Prayagraj. Free trial class. 100% verified tutors.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="zc--TrLbBV_U4XAg8ZyrYY5x9S3sfLr4Crx-b9rUHkk" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TutorMatch",
              "description": "Verified home tutor matching service for Delhi NCR and Prayagraj. CBSE, ICSE, State Board tutors.",
              "url": "https://tutorsite-nu.vercel.app",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Delhi"
                },
                {
                  "@type": "City",
                  "name": "Noida"
                },
                {
                  "@type": "City",
                  "name": "Gurgaon"
                },
                {
                  "@type": "City",
                  "name": "Ghaziabad"
                },
                {
                  "@type": "City",
                  "name": "Prayagraj"
                }
              ],
              "serviceType": "Home Tutoring",
              "priceRange": "₹₹",
              "knowsAbout": ["CBSE", "ICSE", "State Board", "Home Tutoring", "Private Tutoring"]
            })
          }}
        />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
