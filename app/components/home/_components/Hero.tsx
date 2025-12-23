"use client";
import Image from "next/image";
import me from "../_images/meedit.png";
import stand from "../_images/wonderofu.png";
import macbook from "../_images/macbook.png";
import pokeball from "../_images/pokeball.png";
import arrow from "../_images/arrow.png";
import ArrowIcon from "@/public/icons/dottedarrow.svg";
import ArrowIcon2 from "@/public/icons/dottedarrow2.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300, 600], [1, 0.6, 0]);

  return (
    <motion.div style={{ opacity }} className="relative z-[1]">
      <Image
        rel="preload"
        placeholder="blur"
        src={me}
        width={360}
        height={390}
        alt="Picture of the author"
        className="w-[250px] w-[280px] md:w-[380px] md:h-[390px] object-cover "
        data-aos="zoom-in"
      />
      <div>
        <a href="#more">
          <Image
            rel="preload"
            placeholder="blur"
            src={stand}
            width={300}
            height={300}
            alt="Picture of the author"
            className=" ccursor absolute z-[-1] right-[-40px] md:right-[-70] top-[-100px] xl:top-[-110px] rotate-[0deg] xl:rotate-[30deg] transition-transform duration-200 hover:scale-115 cursor-pointer h-auto w-[250px] md:w-[300px] "
            data-aos="fade-down-left"
          />
        </a>
        <a href="#showcase">
          <Image
            rel="preload"
            placeholder="blur"
            src={macbook}
            width={210}
            height={210}
            alt="Picture of the author"
            className="ccursor absolute z-[1] left-[-10px] md:left-[-50px] bottom-[-50px] rotate-[90px] transition-transform duration-200 hover:scale-115 cursor-pointer  w-[140px] md:w-[210px]"
            data-aos="fade-up-right"
          />
        </a>
        <a href="#tech">
          <Image
            rel="preload"
            placeholder="blur"
            src={pokeball}
            width={250}
            height={250}
            alt="Picture of the author"
            className="ccursor absolute z-[1] right-[-40px] md:right-[-55px] bottom-[-10px] rotate-[-60deg] transition-transform duration-200 hover:scale-115 cursor-pointer hover:rotate-[-30deg] w-[200px] md:w-[250px]"
            data-aos="fade-up-left"
          />
        </a>

        <a href="#journey">
          <Image
            rel="preload"
            placeholder="blur"
            src={arrow}
            width={70}
            height={70}
            alt="Picture of the author"
            className="ccursor absolute z-[1] left-0 top-0 rotate-[140deg] transition-transform duration-200 hover:scale-115 cursor-pointer hover:rotate-[115deg] w-[50px] md:w-[70px]"
            data-aos="fade-down-right"
          />
        </a>

        <p className="text-[12px] z-[2] md:text-[20px] text-zinc-800 dark:text-zinc-100 dotoFont font-bold absolute z-[-1] right-[-20px] bottom-0">
          {"Technologies"}
        </p>

        <p className="text-[12px] md:text-[20px] text-zinc-800 dark:text-zinc-100 dotoFont font-bold absolute z-[2] left-[-20px] lg:left-[-100px] bottom-[20px] rotate-[-30deg]">
          {"Showcase"}
        </p>

        <p className="text-[12px] md:text-[20px] text-zinc-800 dark:text-zinc-100 dotoFont font-bold absolute left-[-20px] lg:left-[-80px] top-[120px] rotate-[-10deg]">
          {"Journey"}
        </p>

        <p className="text-[12px] md:text-[20px]  text-zinc-800 dark:text-zinc-100 dotoFont font-bold absolute z-[-1] right-[-20px] top-[-20px] md:top-0 rotate-[-20deg]">
          {"More"}
        </p>
      </div>
    </motion.div>
  );
}
