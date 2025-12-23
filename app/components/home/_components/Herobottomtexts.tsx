"use client";

import SpeakerIcon from "@/components/icons/speaker-icon";
import { RandomizedTextEffect } from "@/app/components/shared/text-randomized";

export default function Herobottomtexts() {
  const speakName = () => {
    const utterance = new SpeechSynthesisUtterance("Thet Nyan Toe");
    const voices = window.speechSynthesis.getVoices();
    utterance.voice =
      voices.find((v) => v.name.includes("Google US English")) || voices[0];

    utterance.rate = 0.95;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };
  return (
    <div className=" w-full flex justify-between items-center bg-[#ddddd1] dark:bg-[#000b0a]">
      <div className="text-[14px] sm:text-[22px] md:text-[32px] dotoFont font-[700] z-[1] text-black dark:text-white">
        WEBSITE <br /> <RandomizedTextEffect text="DEVELOPER" />
      </div>
      <div className="pl-[10px] max-w-[380px] z-[1]">
        <div className="flex justify-between">
          <p className="text-[10px] sm:text-sm md:text-md">ide</p>
          <p className=" text-[10px] sm:text-[12px] md:text-[14px] text-black dark:text-white">
            သက်ဉာဏ်တိုး
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px] sm:text-[23px] md:text-[34px] font-[600] satoshiFont text-black dark:text-white">
            {"<THET NYAN TOE />"}
          </p>
          <SpeakerIcon
            onClick={speakName}
            className="cursor-pointer text-sm md:text-md text-zinc-500 cursor-pointer hover:text-yellow-200"
          />
        </div>
        <div className="flex justify-between items-center text-[10px] sm:text-[12px] md:text-[14px] text-black dark:text-white">
          <RandomizedTextEffect text="いで" />
        </div>
      </div>
      <div className="text-[14px] sm:text-[22px] md:text-[32px] text-right dotoFont font-[700] z-[1] text-black dark:text-white">
        <RandomizedTextEffect text="FRONTEND" /> <br /> FOCUSED
      </div>
    </div>
  );
}
