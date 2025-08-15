"use client";
import { Menu } from "lucide-react";
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
        className={` bg-white w-full z-40 flex items-center p-3 justify-center fixed top-0 max-sm:h-14`}
      >
        <div className="absolute left-10 max-sm:left-8">
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
          className="absolute right-10 max-sm:right-8 z-10 bg-white sm:hidden"
        >
          <Menu size={22} />
        </button>
      </header>
      <PhoneMenu open={open} setOpen={setOpen} />
    </>
  );
}
