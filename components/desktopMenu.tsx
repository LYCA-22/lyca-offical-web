"use client";
import Link from "next/link";
import { pages_config } from "@/config/route";

export default function DesktopMenu() {
  return (
    <div className="flex gap-4 py-2 max-sm:hidden text-lg">
      {pages_config.map((item, index) => (
        <div key={index}>
          {item.isGroup ? (
            <div className="group font-neue font-bold" key={index}>
              <div className="flex gap-2 items-center">
                <p className="text-sm opacity-50">0{index + 1} / </p>
                <h3>{item.title}</h3>
              </div>
              <div className="-z-10 p-2 flex flex-col text-[16px] bg-white rounded-2xl border border-border shadow-2xl shadow-zinc-300 absolute opacity-0 scale-75 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:z-10 transition-all">
                {item.children &&
                  item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.link}
                      className="hover:bg-zinc-100 rounded-lg p-2 px-3"
                    >
                      {child.title}
                    </Link>
                  ))}
              </div>
            </div>
          ) : (
            <Link
              key={index}
              href={item.link || ""}
              className="flex items-center gap-2 font-neue font-bold"
            >
              <p className="text-sm opacity-50">0{index + 1} / </p>
              <p>{item.title}</p>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
