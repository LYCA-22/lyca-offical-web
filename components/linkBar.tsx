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
        className={` bg-gradient-to-b from-green-100 to-white/0 w-full z-40 flex items-center max-sm:p-3 p-5 justify-between fixed top-0 max-sm:h-14 border-t-3 border-green-500 max-sm:px-5 max-sm:pt-5 px-10`}
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
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="bg-green-500 rounded-full p-1 text-white sm:hidden"
        >
          <Plus size={21} />
        </button>
      </header>
      <PhoneMenu open={open} setOpen={setOpen} />
    </>
  );
}
