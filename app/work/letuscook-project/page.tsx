import Image from "next/image";
import Link from "next/link";
import photo from "@/public/images/2.png";

import TailwindIcon from "@/public/icons/techs/tailwind";

import VitejsIcon from "@/public/icons/techs/vite";

import ReactjsIcon from "@/public/icons/techs/reactjs";
import MysqlIcon from "@/public/icons/techs/mysql";
import PhpIcon from "@/public/icons/techs/php";

export default function Letuscook() {
  const techs = [
    { Icon: ReactjsIcon, name: "React.js" },
    { Icon: TailwindIcon, name: "Tailwind CSS" },
    { Icon: VitejsIcon, name: "Vite.js" },
    { Icon: PhpIcon, name: "PHP" },
    { Icon: MysqlIcon, name: "MySQL" },
  ];
  return (
    <div className="w-full flex justify-center items-center mt-[80px] md:mt-[150px] mb-[20px] md:mb-[1850px] lg:mb-[200px] px-[10px]">
      <div className="w-full max-w-[1000px]">
        <Link
          href="/work"
          className="w-full pl-[10px] text-zinc-500 hover:text-zinc-300"
        >
          <u>{"Go Back"}</u>
        </Link>
        <div className="w-full p-0 md:p-[90px] bg-black border border-zinc-900 rounded-[5px] mt-[40px]">
          <Image
            src={photo}
            width={360}
            height={390}
            quality={100}
            alt="Picture of the author"
            className="w-full h-auto rounded-[5px] object-cover "
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between mt-[40px]">
          <p className="text-[24px] font-medium dotoFont text-zinc-400 max-w-[300px]">
            Letuscook food ordering site
          </p>
          <div className="mt-[50px] md:mt-0 flex flex-col md:flex-row justify-end items-end md:items-start md:justify-between space-y-[15px] md:space-y-0 md:space-x-[10px] text-zinc-500">
            <div className="min-w-[120px] md:w-[180px] ">
              <p className="text-zinc-400">Areas</p>
              <hr className="w-full h-[1px] bg-white my-[8px]" />
              <p>
                E-commerce <br /> Community <br />
                Chat
                <br />
                C2C
                <br />
                Food
                <br />
                Order
              </p>
            </div>
            <div className="max-w-[250px]">
              <p className="text-zinc-400">Overview</p>
              <hr className="w-full h-[1px] bg-white my-[8px]" />
              <p>
                LetUsCook is a C2C food-ordering platform connecting home cooks
                and customers. Focused on community, accessibility, and quality,
                it lets users sell, buy, and manage meals seamlessly. The
                platform includes role-based management, meal browsing, Google
                authentication, and a real-time chatbot for smooth user
                interactions.
              </p>
            </div>
            <div>
              <p className="text-zinc-400">Links</p>
              <hr className="w-full h-[1px] bg-white my-[8px]" />
              <Link
                href="https://github.com/ide-dev-05/letuscookmm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white ccursor"
              >
                <u>Github</u>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-left w-full mt-[80px]">
          <p className="text-zinc-400 dosisFont text-[30px] font-medium mb-[50px]">
            Details
          </p>

          <p className="text-zinc-500 leading-[28px]">
            <span className="text-zinc-400 font-medium">LetUsCook</span> is a{" "}
            <span className="text-zinc-400 font-medium">
              C2C food-ordering platform
            </span>{" "}
            focused on{" "}
            <span className="text-zinc-400 font-medium">home-cooked meals</span>
            , where users can both{" "}
            <span className="text-zinc-400 font-medium">sell</span> and{" "}
            <span className="text-zinc-400 font-medium">buy food</span> within
            the same marketplace.{" "}
            <span className="text-zinc-400 font-medium">Home cooks</span> can
            upload meals, manage their listings, and handle availability, while{" "}
            <span className="text-zinc-400 font-medium">customers</span> can
            browse, order, and track the status of their meals in real time.
            <br />
            <br />
            The platform includes dedicated pages for{" "}
            <span className="text-zinc-400 font-medium">
              meal browsing
            </span> and{" "}
            <span className="text-zinc-400 font-medium">cook discovery</span>,
            along with a structured{" "}
            <span className="text-zinc-400 font-medium">home page</span>,{" "}
            <span className="text-zinc-400 font-medium">about page</span>, and{" "}
            <span className="text-zinc-400 font-medium">contact page</span> to
            clearly present the service and build trust. Users can place orders,
            view{" "}
            <span className="text-zinc-400 font-medium">order progress</span>,
            and manage their accounts through a smooth and simple interface.
            <br />
            <br />I implemented{" "}
            <span className="text-zinc-400 font-medium">
              role-based functionality
            </span>{" "}
            where <span className="text-zinc-400 font-medium">cooks</span>{" "}
            manage their meals,{" "}
            <span className="text-zinc-400 font-medium">admins</span> oversee
            cook management, orders, and overall system operations, and{" "}
            <span className="text-zinc-400 font-medium">users</span> focus on
            ordering and tracking. This separation keeps the system organized
            and <span className="text-zinc-400 font-medium">scalable</span> as
            the platform grows.
            <br />
            <br />
            Authentication supports both{" "}
            <span className="text-zinc-400 font-medium">
              email–password login
            </span>{" "}
            and{" "}
            <span className="text-zinc-400 font-medium">Google sign-in</span>,
            making onboarding fast and accessible. A customer support chatbot
            powered by{" "}
            <span className="text-zinc-400 font-medium">Tawk.to</span> is also
            integrated to help users with common questions and{" "}
            <span className="text-zinc-400 font-medium">
              real-time assistance
            </span>
            .
            <br />
            <br />
            The project focuses on{" "}
            <span className="text-zinc-400 font-medium">usability</span>,{" "}
            <span className="text-zinc-400 font-medium">clear workflows</span>,
            and{" "}
            <span className="text-zinc-400 font-medium">
              community-driven food commerce
            </span>
            , bringing local home cooks and customers together through a simple
            and reliable ordering experience.
          </p>
        </div>
        <hr className="w-full h-[1px] text-zinc-800 my-[60px] mb-[50px] " />

        <div className="mb-[40px] max-w-[90vw] sm:max-w-[80vw] md:max-w-[1100px] bg-[#0f0f0f] relative text-white flex mx-auto p-3 gap-2 sm:gap-4 flex-wrap justify-center rounded-[6px] ">
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
              key={i}
              className="border border-[1px] border-zinc-600 dotoFont flex items-center space-x-[8px] sm:space-x-[12px] px-2 py-1 rounded-[5px] w-max text-xs sm:text-sm"
            >
              <Icon className="size-[20px] sm:size-[24px] bg-zinc-100 rounded-sm p-[1px]" />
              <p className="tracking-wider dosisFont">{name}</p>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-between text-zinc-400">
          <p>Fullstack Dev</p>
          <p>May 2025 - July 2025</p>
        </div>

        <div className="flex w-full justify-between mt-[120px] md:mt-[200px]">
          <div>
            <div className="relative group">
              <Link
                href="/work/securum-project"
                className="relative inline-block font-medium text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="relative z-10 block px-2 py-3 border border-zinc-800 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-[-1] -scale-x-[1]"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    <span className="transition-all duration-500 group-hover:translate-x-[-1]">
                      previous
                    </span>
                  </div>
                </span>
              </Link>
            </div>
          </div>

          <div>
            <div className="relative group">
              <Link
                href="/work/tangenc-project"
                className="relative inline-block font-medium text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="relative z-10 block px-2 py-3 border border-zinc-800 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-[1]">
                      next
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-[-1] "
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
