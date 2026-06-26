import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animesh Ansh Yadav | Portfolio",
  description: "A creative developer portfolio built with Next.js and Framer Motion, featuring scrollytelling and dynamic UI.",
  keywords: ["Animesh Ansh Yadav", "Portfolio", "Frontend Developer", "Next.js", "React", "Framer Motion", "Web Developer"],
  authors: [{ name: "Animesh Ansh Yadav" }],
  openGraph: {
    title: "Animesh Ansh Yadav | Portfolio",
    description: "Creative developer portfolio built with Next.js, featuring scrollytelling.",
    url: "https://github.com/siefer2005/My-Portfolio",
    siteName: "Animesh Ansh Yadav Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animesh Ansh Yadav | Portfolio",
    description: "Creative developer portfolio built with Next.js and Framer Motion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth">
      <body suppressHydrationWarning className={`${inter.className} min-h-full flex flex-col bg-[#121212] text-neutral-100`}>
        {children}
      </body>
    </html>
  );
}
