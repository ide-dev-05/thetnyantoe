import FlowingDots from "../shared/flowingdots";
import Image from "next/image";
import Projectsparallex from "./_components/Projectsparallex";
export default function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="relative min-h-screen items-center justify-center bg-[#ddddd1] dark:bg-[#000b0a]"
    >
      <FlowingDots backgroundColor="#000b0aff" animationSpeed={3} />
      <div data-aos="fade-up">
        <div className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766774901/macbook_evk8ed.png"
            loading="lazy"
            width={70}
            height={70}
            alt="Picture of the author"
            className=""
          />
          <p className="text-shadow-md text-[34px] md:text-[48px] xl:text-[66px] nablaFont">
            {" "}
            / ShowCases
          </p>
        </div>
        <p className="dotoFont max-w-[600px] ml-2 mt-2 text-[14px] sm:text-[18px] text-black font-bold dark:text-white">
          A handful of cool things I’ve built — from tiny ideas to full
          projects.
        </p>
      </div>
      <Projectsparallex />
    </section>
  );
}
