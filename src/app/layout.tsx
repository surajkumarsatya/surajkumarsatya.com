import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://surajkumarsatya.com"),
  title: {
    default: "Suraj Kumar Satya – Frontend Developer",
    template: "%s | Suraj",
  },
  description:
    "Frontend Developer specializing in Next.js, React, TypeScript, and building high-performance web applications. I love building products to solve real-world problems. I'm specialized in building websites. Explore my projects, experience, and technical expertise.",
  applicationName: "Suraj",
  openGraph: {
  siteName: "Suraj",
  images: [
    {
      url: "/images/logo.webp",
      width: 1200,
      height: 630,
      alt: "Suraj Kumar Satya – Frontend Developer",
    },
  ],
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Suraj Kumar Satya",
              alternateName: "Suraj – Frontend Developer",
              url: "https://surajkumarsatya.com",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
