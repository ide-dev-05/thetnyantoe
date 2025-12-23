"use client";

import RightarrowIcon from "@/public/icons/rightarrow";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contactform() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
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
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("Failed to send message. Please try again.");
      setStatusType("error");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full mt-5">
      <div className="flex items-center">
        <input
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a message"
          className="w-full bg-gray-100 p-2 rounded-lg"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 rounded-full p-1 ml-3 cursor-pointer disabled:opacity-50"
        >
          <RightarrowIcon className="size-[25px]" />
        </button>
      </div>

      {submitStatus ? (
        <p
          className={`mt-4 mb-1 text-sm ${
            statusType === "success"
              ? "text-green-600"
              : statusType === "error"
              ? "text-red-600"
              : "text-gray-500"
          }`}
        >
          {submitStatus}
        </p>
      ) : (
        <p
          className={`mt-4 mb-1 text-sm opacity-0 ${
            statusType === "success"
              ? "text-green-600"
              : statusType === "error"
              ? "text-red-600"
              : "text-gray-500"
          }`}
        >
          hello
        </p>
      )}
    </form>
  );
}

{
  /* <input
        type="email"
        placeholder="Enter your email"
        className="w-full bg-gray-100 p-2 rounded-lg"
      /> */
}
