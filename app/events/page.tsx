import Link from "next/link";

export default function EventsPage() {
  return (
    <div>
      <ul>
        <li className="p-8 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">90週年LOGO設計比賽</h2>
          <p className="text-sm opacity-40">
            為歡慶本校 「 創校九十週年校慶
            」活動，特舉辦「林園高中創校九十校慶logo設計比賽」，盼透過學生對校園及故鄉的觀察，發揮創意設計，製作為各種紀念品，並作為未來推廣及相關活動、販售之用。
          </p>
          <Link
            href={"/events/90year"}
            className="border border-border w-fit text-[14px] text-foreground rounded-full p-2 px-3 font-bold"
          >
            進入主題網站
          </Link>
        </li>
      </ul>
    </div>
  );
}
