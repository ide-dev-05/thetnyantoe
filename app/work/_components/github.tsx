import Image from "next/image";

import hands from "../_images/hands.png";
import bird from "../_images/bird.png";
import { RandomizedTextEffect } from "@/app/components/shared/text-randomized";
export default function Github(): React.ReactElement {
  return (
    <div className="min-h-[60vh] w-full flex flex-col md:flex-row justify-start items-center space-y-[40px] md:space-x-[150px] mt-[160px] md:mt-[200px] lg:mt-[300px] mb-[120px] px-[5px] md:px-[40px]">
      <div className="flex flex-col-reverse md:flex-col items-center space-y-[30px]">
        <div
          data-aos="fade-up"
          className="text-black/90 dark:text-white text-[40px] md:text-[52px] font-medium tracking-wide"
        >
          _Visit,
          <div className="bg-yellow-300 text-black inline-block">
            <RandomizedTextEffect text="Star" />
          </div>{" "}
          & <br />
          explore projects
        </div>
        <Image
          src={bird}
          alt="abird"
          priority
          className="w-[70%] h-auto "
          data-aos="fade-up"
        />
      </div>

      <div className="relative group flex justify-between xl:space-x-[110px] items-center  xl:ml-[40px]">
        <div>
          <div className="relative group-hover:z-[1] w-full text-center text-[72px] lg:text-[88px] font-medium text-black/85 xl:text-black/15 dark:text-white/85 dark:xl:text-white/15 mt-[40px] group-hover:text-black dark:group-hover:text-white cursor-pointer duration-100 leading-[80px] ">
            (Github)
            <br />
            (Github) <br />
            (Github)
            <br />
            (Github)
            <br />
            (<RandomizedTextEffect text="Gi" />
            thub)
          </div>
          <Image
            src={hands}
            alt="hands"
            priority
            className="absolute top-0 w-auto h-auto
             opacity-20
             flickerf
             group-hover:opacity-100"
            data-aos="zoom-out"
          />
        </div>
        <div className="hidden xl:block text-yellow-800 dark:text-yellow-300 text-[18px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <RandomizedTextEffect text="github.com/ide-dev-05" />
        </div>
      </div>
    </div>
  );
}
