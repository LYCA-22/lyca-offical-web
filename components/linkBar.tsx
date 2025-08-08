"use client";
import Link from "next/link";
import GlassSurface from "./ui/GlassSurface/GlassSurface";
import { usePathname } from "next/navigation";

export function LinkBar() {
  const path = usePathname();

  return (
    <header
      className={`${path === "/events/90year" ? "hidden" : ""} bg-transparent transition-all fixed bottom-0 w-full z-50 p-4 flex items-center justify-center`}
    >
      <div className="z-0 absolute w-full h-full bg-gradient-to-t from-white to-white/20"></div>
      <GlassSurface
        width={300}
        height={50}
        borderRadius={24}
        redOffset={0}
        greenOffset={15}
        blueOffset={25}
        brightness={90}
        opacity={0.8}
        className="relative z-10"
      >
        <div className="w-full flex overflow-x-scroll font-bold gap-2">
          <Link
            href={"/"}
            className={`rounded-full p-2 px-4 ${path === "/" ? "bg-zinc-300/70" : ""}`}
          >
            首頁
          </Link>
          <Link
            href={"/events"}
            className={`rounded-full p-2 px-4 ${path.startsWith("/events") ? "bg-zinc-300/70" : ""}`}
          >
            活動
          </Link>
        </div>
      </GlassSurface>
    </header>
  );
}
