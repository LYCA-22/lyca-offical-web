"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { pages_config } from "@/config/route";

export default function PhoneMenu({
  setOpen,
  open,
}: {
  setOpen: (open: boolean) => void;
  open: boolean;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [openindex, setIndex] = useState(0);

  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    if (menuRef.current) {
      // Set initial state
      gsap.set(menuRef.current, {
        opacity: 1,
        y: "-100%",
      });
    }
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (open) {
        gsap.to(menuRef.current, {
          duration: 0.5,
          y: "0%",
          ease: "power4.inOut",
        });
      } else {
        gsap.to(menuRef.current, {
          duration: 0.5,
          y: "-100%",
          ease: "power4.out",
        });
      }
    }
  }, [open]);

  useEffect(() => {
    const mainDiv = document.getElementsByTagName("body")[0];
    if (open) {
      mainDiv?.classList.remove("overflow-y-scroll");
      mainDiv?.classList.add("overflow-y-hidden");
    } else {
      mainDiv?.classList.remove("overflow-y-hidden");
      mainDiv?.classList.add("overflow-y-scroll");
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      mainDiv?.classList.remove("overflow-y-hidden");
      mainDiv?.classList.add("overflow-y-scroll");
    };
  }, [open]);

  return (
    <div
      ref={menuRef}
      className={`p-10 px-5 pt-5 pb-2 menu fixed z-40 text-white font-bold w-full bg-green-500 rounded-b-4xl ${!open ? "pointer-events-none" : ""}`}
    >
      <div className="flex justify-between items-center mb-5">
        <p className="font-neue font-bold text-xl">LYCA@22</p>
      </div>
      <div className="flex flex-col gap-3 sm:grow sm:justify-between sm:py-28">
        {pages_config.map((item, i) => (
          <div key={i} className="relative w-full">
            {item.isGroup ? (
              <button
                onClick={() => setIndex(openindex == i + 1 ? 0 : i + 1)}
                className="flex flex-col w-full items-center justify-between group"
              >
                <div className="w-full items-center justify-between flex">
                  <div className="flex items-center gap-2">
                    <p className="font-neue font-bold text-zinc-700">
                      0{i + 1} /
                    </p>
                    <p className="text-[18px]">{item.title}</p>
                  </div>
                  <Plus
                    size={20}
                    className={`${openindex === i + 1 ? "rotate-45" : ""} transition-all`}
                  />
                </div>
                <div
                  className={`${openindex === i + 1 ? "max-h-96 py-2 border-green-400/80" : "max-h-0 border-transparent"} transition-all overflow-y-auto w-full border border-t-0 rounded-b-3xl  flex flex-col duration-700 gap-2`}
                >
                  {item.children &&
                    item.children.map((child, i) => (
                      <Link
                        key={i}
                        href={child.link as string}
                        className="flex gap-3 w-full items-center justify-between pl-11 opacity-70"
                        onClick={() => setOpen(false)}
                      >
                        <p className="text-[18px]  ">{child.title}</p>
                      </Link>
                    ))}
                </div>
              </button>
            ) : (
              <Link
                href={(item.link as string) || ""}
                className="flex gap-2 w-full items-center"
                onClick={() => setOpen(false)}
              >
                <p className="font-neue font-bold text-zinc-700">0{i + 1} /</p>
                <p className="text-[18px]">{item.title}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div>
        {/* 版權資訊 */}
        <div className="w-full text-4xl py-2 mt-3 font-neue font-bold opacity-40">
          <p>2025 © LYCA</p>
        </div>
      </div>
    </div>
  );
}
