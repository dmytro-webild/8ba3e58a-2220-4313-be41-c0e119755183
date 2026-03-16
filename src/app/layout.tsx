import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Archivo } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OptimizeX - Self-Improvement & Fitness Knowledge Hub",
  description: "Access expert courses on fitness optimization, nutrition science, skincare, nootropics, and self-improvement. Join our exclusive community of high-achievers.",
  keywords: "fitness courses, optimization, self-improvement, community, wellness education",
  metadataBase: new URL("https://optimizex.com"),
  alternates: {
    canonical: "https://optimizex.com",
  },
  openGraph: {
    title: "OptimizeX - Unlock Your Peak Performance",
    description: "Master the science of self-optimization with expert-curated courses and our supportive community.",
    siteName: "OptimizeX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OptimizeX - Self-Improvement Platform",
    description: "Access courses and community for fitness, wellness, and personal optimization.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${archivo.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}