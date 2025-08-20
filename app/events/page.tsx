import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="pt-20">
      <div className="relative flex flex-col gap-3 font-neue font-bold m-3 my-5 items-center justify-center p-5">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-green-500 rounded-[5px]"></div>
          <p className="text-lg">Events</p>
        </div>
        <h1 className="max-sm:text-3xl text-5xl">活動資訊</h1>
        <p className="max-sm:text-sm text-xl">所有由班聯會舉辦的活動</p>
      </div>
      <ul className="p-5">
        <li className="flex flex-col gap-3">
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
        </li>
      </ul>
    </div>
  );
}
