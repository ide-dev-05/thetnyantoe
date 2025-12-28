"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import Marquee from "react-fast-marquee";
import Contactform from "../../shared/contactform";
import Link from "next/link";

export default function Aboutme() {
  const images = [
    "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773730/thetnyan_sucsoj.png",
    "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773728/thetnyan2_sovsgb.png",
    "https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773710/thetnyan4_pxnicq.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="bg-white py-[90px]">
      <section className="text-black w-full bg-white">
        <div
          className="flex flex-col items-center w-full justify-center mb-[80px] sm:mb-[120px] "
          data-aos="fade-up"
        >
          <div className="dosisFont text-zinc-500 font-semibold text-[22px] flex items-center">
            <div className="size-[10px] bg-yellow-600 rounded-[15px] mt-[2.5px] mr-[8px]"></div>
            <p> 02 &ndash; About Me</p>
          </div>
          <p className="text-[86px]/[100px] max-w-[700px] text-center stacksansFont font-light">
            The person behind the work
          </p>
          <p className="text-[20px] mt-[20px] text-zinc-400 text-center">
            A quick look at my taste and a way to reach me.
          </p>
        </div>
        {/* box */}
        <div
          data-aos="fade-up"
          className="shadow-xl rounded-4xl mx-[10px] lg:mx-[15px] xl:mx-auto max-w-[1200px] 4xl:max-w-full p-[12px] md:p-[22px] lg:p-[32px] flex flex-col lg:flex-row lg:space-x-6 border border-zinc-100"
        >
          <div className="flex-4 space-y-3 lg:space-y-5 lg:mb-0 mb-3">
            <div className="relative w-full h-[335px] lg:h-[435px] border border-zinc-200 rounded-[35px] overflow-hidden bg-gray-800">
              {images.map((img, i) => (
                <Image
                  loading="lazy"
                  key={i}
                  src={img}
                  alt="Author"
                  fill
                  className={`object-cover rounded-[35px] transition-opacity duration-100
            ${i === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
            <div>
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: "25px" }}
                src="https://open.spotify.com/embed/playlist/2fLkFAceKiuolkW3zLY6Hp?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="flex-8">
            <div className="w-full border border-zinc-200 p-4 mb-3 sm:mb-6 rounded-[35px]">
              <p className="font-bold dosisFont text-[32px] mb-2">
                Hi, I'm ThetNyan
              </p>
              <p className="text-stone-500 dosisFont text-[20px]">
                Shoot me a message, and let’s catch up — because good talks and
                great wonder are always better together :)
              </p>
              <Contactform />
            </div>

            <div className="flex flex-col sm:flex-row w-full sm:space-x-5">
              <div className="flex-6 flex-shrink-0 ">
                <Link href="/about">
                  <div className="ccursor h-auto w-full tracking-wider py-3 text-center relative bg-black text-white p-2 py-2 rounded-[35px] overflow-hidden  cursor-pointer border border-zinc-200 mb-4">
                    <div
                      className="absolute inset-0 z-0 pointer-events-none"
                      style={{
                        backgroundImage: `
                            repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 20px),
                            repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.2) 0, rgba(0, 255, 128, 0.2) 1px, transparent 1px, transparent 20px)
                        `,
                      }}
                    />
                    <u
                      className="relative text-white text-[18px] dosisFont font-semibold z-[1] "
                      style={{ textShadow: "-4px 1px 1px #000" }}
                    >
                      More On Aboutme Page
                    </u>
                  </div>
                </Link>

                <div className="rounded-[35px] overflow-hidden border border-zinc-200 h-[213px] sm:h-[265px] mb-3 sm:mb-0">
                  <Marquee>
                    <Image
                      loading="lazy"
                      src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773729/bb_acnix4.png"
                      width={130}
                      height={100}
                      alt="Picture of the author"
                      className="h-full w-auto  border-[0.05px] border-zinc-600"
                    />
                    <Image
                      loading="lazy"
                      src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773725/bugonia_agojc5.png"
                      width={130}
                      height={100}
                      alt="Picture of the author"
                      className="h-full w-auto  border-[0.05px] border-zinc-600"
                    />
                    <Image
                      loading="lazy"
                      src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773730/hi_mqncsn.png"
                      width={130}
                      height={100}
                      alt="Picture of the author"
                      className="h-full w-auto  border-[0.05px] border-zinc-600"
                    />
                    <Image
                      src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773725/nk_zlbjgd.png"
                      width={130}
                      height={100}
                      alt="Picture of the author"
                      className="h-full w-auto  border-[0.05px] border-zinc-600"
                    />
                    <Image
                      loading="lazy"
                      src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773727/wow_znggky.png"
                      width={130}
                      height={100}
                      alt="Picture of the author"
                      className="h-full w-auto  border-[0.05px] border-zinc-600"
                    />
                  </Marquee>
                </div>
              </div>

              <div className="flex-6">
                <div className="relative w-full h-[285px] sm:h-[335px]">
                  <Image
                    loading="lazy"
                    src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773712/joji_tx3sge.png"
                    alt="Picture of the author"
                    fill
                    className="object-cover rounded-[35px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
