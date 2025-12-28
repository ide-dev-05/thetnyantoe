"use client";

import PillNav from "@/components/PillNav";

export default function Nav() {
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
      />
    </div>
  );
}
