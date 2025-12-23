"use client";
import { usePathname } from "next/navigation";
import RightArrowIcon from "@/public/icons/rightarrow";
import FacebookIcon from "@/public/images/socials/facebook";
import GithubIcon from "@/public/images/socials/github";
import LinkedinIcon from "@/public/images/socials/linkedin";
import TelegramIcon from "@/public/images/socials/telegram";
import Image from "next/image";
import Contactformfooter from "../shared/contactformfooter";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/minit") return null;
  const bgClass =
    pathname === "/" ? "bg-white" : "bg-[#ddddd1] dark:bg-[#000b0a]";
  return (
    <>
      <section
        className={`${bgClass} pt-0 sm:pt-[20px] md:pt-[100px] relative`}
      >
        {/* Telegram icon background */}
        <div className="relative w-full flex justify-center items-center pl-[7%] xs:pl-[10%]">
          <div className="relative w-full h-[400px] max-w-[900px] ">
            <Link
              href="https://www.facebook.com/ide.113216/"
              target="_blank"
              rel="noopener noreferrer"
              className="ccursor h-[120px] w-[80] sm:h-[190px] sm:w-[150px] md:h-[240px] md:w-[200px]  lg:h-[300px] lg:w-[260px] bg-black  rounded-[20px] p-[4px] z-0 absolute bottom-[60px] sm:bottom-0 xl:bottom-[8px] left-[240px] sm:left-[370px] md:left-[470px] lg:left-[570px] xl:rotate-[5deg] hover:bottom-[70px] hover:rotate-[-3deg] transition-all ease-out duration-150 cursor-pointer"
            >
              <div className="bg-[#f0f0f0] rounded-[18px] h-[78%] flex items-center justify-center">
                <FacebookIcon className="size-[140px]" />
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/thet-nyan-toe-aa802b350/"
              target="_blank"
              rel="noopener noreferrer"
              className="ccursor h-[120px] w-[80] sm:h-[190px] sm:w-[150px] md:h-[240px] md:w-[200px]  lg:h-[300px] lg:w-[260px] bg-[#0076b2]  rounded-[20px] p-[4px] z-0 absolute bottom-[60px] sm:bottom-0 xl:bottom-[-10px] left-[160px] sm:left-[260px] md:left-[320px] lg:left-[380px] hover:bottom-[70px] transition-all ease-out duration-150 cursor-pointer"
            >
              <div className="bg-[#e0e9ee] rounded-[18px] h-[78%] flex items-center justify-center">
                <LinkedinIcon className="size-[140px]" />
              </div>
            </Link>

            <Link
              href="https://github.com/ide-dev-05"
              target="_blank"
              rel="noopener noreferrer"
              className="ccursor h-[120px] w-[80] sm:h-[190px] sm:w-[150px] md:h-[240px] md:w-[200px]  lg:h-[300px] lg:w-[260px] bg-black rounded-[20px] p-[4px] z-0 absolute bottom-[60px] sm:bottom-0 xl:bottom-[-2px] left-[80px] sm:left-[140px] md:left-[170px] lg:left-[200px] xl:rotate-[3deg] hover:bottom-[50px] hover:rotate-[0deg] transition-all ease-out duration-150 cursor-pointer"
            >
              <div className="bg-[#f0f0f0] rounded-[18px] h-[78%] flex items-center justify-center">
                <GithubIcon className="size-[140px]" />
              </div>
            </Link>

            <Link
              href="https://t.me/ide969"
              target="_blank"
              rel="noopener noreferrer"
              className="ccursor h-[120px] w-[80] sm:h-[190px] sm:w-[150px] md:h-[240px] md:w-[200px]  lg:h-[300px] lg:w-[260px] bg-[#28a9eb] rounded-[20px] p-[4px] z-0  absolute left-[0] bottom-[60px] sm:bottom-0 xl:bottom-[-45px] xl:rotate-[-5deg] hover:bottom-[50px] hover:rotate-[4deg] transition-all ease-out duration-150 cursor-pointer"
            >
              <div className="bg-[#e4eef5] rounded-[18px] h-[85%] flex items-center justify-center">
                <TelegramIcon className="size-[170px]" />
              </div>
            </Link>
          </div>
        </div>

        <div className="relative h-auto flex flex-col items-start bg-gray-900 rounded-t-[10px] xl:rounded-t-[60px] z-10 -mt-20 pt-[120px] p-[15px] sm:p-[30px] md:p-[50px]">
          <div>
            <p className="text-zinc-400 text-[32px] font-medium ">
              Ready to build your next product — let’s build.
            </p>

            <Contactformfooter />
          </div>

          <hr className="w-full h-[0.5px] my-[70px] bg-white/13 border-0" />

          <div className="w-full h-auto flex flex-col md:flex-row justify-between px-[30px] space-y-[20px]">
            <div className="flex flex-col items-start space-y-[15px]">
              <p className="font-bold text-xl mb-[20px]">yaircube1@gmail.com</p>
              <p className="max-w-[530px] md:max-w-[300px] xl:max-w-[500px] ">
                © 2025 Thet Nyan Toe — Built with passion. All images, icons,
                and third-party assets are credited to their respective
                creators.
              </p>
            </div>
            <div className="flex flex-col items-end md:items-center justify-between space-y-[15px] pt-[20px] text-white/70 md:mx-[10px] ">
              <Link
                href="/"
                className="cursor-pointer hover:text-white ccursor"
              >
                Home
              </Link>
              <Link
                href="/work"
                className="cursor-pointer hover:text-white ccursor"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="cursor-pointer hover:text-white ccursor"
              >
                About
              </Link>
            </div>

            <div className="flex flex-col items-start md:items-center justify-between space-y-[15px] pt-[20px] text-white/70 md:mx-[10px] ">
              <p className="text-white font-semibold">Sections</p>
              <Link
                href="/#showcase"
                className="cursor-pointer hover:text-white ccursor"
              >
                Showcase
              </Link>
              <Link
                href="/#journey"
                className="cursor-pointer hover:text-white ccursor"
              >
                Journey
              </Link>
              <Link
                href="/#tech"
                className="cursor-pointer hover:text-white ccursor"
              >
                Technologies
              </Link>
              <Link
                href="/#more"
                className="cursor-pointer hover:text-white ccursor"
              >
                More
              </Link>
            </div>
            <Link
              href="/ThetNyanToe_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ccursor cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-lg md:rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono max-w-[180px] h-10"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 animate-bounce mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
              </svg>
            </Link>
          </div>

          <hr className="w-full h-[0.5px] mt-[70px] bg-white/13 border-0" />
          <div className="w-full h-auto ">
            <p className="text-center satoshiFont font-black masktext text-[clamp(3rem,18vw,18rem)] leading-none tracking-[-0.05em] opacity-35">
              IDE-DEV
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
