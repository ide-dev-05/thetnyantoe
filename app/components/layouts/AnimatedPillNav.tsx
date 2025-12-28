"use client";

import PillNav from "@/components/PillNav";

export default function AnimatedPillNav() {
  return (
    <div className="w-full bg-red-200 flex justify-center items-center sticky top-[5px] mt-[5px] z-[10]">
      <PillNav
        items={[
          { label: "HOME", href: "/" },
          { label: "WORK", href: "/work" },
          { label: "About", href: "/about" },
          { label: "miniT", href: "/minit" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </div>
  );
}
