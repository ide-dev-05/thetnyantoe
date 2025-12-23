import Image from "next/image";
import Link from "next/link";
import photo from "@/public/images/5.png";

import TailwindIcon from "@/public/icons/techs/tailwind";
import FramermotionIcon from "@/public/icons/techs/framermotion";
import NextjsIcon from "@/public/icons/techs/nextjs";
import TypescriptIcon from "@/public/icons/techs/typescript";
import ThreejsIcon from "@/public/icons/techs/threejs";

export default function Allyours() {
  const techs = [
    { Icon: NextjsIcon, name: "Nextjs" },
    { Icon: TypescriptIcon, name: "Typescript" },
    { Icon: TailwindIcon, name: "Tailwind" },
    { Icon: ThreejsIcon, name: "Threejs" },
    { Icon: FramermotionIcon, name: "Framermotion" },
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
            alt=""
            className="w-full h-auto rounded-[5px] object-cover "
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between mt-[40px]">
          <p className="text-[24px] font-medium dotoFont text-zinc-400 max-w-[300px]">
            Allyours-NGO website
          </p>
          <div className="mt-[50px] md:mt-0 flex flex-col md:flex-row justify-end items-end md:items-start md:justify-between space-y-[15px] md:space-y-0 md:space-x-[10px] text-zinc-500">
            <div className="min-w-[120px] md:w-[180px] ">
              <p className="text-zinc-400">Areas</p>
              <hr className="w-full h-[1px] bg-white my-[8px]" />
              <p>
                NGO <br /> Fund rasigin <br />
                Donate
                <br />
                Community
                <br />
                Teen
              </p>
            </div>
            <div className="max-w-[250px]">
              <p className="text-zinc-400">Overview</p>
              <hr className="w-full h-[1px] bg-white my-[8px]" />
              <p>
                Allyours NGO is a fundraising platform where users can explore
                projects and contact the team. I built the frontend with Next.js
                as a junior developer in the Tangenc team, creating interactive
                pages and user-friendly layouts.
              </p>
            </div>
            <div>
              <p className="text-zinc-400">Credits</p>
              <hr className="w-full h-[1px] bg-white my-[8px]" />
              <p>Tangenc team</p>
              <p className="text-zinc-400">Links</p>
              <hr className="w-full h-[1px] bg-white my-[8px]" />
              <Link
                href="https://github.com/tangenc-co/allyours"
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
            Allyours NGO is a fundraising platform that allows users to see the
            projects the team shares and connect with the Allyours team directly
            through the website. The main goal is to make it easy for supporters
            to explore initiatives and contact the team seamlessly.
            <br />
            <br />
            The website includes multiple pages where users can browse shared
            content, learn about ongoing campaigns, and reach out via built-in
            contact forms.
            <br />
            <br />
            I contributed to the frontend development as a junior developer
            alongside another junior coworker within the Tangenc Developer team.
            I built the interface using Next.js, designed user-friendly layouts,
            and implemented interactive components to enhance user engagement.
            <br />
            <br />
            Authentication and form submissions are handled by external APIs,
            and I integrated them efficiently into the frontend workflow. The
            project is live, providing a functional platform for fundraising and
            team communication.
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
          <p>Junior Web developer</p>
          <p>June 2025 </p>
        </div>

        <div className="flex w-full justify-between mt-[120px] md:mt-[200px]">
          <div>
            <div className="relative group ">
              <Link
                href="/work/nextmovie-project"
                className="relative inline-block font-medium text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="relative z-10 block px-2 py-3 border border-zinc-800 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-[-1] -scale-x-[1]"
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
                    <span className="transition-all duration-500 group-hover:translate-x-[-1]">
                      previous
                    </span>
                  </div>
                </span>
              </Link>
            </div>
          </div>

          <div>
            <div className="relative group">
              <Link
                href="/work/pokedex-project"
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
