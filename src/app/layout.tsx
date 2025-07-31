import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ratanmia.dev"),
  title: {
    default: "Ratan Mia - Full Stack Developer | React.js & Next.js Expert",
    template: "%s | Ratan Mia - Full Stack Developer"
  },
  description: "Experienced Full Stack Developer with 8+ years expertise in React.js, Next.js, Laravel & WordPress. Building high-performance web applications for global clients. Available for new projects.",
  keywords: [
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Expert",
    "Laravel Developer",
    "WordPress Developer",
    "Web Development",
    "JavaScript Developer",
    "PHP Developer",
    "Dhaka Bangladesh",
    "Remote Developer"
  ],
  authors: [{ name: "Ratan Mia", url: "https://ratanmia.dev" }],
  creator: "Ratan Mia",

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ratanmia.dev",
    siteName: "Ratan Mia - Full Stack Developer",
    title: "Ratan Mia - Expert Full Stack Developer | React.js & Next.js Specialist",
    description: "Professional Full Stack Developer with 8+ years experience building high-performance web applications. Specializing in React.js, Next.js, Laravel, and WordPress development.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ratan Mia - Full Stack Developer",
      }
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@shorifull",
    creator: "@shorifull",
    title: "Ratan Mia - Full Stack Developer | React.js & Next.js Expert",
    description: "Professional Full Stack Developer with 8+ years experience. Specializing in React.js, Next.js, Laravel & WordPress.",
    images: ["/images/twitter-image.jpg"],
  },

  // Search Engine Settings
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "your-google-verification-code",
  },

  alternates: {
    canonical: "https://ratanmia.dev",
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ratan Mia",
  jobTitle: "Full Stack Developer",
  description: "Full Stack Developer with 8+ years of experience specializing in React.js, Next.js, Laravel, and WordPress development",
  url: "https://ratanmia.dev",
  image: "https://ratanmia.dev/images/profile.jpg",
  sameAs: [
    "https://linkedin.com/in/shorifull",
    "https://github.com/shorifull",
    "https://twitter.com/shorifull"
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh"
  },
  email: "ratanmiadev@gmail.com",
  telephone: "+8801234567890",
  knowsAbout: [
    "React.js", "Next.js", "Laravel", "WordPress", "JavaScript", "PHP", "Full Stack Development"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-accent selection:text-black overflow-x-hidden`}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Analytics & Tracking Scripts */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics GA4 */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
