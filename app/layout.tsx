import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/layouts/Footer";
import Nav from "./components/layouts/Nav";
import { ThemeProvider } from "next-themes";
import AOSInit from "./AOSInit";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://thetnyantoe.vercel.app"),

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
    url: "https://thetnyantoe.vercel.app",
    siteName: "Thet Nyan Toe",
    images: [
      {
        url: "/images/me.png",
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
    images: ["/images/me.png"],
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
};

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
          <Nav />
          <AOSInit />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
