import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";
import ManualScrollRestoration from "@/components/ScrollToTop";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Niroshine - Professional Cleaning Services in Tasmania",
  description: "Affordable and professional house cleaning services in Tasmania.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth!">
      <body className={poppins.className}>
        <Header /> 
        <main className="pt-8">
          {children}
        </main>
         <Footer />
      </body>
    </html>
  );
}