import Image from "next/image";
import Link from "next/link";
import photo from "@/public/images/1.png";
import NextjsIcon from "@/public/icons/techs/nextjs";
import TypescriptIcon from "@/public/icons/techs/typescript";
import TailwindIcon from "@/public/icons/techs/tailwind";
import PythonIcon from "@/public/icons/techs/python";
import ShadcnIcon from "@/public/icons/techs/shadcn";
import VitejsIcon from "@/public/icons/techs/vite";
import OllamaIcon from "@/public/icons/techs/ollama";
import PostgresqlIcon from "@/public/icons/techs/postgresql";

export default function Securum() {
  const techs = [
    { Icon: NextjsIcon, name: "Next.js" },
    { Icon: TypescriptIcon, name: "TypeScript" },
    { Icon: TailwindIcon, name: "Tailwind CSS" },
    { Icon: VitejsIcon, name: "Vite.js" },
    { Icon: PythonIcon, name: "Python" },
    { Icon: PostgresqlIcon, name: "PostgreSQL" },
    { Icon: ShadcnIcon, name: "Shadcn/UI" },
    { Icon: OllamaIcon, name: "Ollama" },
  ];
  return (
    <div className="w-full flex justify-center items-center mt-[80px] md:mt-[150px] mb-[20px] md:mb-[1850px] lg:mb-[200px] px-[10px]">
      <div className="w-full max-w-[1000px]">
        <Link
          href="/work"
          className="w-full pl-[10px] text-zinc-500 hover:text-zinc-300"
        >
          <u>{"Go Back"}</u>
        </Link>
        <div className="w-full p-0  md:p-[90px] bg-black border border-zinc-900 rounded-[5px] mt-[40px]">
          <Image
            src={photo}
            width={360}
            height={390}
            quality={100}
            alt="Picture of the author"
            className="w-full h-auto rounded-[5px] object-cover "
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between mt-[40px]">
          <p className="text-[24px] font-medium dotoFont text-zinc-400">
            Securum AI Chatbot
          </p>
          <div className="mt-[50px] md:mt-0 flex flex-col md:flex-row justify-end items-end md:items-start md:justify-between space-y-[15px] md:space-y-0 md:space-x-[10px] text-zinc-500">
            <div className="min-w-[120px] md:w-[180px] ">
              <p className="text-zinc-400">Areas</p>
              <hr className="w-full h-[1px] bg-white my-[8px]" />
              <p>
                AI <br /> Community <br />
                Cybersecurity
                <br />
                Chatbot
                <br />
                Competition
              </p>
            </div>
            <div className="max-w-[250px]">
              <p className="text-zinc-400">Overview</p>
              <hr className="w-full h-[1px] bg-white my-[8px]" />
              <p>
                Securum is a cybersecurity-focused AI platform that blends
                intelligent chat, file-based threat analysis, and voice
                interaction to make cybersecurity more accessible and practical.
                Alongside AI-driven assistance, it offers learning tools and a
                community space for discussion and knowledge sharing.
              </p>
            </div>
            <div>
              <p className="text-zinc-400">Credits</p>
              <hr className="w-full h-[1px] bg-white my-[8px]" />
              <p>
                HeinHtetWaiyan (DEV)
                <br />
                KyawZayarMin (DEV)
                <br /> ZayarHtut (Research)
              </p>
              <p className="text-zinc-400">Links</p>
              <hr className="w-full h-[1px] bg-white" />
              <Link
                href="https://github.com/ide-dev-05/securum1.1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white ccursor"
              >
                <u>Github</u>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-left w-full mt-[80px]">
          <p className="text-zinc-400 dosisFont text-[30px] font-medium mb-[50px]">
            Details
          </p>

          <p className="text-zinc-500 leading-[28px]">
            <span className="text-zinc-300 font-medium">Securum</span> is a{" "}
            <span className="text-zinc-400 font-medium">
              cybersecurity-focused AI chatbot
            </span>{" "}
            designed to help users understand, analyze, and respond to{" "}
            <span className="text-zinc-400">security-related situations</span>{" "}
            through natural conversation. Users can interact with the system
            using <span className="text-zinc-400">text prompts</span>,{" "}
            <span className="text-zinc-400">voice input</span>, or by uploading{" "}
            <span className="text-zinc-400">network log files</span> for{" "}
            <span className="text-zinc-400">scanning and analysis</span>,
            allowing the chatbot to identify{" "}
            <span className="text-zinc-400">potential threats</span> and provide{" "}
            <span className="text-zinc-400">meaningful insights</span>.
            <br />
            <br />
            The chatbot supports{" "}
            <span className="text-zinc-400">multiple response styles</span>,
            including <span className="text-zinc-400">short</span> and{" "}
            <span className="text-zinc-400">detailed answers</span>, and can
            respond in both <span className="text-zinc-400">English</span> and{" "}
            <span className="text-zinc-400">Myanmar</span> languages. Responses
            can be read aloud using{" "}
            <span className="text-zinc-400">voice playback</span>, and users can
            customize the chat experience by adjusting{" "}
            <span className="text-zinc-400">text color</span> and{" "}
            <span className="text-zinc-400">font size</span>.
            <br />
            <br />
            Securum also includes{" "}
            <span className="text-zinc-400">advanced chat management</span>{" "}
            features such as <span className="text-zinc-400">chat history</span>
            , <span className="text-zinc-400">chat search</span>, and
            downloadable <span className="text-zinc-400">PDF</span>,{" "}
            <span className="text-zinc-400">Excel</span>, and{" "}
            <span className="text-zinc-400">Word</span> formats. To encourage
            learning, the platform provides{" "}
            <span className="text-zinc-400">cybersecurity quizzes</span>, with{" "}
            <span className="text-zinc-400">ranking</span> based on{" "}
            <span className="text-zinc-400">correct answers</span>.
            <br />
            <br />
            <span className="text-zinc-400">Authentication</span> supports{" "}
            <span className="text-zinc-400">Google</span> and{" "}
            <span className="text-zinc-400">email login</span>, with login
            information sent securely via{" "}
            <span className="text-zinc-400">email</span>. Securum also offers{" "}
            <span className="text-zinc-400">Securum World</span>, a{" "}
            <span className="text-zinc-400">community space</span> for
            discussion and knowledge sharing.
            <br />
            <br />
            Built using <span className="text-zinc-400">Next.js</span>, the
            project features{" "}
            <span className="text-zinc-400">real-time AI responses</span>,{" "}
            <span className="text-zinc-400">file analysis</span>,{" "}
            <span className="text-zinc-400">multilingual support</span>, and{" "}
            <span className="text-zinc-400">customizable user interaction</span>
            , making cybersecurity knowledge more accessible and practical.
          </p>
        </div>
        <hr className="w-full h-[1px] text-zinc-800 my-[60px] mb-[50px] " />

        <div className="mb-[40px] max-w-[90vw] sm:max-w-[80vw] md:max-w-[1100px] bg-[#0f0f0f] relative text-white flex mx-auto p-3 gap-2 sm:gap-4 flex-wrap justify-center rounded-[6px] ">
          <div
            className="absolute inset-0 z-0 pointer-events-none rounded-[6px]"
            style={{
              backgroundImage: `
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(16, 185, 129, 0.18) 2px, rgba(16, 185, 129, 0.18) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(245, 101, 101, 0.10) 2px, rgba(245, 101, 101, 0.10) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(234, 179, 8, 0.08) 2px, rgba(234, 179, 8, 0.08) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(249, 115, 22, 0.06) 2px, rgba(249, 115, 22, 0.06) 3px, transparent 3px, transparent 8px)
      `,
            }}
          />
          {techs.map(({ Icon, name }, i) => (
            <div
              key={i}
              className="border border-[1px] border-zinc-600 dotoFont flex items-center space-x-[8px] sm:space-x-[12px] px-2 py-1 rounded-[5px] w-max text-xs sm:text-sm"
            >
              <Icon className="size-[20px] sm:size-[24px] bg-zinc-100 rounded-sm p-[1px]" />
              <p className="tracking-wider dosisFont">{name}</p>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-between text-zinc-400">
          <p>Team Lead/Fullstack Dev</p>
          <p>July 2025 - Aug 2025</p>
        </div>
        <div className="flex w-full justify-end mt-[120px] md:mt-[200px]">
          <div>
            <div className="relative group">
              <Link
                href="/work/letuscook-project"
                className="relative inline-block font-medium text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="relative z-10 block px-2 py-3 border border-zinc-800 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-[1]">
                      next
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-[-1] "
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
