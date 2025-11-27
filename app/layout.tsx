// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const baseUrl = "https://www.niroshinecleaning.com.au/"; 


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Niroshine Cleaning Services | Professional Cleaners in Tasmania",
    template: "%s | Niroshine Cleaning Services",
  },
  description:
    "Trusted residential and commercial cleaning in Tasmania. We offer bond cleaning, deep cleaning, end-of-lease services, and more. Get a free quote today!",
  keywords: [
    "Cleaning Services Tasmania",
    "House Cleaning Hobart",
    "Bond Cleaning Tasmania",
    "End of Lease Cleaning",
    "Commercial Cleaning",
    "Deep Cleaning Services",
    "Niroshine",
  ],
  authors: [{ name: "Niroshine Cleaning Services" }],
  creator: "Niroshine",
  publisher: "Niroshine",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Niroshine Cleaning Services | Sparkling Clean Homes",
    description: "Professional, reliable, and affordable house cleaning services in Tasmania.",
    url: baseUrl,
    siteName: "Niroshine Cleaning Services",
    images: [
      {
        url: "/og-image.jpg", // You need to create this image (1200x630px) and put it in public folder
        width: 1200,
        height: 630,
        alt: "Niroshine Cleaning Services Crew",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "name": "Niroshine Cleaning Services",
    "image": `${baseUrl}/logo2.jpeg`,
    "description": "Professional residential and commercial cleaning services in Tasmania.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Tasmania",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -42.8821, 
      "longitude": 147.3272
    },
    "url": baseUrl,
    "telephone": "+61426702208",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": {
      "@type": "State",
      "name": "Tasmania"
    }
  };


  return (
    <html lang="en">

       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="bg-white antialiased overflow-x-hidden">
        <Header /> 
        <main className="w-full overflow-hidden">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}