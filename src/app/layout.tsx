import type { Metadata } from "next";
import { Space_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Toaster } from "sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap', // 'swap' ensures text is visible while the font loads
  weight: ['400', '700'], // Specify the weights you need
  variable: '--font-poppins', // Define a CSS variable for Tailwind or CSS modules
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap', // 'swap' ensures text is visible while the font loads
  weight: ['400', '700'], // Specify the weights you need
  variable: '--font-space-mono', // Define a CSS variable for Tailwind or CSS modules
})

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-hiprathamraghav.vercel.app"),
  title: {
    default: "Pratham Raghav | Full Stack Developer",
    template: "%s | Pratham Raghav",
  },
  description: "Pratham Raghav is a full stack developer building modern web experiences with React, Next.js, TypeScript, Node.js, and full-stack technologies.",
  authors: {
    name: "Pratham Raghav",
    url: "https://github.com/hiprathamraghav/My-Portfolio",
  },
  creator: "Pratham Raghav",
  publisher: "Pratham Raghav",
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
  keywords: [
    "Pratham Raghav",
    "full-stack developer",
    "software engineer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Node.js developer",
    "portfolio",
    "web development",
    "frontend developer",
    "backend developer",
    "full stack web developer",
    "React portfolio",
    "Next.js portfolio",
    "software developer portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-hiprathamraghav.vercel.app",
    siteName: "Pratham Raghav Portfolio",
    title: "Pratham Raghav | Full Stack Developer",
    description: "Pratham Raghav is a full stack developer building modern web experiences with React, Next.js, TypeScript, Node.js, and full-stack technologies.",
    images: [
      {
        url: "/avatar.jpeg",
        width: 1200,
        height: 630,
        alt: "Pratham Raghav - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratham Raghav | Full Stack Developer",
    description: "Pratham Raghav is a full stack developer building modern web experiences with React, Next.js, TypeScript, Node.js, and full-stack technologies.",
    images: [
      {
        url: "/avatar.jpeg",
        width: 1200,
        height: 630,
        alt: "Pratham Raghav - Full Stack Developer",
      },
    ],
  },
  icons: [
    {
      url: "/avatar.jpeg",
      rel: "icon",
      type: "image/jpeg",
      sizes: "32x32",
    },
    {
      url: "/avatar.jpeg",
      rel: "apple-touch-icon",
      type: "image/jpeg",
      sizes: "180x180",
    },
  ],
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${spaceMono.className}`}>
      <body
        className={`antialiased`} //${geistSans.variable} ${geistMono.variable} 
      >
        <ThemeProvider>
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
