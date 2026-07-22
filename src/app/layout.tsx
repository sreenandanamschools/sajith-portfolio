import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./globals.scss";
import SmoothScroll from "@/components/SmoothScroll";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.advsajithm.in"),
  title: {
    default:
      "Advocate Sajith | Best Lawyer in Thiruvananthapuram",
    template: "%s | Sajith - Advocate",
  },
  description:
    "Advocate Sajith provides expert legal representation and consultation at Vanchiyoor & District Court, Thiruvananthapuram for civil, criminal & property law.",
  keywords: [
    "Best lawyer in Trivandrum",
    "Lawyers in Trivandrum",
    "Advocate in Thiruvananthapuram",
    "Top lawyers in Trivandrum",
    "Vanchiyoor Court advocate",
    "Trivandrum District Court lawyer",
    "Civil lawyer Kerala",
    "Criminal lawyer Trivandrum",
    "Family lawyer Thiruvananthapuram",
    "Property lawyer Kerala",
    "Consumer dispute lawyer",
    "Legal consultation Trivandrum",
    "Government Law College Kozhikode alumni",
    "Kerala advocate",
  ],
  authors: [{ name: "Sajith" }],
  creator: "Sajith",
  publisher: "Sajith",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title:
      "Advocate Sajith | Best Lawyer in Thiruvananthapuram",
    description:
      "Advocate Sajith provides expert legal representation and consultation at Vanchiyoor & District Court, Thiruvananthapuram for civil, criminal & property law.",
    siteName: "Sajith - Advocate",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sajith | Best Lawyer in Trivandrum",
    description:
      "Advocate practicing at Vanchiyoor Court & Trivandrum District Court. Expert in Civil, Criminal, Family, and Property law.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Sajith - Best Lawyer in Trivandrum",
              description:
                "Leading advocate practicing at Vanchiyoor Court and Trivandrum District Court, Thiruvananthapuram, offering expert legal solutions.",
              telephone: "+919633334556",
              email: "advsajithm@gmail.com",
              areaServed: [
                { "@type": "City", name: "Thiruvananthapuram" },
                { "@type": "City", name: "Trivandrum" },
                { "@type": "State", name: "Kerala" },
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Advocate",
                occupationLocation: {
                  "@type": "City",
                  name: "Thiruvananthapuram",
                },
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
