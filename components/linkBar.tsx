"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function LinkBar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    if (menuRef.current) {
      // Set initial state
      gsap.set(menuRef.current, {
        opacity: 0,
        x: -500,
      });
    }
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (open) {
        gsap.to(menuRef.current, {
          duration: 0.5,
          opacity: 1,
          x: 0,
          ease: "expo.inOut",
        });
      } else {
        gsap.to(menuRef.current, {
          duration: 0.5,
          opacity: 0,
          x: -500,
          ease: "expo.inOut",
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
    <>
      <header
        className={`bg-transparent transition-all fixed top-0 w-full z-40 flex items-center justify-end p-5`}
      >
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="relative z-10 bg-white shadow-2xl p-2 rounded-full hover:scale-105 border border-border transition-all"
        >
          <Menu size={20} />
        </button>
      </header>
      <div
        ref={menuRef}
        className={`menu fixed z-50 font-bold w-full sm:flex sm:justify-between top-0 bg-zinc-950/50 text-white overflow-y-scroll backdrop-blur-2xl h-dvh ${!open ? "pointer-events-none" : ""}`}
      >
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="bg-zinc-300/30 shadow-2xl rounded-br-3xl p-4 h-fit"
        >
          <X />
        </button>
        <div className="p-10 flex flex-col gap-5 sm:grow sm:justify-between sm:py-28">
          <div className="text-3xl mr-2">
            <Link
              href={"/"}
              className="flex gap-3 w-full"
              onClick={() => setOpen(false)}
            >
              <p className="font-mono">
                <span className="opacity-35">0</span>
                <span className="opacity-80">1</span>
              </p>
              <div className="bg-zinc-200 grow h-[1px] mt-auto"></div>
              <p>首頁</p>
            </Link>
          </div>
          <div className="text-3xl mr-5">
            <Link
              href={"/events"}
              className="flex gap-3 w-full"
              onClick={() => setOpen(false)}
            >
              <p className="font-mono">
                <span className="opacity-35">0</span>
                <span className="opacity-80">2</span>
              </p>
              <div className="bg-zinc-200 grow h-[1px] mt-auto"></div>
              <p>活動總覽</p>
            </Link>
          </div>
          <div className="text-3xl">
            <Link
              href={"/about"}
              className="flex gap-3 w-full"
              onClick={() => setOpen(false)}
            >
              <p className="font-mono">
                <span className="opacity-35">0</span>
                <span className="opacity-80">3</span>
              </p>
              <div className="bg-zinc-200 grow h-[1px] mt-auto"></div>
              <p>關於我們</p>
            </Link>
          </div>
          <div className="text-3xl mr-10">
            <Link
              href={"/about"}
              className="flex gap-3 w-full"
              onClick={() => setOpen(false)}
            >
              <p className="font-mono">
                <span className="opacity-35">0</span>
                <span className="opacity-80">4</span>
              </p>
              <div className="bg-zinc-200 grow h-[1px] mt-auto"></div>
              <p>數位發展</p>
            </Link>
          </div>
          <div className="text-3xl mr-5">
            <Link
              href={"/about"}
              className="flex gap-3 w-full"
              onClick={() => setOpen(false)}
            >
              <p className="font-mono">
                <span className="opacity-35">0</span>
                <span className="opacity-80">5</span>
              </p>
              <div className="bg-zinc-200 grow h-[1px] mt-auto"></div>
              <p>聯絡我們</p>
            </Link>
          </div>
          <div className="text-3xl">
            <Link
              href={"/about"}
              className="flex gap-3 w-full"
              onClick={() => setOpen(false)}
            >
              <p className="font-mono">
                <span className="opacity-35">0</span>
                <span className="opacity-80">6</span>
              </p>
              <div className="bg-zinc-200 grow h-[1px] mt-auto"></div>
              <p>友好夥伴</p>
            </Link>
          </div>
        </div>
        <div className="max-sm:grow sm:p-20">
          {/* 活動廣告 */}
          <div className="bg-zinc-300/20 p-8 flex flex-col sm:rounded-4xl">
            <div className="flex flex-col gap-4 pb-4 border-b border-zinc-400">
              <h2 className="text-2xl">
                林園高中 90 週年LOGO設計比賽已正式開跑！
              </h2>
              <Link
                href={"/events/90year"}
                className="bg-white w-fit text-[14px] text-foreground rounded-full p-2 px-3 font-bold"
              >
                點我瞭解更多
              </Link>
            </div>
            <div className="pt-4">
              <h2 className="text-2xl">近期網站改版中，可能會發生錯誤。</h2>
            </div>
          </div>
          {/* 版權資訊 */}
          <div className="flex items-center justify-center flex-col text-sm font-normal py-5">
            <p className="text-white/50">本網站由學生會資訊組維護與建置</p>
            <p className="text-white/50">2025 © 林園高中學生會 版權所有</p>
          </div>
        </div>
      </div>
    </>
  );
}
