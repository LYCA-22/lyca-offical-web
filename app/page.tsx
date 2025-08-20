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
    <main className="mt-5 relative">
      <div className="max-sm:p-4 p-7 min-h-dvh flex flex-col items-center justify-center relative">
        <div className="relative p-20 max-sm:p-6 max-sm:pb-0 w-full rounded-t-4xl bg-gradient-to-b from-green-100 to-white/0 h-dvh">
          <div className="w-full flex flex-col gap-4 max-sm:gap-2">
            <div className="flex flex-col gap-2 max-sm:m-2">
              <h1 className="max-sm:text-5xl text-8xl font-neue font-bold break-words">
                LYCA_22ND
              </h1>
              <p className="max-sm:text-lg text-3xl">林園高中班聯會官方網站</p>
              <p className="max-sm:text-lg text-xl opacity-50">
                爭取學生權利，建立更美好的校園。
              </p>
            </div>
            <div className="flex items-center w-full gap-3 mt-3">
              <Link
                href={"https://www.instagram.com/lyca_22nd/"}
                target="_blank"
                className="rounded-full p-2 pr-4 bg-green-500 text-white flex gap-3 items-center group hover:bg-black transition-all"
              >
                <div className="p-1 rounded-full bg-white text-black group-hover:bg-green-500 group-hover:text-white">
                  <ArrowRight size={20} />
                </div>
                <p className="text-xl max-sm:text-lg">追蹤 IG</p>
              </Link>
              <Link
                href={"/contact"}
                className="rounded-full p-2 pr-4 bg-white text-black border border-border flex gap-3 items-center group hover:opacity-50 transition-all"
              >
                <div className="p-1 rounded-full bg-green-500 text-black group-hover:bg-green-500">
                  <ArrowRight size={20} />
                </div>
                <p className="text-xl max-sm:text-lg">聯絡我們</p>
              </Link>
            </div>
            <div className="absolute right-10 bottom-32 max-sm:w-full max-sm:right-0">
              <Image
                src={"/home_background.png"}
                width={600}
                height={200}
                alt="lyca"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:px-3 w-full">
          <Carousel className="grow">
            <div className="mb-5 mx-3">
              <div className="relative flex items-center gap-2 font-neue font-bold">
                <div className="bg-white z-10 flex items-center gap-2 pr-4">
                  <div className="h-4 w-4 bg-green-500 rounded-[5px]"></div>
                  <p className="text-lg">Latest News</p>
                </div>
                <div className="w-full bg-zinc-300 h-[1px] absolute left-0 z-0"></div>
              </div>
              <div className="items-center flex gap-2 justify-between mt-3">
                <h2 className="text-3xl">最新公告</h2>
                <div className="relative flex items-center rounded-full bg-zinc-200">
                  <CarouselPrevious className="flex border-0 left-0 bottom-0 bg-transparent" />
                  <CarouselNext className="flex border-0 right-0 bottom-0 bg-transparent" />
                </div>
              </div>
            </div>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={"/post/post-1.svg"}
                  alt="Lyca Logo"
                  width={300}
                  height={500}
                  className="rounded-4xl"
                ></Image>
                <Link
                  href={"https://www.instagram.com/lyca_22nd/"}
                  className="bg-white text-sm p-2 px-4 absolute bottom-5 left-10 rounded-xl font-bold"
                >
                  點我前往追蹤
                </Link>
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={"/post/post-2.png"}
                  alt="Lyca Logo"
                  width={300}
                  height={500}
                  className="rounded-4xl"
                ></Image>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="w-full h-[1px] bg-zinc-200"></div>
      <div className="flex flex-col justify-center gap-2 grow p-8">
        <div className="flex items-center gap-2">
          <Cog size={20}></Cog>
          <h2 className="text-xl">目前網站仍在建置中</h2>
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
    </main>
  );
}
