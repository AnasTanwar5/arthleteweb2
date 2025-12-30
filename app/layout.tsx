import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arthlete | AI-Powered Motion Tracking for Smarter Home Workouts",
  description: "AI-powered motion tracking for smarter home workouts, fat loss, and strength training. Personalized fitness plans, diet plans, and real-time form correction. Download the Arthlete app today.",
  keywords: "fitness app, AI motion tracking, home workouts, fat loss, strength training, workout tracker, diet plans, fitness challenges, personal trainer app, exercise app, workout app, fitness tracking, AI fitness, motion tracking, home gym, workout plans",
  authors: [{ name: "Arthlete" }],
  creator: "Arthlete",
  publisher: "Arthlete",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/arthlete-logo.png',
    shortcut: '/arthlete-logo.png',
    apple: '/arthlete-logo.png',
  },
  openGraph: {
    title: "Arthlete | AI-Powered Motion Tracking for Smarter Home Workouts",
    description: "AI-powered motion tracking for smarter home workouts, fat loss, and strength training. Personalized fitness plans, diet plans, and real-time form correction.",
    type: "website",
    siteName: "Arthlete",
    images: [
      {
        url: '/arthlete-logo.png',
        width: 1200,
        height: 630,
        alt: 'Arthlete - AI-Powered Fitness App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Arthlete | AI-Powered Motion Tracking for Smarter Home Workouts",
    description: "AI-powered motion tracking for smarter home workouts, fat loss, and strength training.",
    images: ['/arthlete-logo.png'],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://arthlete.app'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} antialiased bg-white text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
