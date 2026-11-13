import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import AutoReveal from "@/app/components/motion/AutoReveal";
import Cursor from "@/app/components/motion/Cursor";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE = "https://www.ratanmia.pro";
const DESCRIPTION =
  "Ratan Mia — full-stack & mobile engineer and IT manager in Dhaka with 10+ years building SaaS products, React Native apps, headless Shopify stores and WhatsApp & AI automation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Ratan Mia — Full-Stack & Mobile Engineer",
    template: "%s | Ratan Mia",
  },
  description: DESCRIPTION,
  keywords: [
    "Ratan Mia",
    "Full Stack Developer Bangladesh",
    "React Native Developer",
    "Next.js Developer",
    "Shopify Headless Developer",
    "Supabase",
    "WhatsApp CRM",
    "IT Manager Dhaka",
    "Remote Developer",
  ],
  authors: [{ name: "Ratan Mia", url: SITE }],
  creator: "Ratan Mia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE,
    siteName: "Ratan Mia",
    title: "Ratan Mia — Full-Stack & Mobile Engineer",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratan Mia — Full-Stack & Mobile Engineer",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ratan Mia",
  jobTitle: "Full-Stack & Mobile Engineer",
  description: DESCRIPTION,
  url: SITE,
  image: `${SITE}/images/hero-image.png`,
  sameAs: [
    "https://www.linkedin.com/in/shorifull/",
    "https://github.com/ratan-mia",
    "https://www.upwork.com/freelancers/ratanmia",
  ],
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  email: "mailto:shorifull@gmail.com",
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Dhaka" },
  knowsAbout: [
    "React Native", "Next.js", "TypeScript", "Supabase", "Shopify Headless",
    "Laravel", "WordPress", "WhatsApp Cloud API", "IT Management",
  ],
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body className="bg-ink font-sans text-white antialiased selection:bg-lime selection:text-black overflow-x-hidden">
        <SmoothScroll />
        <AutoReveal />
        <Cursor />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {process.env.NODE_ENV === "production" && GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
