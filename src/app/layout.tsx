import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Polaris — Autonomous AI Data Pipelines & Workflow Automation",
  description:
    "Polaris guides automated data work through the noise. Scale workflows, build unified data layers, and sync pipelines in real time with the arctic-grade data engine.",
  keywords: [
    "AI data automation",
    "data pipeline automation",
    "workflow automation platform",
    "ETL pipeline",
    "real-time data sync",
    "autonomous AI workflows",
    "data engineering platform",
    "SaaS automation",
  ],
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
  alternates: {
    canonical: "https://polaris-automation.vercel.app",
  },
  openGraph: {
    title: "Polaris — Autonomous AI Data Pipelines & Workflow Automation",
    description:
      "Polaris guides automated data work through the noise. Scale workflows, build unified data layers, and sync pipelines in real time with the arctic-grade data engine.",
    url: "https://polaris-automation.vercel.app",
    siteName: "Polaris",
    images: [
      {
        url: "https://polaris-automation.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Polaris — AI Data Automation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polaris — Autonomous AI Data Pipelines & Workflow Automation",
    description:
      "Polaris guides automated data work through the noise. Scale workflows, build unified data layers, and sync pipelines in real time with the arctic-grade data engine.",
    images: ["https://polaris-automation.vercel.app/og-image.png"],
    creator: "@polaris_hq",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Polaris",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Production-grade autonomous AI data engine that connects, syncs, and automates pipelines with arctic-grade speed and reliability.",
  url: "https://polaris-automation.vercel.app",
  offers: [
    {
      "@type": "Offer",
      name: "Scout",
      price: "19",
      priceCurrency: "USD",
      description: "For developers exploring autonomous automation and staging pipelines.",
    },
    {
      "@type": "Offer",
      name: "Voyager",
      price: "49",
      priceCurrency: "USD",
      description: "Production-ready pipeline deployment with high-scale task triggers.",
    },
    {
      "@type": "Offer",
      name: "Polaris",
      price: "129",
      priceCurrency: "USD",
      description: "Enterprise autonomy for planet-scale workflows and dedicated nodes.",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1247",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-oceanic-noir text-arctic-powder flex flex-col selection:bg-forsythia selection:text-oceanic-noir">
        {children}
      </body>
    </html>
  );
}
