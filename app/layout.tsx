import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/layouts/Footer";
import Nav from "./components/layouts/Nav";
import { ThemeProvider } from "next-themes";
import AOSInit from "./AOSInit";
import Script from "next/script";

// Fonts
const myLocalFont = localFont({
  src: "../public/fonts/SfFedora-Emxr.ttf",
  variable: "--font-myFont",
});
const myDotoFont = localFont({
  src: "../public/fonts/Doto.ttf",
  variable: "--font-dotoFont",
});
const mySatoshiFont = localFont({
  src: "../public/fonts/satoshi-black.otf",
  variable: "--font-satoshiFont",
});
const myNablaFont = localFont({
  src: "../public/fonts/Nabla.ttf",
  variable: "--font-nablaFont",
});
const myGreatVibesFont = localFont({
  src: "../public/fonts/Greatvibes.ttf",
  variable: "--font-greatvibesFont",
});
const myStackSansFont = localFont({
  src: "../public/fonts/Stacksans.ttf",
  variable: "--font-stacksansFont",
});
const myDosisFont = localFont({
  src: "../public/fonts/Dosis.ttf",
  variable: "--font-dosisFont",
});
const myPlayfairFont = localFont({
  src: "../public/fonts/playfair.ttf",
  variable: "--font-playfairFont",
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.thetnyantoe.site";

export function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug?: string[] };
  searchParams: Record<string, string | string[] | undefined>;
}): Metadata {
  const path = params.slug ? `/${params.slug.join("/")}` : "/";
  const canonicalUrl = `${baseUrl}${path}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Thet Nyan Toe — Web Developer",
      template: "%s | Thet Nyan Toe",
    },
    description:
      "Thet Nyan Toe is a web developer crafting clean, modern, and intuitive digital experiences. Explore projects, skills, and miniT — an interactive AI assistant.",
    keywords: [
      "Thet Nyan Toe",
      "Web Developer",
      "Frontend Developer",
      "Full Stack Developer",
      "React Developer",
      "Next.js Portfolio",
      "miniT AI",
      "Personal Portfolio",
    ],
    authors: [{ name: "Thet Nyan Toe" }],
    creator: "Thet Nyan Toe",
    openGraph: {
      title: "Thet Nyan Toe — Web Developer",
      description:
        "A modern portfolio showcasing projects, skills, and miniT — an interactive AI experience.",
      url: canonicalUrl,
      siteName: "Thet Nyan Toe",
      images: [
        {
          url: `${baseUrl}/images/me.png`,
          width: 1200,
          height: 630,
          alt: "Thet Nyan Toe Portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Thet Nyan Toe — Web Developer",
      description: "Clean, modern web experiences built with Next.js.",
      images: [`${baseUrl}/images/me.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${myLocalFont.variable} ${myDotoFont.variable} ${mySatoshiFont.variable} ${myNablaFont.variable} ${myGreatVibesFont.variable} ${myStackSansFont.variable} ${myDosisFont.variable} ${myPlayfairFont.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Script
            id="person-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Thet Nyan Toe",
                url: "https://www.thetnyantoe.site",
                jobTitle: "Web Developer",
                sameAs: [
                  "https://github.com/ide-dev-05",
                  "https://www.linkedin.com/in/thet-nyan-toe-aa802b350/",
                ],
              }),
            }}
          />

          <Nav />
          <AOSInit />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
