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
      <div className="p-7 min-h-dvh flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center sm:justify-center gap-4 sm:pt-5">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="font-bold font-sans text-2xl">
              透過不同的積木，包容每一位獨一無二的學生，拼湊起一個獨特的校園。
            </h1>
            <p className="font-custom text-sm opacity-50">
              Using different building blocks, support each student and help
              them build a unique plant.
            </p>
          </div>
          <div className="flex items-center w-full gap-3 mt-3">
            <Link
              href={"https://www.instagram.com/lyca_22nd/"}
              target="_blank"
              className="rounded-full p-2 px-5 bg-zinc-900 text-white"
            >
              追蹤 IG
            </Link>
            <Link
              href={"/contact"}
              className="rounded-full p-2 px-5 bg-zinc-200"
            >
              聯絡我們
            </Link>
          </div>
          <div className="text-sm flex flex-col items-center justify-center gap-2 my-5">
            <div className="bg-zinc-300 w-[1px] h-10"></div>
            <p>Explore More</p>
          </div>
          <Image
            src={"/home_background.png"}
            alt="LYCA"
            width={600}
            height={600}
          ></Image>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-3xl">最新公告</h2>
            <p className="text-xl max-sm:text-lg opacity-50">Latest News</p>
          </div>
          <Carousel className="grow">
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={"/post/post-1.svg"}
                  alt="Lyca Logo"
                  width={500}
                  height={700}
                  className="rounded-3xl"
                ></Image>
                <Link
                  href={"https://www.instagram.com/lyca_22nd/"}
                  className="bg-green-900 text-white text-sm p-2 px-4 absolute bottom-5 left-10 rounded-xl font-bold"
                >
                  點我前往追蹤
                </Link>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-5" />
            <CarouselNext className="absolute right-5" />
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
    </>
  );
}
