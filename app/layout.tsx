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
  title: "Thet Nyan Toe",
  description: "",
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
        {/* ThemeProvider wraps only the app content, inside <body> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          <AOSInit />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
