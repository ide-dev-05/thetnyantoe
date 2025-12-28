"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Wave from "./_images/wave";

import Github from "./_components/github";
import Link from "next/link";

export default function Work() {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenH = window.innerHeight;

      const fadeValue = Math.max(0, 1 - scrollY / screenH);

      const scaleValue = Math.min(1.2, 1 + scrollY / (screenH * 4));

      const rotateValue = Math.min(50, scrollY / (screenH * 40));

      setOpacity(fadeValue);
      setScale(scaleValue);
      setRotate(rotateValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      bg: "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773729/1_hxx1sj.png",
      detail:
        "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773723/1.1_xqqw3d.jpg",
      title: "Securum",
      desc: "Cybersecurity <br /> AI chatbot",
      link: "/work/securum-project",
    },
    {
      id: 2,
      bg: "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773723/2_vu5xwr.png",
      detail:
        "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773731/2.1_d6smob.png",
      title: "letuscook",
      desc: "C2C food <br /> ordering platform",
      link: "/work/letuscook-project",
    },
    {
      id: 3,
      bg: "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773724/3_yp1stt.png",
      detail:
        "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773708/3.1_ubalp9.png",
      title: "Tangenc",
      desc: "Landing site",
      link: "/work/tangenc-project",
    },
    {
      id: 4,
      bg: "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773731/4_cv9pns.png",
      detail:
        "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773734/4.1_amyjbd.png",
      title: "NextMovie",
      desc: "Movie browsing site",
      link: "/work/nextmovie-project",
    },
    {
      id: 5,
      bg: "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773709/5_rgup9f.png",
      detail:
        "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773708/5.1_hss59e.png",
      title: "allyours",
      desc: "fundraising platform",
      link: "/work/allyours-project",
    },
    {
      id: 6,
      bg: "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773720/6_blbzkl.png",
      detail:
        "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773721/6.1_erfzuj.png",
      title: "Pokèdex",
      desc: "A Pokèdex",
      link: "/work/pokedex-project",
    },
  ];

  return (
    <>
      <div
        className="fixed inset-0 -z-10 overflow-hidden before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.08] before:z-10 before:pointer-events-none
     before:bg-[url('https://www.ui-layouts.com/noise.gif')]"
      >
        <Image
          src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766776721/workbanner_xve0bx.png"
          alt="Work Banner"
          fill
          priority
          className="object-cover"
          style={{
            opacity,
            transform: `scale(${scale}) rotate(${rotate}deg)`,
            transformOrigin: "center",
            transition: "transform 0.05s linear",
          }}
        />
      </div>

      <section className="relative h-screen flex items-center overflow-x-hidden">
        <div className="max-w-[950px] px-[30px] text-white z-[1]">
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            className="font-light text-[118px] md:text-[138px] lg:text-[188px] satoshiFont tracking-tighter text-[#dadae3]"
          >
            Work
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-xl md:text-2xl lg:text-4xl playfairFont font-light mt-[30px] "
          >
            <span className="greatvibesFont text-5xl lg:text-7npxl">C</span>
            ollection of my projects, showcasing design, and development—click
            any project to explore it in detail.
          </div>
        </div>
      </section>

      <section className="relative h-auto bg-[#0a0a0a] text-black overflow-visible flex flex-col items-center justify-center bg-[#ddddd1] dark:bg-[#000b0a]">
        <div className="absolute top-[-10px] lg:top-[-20px] right-0 w-[350px] -translate-y-full overflow-x-hidden">
          <Image
            src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766776719/angel1_mabrzi.png"
            alt="Work Banner"
            width={100}
            height={100}
            className="w-full h-auto"
            style={{
              transform: `scale(${scale}) rotate(${rotate}deg)`,
              transformOrigin: "center",
              transition: "transform 0.05s linear",
            }}
          />
        </div>
        {/* Wave divider at top */}
        <div className="absolute top-[5px] md:top-[50px] left-0 right-0 w-full -translate-y-full ">
          <Wave className="w-full h-auto" />
        </div>
        <div className="relative z-2 grid grid-cols-1 md:grid-cols-2 text-whit w-full min-h-screen gap-[4px] mt-[200px] md:mt-[300px] px-[4px]">
          {projects.map((project) => (
            <Link
              data-aos="fade-down"
              href={project.link}
              key={project.id}
              className="ccursor cursor-pointer relative overflow-hidden w-full h-[500px] flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="absolute z-[5] bottom-0 w-full flex justify-between bg-[#ddddd1] dark:bg-[#000b0a] playfairFont text-[14px] block md:hidden pb-[15px]">
                <p className=" text-black dark:text-white">{project.title}</p>
                <p
                  className=" text-black dark:text-white p-[2px] tracking-wider playfairFont w-max "
                  dangerouslySetInnerHTML={{ __html: project.desc }}
                />
              </div>

              <div className="absolute z-[2] top-0 left-0 w-full h-full bg-black/60 group-hover:opacity-100 opacity-0 duration-200"></div>
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  backgroundImage: `url('${project.bg}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />

              <div className="relative flex w-full justify-around items-center z-[3] group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                <div className=" flex-4 text-center flex flex-col items-center justify-center">
                  <p className="bg-white p-[2px] tracking-wider playfairFont w-max ">
                    {project.title}
                  </p>
                </div>
                <div className="relative overflow-hidden w-[240px] h-[200px] border border-white/40 border-[25px] group-hover:border-[10px] duration-700 flex-4">
                  <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                      backgroundImage: `url('${project.detail}')`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                </div>

                <div className=" flex-4 text-center flex flex-col items-center justify-center">
                  <p
                    className="bg-white p-[2px] tracking-wider playfairFont w-max "
                    dangerouslySetInnerHTML={{ __html: project.desc }}
                  />
                </div>
              </div>
              {/* h */}
            </Link>
          ))}
        </div>
        <Github />
      </section>
    </>
  );
}
