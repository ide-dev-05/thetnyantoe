import Image from "next/image";
import stand from "./_images/wonderofu.png";
import { RandomizedTextEffect } from "@/app/components/shared/text-randomized";
import References from "./_components/References";
import Aboutme from "./_components/Aboutme";

export default function MoreSection() {
  return (
    <>
      <section
        id="more"
        className="h-[calc(50vh)] flex flex-col items-start bg-[#ddddd1] dark:bg-[#000b0a] relative pt-[700px] md:pt-[750px] lg:pt-[860px]"
      >
        <div className="absolute z-0 left-[-20px] md:left-0 bottom-0 opacity-100 flex items-center space-x-[32px]">
          <Image
            src={stand}
            width={340}
            height={340}
            alt="Picture of the author"
            className="size-[240px] md:w-[340px] md:h-auto"
            data-aos="zoom-in"
          />
          <div
            className="leading-[20px] sm:leading-[25px] md:leading-[30px] pr-[5px]"
            data-aos="fade-up"
          >
            <p className="text-shadow-md text-[34px] md:text-[48px] xl:text-[66px] nablaFont">
              / More to come
            </p>
            <div className="dotoFont text-[12px] sm:text-[18px] font-extrabold max-w-[800px] mt-[20px] sm:mt-[40px] text-black font-bold dark:text-white">
              <span className="bg-green-700 p-1 rounded-md font-extrabold mr-[3px]">
                <RandomizedTextEffect text="References" />
              </span>
              from the senior developers I’ve worked with, an{" "}
              <span className="bg-yellow-700 p-1 rounded-md font-extrabold mr-[3px]">
                <RandomizedTextEffect text="About Me" />
              </span>
              section to share my journey, and a{" "}
              <u className="mr-[5px]">
                <RandomizedTextEffect text="Contact Area" />
              </u>
              {""}
              where you can reach out.
            </div>
          </div>
        </div>
      </section>
      <References />
      <Aboutme />
    </>
  );
}
