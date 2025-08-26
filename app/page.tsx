"use client";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { apiService } from "@/service/api";

interface Announcement {
  id: string;
  title: string;
  content: string;
  info: {
    isPriority: boolean;
    link: {
      haveLink: boolean;
      link: string;
    };
    created_info: {
      created_userId: number;
    };
  };
  imgData: string;
}

export default function Home() {
  const [announcementData, setData] = useState<Announcement[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const announcements = await apiService.listAnnouncement();
        setData(announcements.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
        throw error;
      }
    };

    getData();
  }, []);

  return (
    <main className="mt-14 relative">
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
        <div className="w-full bg-zinc-200 h-[1px] mb-5 flex items-center justify-center">
          <Plus className="absolute" size={18} />
        </div>
        <div className="flex flex-col gap-3 sm:px-3 w-full">
          <Carousel className="grow">
            <div className="mb-5 mx-3 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:p-5">
              <div className="relative flex items-center gap-2 font-neue font-bold">
                <div className="bg-white z-10 flex items-center gap-2 pr-4">
                  <div className="h-4 w-4 bg-green-500 rounded-[5px]"></div>
                  <p className="text-lg">Latest News</p>
                </div>
              </div>
              <div className="items-center flex max-sm:flex-col gap-5 justify-between mt-3">
                <h2 className="text-3xl">最新公告</h2>
                <div className="relative flex items-center rounded-full bg-zinc-200">
                  <CarouselPrevious className="flex border-0 left-0 bottom-0 bg-transparent" />
                  <CarouselNext className="flex border-0 right-0 bottom-0 bg-transparent" />
                </div>
              </div>
            </div>
            <CarouselContent>
              {announcementData &&
                announcementData.map((announcement) => (
                  <>
                    {!announcement.info.isPriority && (
                      <CarouselItem key={announcement.id}>
                        {announcement.info.link.haveLink ? (
                          <Link
                            target="_blank"
                            href={announcement.info.link.link}
                          >
                            <Image
                              src={`data:image/jpeg;base64,${announcement.imgData}`}
                              alt="Announcement Image"
                              width={300}
                              height={500}
                              className="rounded-4xl"
                            ></Image>
                          </Link>
                        ) : (
                          <Image
                            src={`data:image/jpeg;base64,${announcement.imgData}`}
                            alt="Announcement Image"
                            width={300}
                            height={500}
                            className="rounded-4xl"
                          ></Image>
                        )}
                      </CarouselItem>
                    )}
                  </>
                ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="p-5 sm:px-10">
        <div className="w-full bg-zinc-200 h-[1px] flex items-center justify-center">
          <Plus className="absolute" size={18} />
        </div>
        <div className="relative flex flex-col gap-2 font-neue font-bold m-3 my-5 max-sm:items-center max-sm:justify-center max-sm:p-5">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-green-500 rounded-[5px]"></div>
            <p className="text-lg">Events</p>
          </div>
          <div className="flex justify-between items-center max-sm:flex-col max-sm:justify-center gap-5">
            <h2 className="text-3xl">活動資訊</h2>
            <Link
              href={"/events"}
              className="rounded-full p-2 pr-4 bg-white text-black border border-border flex gap-3 items-center group hover:opacity-50 transition-all w-fit"
            >
              <div className="p-1 rounded-full bg-green-500 text-black group-hover:bg-green-500">
                <ArrowRight size={20} />
              </div>
              <p className="text-xl max-sm:text-lg">查看更多</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <Link
            href={"./events/90year"}
            className="bg-zinc-100 rounded-4xl border border-border p-5 flex flex-col gap-2 max-w-sm"
          >
            <Image
              src={"/image/events/90year.png"}
              alt="Lyca Logo"
              width={500}
              height={500}
              className="rounded-xl"
            ></Image>
            <p className="text-sm opacity-50">
              為歡慶本校 「 創校九十週年校慶
              」活動，特舉辦「林園高中創校九十校慶logo設計比賽」，盼透過學生對校園及故鄉的觀察，發揮創意設計，製作為各種紀念品，並作為未來推廣及相關活動、販售之用。
            </p>
            <div className="rounded-full p-2 pr-4 bg-white text-black border border-border flex gap-3 items-center group hover:opacity-50 transition-all w-fit">
              <div className="p-1 rounded-full bg-green-500 text-black group-hover:bg-green-500">
                <ArrowRight size={20} />
              </div>
              <p className="text-xl max-sm:text-lg">前往主題網站</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
