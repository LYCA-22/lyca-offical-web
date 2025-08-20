"use client";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DesktopMenu from "./desktopMenu";
import PhoneMenu from "./phoneMenu";

export function LinkBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`z-30 bg-gradient-to-b from-green-100 to-white/0 w-full flex items-center max-sm:p-3 p-5 justify-between fixed top-0 max-sm:h-14 border-t-4 border-green-500 max-sm:px-5 max-sm:pt-5 px-10`}
      >
        <div>
          <Link href={"/"}>
            <Image
              src={"/lyca-logo-no-text.svg"}
              alt="Lyca Logo"
              width={20}
              height={20}
            ></Image>
          </Link>
        </div>
        <DesktopMenu />
      </header>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className={`fixed z-50 right-5 top-5 rounded-full p-1 sm:hidden ${open ? "rotate-45 bg-white text-green-500" : "bg-green-500 text-white"} transition-all`}
      >
        <Plus size={21} />
      </button>
      <PhoneMenu open={open} setOpen={setOpen} />
    </>
  );
}
