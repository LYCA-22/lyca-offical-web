"use client";

import { apiService } from "@/service/api";
import { useEffect, useState } from "react";
import { announcementItem } from "./item/[id]/page";
import Link from "next/link";

export default function Page() {
  const [announcementData, setData] = useState<announcementItem[]>([]);

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
    <div className="pt-20">
      <div className="relative flex flex-col gap-3 font-neue font-bold m-3 my-5 items-center justify-center p-5">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-green-500 rounded-[5px]"></div>
          <p className="text-lg">Announcements</p>
        </div>
        <h1 className="max-sm:text-3xl text-5xl">最新公告</h1>
      </div>
      <div className="p-3 px-10 flex flex-col gap-6">
        {announcementData.map((announcement) => (
          <div
            key={announcement.id}
            className="border-b border-border pb-6 last:border-0 flex flex-col gap-2"
          >
            <h3 className="text-xl">{announcement.title}</h3>
            <p className="text-sm opacity-50 max-h-10 overflow-y-hidden">
              {announcement.content}
            </p>
            <Link
              href={`/about/announcement/item/${announcement.id}`}
              className="my-2 bg-green-400 rounded-full p-2 px-4 w-fit"
            >
              了解更多
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
