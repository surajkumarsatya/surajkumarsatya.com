import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/react';
import Script from "next/script";


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
      url: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "Suraj Kumar Satya – Frontend Developer",
    },
  ],
},

  twitter: {
    card: 'summary_large_image',
    title: 'Suraj Kumar Satya – Frontend Developer',
    description: "Frontend Developer specializing in Next.js, React, TypeScript, and building high-performance web applications. I love building products to solve real-world problems. I'm specialized in building websites. Explore my projects, experience, and technical expertise.",
    images: ['/images/og-image.png'],
  },

  other: {
    'og:image:secure_url':
      'https://surajkumarsatya.com/images/og-image.png',
    'og:image:type': 'image/png',
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
            {process.env.VERCEL_ENV === "production" && (
            <Script
              id="microsoft-clarity"
              strategy="afterInteractive"
            >
              {`
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;
                    t.src="https://www.clarity.ms/tag/${process.env.CLARITY_ID}";
                    y=l.getElementsByTagName(r)[0];
                    y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script");
              `}
            </Script>
          )}

          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
