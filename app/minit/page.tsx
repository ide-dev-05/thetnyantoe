"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import cato from "./_images/cato.gif";
import cato2 from "./_images/cato2.gif";
import cato3 from "./_images/cato3.gif";
import { RandomizedTextEffect } from "../components/shared/text-randomized";
import Paw from "./_images/paw";
import Send from "./_images/send";

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function miniT() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const [input, setInput] = useState<string>("");
  const [start, setStart] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: input },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    if (!res.body) {
      setLoading(false);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let assistantMessage = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      assistantMessage += decoder.decode(value);

      setMessages((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        if (last?.role === "assistant") {
          updated[updated.length - 1] = {
            role: "assistant",
            content: assistantMessage,
          };
        } else {
          updated.push({ role: "assistant", content: assistantMessage });
        }
        return updated;
      });
    }

    setLoading(false);
    textareaRef.current?.focus();
  }

  return (
    <>
      <section className="h-screen w-full flex justify-center pt-[50px] md:pt-[80px] overflow-hidden bg-[#ddddd1] dark:bg-[#000b0a]">
        <div className="flex flex-col justify-between w-full h-full min-h-0 max-w-[750px] pb-[5px] sm:pb-[20px] px-[5px]">
          {start ? (
            <div
              className="flex-10 overflow-y-auto max-h-full mb-[5px]"
              ref={chatContainerRef}
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="max-w-[80%]">
                    {m.role === "assistant" && (
                      <div className="flex items-center mb-[-10px]">
                        <Image
                          rel="preload"
                          src={cato}
                          width={100}
                          height={100}
                          alt="miniTnt"
                          className="size-[50px]"
                        />
                        <p className="text-sm text-zinc-400 stacksansFont">
                          miniT
                        </p>
                      </div>
                    )}

                    {/* Message bubble */}
                    <div
                      className={`rounded-lg px-[10px] py-[5px] text-[15px] ${
                        m.role === "user"
                          ? "bg-[#3c2537] text-zinc-250 text-right"
                          : "leading-[25px] text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      {m.role === "assistant" ? (
                        <ReactMarkdown
                          components={{
                            a: ({ ...props }) => (
                              <a
                                {...props}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                              />
                            ),
                          }}
                        >
                          {m.content}
                        </ReactMarkdown>
                      ) : (
                        m.content
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="text-left text-zinc-400 italic">
                  Thinking...
                </div>
              )}
            </div>
          ) : (
            <div className="flex-10 h-full ">
              <div className="flex items-center">
                <div>
                  <Image
                    src={cato}
                    width={100}
                    height={100}
                    alt="miniTnt"
                    className="size-[120px]"
                  />
                </div>
                <div className="text-[32px] font-medium dosisFont text-zinc-700 dark:text-zinc-200">
                  <p className="text-[16px] text-zinc-600 dark:text-zinc-500">
                    Yo, I'm{" "}
                    <u className="text-zinc-500 dark:text-zinc-400">miniT</u>
                  </p>
                  Let's Talk About{" "}
                  <span className="text-yellow-700 dark:text-yellow-200">
                    <RandomizedTextEffect text="Thet Nyan Toe" />
                  </span>
                  !
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-[40px] md:pt-[90px]">
                <p
                  onClick={() => {
                    setInput("Can you tell me about his experiences?");
                    textareaRef.current?.focus();
                  }}
                  className="group cursor-pointer bg-gray-700 dark:bg-gray-400/10 relative rounded-lg p-[10px] sm:p-[20px] text-white/80 dark:text-white/70 text-[20px] sm:text-[22px] dosisFont font-medium h-[140px]  w-full overflow-hidden"
                >
                  Can you tell me about his experiences?
                  <Paw className="size-[100px] absolute right-[-10px] bottom-[-10px]  rotate-[-40deg] opacity-10 group-hover:opacity-30" />
                </p>
                <p
                  onClick={() => {
                    setInput("Give me all of his contacts!");
                    textareaRef.current?.focus();
                  }}
                  className="group cursor-pointer bg-blue-900/80 dark:bg-blue-400/10 relative rounded-lg p-[10px] sm:p-[20px] text-white/80 dark:text-white/70 text-[20px] sm:text-[22px] dosisFont font-medium h-[140px]  w-full overflow-hidden"
                >
                  Give me all of his Contacts!
                  <Paw className="size-[100px] absolute right-[-10px] bottom-[-10px]  rotate-[-40deg] opacity-10 group-hover:opacity-30" />
                </p>
                <p
                  onClick={() => {
                    setInput("Can I hire him as a web developer?");
                    textareaRef.current?.focus();
                  }}
                  className="group cursor-pointer bg-yellow-700/90 dark:bg-yellow-400/10 relative rounded-lg p-[10px] sm:p-[20px] text-white/80 dark:text-white/70 text-[20px] sm:text-[22px] dosisFont font-medium h-[140px]  w-full overflow-hidden"
                >
                  Can I hire him as a web developer?
                  <Paw className="size-[100px] absolute right-[-10px] bottom-[-10px]  rotate-[-40deg] opacity-10 group-hover:opacity-30" />
                </p>
                <p
                  onClick={() => {
                    setInput("What is Thet Nyan Toe like outside of coding?");
                    textareaRef.current?.focus();
                  }}
                  className="group cursor-pointer bg-green-800/90 dark:bg-green-400/10 relative rounded-lg p-[10px] sm:p-[20px] text-white/80 dark:text-white/70 text-[20px] sm:text-[22px] dosisFont font-medium h-[140px]  w-full overflow-hidden"
                >
                  What is Thet Nyan Toe like outside of coding?
                  <Paw className="size-[100px] absolute right-[-10px] bottom-[-10px]  rotate-[-40deg] opacity-10 group-hover:opacity-30" />
                </p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
          <form
            className="flex-2  w-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-b-lg rounded-tl-lg relative h-auto"
            onSubmit={(e) => {
              e.preventDefault();
              setStart(true);
              sendMessage();
            }}
          >
            {input ? (
              <Image
                src={cato2}
                width={30}
                height={30}
                alt="mini"
                className="size-[85px] z-[100] absolute right-[-2px] top-[-60px]"
              />
            ) : (
              <Image
                src={cato3}
                width={30}
                height={30}
                alt="mini"
                className="size-[92px] z-[100] absolute right-[-15px] top-[-60px]"
              />
            )}

            <textarea
              ref={textareaRef}
              value={input}
              className="w-full h-full p-[10px] outline-none resize-none rounded border-none text-zinc-600 dark:text-zinc-300 "
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  e.currentTarget.form?.requestSubmit();
                }
              }}
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="absolute right-2 bottom-2 bg-white/80 text-white px-[5px] py-[2px] rounded"
            >
              <Send className="size-[30px] text-zinc-200 scale-x-[-1]" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
