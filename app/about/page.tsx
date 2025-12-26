import type { Metadata } from "next";
import AboutClient from "./Aboutclient";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Thet Nyan Toe, a web developer specializing in React, Next.js, and modern web experiences.",
  alternates: {
    canonical: "https://www.thetnyantoe.site/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
