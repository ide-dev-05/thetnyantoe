"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Wave({ className }: React.SVGProps<SVGSVGElement>) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const fillColor = resolvedTheme === "dark" ? "#000b0a" : "#ddddd1";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className={className}
    >
      <path
        fill={fillColor}
        fillOpacity="1"
        d="M0,256L60,245.3C120,235,240,213,360,213.3C480,213,600,235,720,229.3C840,224,960,192,1080,176C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  );
}
