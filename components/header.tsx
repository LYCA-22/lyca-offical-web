"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setShow(true);
      }, 100);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  return (
    <header
      className={`${isOpen ? "h-dvh" : "h-12"} bg-white transition-all fixed top-0 w-full z-50`}
    >
      <div className="bg-white px-5 py-3 flex justify-between items-center relative">
        <Link href={"/"}>
          <Image
            src={"/lyca-logo.svg"}
            alt="lyca-logo"
            width={100}
            height={200}
          ></Image>
        </Link>
        <button
          onClick={() => setIsOpen(isOpen ? false : true)}
          className="relative flex gap-2 cursor-pointer min-w-5"
        >
          <div
            className={`w-0.5 h-4 bg-zinc-400 ${isOpen && "opacity-0 hidden"}`}
          ></div>
          <div
            className={`w-0.5 h-4 bg-zinc-400 ${isOpen && "opacity-0 hidden"}`}
          ></div>
          <div
            className={`w-0.5 h-4 bg-zinc-400 ${isOpen && "rotate-90 translate-x-2"} transition-all`}
          ></div>
        </button>
      </div>
      {show && (
        <div aria-label="menu" className="px-5">
          <ul>
            <li className="opacity-50 border-b border-zinc-300 py-2">
              活動資訊
            </li>
            <li className="py-2 text-2xl">
              <a href={"/events/baseball"}>113-2 班際排球</a>
            </li>
            <li className="py-2 text-2xl">
              <a href={"/events/90year"}>90 週年主視覺 logo 設計競賽</a>
            </li>
            <li className="opacity-50 border-b border-zinc-300 py-2 mt-5">
              數位資源
            </li>
            <li className="py-2 text-2xl">
              <a href={"https://plus.lyhsca.org"} target="_blank">
                LYHS+ 介紹
              </a>
            </li>
            <li className="py-2 text-2xl">
              <div>前往 LYHS+ (即將開放)</div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
