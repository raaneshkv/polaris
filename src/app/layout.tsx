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
    "Polaris guides automated data work through the noise. Scale workflows, build unified data layers, and sync pipelines in real time with the arctic grade data engine.",
  alternates: {
    canonical: "https://polaris-automation.vercel.app",
  },
  openGraph: {
    title: "Polaris — Autonomous AI Data Pipelines & Workflow Automation",
    description:
      "Polaris guides automated data work through the noise. Scale workflows, build unified data layers, and sync pipelines in real time with the arctic grade data engine.",
    url: "https://polaris-automation.vercel.app",
    siteName: "Polaris",
    images: [
      {
        url: "https://polaris-automation.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Polaris Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polaris — Autonomous AI Data Pipelines & Workflow Automation",
    description:
      "Polaris guides automated data work through the noise. Scale workflows, build unified data layers, and sync pipelines in real time with the arctic grade data engine.",
    images: ["https://polaris-automation.vercel.app/og-image.png"],
    creator: "@polaris_hq",
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
      <body className="min-h-full bg-oceanic-noir text-arctic-powder flex flex-col selection:bg-forsythia selection:text-oceanic-noir">
        {children}
      </body>
    </html>
  );
}
