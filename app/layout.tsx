import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Hawariya Yohannes | Computer Science Student & Software Engineer",
  description:
    "Personal portfolio of Hawariya Yohannes — Computer Science student and developer building thoughtful, high-performance, and secure digital applications.",
  keywords: [
    "Hawariya Yohannes",
    "Computer Science",
    "Software Engineer",
    "Full-Stack Developer",
    "Unity University",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Hawariya Yohannes" }],
  creator: "Hawariya Yohannes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hawariya.dev",
    title: "Hawariya Yohannes | Computer Science Student & Software Engineer",
    description:
      "Engineering ideas into digital experiences. Computer Science student & developer specializing in scalable web systems and architectural clarity.",
    siteName: "Hawariya Yohannes Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hawariya Yohannes | Computer Science Student & Software Engineer",
    description: "Engineering ideas into digital experiences. Computer Science student & developer.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1931",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased selection:bg-[var(--accent-interactive)] selection:text-[var(--color-cloud-white)] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
