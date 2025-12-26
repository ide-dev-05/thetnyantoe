import Image from "next/image";
import { RandomizedTextEffect } from "../shared/text-randomized";
import StarIcon from "@/public/icons/star-icon";

const jobexperiences = [
  {
    company: "Tangenc",
    role: "Junior Web Developer",
    duration: "April 2024 - Present",
    responsibilities: [
      "Built and maintained company and client websites with responsive design.",
      "Added new features and resolved issues alongside the team.",
      "Optimized site speed, performance, and SEO using modern tech.",
    ],
  },
  {
    company: "MCPA",
    role: "Building Securum chatbot",
    duration: "July 2025 - Aug 2025",
    responsibilities: [
      "Built an AI-powered cybersecurity chatbot and participated in a competition.",
      "Created an interactive system providing real-time security insights.",
      "Enhanced user awareness and delivered tailored cybersecurity guidance.",
    ],
  },
  {
    company: "Nitrix",
    role: "newbie Frontend Developer",
    duration: "Nov 2023 - Jan 2024",
    responsibilities: [
      "Contributed as a frontend developer in a small, short-lived development team.",
      "Assisted in building user interfaces and implementing basic functionality.",
    ],
  },
  {
    company: "Nexus Myanmar",
    role: "Content Writer",
    duration: "May 2025 - Sep 2025",
    responsibilities: [
      "Created engaging anime-related content, including articles and reviews.",
      "Produced multimedia posts tailored to the team's audience.",
    ],
  },

  // Add more experiences here
];

const skillexperiences = [
  {
    company: "University",
    role: "Bachelor's Degree in Computer Science",
    duration: "Jan 2026 - Upcoming",
    responsibilities: ["Edinburgh Napier (UK)"],
  },
  {
    company: "College",
    role: "Higher National Diploma",
    duration: "Sep 2024 - Sep 2025",
    responsibilities: ["Info Myanmar College", "All distinctions"],
  },
  {
    company: "Completions",
    role: "Competition and certificates",
    duration: "",
    responsibilities: [
      "InfoSoft Java competition (Champ)",
      "MCPA cybersecurity chatbot competition (Top-10)",
      "Professional Web Developer, Fairway Technology",
      "Fullstack Developer course, CodeLab",
    ],
  },

  // Add more experiences here
];

export default function ExperiencesSection() {
  return (
    <section
      id="journey"
      className="relative min-h-screen items-center justify-center px-[10px] sm:px-[20px] md:px-[30px] bg-[#ddddd1] dark:bg-[#000b0a] pt-[50px] sm:pt-[100px]"
    >
      <div className="flex items-center" data-aos="fade-right">
        <Image
          src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766774901/arrow_yqhalu.png"
          width={50}
          height={40}
          alt="Pokeball"
          className="rotate-[170deg] mx-[15px]"
        />
        <p className="text-white text-[34px] md:text-[48px] xl:text-[66px] nablaFont cursor-target">
          / Journey
        </p>
      </div>
      <div
        data-aos="fade-right"
        className="dotoFont max-w-[600px] mt-2 text-[14px] sm:text-[18px] mb-[60px] md:mb-[100px] text-black font-bold dark:text-white"
      >
        <span className="text-yellow-800 dark:text-yellow-400 cursor-target">
          Pt. 1
        </span>
        | <RandomizedTextEffect text="What I've done" /> - The positions I’ve
        held and the work I’ve done across different projects and teams.
      </div>

      {jobexperiences.map((exp, index) => (
        <div
          data-aos="fade-up"
          key={index}
          className="w-full border-t-[0.5px] border-zinc-800 flex flex-col md:flex-row justify-between py-[55px] px-[5px] md:px-[10px] space-y-[20px] md:space-y-0"
        >
          <div className="min-w-[160px]">
            <p className="border border-[1px] border-zinc-700 rounded-[20px] py-[6px] px-[15px] text-[14px] sm:text-[17px] font-[500] w-max text-black dark:text-white">
              {exp.company}
            </p>
          </div>

          <p className="text-yellow-500 dark:text-yellow-200 text-[28px] sm:text-[40px] font-[500] sm:font-[800] flex-2 text-center">
            /
          </p>

          <div className="flex-6">
            <p className="text-[28px] sm:text-[32px] stacksansFont text-black dark:text-white">
              {exp.role}
            </p>
            <div className="pl-[10px] space-y-[10px] mt-[22px] text-black dark:text-white">
              {exp.responsibilities.map((res, idx) => (
                <div key={idx} className="flex items-center space-x-[10px]">
                  <StarIcon className="text-yellow-500 dark:text-yellow-300 size-[24px]" />
                  <p className="text-[14px] sm:text-[17px] font-[500]">{res}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="flex-2 text-left text-zinc-500 text-xs sm:text-sm md:text-md lg:text-lg">
            {exp.duration}
          </p>
        </div>
      ))}
      <div className="flex flex-col md:flex-row justify-between space-y-[10px] md:space-y-0 md:space-x-[22px] min-h-[320px] mt-[70px] mb-[120px] md:mb-[180px]">
        <div className="relative flex-6 rounded-[10px] overflow-hidden">
          <div
            className="absolute inset-0 z-0 pointer-events-none rounded-[10px]"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773712/expbg1_b8jusg.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />

          <div
            className="relative z-4 p-[45px] h-full w-full"
            data-aos="zoom-in"
          >
            <p className="text-[#000080] text-[106px] font-extralight h-[50%] jojoFont pl-[60px]">
              3+
            </p>
            <div className="h-[50%] flex flex-col justify-end stacksansFont">
              <p className="text-[#2525a8] text-[20px] font-light">Years</p>
              <p className="text-[#000080] text-[26px] font-normal">
                of experiences
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex-6 rounded-[10px] overflow-hidden">
          <div
            className="absolute inset-0 z-0 pointer-events-none rounded-[10px]"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773723/expbg2_tu2q3u.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />

          {/* Text Layer */}
          <div
            className="relative z-4 p-[45px] h-full w-full"
            data-aos="zoom-in"
          >
            <p className="text-black text-[104px] font-extralight h-[50%] jojoFont pl-[60px]">
              15+
            </p>
            <div className="h-[50%] flex flex-col justify-end stacksansFont">
              <p className="text-black text-[17px] font-light">
                Personal projects
              </p>
              <p className="text-stone-500 text-[26px] font-normal">
                completed
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dotoFont max-w-[700px] mt-[50px] mb-[60px] text-black font-bold dark:text-white"
        data-aos="fade-right"
      >
        <span className="text-purple-600 dark:text-purple-400">Pt. 2</span> |{" "}
        <RandomizedTextEffect text="What I've learnt" /> - The knowledge and
        skills I’ve gained through my education, courses, and certifications.
      </div>

      {skillexperiences.map((exp, index) => (
        <div
          data-aos="fade-up"
          key={index}
          className="w-full border-t-[0.5px] border-zinc-800 flex flex-col md:flex-row justify-between py-[35px] md:py-[55px] px-[5px] md:px-[10px] space-y-[15px] md:space-y-0 text-black dark:text-white"
        >
          <div className="min-w-[160px]">
            <p className="border border-[1px] border-zinc-700 rounded-[20px] py-[6px] px-[15px] text-[14px] sm:text-[17px] font-[500] w-max">
              {exp.company}
            </p>
          </div>

          <p className="text-purple-200 text-[28px] sm:text-[40px] font-[500] sm:font-[800] flex-2 text-center">
            /
          </p>

          <div className="flex-6">
            <p className="text-[28px] sm:text-[32px] stacksansFont">
              {exp.role}
            </p>
            <div className="pl-[10px] space-y-[10px] mt-[22px]">
              {exp.responsibilities.map((res, idx) => (
                <div key={idx} className="flex items-center space-x-[10px]">
                  <StarIcon className="text-purple-500 dark:text-purple-300 size-[20px]" />
                  <p className="text-[14px] sm:text-[17px] font-[500]">{res}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="flex-2 text-left text-zinc-500 text-xs sm:text-sm md:text-md lg:text-lg">
            {exp.duration}
          </p>
        </div>
      ))}
    </section>
  );
}
