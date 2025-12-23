"use client";
import { motion } from "framer-motion";

export default function MottoSection() {
  const sentence = [
    "Built",
    "with",
    "Clarity,",
    "shaped",
    "by",
    "Intuition.",
    "I",
    "create",
    "digital",
    "experiences",
    "that",
    "feel",
    "natural,",
    "meaningful,",
    "and",
    "Alive.",
  ];

  return (
    <section className="h-[calc(80vh)] md:h-[calc(100vh)] xl:h-[calc(120vh)] flex items-center bg-[#ddddd1] dark:bg-[#000b0a]">
      <p className="w-full text-center jojoFont text-[22px] sm:text-[38px] md:text-[52px] lg:text-[62px] xl:text-[78px] px-[20px] md:px-[50px] xl:px-[90px] leading-[25px] sm:leading-[45px] md:leading-[60px] xl:leading-[100px] flex flex-wrap justify-center text-[#000b0a] dark:text-white">
        {sentence.map((word, i) => (
          <motion.span
            key={i}
            className={`inline-block mr-[12px] ${
              ["Clarity,", "Intuition.", "Alive."].includes(word)
                ? "greatvibesFont text-[22px] sm:text-[38px] md:text-[52px] lg:text-[62px] xl:text-[78px] "
                : ""
            }`}
            initial={{ filter: "blur(8px)", opacity: 0 }}
            whileInView={{
              filter: "blur(0px)",
              opacity: 1,
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.003,
            }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </section>
  );
}
