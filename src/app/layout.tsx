import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
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
    "Web Development",
    "JavaScript Developer",
    "PHP Developer",
    "Dhaka Bangladesh",
    "Remote Developer"
  ],
  authors: [{ name: "Ratan Mia", url: "https://shorifullislamratan.com" }],
  creator: "Ratan Mia",

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shorifullislamratan.com",
    siteName: "Ratan Mia - Full Stack Developer",
    title: "Ratan Mia - Expert Full Stack Developer | React.js & Next.js Specialist",
    description: "Professional Full Stack Developer with 10+ years experience building high-performance web applications. Specializing in React.js, Next.js, Laravel, and WordPress development.",
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
    description: "Professional Full Stack Developer with 10+ years experience. Specializing in React.js, Next.js, Laravel & WordPress.",
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
    canonical: "https://shorifullislamratan.com",
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ratan Mia",
  jobTitle: "Full Stack Developer",
  description: "Full Stack Developer with 10+ years of experience specializing in React.js, Next.js, Laravel, and WordPress development",
  url: "https://shorifullislamratan.com",
  image: "https://shorifullislamratan.com/images/profile.jpg",
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
  email: "shorifull@gmail.com",
  telephone: "+8801751010966",
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
        {/* Fixed viewport to solve zoom issue */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Google Services Verification Meta Tags */}
        <meta name="google-site-verification" content="your-search-console-verification-code" />
        <meta name="google-adsense-account" content="ca-pub-your-adsense-publisher-id" />
        <meta name="google-adsense-platform-account" content="ca-host-pub-your-host-property-code" />

        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Additional Google Services Meta Tags */}
        <meta name="google" content="notranslate" />
        <meta name="googlebot" content="index,follow" />
        <meta name="google-site-verification" content="your-search-console-verification-code" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white text-gray-900 selection:bg-blue-500 selection:text-white`}>
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

            {/* Google Tag Manager */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
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
                  fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>

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

            {/* Google AdSense */}
            <script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
              crossOrigin="anonymous"
            />
          </>
        )}
      </body>
    </html>
  );
}