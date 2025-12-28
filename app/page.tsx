import dynamic from "next/dynamic";
import Link from "next/link";
import DelicateAsciiDots from "./components/shared/asciidotbg";

const Hero = dynamic(() => import("./components/home/_components/Hero"), {
  ssr: true,
}); // client-only inside Hero
const Herobottomtexts = dynamic(
  () => import("./components/home/_components/Herobottomtexts"),
  { ssr: true }
);
const MottoSection = dynamic(() => import("./components/home/MottoSection"), {
  ssr: true,
});
const ShowcaseSection = dynamic(
  () => import("./components/home/ShowcaseSection"),
  { ssr: true }
);
const ExperiencesSection = dynamic(
  () => import("./components/home/ExperiencesSection"),
  { ssr: true }
);
const TechnologiesSection = dynamic(
  () => import("./components/home/TechnologiesSection"),
  { ssr: true }
);
const MoreSection = dynamic(() => import("./components/home/MoreSection"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <div className="cursorc flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <section className="flex h-screen w-full flex-col items-center bg-white dark:bg-black justify-between">
          <DelicateAsciiDots
            textColor="85, 85, 85"
            gridSize={80}
            removeWaveLine
            animationSpeed={3}
          />
          <div className="w-full flex justify-center md:justify-between space-x-[10px] md:space-x-[40px] items-center z-[9] md:z-[1] mt-[30px] md:mt-0 ">
            <div className="text-[10px] md:text-[13px] text-black dark:text-white">
              <p>Myanmar based</p>
              <p className="text-zinc-500">Work globally</p>
            </div>
            <Link
              href="/ThetNyanToe_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer jojoFont md:border border-zinc-500 text-zinc-700 dark:text-zinc-400 p-2 md:p-2 rounded-bl-[20px] pl-2 md:pl-3 text-[10px] sm:text-[12px] md:text-[18px] hover:bg-yellow-200 hover:text-black z-[9] md:z-[1]"
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
