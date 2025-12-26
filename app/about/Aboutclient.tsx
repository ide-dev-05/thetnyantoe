"use client";
import type { Metadata } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

import Wave from "./_images/wave";

import { RandomizedTextEffect } from "../components/shared/text-randomized";
export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Thet Nyan Toe, a web developer specializing in React, Next.js, and modern web experiences.",
  alternates: {
    canonical: "https://www.thetnyantoe.site/about",
  },
};
export default function AboutClient() {
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

  return (
    <>
      <div
        className="fixed inset-0 -z-10 overflow-hidden before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.08] before:z-10 before:pointer-events-none
     before:bg-[url('https://www.ui-layouts.com/noise.gif')]"
      >
        <Image
          src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766777350/banner_olieme.png"
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
        <div className="max-w-[950px] px-[30px] text-white z-[1] ">
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            className="font-light text-[118px] md:text-[138px] lg:text-[188px] satoshiFont tracking-tighter text-[#689682]"
          >
            About
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-xl md:text-2xl lg:text-4xl playfairFont font-light mt-[30px]"
          >
            <span className="greatvibesFont text-5xl lg:text-7npxl">H</span>
            ighlights of myself, working style, funding things along with some
            extras.
          </p>
        </div>
      </section>

      <section className="relative h-auto bg-[#0a0a0a] text-black overflow-visible flex flex-col items-center justify-center ">
        <div className="absolute top-[-10px] lg:top-[-20px] right-0 w-[350px] -translate-y-full overflow-x-hidden">
          <Image
            src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766777350/angel1_ix7tit.png"
            alt="Work Banner"
            priority
            width={100}
            height={100}
            className="w-full h-auto scale-x-[-1]"
            style={{
              transform: `scale(${scale}) rotate(${rotate}deg)`,
              transformOrigin: "center",
              transition: "transform 0.05s linear",
            }}
          />
        </div>

        <div className="absolute top-[5px] md:top-[50px] left-0 right-0 w-full -translate-y-full scale-x-[-1]">
          <Wave className="w-full h-auto" />
        </div>
        <div className="h-auto pt-[100px] w-full flex flex-col items-center bg-[#ddddd1] dark:bg-[#000b0a]">
          <div className="text-white max-w-[700px] h-screen text-center mt-[150px] mb-[250px] flex flex-col items-center justify-between px-[10px]">
            <div>
              <p
                data-aos="fade-up"
                className="text-black dark:text-white text-[62px] font-thin"
              >
                / MY FUEL
              </p>
              <i
                data-aos="fade-up"
                className="text-black/80 dark:text-white/80"
              >
                before me,a little about my heroes — the source that fuels
                everything I do.
              </i>
            </div>
            <p
              data-aos="fade-up"
              className="text-black dark:text-white text-[22px] font-thin max-w-[60%] text-center"
            >
              From two worlds <br /> structure from father, heart from mother.
              Following the balance they created, shaping even imperfect lines
              into something meaningful.
            </p>
            <Image
              src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766777349/sunflower_aa7e7y.png"
              width={100}
              height={100}
              alt="Work Banner"
              className="w-[120px] sm:w-[140px] h-auto z-[0]"
              data-aos="fade-up"
            />
          </div>

          <div className="flex w-full justify-between z-[2]">
            <div
              data-aos="fade-up"
              className="dotoFont text-[#000b0a]/60 dark:text-[#ddddd1]/60 text-[52px] font-bold ml-[30px]"
            >
              <RandomizedTextEffect text="Who" /> am I?
            </div>

            <div className="flex flex-col text-black">
              <div className="flex justify-end">
                <Image
                  width={100}
                  height={100}
                  src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766777352/angel2_v0touv.png"
                  alt="Work Banner"
                  className="w-[400px] h-auto mb-[-12px]"
                  data-aos="fade-up"
                />
              </div>

              <div className="bg-[#000b0a] dark:bg-[#ddddd1] p-[20px] pr-[20%] sm:pr-[30%] max-w-[1000px] dosisFont font-bold tracking-wide text-white/80 dark:text-black/80">
                I’m <span className="text-[#4f7363]">Thet Nyan Toe</span> , also
                known as ide,YairCube, a <u>20-year-old</u> programmer who loves
                turning ideas into clean, interactive web apps and pages where
                everything works together naturally. This page will also share
                more about me personally, so you can get to know who I am beyond
                the tech.
              </div>
            </div>
          </div>

          <Image
            src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766777351/ladder_zdmo3i.png"
            width={100}
            height={100}
            alt="Work Banner"
            className="w-[320px] h-auto my-[-50px] z-[0]"
          />

          <div className="flex flex-col-reverse md:flex-row justify-center w-full mb-[120px] md:mb-[150px] space-x-[30px]">
            <div
              data-aos="fade-up"
              className="dotoFont text-[#000b0a]/60 dark:text-[#ddddd1]/60 text-[52px] font-extrabold text-right"
            >
              How <br />I <RandomizedTextEffect text="Work" />
            </div>
            <div className="flex flex-col items-end ">
              <div className="bg-[#000b0a] dark:bg-[#ddddd1] text-center max-w-[700px] 6xl:max-w-[1000px] p-[20px] dosisFont font-bold tracking-wide text-black/80 relative text-white/80 dark:text-black/80">
                Clarity {">"} complexity. I enjoy breaking problems down,
                structuring projects, and writing code future-me—or anyone
                else—won’t hate. Learning every day, building real projects, and
                improving my workflow matters more than looking “perfect.” I
                like finding simple, efficient solutions and finishing tasks
                well before deadlines—like. That's why I rock!
              </div>
              <div className="">
                <Image
                  src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766777343/yo_gp4wnj.jpg"
                  width={100}
                  height={100}
                  alt="Work Banner"
                  className="w-[200px] md:w-[250px] xl:w-[280px] h-auto "
                  data-aos="fade-down"
                  data-aos-duration="500"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row w-full justify-between z-[2] my-[90px] sm:my-[120px]">
            <div className="flex flex-col text-black items-end">
              <div className="flex w-full justify-start">
                <Image
                  src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766777350/phone_zbdxck.webp"
                  width={100}
                  height={100}
                  alt="Work Banner"
                  className="w-[400px] h-auto scale-x-[-1]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                />
              </div>

              <div className="bg-[#000b0a] dark:bg-[#ddddd1] p-[20px] pl-[30%] pb-[150px] max-w-[1000px] dosisFont font-bold tracking-wide text-white/80 dark:text-black/80 text-right">
                Outside of coding, I enjoy time with family and friends, board
                games, Pokémon TCG Live, movies, anime, music, and some video
                games. I also create content quietly and enjoy reflecting on
                ideas, people, and how mindset shapes creativity—insights that
                influence how I design and solve problems.
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="dotoFont text-[#000b0a]/60 dark:text-[#ddddd1]/60 text-[52px] font-bold ml-[30px]"
            >
              Beyond the <RandomizedTextEffect text="screen" />
            </div>
          </div>
        </div>

        <p className="text-black/25 dark:text-white/25  text-center pt-[200px] sm:pt-[300px] playfairFont bg-[#ddddd1] dark:bg-[#000b0a] w-full">
          This isn’t the end. It’s a checkpoint.
        </p>
      </section>
    </>
  );
}
