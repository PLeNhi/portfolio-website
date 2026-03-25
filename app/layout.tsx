import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nhi Le - Frontend Engineer",
  description:
    "I build polished web and mobile products with a focus on scalable frontend architecture, complex UI flows, and reliable user experience.",
  keywords: [
    "Frontend Engineer",
    "React",
    "React Native",
    "TypeScript",
    "Web Developer",
  ],
  authors: [{ name: "Nhi Le", url: "https://nhile.dev" }],
  creator: "Nhi Le",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nhile.dev",
    title: "Nhi Le - Frontend Engineer",
    description:
      "I build polished web and mobile products with a focus on scalable frontend architecture, complex UI flows, and reliable user experience.",
    siteName: "Nhi Le Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhi Le - Frontend Engineer",
    description:
      "I build polished web and mobile products with a focus on scalable frontend architecture, complex UI flows, and reliable user experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
