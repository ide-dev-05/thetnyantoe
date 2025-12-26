"use client";
import Image from "next/image";

export default function References(): React.ReactElement {
  return (
    <main className="bg-white pt-[130px]">
      <section className="text-black w-full bg-white">
        <div
          className="flex flex-col items-center w-full justify-center "
          data-aos="fade-up"
        >
          <div className="dosisFont text-zinc-500 font-semibold text-[22px] flex items-center">
            <div className="size-[10px] bg-yellow-600 rounded-[15px] mt-[2.5px] mr-[8px]"></div>
            <p> 01 &ndash; References</p>
          </div>
          <p className="text-[86px]/[100px] max-w-[700px] text-center stacksansFont font-light">
            Don't take my work for it
          </p>
          <p className="text-[20px] mt-[20px] text-zinc-400 text-center">
            Take theirs
          </p>
        </div>
        {/* h-60 w-80 md:h-70 md:w-140 lg:h-90 lg:w-160 */}
        <div className="flex justify-center px-16 pb-[100px] mt-[80px]">
          <div className="grid gap-2">
            <figure className="sticky top-0 h-screen grid place-content-center">
              <article className="group relative max-w-[580px] rounded-2xl border border-yellow-900/20 bg-gradient-to-br from-white via-zinc-50 to-yellow-50/40 shadow-xl transition-all duration-500 rotate-6 hover:shadow-2xl">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.03),_transparent_60%)] pointer-events-none" />

                <div className="relative z-10 p-7 md:p-8 space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="stacksansFont">
                      <p className="text-lg font-semibold tracking-tight text-zinc-900">
                        Tun Tun Hlaing
                      </p>
                      <p className="mt-1 text-[12px] leading-relaxed text-zinc-500 ">
                        Senior Backend Engineer at <u>Codigo</u> <br />
                        Co-founder & Backend Lead at <u>Tangenc</u>
                      </p>
                    </div>

                    <Image
                      src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773719/koTun_fgrsih.jpg"
                      width={100}
                      height={100}
                      alt="Author"
                      className="size-[52px] bg-black p-2 rotate-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105"
                    />
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-900/30 to-transparent" />
                  <p className="playfairFont text-[12px] sm:text-[15px] leading-relaxed text-zinc-800 relative">
                    <span className="absolute -left-3 -top-4 text-4xl text-yellow-900/20 font-serif">
                      “
                    </span>
                    Thet Nyan Toe has shown impressive growth as a front-end
                    developer. His ability to quickly grasp new concepts and
                    contribute effectively to team projects makes him a valuable
                    asset. I’m confident he’ll continue to excel in his career.
                  </p>
                </div>

                <div className="absolute -bottom-2 -right-2 size-14 rounded-xl bg-green-900/10 blur-xl" />
              </article>
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <article className="group relative max-w-[580px] rounded-2xl border border-yellow-900/20 bg-gradient-to-br from-white via-zinc-50 to-yellow-50 shadow-xl transition-all duration-500 hover:shadow-2xl">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.03),_transparent_80%)] pointer-events-none" />

                <div className="relative z-10 p-7 md:p-8 space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="stacksansFont">
                      <p className="text-lg font-semibold tracking-tight text-zinc-900">
                        Pyae Thuta
                      </p>
                      <p className="mt-1 text-[12px] leading-relaxed text-zinc-500">
                        Senior Digital Application Analyst at <u>AIA Myanmar</u>
                        <br />
                        Co-founder & Project manager at <u>Tangenc</u>
                      </p>
                    </div>

                    <Image
                      src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773712/koTT_ck89mn.jpg"
                      width={100}
                      height={100}
                      alt="Author"
                      className="size-[52px] bg-black p-2 rotate-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105"
                    />
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-900/30 to-transparent" />
                  <p className="playfairFont text-[12px] sm:text-[15px] leading-relaxed text-zinc-800 relative">
                    <span className="absolute -left-3 -top-4 text-4xl text-yellow-900/20 font-serif">
                      “
                    </span>
                    Thet Nyan Toe is a valuable team member in our projects as
                    his technical skill and willingness to grow make him a
                    pleasure to work with. A solid team member with a promising
                    path ahead.
                  </p>
                </div>

                <div className="absolute -bottom-2 -right-2 size-14 rounded-xl bg-green-900/10 blur-xl" />
              </article>
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <article className="group relative max-w-[580px] rounded-2xl border border-yellow-900/20 bg-gradient-to-br from-white via-zinc-50 to-yellow-50 shadow-xl transition-all duration-500 -rotate-6 hover:shadow-2xl">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.03),_transparent_60%)] pointer-events-none" />

                <div className="relative z-10 p-7 md:p-8 space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="stacksansFont">
                      <p className="text-lg font-semibold tracking-tight text-zinc-900">
                        Hein Htet Soe Moe
                      </p>
                      <p className="mt-1 text-[12px] leading-relaxed text-zinc-500">
                        IT operations specialist at <u>AIA Myanmar</u> <br />
                        Founder at <u>Tangenc</u>
                      </p>
                    </div>

                    <Image
                      src="https://res.cloudinary.com/dtwvkmuje/image/upload/v1766773712/koTT_ck89mn.jpg"
                      width={100}
                      height={100}
                      alt="Author"
                      className="size-[52px] bg-black p-2 rotate-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105"
                    />
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-900/30 to-transparent" />
                  <p className="playfairFont text-[12px] sm:text-[15px] leading-relaxed text-zinc-800 relative">
                    <span className="absolute -left-3 -top-4 text-4xl text-yellow-900/20 font-serif">
                      “
                    </span>
                    I’ve had the opportunity to work with Thet Nyan Toe and was
                    impressed by his strong fundamentals, willingness to learn,
                    and positive attitude toward feedback. He approaches tasks
                    responsibly, communicates clearly, and shows steady growth
                    as a junior developer. With continued experience, I believe
                    he has great potential to become a solid and reliable
                    professional in the field.
                  </p>
                </div>

                <div className="absolute -bottom-2 -right-2 size-14 rounded-xl bg-green-900/10 blur-xl" />
              </article>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
