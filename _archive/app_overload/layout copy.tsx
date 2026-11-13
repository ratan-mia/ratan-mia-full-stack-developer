import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shorifullislamratan.com"),
  title: {
    default: "Ratan Mia - Full Stack Developer | React.js & Next.js Expert",
    template: "%s | Ratan Mia - Full Stack Developer"
  },
  description: "Experienced Full Stack Developer with 10+ years expertise in React.js, Next.js, Laravel & WordPress. Building high-performance web applications for global clients. Available for new projects.",
  keywords: [
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Expert",
    "Laravel Developer",
    "WordPress Developer",
    "Shopify Developer",
    "Web Application Development",
    "E-commerce Development",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "PHP Developer",
    "Dhaka Bangladesh",
    "Remote Developer",
    "Freelance Developer",
    "Custom Web Development",
    "API Development",
    "Database Design",
    "UI/UX Implementation",
    "Performance Optimization",
    "SEO Optimization",
    "Cloud Deployment",
    "DevOps",
    "Docker",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Digital Ocean",
    "Google Cloud"
  ],
  authors: [
    {
      name: "Ratan Mia",
      url: "https://shorifullislamratan.com"
    }
  ],
  creator: "Ratan Mia",
  publisher: "Ratan Mia",
  category: "Technology",
  classification: "Web Development",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shorifullislamratan.com",
    siteName: "Ratan Mia - Full Stack Developer",
    title: "Ratan Mia - Expert Full Stack Developer | React.js & Next.js Specialist",
    description: "Professional Full Stack Developer with 10+ years experience building high-performance web applications. Specializing in React.js, Next.js, Laravel, and WordPress development for global clients.",
    images: [
      {
        url: "/images/shorifull-islam-ratan-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ratan Mia - Full Stack Developer",
        type: "image/jpeg",
      },
      {
        url: "/images/shorifull-islam-ratan-square.jpg",
        width: 400,
        height: 400,
        alt: "Ratan Mia - Professional Developer",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shorifull",
    creator: "@shorifull",
    title: "Ratan Mia - Full Stack Developer | React.js & Next.js Expert",
    description: "Professional Full Stack Developer with 10+ years experience. Specializing in React.js, Next.js, Laravel & WordPress. Building scalable web applications for global clients.",
    images: ["/images/shorifull-islam-ratan-twitter.jpg"],
  },
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3b82f6",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://shorifullislamratan.com",
    languages: {
      "en-US": "https://shorifullislamratan.com",
      "en-GB": "https://shorifullislamratan.com/en-gb",
    },
  },
  other: {
    "msapplication-TileColor": "#3b82f6",
    "theme-color": "#ffffff",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ratan Mia",
  alternateName: "Ratan Mia",
  description: "Full Stack Developer with 10+ years of experience specializing in React.js, Next.js, Laravel, and WordPress development",
  url: "https://shorifullislamratan.com",
  image: "https://shorifullislamratan.com/images/shorifull-islam-ratan.jpg",
  sameAs: [
    "https://linkedin.com/in/shorifull",
    "https://github.com/shorifull",
    "https://twitter.com/shorifull"
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Kawasaki Bangladesh",
    url: "https://kawasaki.com.bd"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh"
  },
  email: "shorifull@gmail.com",
  telephone: "+8801751010966",
  knowsAbout: [
    "React.js",
    "Next.js",
    "Laravel",
    "WordPress",
    "Shopify",
    "JavaScript",
    "PHP",
    "Full Stack Development",
    "Web Development",
    "E-commerce Development"
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Bachelor of Arts (English)",
      educationalLevel: "Bachelor's Degree",
      credentialCategory: "degree"
    }
  ],
  award: [
    "Junior Scholarship - Dhaka Education Board (2008)",
    "Top Position in Dhaka Education Board"
  ],
  memberOf: {
    "@type": "ProfessionalService",
    name: "Web Development Community"
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ratan Mia - Web Development Services",
  alternateName: "Ratan Mia Development",
  description: "Professional web development services specializing in React.js, Next.js, Laravel, and WordPress development",
  url: "https://shorifullislamratan.com",
  logo: "https://shorifullislamratan.com/images/logo.png",
  image: "https://shorifullislamratan.com/images/shorifull-islam-ratan.jpg",
  telephone: "+8801751010966",
  email: "shorifull@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.8103",
    longitude: "90.4125"
  },
  sameAs: [
    "https://linkedin.com/in/shorifull",
    "https://github.com/shorifull",
    "https://twitter.com/shorifull"
  ],
  founder: {
    "@type": "Person",
    name: "Ratan Mia"
  },
  serviceType: [
    "Web Development",
    "Full Stack Development",
    "React.js Development",
    "Next.js Development",
    "Laravel Development",
    "WordPress Development",
    "Shopify Development",
    "E-commerce Development",
    "API Development",
    "Database Design",
    "Performance Optimization",
    "SEO Optimization"
  ],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "React.js Development",
          description: "Custom React.js application development with modern best practices"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Next.js Development",
          description: "Server-side rendered and static site generation with Next.js"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laravel Development",
          description: "Custom Laravel web applications and API development"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WordPress Development",
          description: "Custom WordPress themes, plugins, and website development"
        }
      }
    ]
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "Client Testimonial"
      },
      reviewBody: "98% client satisfaction rate with excellent delivery quality and timeline adherence."
    }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Performance & Security */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        {/* Additional SEO Meta */}
        <meta name="geo.region" content="BD-13" />
        <meta name="geo.placename" content="Dhaka" />
        <meta name="geo.position" content="23.8103;90.4125" />
        <meta name="ICBM" content="23.8103, 90.4125" />

        {/* Professional Profiles */}
        <link rel="me" href="https://linkedin.com/in/shorifull" />
        <link rel="me" href="https://github.com/shorifull" />

        {/* Webmaster Tools */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />

        {/* Open Graph Additional */}
        <meta property="og:site_name" content="Ratan Mia - Full Stack Developer" />
        <meta property="og:updated_time" content={new Date().toISOString()} />
        <meta property="article:author" content="Ratan Mia" />
        <meta property="article:publisher" content="https://shorifullislamratan.com" />

        {/* Twitter Additional */}
        <meta name="twitter:domain" content="shorifullislamratan.com" />
        <meta name="twitter:url" content="https://shorifullislamratan.com" />

        {/* Business Information */}
        <meta name="contact" content="shorifull@gmail.com" />
        <meta name="reply-to" content="shorifull@gmail.com" />
        <meta name="owner" content="Ratan Mia" />
        <meta name="directory" content="submission" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}>
        {/* Skip Navigation for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Skip to main content
        </a>

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Analytics Scripts */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
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

            {/* Microsoft Clarity */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
                `,
              }}
            />

            {/* Facebook Pixel */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('SW registered: ', registration);
                  }).catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}