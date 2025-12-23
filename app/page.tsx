import DelicateAsciiDots from "./components/shared/asciidotbg";

import Hero from "./components/home/_components/Hero";
import Herobottomtexts from "./components/home/_components/Herobottomtexts";
import MottoSection from "@/app/components/home/MottoSection";
import MoreSection from "@/app/components/home/MoreSection";
import ExperiencesSection from "@/app/components/home/ExperiencesSection";
import ShowcaseSection from "@/app/components/home/ShowcaseSection";
import TechnologiesSection from "@/app/components/home/TechnologiesSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="cursorc flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <section className="flex h-screen w-full flex-col items-center bg-white dark:bg-black justify-between">
          <DelicateAsciiDots
            textColor="85, 85, 85"
            gridSize={80}
            removeWaveLine={true}
            animationSpeed={3}
          />

          <div className="w-full flex justify-center md:justify-between space-x-[40px] items-center z-[10] md:z-[1] mt-[10px] md:mt-0 ">
            <div className="text-[10px] md:text-[13px] text-black dark:text-white ">
              <p>Myanmar based</p>
              <p className="text-zinc-500">Work globally</p>
            </div>

            <Link
              href="/ThetNyanToe_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer jojoFont md:border border-zinc-500 text-zinc-700 dark:text-zinc-400 p-2 md:p-2 rounded-bl-[20px] pl-2 md:pl-3 text-[10px] sm:text-[12px] md:text-[18px] hover:bg-yellow-200 hover:text-black "
            >
              Download Resume
            </Link>
          </div>
          <Hero />
          <Herobottomtexts />
        </section>
      </div>
      <MottoSection />
      <ShowcaseSection />
      <ExperiencesSection />
      <TechnologiesSection />
      <MoreSection />
    </>
  );
}
