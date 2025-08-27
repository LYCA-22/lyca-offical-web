"use client";

import { apiService } from "@/service/api";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const runtime = "edge";
export interface announcementItem {
  id: number;
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

export default function Page() {
  const params = useParams();
  const id = params.id as string;
  const [data, setData] = useState<announcementItem>();

  useEffect(() => {
    const getData = async () => {
      const data = await apiService.GetAnnouncement(id);
      setData(data.data);
    };
    getData();
  }, [id]);

  return (
    <div className="pt-20">
      <div className="relative flex flex-col gap-3 font-neue font-bold m-3 items-center justify-center p-5">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-green-500 rounded-[5px]"></div>
          <p className="text-lg">Announcement</p>
        </div>
        <h1 className="max-sm:text-3xl text-5xl">公告</h1>
        {data ? (
          <div className="mt-10 flex flex-col items-center justify-center gap-2">
            <Image
              src={`data:image/jpeg;base64,${data.imgData}`}
              alt="Announcement Image"
              width={300}
              height={300}
              className="rounded-4xl"
            ></Image>
            <div className="p-4 px-6 relative">
              <h2 className="text-xl mb-2 pb-2 border-b border-border w-full">
                {data.title}
              </h2>
              <p className="text-gray-600">{data.content}</p>
            </div>
            {data.info.link.haveLink ? (
              <div className="p-4">
                <Link
                  href={data.info.link.link}
                  className="text-blue-500 hover:underline"
                >
                  前往
                </Link>
              </div>
            ) : null}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
