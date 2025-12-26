import Image from "next/image";
import pokeball from "./_images/pokeball.png";
import ReactjsIcon from "@/public/icons/techs/reactjs";
import NextjsIcon from "@/public/icons/techs/nextjs";
import TailwindIcon from "@/public/icons/techs/tailwind";
import BootstrapIcon from "@/public/icons/techs/bootstrap";
import MysqlIcon from "@/public/icons/techs/mysql";
import PostgresqlIcon from "@/public/icons/techs/postgresql";
import VitejsIcon from "@/public/icons/techs/vite";
import ShadcnIcon from "@/public/icons/techs/shadcn";
import TypescriptIcon from "@/public/icons/techs/typescript";
import PythonIcon from "@/public/icons/techs/python";
import OllamaIcon from "@/public/icons/techs/ollama";
import JavaIcon from "@/public/icons/techs/java";
import PhpIcon from "@/public/icons/techs/php";
import LaravelIcon from "@/public/icons/techs/laravel";
import { RandomizedTextEffect } from "../shared/text-randomized";

export default function TechnologiesSection() {
  const techs = [
    { Icon: ReactjsIcon, name: "React.js" },
    { Icon: NextjsIcon, name: "Next.js" },
    { Icon: TypescriptIcon, name: "TypeScript" },
    { Icon: TailwindIcon, name: "Tailwind CSS" },
    { Icon: VitejsIcon, name: "Vite.js" },
    { Icon: BootstrapIcon, name: "Bootstrap" },
    { Icon: PythonIcon, name: "Python" },
    { Icon: PhpIcon, name: "PHP" },
    { Icon: LaravelIcon, name: "Laravel" },
    { Icon: MysqlIcon, name: "MySQL" },
    { Icon: PostgresqlIcon, name: "PostgreSQL" },
    { Icon: ShadcnIcon, name: "Shadcn/UI" },
    { Icon: OllamaIcon, name: "Ollama" },
    { Icon: JavaIcon, name: "Java" },
  ];

  return (
    <section
      id="tech"
      className="h-[calc(50vh)] flex flex-col items-start bg-[#000b0a] px-[20px] sm:px-[40px] pt-[200px] pb-[120px] sm:pb-[220px] bg-[#ddddd1] dark:bg-[#000b0a]"
    >
      <div>
        <div className="flex items-center" data-aos="fade-right">
          <Image
            src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766774901/pokeball_mav54h.png"
            width={100}
            height={100}
            alt="Picture of the author"
            className="mx-[-20px] w-[60px] sm:w-[80px] md:w-[100px]"
          />
          <p className=" text-shadow-md text-[34px] md:text-[48px] xl:text-[66px] nablaFont">
            {" "}
            / Technologies
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="dotoFont max-w-[90vw] sm:max-w-[600px] mt-2 text-sm sm:text-base text-black font-bold dark:text-white"
        >
          A handful of <RandomizedTextEffect text="cool things" /> I’ve built —
          from tiny ideas to full <RandomizedTextEffect text="projects" />.
        </div>
      </div>

      <div className="flex flex-col items-center max-w-full justify-center w-full pt-[100px] z-[5]">
        <div
          className="max-w-[90vw] sm:max-w-[80vw] md:max-w-[1100px] bg-[#0f0f0f] relative text-white flex mx-auto p-3 gap-2 sm:gap-4 flex-wrap justify-center rounded-[6px]"
          data-aos="fade-up"
        >
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
              data-aos="zoom-in"
              key={i}
              className="border border-[1px] border-zinc-600 dotoFont flex items-center space-x-[8px] sm:space-x-[12px] px-2 py-1 rounded-[5px] w-max text-xs sm:text-sm"
            >
              <Icon className="size-[20px] sm:size-[24px] bg-zinc-100 rounded-sm p-[1px]" />
              <p className="tracking-wider dosisFont">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
