import Image from "next/image";
import Link from "next/link";
import photo from "@/public/images/6.png";

export default function Pokedex() {
  return (
    <div className="w-full flex justify-center items-center pt-[80px] md:pt-[150px] pb-[20px] md:pb-[1850px] lg:pb-[200px] px-[10px] bg-[#ddddd1] dark:bg-[#000b0a]">
      <div className="w-full max-w-[1000px]">
        <Link
          href="/work"
          className="w-full pl-[10px] text-zinc-500 hover:text-zinc-300"
        >
          <u>{"Go Back"}</u>
        </Link>
        <div className="w-full p-0  md:p-[90px] bg-black border border-zinc-900 rounded-[5px] mt-[40px]">
          <Image
            priority
            src={photo}
            width={360}
            height={390}
            quality={100}
            alt="Picture of the author"
            className="w-full h-auto rounded-[5px] object-cover "
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between mt-[40px]">
          <p className="text-[24px] font-medium dotoFont text-zinc-900 dark:text-zinc-400 max-w-[300px]">
            Pokédex
          </p>
          <div className="mt-[50px] md:mt-0 flex flex-col md:flex-row justify-end items-end md:items-start md:justify-between space-y-[15px] md:space-y-0 md:space-x-[10px] text-zinc-500">
            <div className="min-w-[120px] md:w-[180px] ">
              <p className="text-zinc-400">Areas</p>
              <hr className="w-full h-[1px] bg-white my-[8px]" />
              <p>
                Pokémon <br /> PokéAPI <br />
                Pokédex
                <br />
                Browse
                <br />
                Fun
              </p>
            </div>
            <div className="max-w-[250px]">
              <p className="text-zinc-400">Overview</p>
              <hr className="w-full h-[1px] bg-white my-[8px]" />
              <p>
                Pokèdex is a fun, small project using simple tech stacks and the
                PokeAPI to display Pokémon. Users can search by name, browse all
                Pokémon, and view individual pages with detailed stats. I built
                it as an enjoyable coding experience combining my hobby with web
                development.
              </p>
            </div>
            <div>
              <p className="text-zinc-400">Links</p>
              <hr className="w-full h-[1px] bg-white my-[8px]" />
              <Link
                href="https://github.com/ide-dev-05/Pokedex"
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
            Pokèdex is a small project built with simple tech stacks that
            connects with the PokeAPI to display Pokémon. Users can search for
            Pokémon by name or browse all available Pokémon. Each Pokémon also
            has its own page showing detailed stats like type, abilities, and
            base stats.
            <br />
            <br />
            I built the frontend with React and basic styling, handling data
            fetching and dynamic rendering for each Pokémon. The project
            emphasizes a clean, interactive interface to make exploring Pokémon
            fun and intuitive.
            <br />
            <br />I display this project because it was an enjoyable coding
            experience for me and a way to combine my hobby with learning web
            development.
          </p>
        </div>
        <hr className="w-full h-[1px] text-zinc-800 my-[60px] mb-[50px] " />

        <div className="w-full flex justify-between text-zinc-400">
          <p>Single</p>
          <p>2022</p>
        </div>

        <div className="flex w-full justify-start mt-[120px] md:mt-[200px]">
          <div>
            <div className="relative group">
              <Link
                href="/work/allyours-project"
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
        </div>
      </div>
    </div>
  );
}
