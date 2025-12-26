import type { Metadata } from "next";
import MinitClient from "./MinitClient";

export const metadata: Metadata = {
  title: "miniT — AI Chatbot",
  description:
    "miniT is an interactive AI chatbot created by Thet Nyan Toe, showcasing conversational UI, AI-powered responses, and modern web interaction.",
  alternates: {
    canonical: "https://www.thetnyantoe.site/minit",
  },
};

export default function MinitPage() {
  return <MinitClient />;
}
