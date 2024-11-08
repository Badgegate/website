import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Badgegate - Credential-Based Opportunity Platform",
  description: "Transform your achievements into opportunities with Badgegate. Connect with ventures through a secure, credential-based matching system built on the Internet Computer.",
  keywords: ["credentials", "opportunities", "Internet Computer", "blockchain", "web3"],
  openGraph: {
    title: "Badgegate - Credential-Based Opportunity Platform",
    description: "Transform your achievements into opportunities with Badgegate. Connect with ventures through a secure, credential-based matching system built on the Internet Computer.",
    url: "https://badgegate.org",
    siteName: "Badgegate",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Badgegate Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Badgegate - Credential-Based Opportunity Platform",
    description: "Transform your achievements into opportunities with Badgegate. Connect with ventures through a secure, credential-based matching system built on the Internet Computer.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-muted flex flex-col">
          <div className="flex flex-col bg-background w-full max-w-5xl mx-auto lg:my-8 lg:border border-border lg:drop-shadow-sm flex-grow">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
