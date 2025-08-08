"use client";
import { ArrowRight, Cog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <div className="p-7 text-4xl font-custom leading-relaxed min-h-dvh flex max-sm:flex-col items-center justify-center sm:px-20">
        <div className="w-full max-sm:gap-3 gap-5 flex flex-col max-sm:items-center items-start justify-center">
          <Image
            src={"/lyca-logo-no-text.svg"}
            alt="Lyca Logo"
            width={20}
            height={20}
          ></Image>
          <h1 className="max-sm:text-[16px] text-2xl font-mono font-medium">
            林園高中學生會
          </h1>
          <p className="font-bold font-sans text-center max-sm:text-3xl text-5xl leading-14 sm:leading-24">
            爭取
            <span className="bg-green-400 p-1 px-2 w-fit mx-3">學生權利</span>
            的路上永不放棄
          </p>
          <p className="text-center font-mono text-lg">
            Never give up on the road to students rights
          </p>
          <div className="text-sm flex flex-col items-center justify-center gap-2 my-5">
            <div className="bg-zinc-300 w-[1px] h-10"></div>
            <p>Scroll</p>
          </div>
        </div>
        <Carousel className="grow">
          <CarouselContent>
            <CarouselItem>
              <Image
                src={"/post/post-1.svg"}
                alt="Lyca Logo"
                width={500}
                height={700}
              ></Image>
              <Link
                href={"https://www.instagram.com/lyca_22nd/"}
                className="bg-green-900 text-white text-sm font-medium p-2 px-4 absolute bottom-0 left-5"
              >
                前往追蹤
              </Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-5" />
          <CarouselNext className="absolute right-5" />
        </Carousel>
      </div>
      <div className="w-full h-[1px] bg-zinc-200"></div>
      <div className="flex flex-col justify-center gap-2 grow p-8">
        <div className="flex items-center gap-2">
          <Cog size={20}></Cog>
          <h1 className="text-xl">目前網站仍在建置中</h1>
        </div>
        <div className="pb-2">以下為可使用的服務：</div>
        <button
          onClick={() => {
            window.alert("活動已結束");
          }}
          className="hover:opacity-50 bg-zinc-100 border border-zinc-200 p-3 rounded-2xl opacity-80 flex justify-between items-center"
        >
          查閱班際排球資訊
          <ArrowRight size={20} className="opacity-80"></ArrowRight>
        </button>
        <Link
          href={"./events/90year"}
          className="hover:opacity-50 bg-zinc-100 border border-zinc-200 p-3 rounded-2xl opacity-80 flex justify-between items-center mt-2"
        >
          90 週年主視覺設計大賽活動網站
          <ArrowRight size={20} className="opacity-80"></ArrowRight>
        </Link>
      </div>
    </>
  );
}
