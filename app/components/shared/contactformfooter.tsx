"use client";

import RightArrowIcon from "@/public/icons/rightarrow";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contactformfooter() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  // EmailJS config from .env
  const emailjsConfig = {
    service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus("");
    setStatusType("");

    try {
      const result = await emailjs.send(
        emailjsConfig.service,
        emailjsConfig.template,
        { message },
        emailjsConfig.key
      );

      if (result.status === 200) {
        setSubmitStatus("Message sent successfully!");
        setStatusType("success");
        setMessage("");
      }
    } catch (error: unknown) {
      // TypeScript-safe error logging
      if (error instanceof Error) {
        console.error("EmailJS error:", error.message);
      } else {
        console.error("EmailJS error:", error);
      }
      setSubmitStatus("Failed to send message. Please try again.");
      setStatusType("error");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full mt-[10px]">
      <div className="flex items-center w-full">
        <input
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a message"
          className="w-[60%] bg-gray-800 text-white p-2 rounded-lg focus:outline-none"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 rounded-full p-1 ml-3 cursor-pointer hover:bg-transparent hover:border hover:border-blue-600 disabled:opacity-50"
        >
          <RightArrowIcon className="size-[25px]" />
        </button>
      </div>

      {submitStatus && (
        <p
          className={`mt-2 text-sm ${
            statusType === "success"
              ? "text-green-500"
              : statusType === "error"
              ? "text-red-500"
              : "text-gray-500"
          }`}
        >
          {submitStatus}
        </p>
      )}
    </form>
  );
}
