import type { Metadata } from "next";
import "./globals.css";
import "./globals.scss";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Sajith | Advocate in New Delhi | Legal Consultation",
  description: "Sajith is a leading Advocate in New Delhi offering professional legal consultation. Expert representation as a Civil & Criminal Lawyer, Property Lawyer, Family Lawyer, and Corporate Legal Services.",
  keywords: ["Advocate in New Delhi", "Legal Consultation in New Delhi", "Civil & Criminal Lawyer", "Property Lawyer", "Family Lawyer", "Corporate Legal Services", "Supreme Court Lawyer", "Delhi High Court", "NCLT representation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
