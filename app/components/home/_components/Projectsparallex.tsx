"use client";
import AxiosIcon from "@/public/icons/techs/axios";
import BootstrapIcon from "@/public/icons/techs/bootstrap";
import FramermotionIcon from "@/public/icons/techs/framermotion";
import MysqlIcon from "@/public/icons/techs/mysql";
import NextjsIcon from "@/public/icons/techs/nextjs";
import OllamaIcon from "@/public/icons/techs/ollama";
import PostgresqlIcon from "@/public/icons/techs/postgresql";
import PythonIcon from "@/public/icons/techs/python";
import ReactjsIcon from "@/public/icons/techs/reactjs";
import ShadcnIcon from "@/public/icons/techs/shadcn";
import TailwindIcon from "@/public/icons/techs/tailwind";
import ThreejsIcon from "@/public/icons/techs/threejs";
import TypescriptIcon from "@/public/icons/techs/typescript";
import VitejsIcon from "@/public/icons/techs/vite";
import PhpIcon from "@/public/icons/techs/php";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import Link from "next/link";

const sections = [
  {
    id: 1,
    name: "SECURUM",
    description: "AI-ChatBot",
    image: "/images/1.png",
    techs: [
      "Nextjs",
      "Typescript",
      "Tailwind",
      "Python",
      "Shadcn",
      "Ollama",
      "Postgresql",
    ],
    link: "/work/securum-project",
  },
  {
    id: 2,
    name: "LetusCook",
    description: "C2C Food-focused E-commerce",
    image: "/images/2.png",
    techs: ["Vitejs", "Reactjs", "Tailwind", "Php", "Mysql", "Framermotion"],
    link: "/work/letuscook-project",
  },
  {
    id: 3,
    name: "Tangenc",
    description: "Landing webpage",
    image: "/images/3.png",
    techs: ["Reactjs", "Vitejs", "Tailwind", "Framermotion"],
    link: "/work/tangenc-project",
  },
];
const iconMap: Record<string, React.FC<any>> = {
  Nextjs: NextjsIcon,
  Typescript: TypescriptIcon,
  Tailwind: TailwindIcon,
  Shadcn: ShadcnIcon,
  Ollama: OllamaIcon,
  Postgresql: PostgresqlIcon,
  Vitejs: VitejsIcon,
  Reactjs: ReactjsIcon,
  Mysql: MysqlIcon,
  Framermotion: FramermotionIcon,
  Bootstrap: BootstrapIcon,
  Axios: AxiosIcon,
  Python: PythonIcon,
  Threejs: ThreejsIcon,
  Php: PhpIcon,
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ section }: { section: (typeof sections)[number] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container relative">
      <aside className="grid grid-cols-1 gap-1 ">
        {section.techs.map((tech) => {
          const Icon = iconMap[tech];
          return Icon ? (
            <Icon
              key={tech}
              className="bg-white size-[32px] lg:size-[45px] p-1 rounded-lg lg:rounded-xl"
            />
          ) : null;
        })}
      </aside>

      <Link href={section.link}>
        <div
          ref={ref}
          className="flex jutify-center items-end relative w-auto ccursor hover:border border-zinc-900 dark:border-zinc-600 rounded-xl"
        >
          <img src={section.image} alt={section.name} />
          <div
            className="absolute w-full h-auto flex justify-between p-1 md:p-2 rounded-xl
             bg-white/20 backdrop-blur-sm border border-white/40 shadow-md text-white stacksansFont text-shadow-sm text-shadow-black text-[14px] md:text-[18px] lg:text-[20px] "
          >
            <p className="font-[600] md:font-[800]">{section.name}</p>
            <p>{section.description}</p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="example">
      {sections.map((section) => (
        <Image key={section.id} section={section} />
      ))}

      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
        html {
            scroll-snap-type: y proximity;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 660px;
            height: 480px;
            margin: 10px;
            overflow: hidden;
        }

        .img-container img {
            width: 660px;
            height: 480px;
            border-radius: 15px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 300px;
                height: 330px;
                  margin: 5px;
            }

            .img-container img {
                width: 300px;
                height: 330px;
            }
        }

        .img-container h2 {
            color: #8df0cc;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #8df0cc;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
  );
}
