"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight, X, ArrowLeft } from "lucide-react";
import { pages_config } from "@/config/route";
import Image from "next/image";

// 類型定義
type MenuItem = {
  title: string;
  link: string;
  description: string;
};

type PageConfig = {
  title: string;
  isGroup: boolean;
  link?: string;
  children?: MenuItem[];
};

// 子菜單組件
function SubMenu({
  menuItems,
  title,
  isOpen,
  onClose,
}: {
  menuItems: MenuItem[];
  title: string;
  isOpen: boolean;
  onClose: (action: "back" | "close") => void;
}) {
  const subMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (subMenuRef.current) {
      // Set initial state
      gsap.set(subMenuRef.current, {
        opacity: 0,
        x: 500,
      });
    }
  }, []);

  useEffect(() => {
    if (subMenuRef.current) {
      if (isOpen) {
        gsap.to(subMenuRef.current, {
          duration: 0.5,
          opacity: 1,
          x: 0,
          ease: "expo.inOut",
        });
      } else {
        gsap.to(subMenuRef.current, {
          duration: 0.5,
          opacity: 0,
          x: 500,
          ease: "expo.inOut",
        });
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={subMenuRef}
      className={`absolute top-0 left-0 w-full h-full bg-white z-10 px-8 pt-5 overflow-y-scroll ${!isOpen ? "pointer-events-none" : ""}`}
    >
      <div className="flex justify-between items-center mb-5">
        <button
          onClick={() => onClose("back")}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          <span className="text-lg font-bold">{title}</span>
        </button>
        <button onClick={() => onClose("close")}>
          <X />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="block p-3 px-4 border rounded-xl border-gray-200 hover:bg-gray-50 transition-colors"
            onClick={() => onClose("close")}
          >
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-sm opacity-50 font-normal">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function PhoneMenu({
  setOpen,
  open,
}: {
  setOpen: (open: boolean) => void;
  open: boolean;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [subMenuOpen, setSubMenuOpen] = useState<string | null>(null);

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
        // 關閉主菜單時也關閉子菜單
        setSubMenuOpen(null);
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
      className={`p-10 px-8 pt-5 menu fixed z-50 font-bold w-full top-0 bg-white overflow-y-scroll h-dvh ${!open ? "pointer-events-none" : ""}`}
    >
      <div className="flex justify-between items-center mb-5">
        <Link href={"/"}>
          <Image
            src={"/lyca-logo-no-text.svg"}
            alt="Lyca Logo"
            width={20}
            height={20}
          ></Image>
        </Link>
        <button
          onClick={() => {
            setOpen(!open);
            setSubMenuOpen(null);
          }}
        >
          <X />
        </button>
      </div>
      <div className="flex flex-col gap-3 sm:grow sm:justify-between sm:py-28">
        {pages_config.map((item, index) => (
          <div key={index} className="relative w-full">
            {item.isGroup ? (
              <button
                className="flex gap-3 w-full items-center justify-between"
                onClick={() => setSubMenuOpen(item.title)}
              >
                <p className="text-[18px]">{item.title}</p>
                <ChevronRight size={20} />
              </button>
            ) : (
              <Link
                href={(item.link as string) || ""}
                className="flex gap-3 w-full items-center justify-between"
                onClick={() => setOpen(false)}
              >
                <p className="text-[18px]">{item.title}</p>
                <ChevronRight size={20} />
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="max-sm:grow sm:p-20 mt-10">
        {/* 活動廣告 */}
        <div className="bg-zinc-300/20 p-8 flex flex-col rounded-3xl">
          <div className="flex flex-col gap-4 pb-4 border-b border-border">
            <h2 className="text-lg">
              林園高中 90 週年LOGO設計比賽已正式開跑！
            </h2>
            <Link
              href={"/events/90year"}
              className="bg-white border border-border w-fit text-[14px] text-foreground rounded-full p-2 px-3 font-bold"
            >
              點我瞭解更多
            </Link>
          </div>
          <div className="pt-4">
            <h2 className="text-lg">近期網站改版中，可能會發生錯誤。</h2>
          </div>
        </div>
        {/* 版權資訊 */}
        <div className="flex items-center justify-center flex-col text-sm font-normal py-5">
          <p className="text-white/50">本網站由學生會資訊組維護與建置</p>
          <p className="text-white/50">2025 © 林園高中學生會 版權所有</p>
        </div>
      </div>

      {/* 子菜單 */}
      {(pages_config as PageConfig[]).map((item, index) =>
        item.isGroup && item.children ? (
          <SubMenu
            key={index}
            title={item.title}
            menuItems={item.children}
            isOpen={subMenuOpen === item.title}
            onClose={(action) => {
              if (action === "back") {
                setSubMenuOpen(null);
              } else {
                setSubMenuOpen(null);
                setOpen(false);
              }
            }}
          />
        ) : null,
      )}
    </div>
  );
}
